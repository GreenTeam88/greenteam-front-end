import { Collection } from '@shopify/hydrogen-react/storefront-api-types';

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
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`❌ HTTP ${response.status}: ${response.statusText}`);
      console.error('↪ Response:', text);
      return null;
    }

    const json = await response.json();
    console.log('response json', json);
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
  const allCollections = await shopifyRequest<{ collections: { nodes: any[] } }>(GET_COLLECTIONS_QUERY, { first: 50 });
  console.log('all collections', allCollections);
  return allCollections?.collections.nodes as Collection[];
};

const GET_ALL_PRODUCTS_QUERY = `
  query GetAllProducts($first: Int = 100) {
    products(first: $first) {
      nodes {
        id
        title
        handle
        description
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 10) {
          nodes {
            id
            title
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export async function getAllProducts() {
  const response = await fetch(storefrontClient.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: `{
      products(first: 3) {
        edges {
          node {
            id
            title
          }
        }
      }
    }`,
    }),
    // Generate the headers using the private token. Additionally, you can pass in the buyer's IP address from the request object to help prevent bad actors from overloading your store.
    headers: storefrontClient.getPrivateTokenHeaders({ buyerIp: '...' }),
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const productsData = await response.json();
  const products = productsData.data.products.edges;
  console.log('products', products);
  return products;
}
