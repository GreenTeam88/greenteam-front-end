import { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { ProductCard } from './cards';
import NoResults from './no-item-found';

export const ProductsSection = ({ products }: { products: Product[] }) => {
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
