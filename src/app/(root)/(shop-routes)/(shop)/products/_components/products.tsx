import { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { ProductCard } from './cards';

export const ProductsSection = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex gap-4 flex-wrap w-full ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
