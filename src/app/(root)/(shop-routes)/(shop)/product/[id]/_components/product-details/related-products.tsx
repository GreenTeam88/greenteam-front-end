'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useQuery } from 'react-query';

import { getProductById } from '@/utils/shop/query-tools';
import { ProductCard, ProductCardSkeleton } from '../../../../products/_components/cards';

export const RelatedProducts = ({ relatedProducts }: { relatedProducts: { ['product-id']: string }[] }) => {
  const { data: productsData, isLoading: isLoadingProducts } = useQuery<Product[]>({
    queryKey: ['alternativeProducts', relatedProducts], // ✅ required
    queryFn: async () => {
      const data = await Promise.all(
        relatedProducts.map((product) => getProductById({ productId: product['product-id'] }))
      );
      console.log('data is : ', data);
      // Filter out nulls, and assert as Product[]
      return data.filter((product): product is Product => product !== null);
    },
  });

  return (
    <div className="flex flex-col py-5 gap-4">
      <h3 className="text-[32px] text-paragraph font-semi">Gerelateerde producten</h3>
      <div className="flex gap-2">
        {isLoadingProducts
          ? Array.from({ length: relatedProducts.length }).map((item) => <ProductCardSkeleton />)
          : productsData?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};
