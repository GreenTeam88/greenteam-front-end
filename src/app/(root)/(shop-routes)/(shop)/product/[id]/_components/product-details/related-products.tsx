'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useQuery } from 'react-query';

import { getProductById } from '@/utils/shop/query-tools';
import { ProductCard } from '../../../../products/_components/cards';

export const RelatedProducts = ({ relatedProducts }: { relatedProducts: string[] }) => {
  const { data: productsData } = useQuery<Product[]>({
    queryFn: async () => {
      const data = await Promise.all(relatedProducts.map((productId) => getProductById({ productId })));
      const products = data.filter((product): product is Product => product !== null);
      return products;
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[32px] text-paragraph font-semi">Gerelateerde producten</h3>
      <div className="flex gap-2">{productsData?.map((product) => <ProductCard product={product} />)}</div>
    </div>
  );
};
