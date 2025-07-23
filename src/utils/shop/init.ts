import { createStorefrontClient } from '@shopify/hydrogen-react';

const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const shopifyToken = process.env.NEXT_PUBLIC_SHOPIFY_TOKEN;

if (!shopifyDomain) throw new Error('shopify domain env variable is not available');
if (!shopifyToken) throw new Error('shopify token is not available');

export const storefrontClient = createStorefrontClient({
  storeDomain: shopifyDomain,
  storefrontApiVersion: '2025-04',
  privateStorefrontToken: shopifyToken,
  contentType: 'json',
});
