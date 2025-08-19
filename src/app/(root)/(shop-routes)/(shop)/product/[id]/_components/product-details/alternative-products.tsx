'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useQuery } from 'react-query';

import { getProductById } from '@/utils/shop/query-tools';
import { ProductCard } from '../../../../products/_components/cards';

export const AlternativeProducts = ({ alternativeProducts }: { alternativeProducts: string[] }) => {
  const { data: productsData } = useQuery<Product[]>({
    queryKey: ['alternativeProducts', alternativeProducts], // ✅ required
    queryFn: async () => {
      const data = await Promise.all(alternativeProducts.map((productId) => getProductById({ productId })));

      // Filter out nulls, and assert as Product[]
      return data.filter((product): product is Product => product !== null);
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[32px] text-paragraph font-semi">Alternatieven</h3>
      <div className="flex gap-2">{productsData?.map((product) => <ProductCard product={product} />)}</div>
    </div>
  );
};
