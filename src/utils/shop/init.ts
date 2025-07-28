import { createStorefrontClient } from '@shopify/hydrogen-react';

const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const shopifyToken = process.env.NEXT_PUBLIC_SHOPIFY_TOKEN;

if (!shopifyDomain) throw new Error('shopify domain env variable is not available');
if (!shopifyToken) throw new Error('shopify token is not available');

export const storefrontClient = createStorefrontClient({
  storeDomain: 'https://greenteamnl.myshopify.com',
  storefrontApiVersion: '2025-04',
  // publicStorefrontToken: '0d31741a2047be590698b7406e7cd920',
  privateStorefrontToken: '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',
});
