'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useEffect } from 'react';

import { ProductsSkeleton } from '@/components/skeleton/products';
import { useProductsPageStatus } from '@/store/products';
import { ProductCard } from './cards';
import NoResults from './no-item-found';

export const ProductsSection = ({ products, searchedInput }: { products: Product[]; searchedInput: string }) => {
  const { searchProducts, set } = useProductsPageStatus();
  useEffect(() => {
    // This function will run every time search params change
    set({ searchProducts: false });
  }, [searchedInput]);
  return (
    <div className="flex gap-4 lg:justify-start  justify-center flex-wrap w-full ">
      {!products.length ? (
        <NoResults />
      ) : searchProducts ? (
        <ProductsSkeleton />
      ) : (
        products?.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

// There was an error importing your CSV file. After you fix the error, try importing the CSV file again.

// New line must be <"\r"> not <"\n"> in line 2.
