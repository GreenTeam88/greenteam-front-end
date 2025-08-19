'use client';

import { useMoney } from '@shopify/hydrogen-react';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { Link } from 'lucide-react';
import { useQuery } from 'react-query';

import { Button } from '@/components/ui/button';
import { getProductById } from '@/utils/shop/query-tools';

const ProductCard = ({ productId }: { productId: string }) => {
  const { data, isLoading } = useQuery<Product>({
    queryKey: `getting product : ${productId}`,
    queryFn: async () => {
      const data = await getProductById({ productId });
      if (!data) throw new Error('can not get the product data in : (goes well with) tab');
      return data;
    },
    onError(err) {
      console.error('error on goes well with tab :', err);
    },
  });
  const firstVariant = data?.variants?.edges[0] && data.variants.edges[0].node;
  if (!firstVariant) throw new Error('no variant is found for this product : ' + firstVariant);
  const { amount, currencySymbol } = useMoney(firstVariant?.price);
  return (
    <>
      {isLoading ? (
        <div className="skeleton w-[281px] h-[700px]"></div>
      ) : (
        <div className="flex flex-col">
          <img className="w-[281px] h-[281px] rounded-t-lg" />
          <div className="flex flex-col gap-3 py-2">
            <div className="flex flex-col gap-1">
              <p className="text-[15px] text-black">{data?.vendor}</p>
              <h3 className="text-primaryDefault text-xl leading-[30px] font-semibold">{data?.title}</h3>
            </div>
            <ul className="list-disc">
              <li>Poolhoogte 2.70 mm</li>
              <li>Polyamide</li>
            </ul>
            <div className="flex gap-2">
              <div className="flex gap-1 items-end ">
                <h4 className="text-[#212529]  text-xl font-bold">
                  {currencySymbol + ' '} {amount}
                </h4>
                <p className="text-[#212529] text-[12px]">per st. meter</p>
              </div>
              <Button variant="tertiary" asChild>
                <Link href={`/product/${data.id}`}>Bekijk {'>'}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const GoesWellWith = ({ products }: { products: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[32px] text-paragraph font-semi">Gaat goed samen met</h3>
      <div className="flex gap-2">
        {products.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
    </div>
  );
};
