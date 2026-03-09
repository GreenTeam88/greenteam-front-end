'use client';

import { CartProvider, ShopifyProvider } from '@shopify/hydrogen-react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect } from 'react';

import { defaultVariantConfig, useSelectedVariants } from '@/store/selected-variants';

export const ShopProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ShopifyProvider
      storefrontToken={process.env.NEXT_PUBLIC_ACCESS_STOREFRONT_TOKEN!}
      storefrontApiVersion={process.env.NEXT_PUBLIC_API_VERSION!}
      countryIsoCode="NL"
      languageIsoCode="EN"
      storeDomain={process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!}
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

export const ProductPageVariantInit = ({ children }: { children: React.ReactNode }) => {
  // later, there will be some logic here to orgnize variants

  return <>{children}</>;
};
