'use server';

import { Collection, Product } from '@shopify/hydrogen-react/storefront-api-types';

import { storefrontClient } from './init';

export async function shopifyRequest<T>(query: string, variables: Record<string, any> = {}): Promise<T | null> {
  const client = storefrontClient;
  if (!client) {
    console.error('❌ Shopify client not initialized.');
    return null;
  }

  let headers: Record<string, string>;

  try {
    headers = client.getPrivateTokenHeaders();
  } catch (err) {
    console.error('❌ Failed to get Shopify headers:', err);
    return null;
  }

  try {
    const response = await fetch(client.getStorefrontApiUrl(), {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: 'no-cache',
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`❌ HTTP ${response.status}: ${response.statusText}`);
      console.error('↪ Response:', text);
      return null;
    }

    const json = await response.json();

    if (json.errors) {
      console.error('❌ Shopify GraphQL Errors:', json.errors);
      return null;
    }

    return json.data;
  } catch (err) {
    console.error('❌ Shopify fetch error:', err);
    return null;
  }
}

export const getShopifyCollections = async (): Promise<Collection[]> => {
  const GET_COLLECTIONS_QUERY = `
  query GetCollections($first: Int = 50) {
    collections(first: $first) {
      nodes {
        id
        title
        handle
        image {   
          url
          altText
        }
      }
    }
  }
`;
  const allCollections = await shopifyRequest<{ collections: { nodes: any[] } }>(GET_COLLECTIONS_QUERY);
  console.log('all collections', allCollections);
  return allCollections?.collections.nodes as Collection[];
};

export async function getAllProducts(): Promise<Product[]> {
  const GET_ALL_PRODUCTS_QUERY = `{
  products(first: 3) {
    edges {
      node {
        id
        title
        handle
        description
        descriptionHtml
        vendor
        productType
        tags
        createdAt
        updatedAt
        onlineStoreUrl
        images(first: 10) {
          edges {
            node {
              id
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              sku
              price {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }

              availableForSale
              quantityAvailable
              image {
                url
              }
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}`;

  const response = await shopifyRequest<{ products: { edges: { node: Product }[] } }>(GET_ALL_PRODUCTS_QUERY);
  return response?.products.edges.map((edge) => edge.node) || [];
}

export async function getProductById({ productId }: { productId: string }): Promise<Product | null> {
  const GET_PRODUCT_BY_ID_QUERY = `
  query GetProductById($id: ID!) {
    node(id: $id) {
      ... on Product {
        id
        title
        handle
        description
        descriptionHtml
        vendor
        productType
        tags
        createdAt
        updatedAt
        onlineStoreUrl

        metafields(identifiers: [
          { namespace: "custom", key: "old_price" },
          { namespace: "custom", key: "ratings_number" },
          { namespace: "custom", key: "ratings_average" },
         { namespace: "custom", key: "pros_and_cons" },
           { namespace: "custom", key: "all_features" },
            { namespace: "custom", key: "product_reviews" },
             { namespace: "custom", key: "related_products" },
              { namespace: "custom", key: "goes_well_with" },
               { namespace: "custom", key: "atmospheric_photos" },
                { namespace: "custom", key: "description" },
                 { namespace: "custom", key: "old-price" },
                
        ]) {
          key
          namespace
          value
          type
          description
        }

        images(first: 10) {
          edges {
            node {
              id
              url
              altText
              width
              height
            }
          }
        }

        variants(first: 10) {
          edges {
            node {
              id
              title
              sku
              price {
                amount
                currencyCode
              }
              availableForSale
              quantityAvailable
              selectedOptions {
                name
                value
              }
              image {
                url
              }
            }
          }
        }

        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
  const response = await shopifyRequest<{ node: Product | null }>(GET_PRODUCT_BY_ID_QUERY, { id: productId });

  return response?.node ?? null;
}
