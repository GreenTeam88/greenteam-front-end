'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { ProductCard } from './cards';
import NoResults from './no-item-found';

export const ProductsSection = ({ products }: { products: Product[] }) => {
  console.log('products', products.slice(0, 6));
  return (
    <div className="flex gap-4 lg:justify-start  justify-center flex-wrap w-full ">
      {!products.length ? (
        <NoResults />
      ) : (
        products?.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

// There was an error importing your CSV file. After you fix the error, try importing the CSV file again.

// New line must be <"\r"> not <"\n"> in line 2.
