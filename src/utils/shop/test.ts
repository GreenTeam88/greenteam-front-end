const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const adminToken = process.env.PRIVATE_TOKEN;

if (!shopifyDomain) throw new Error('Missing SHOPIFY_DOMAIN');
if (!adminToken) throw new Error('Missing SHOPIFY_ADMIN_API_TOKEN');

export async function shopifyAdminFetch<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
  const url = `https://${shopifyDomain}/admin/api/2025-01/graphql.json`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-Shopify-Access-Token': adminToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error(`Shopify Admin API error: ${response.statusText}`);
  }

  return response.json();
}
