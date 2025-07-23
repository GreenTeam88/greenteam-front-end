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
      body: JSON.stringify({ query, variables }),
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
export const getShopifyCollections = async (): Promise<string[]> => {
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
  return allCollections?.collections.nodes as string[];
};
