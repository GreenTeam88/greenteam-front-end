'use server';

import { Collection, PageInfo, Product } from '@shopify/hydrogen-react/storefront-api-types';

import { productsPageConfig } from '@/app/(root)/(shop-routes)/(shop)/products/config';
import { storefrontAdmin } from './admin-init';
import { buildColorQuery, buildMetafieldQuery, MetafieldFilter, queriesCombiner } from './query';
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

export async function getAllProducts({
  metafields,
  colors,
  cursor,
  direction,
}: {
  metafields?: MetafieldFilter[];
  colors: string[];
  cursor: string | null;
  direction: string | null;
}): Promise<{ products: Product[]; pageInfo?: PageInfo }> {
  const metafieldQuery = metafields?.length ? `${buildMetafieldQuery(metafields)}` : null;
  const colorsQuery = colors.length ? buildColorQuery(colors.filter((color) => color !== 'Alle kleuren')) : null;
  const pageCursor = cursor ? `${direction}: "${cursor}"` : ``;
  const query: null | string = queriesCombiner([metafieldQuery, colorsQuery]);
  console.log('page cursor', pageCursor);
  const GET_PRODUCTS_QUERY = `{
  products(
     ${direction === 'before' ? 'last' : 'first'}: ${productsPageConfig.itemsPerPage} , ${query}  ${pageCursor}
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

        variants(first: 100) {
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
      startCursor
      hasPreviousPage
    }
  }
}

`;

  const response = await shopifyAdminRequest<{
    products: {
      edges: { node: Product }[];
      pageInfo: PageInfo;
    };
  }>(GET_PRODUCTS_QUERY);

  // const products = response.data.products.edges.map((edge) => edge.node);

  // products.forEach((product) => {
  // Extract all variant colors for this product
  //   const colors = product.variants.edges
  //     .map((variantEdge) => {
  //       const option = variantEdge.node.selectedOptions.find(
  //         (opt: { name: string; value: string }) => opt.name.toLowerCase() === 'color'
  //       );
  //       return option?.value;
  //     })
  //     .filter(Boolean); // removes undefined
  // });

  const pageInfo = response?.products?.pageInfo;
  return { products: response?.products.edges.map((edge) => edge.node) || [], pageInfo };
}

export async function getProductById({ productId }: { productId: string }): Promise<Product | null> {
  console.log('getting product', productId);
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
  { namespace: "custom", key: "pros_cons" },
  { namespace: "custom", key: "all_features" },
  { namespace: "custom", key: "product_reviews" },
  { namespace: "custom", key: "related_products" },
  { namespace: "custom", key: "alternatives" },
  { namespace: "custom", key: "goes_well_width_products" },
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
  references(first: 20) {
    nodes {
      __typename
      ... on MediaImage {
        image {
          url
          altText
          width
          height
        }
      }
      ... on GenericFile {
        url
      }
      ... on Product {
        id
        title
        handle
      }
    }
  }
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
  console.log('response', response);
  return response?.node ?? null;
}

//  query: "variants.option:Color:Paars"
