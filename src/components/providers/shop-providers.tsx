'use client';

import { CartProvider, ShopifyProvider } from '@shopify/hydrogen-react';

import { storefrontClient } from '@/utils/shop/init';

export const ShopProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ShopifyProvider
      storefrontToken={process.env.NEXT_PUBLIC_ACCESS_STOREFRONT_TOKEN!}
      storefrontApiVersion={process.env.NEXT_PUBLIC_API_VERSION!}
      countryIsoCode="NL"
      languageIsoCode="EN"
      storeDomain="https://greenteamnl.myshopify.com"
    >
      <CartProvider
        onLineAdd={() => {
          console.log('a line is being added');
        }}
        onLineAddComplete={() => {
          console.log('a line has been added');
        }}
      >
        {children}
      </CartProvider>
    </ShopifyProvider>
  );
};
