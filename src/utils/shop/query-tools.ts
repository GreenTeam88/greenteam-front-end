'use server';

import { Collection, Product } from '@shopify/hydrogen-react/storefront-api-types';

import { productsPageConfig } from '@/app/(root)/(shop-routes)/(shop)/products/config';
import { appConfig } from '@/config';
import { storefrontAdmin } from './admin-init';
import { buildMetafieldQuery, MetafieldFilter } from './query';
import { shopifyAdminFetch } from './test';

export async function shopifyAdminRequest<T>(query: string, variables: Record<string, any> = {}): Promise<T | null> {
  if (!storefrontAdmin) {
    console.error('❌ Shopify client not initialized.');
    return null;
  }

  let headers: Record<string, string>;

  try {
    headers = storefrontAdmin.getPrivateTokenHeaders();
  } catch (err) {
    console.error('❌ Failed to get Shopify headers:', err);
    return null;
  }

  try {
    const response = await fetch(storefrontAdmin.getStorefrontApiUrl(), {
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
  const allCollections = await shopifyAdminRequest<{ collections: { nodes: any[] } }>(GET_COLLECTIONS_QUERY);
  console.log('all collections', allCollections);
  return allCollections?.collections.nodes as Collection[];
};

export async function getAllProducts({ metafields }: { metafields?: MetafieldFilter[] }): Promise<Product[]> {
  // const currentCursor = productsPageConfig.pagesCursors[page as keyof typeof productsPageConfig.pagesCursors]
  //   ? `"${productsPageConfig.pagesCursors[page as keyof typeof productsPageConfig.pagesCursors]}"`
  //   : null;
  console.log('metafields', metafields);
  const metafieldQuery = metafields?.length ? `"${buildMetafieldQuery(metafields)}"` : null;
  console.log('metafield query', metafieldQuery);
  let query = 'query:';

  if (metafieldQuery) {
    query += metafieldQuery;
  }

  if (!metafieldQuery) {
    query = '';
  }
  console.log('query', query);
  const GET_ALL_PRODUCTS_QUERY = `{
  products(
    ${query}
    first: ${productsPageConfig.itemsPerPage}
  ) {
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

        oldPrice: metafield(namespace: "custom", key: "old_price") {
          key
          namespace
          value
          type
          description
        }
        mark: metafield(namespace: "custom", key: "mark") {
          key
          namespace
          value
          type
          description
        }

        variants(first: 10) {
          edges {
            node {
              id
              title
              sku
       
              selectedOptions {
                name
                value
              }
              availableForSale
              image {
                url
              }
            }
          }
        }
        priceRange { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

`;

  const response = await shopifyAdminFetch<{ data: { products: { edges: { node: Product }[] } } }>(
    GET_ALL_PRODUCTS_QUERY
  );

  // const pageInfo = response?.products.pageInfo;
  console.log('response', response);
  return response?.data.products.edges.map((edge) => edge.node) || [];
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
  const response = await shopifyAdminRequest<{ node: Product | null }>(GET_PRODUCT_BY_ID_QUERY, { id: productId });

  return response?.node ?? null;
}
