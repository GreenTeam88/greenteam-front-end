'use client';

import { useMoney } from '@shopify/hydrogen-react';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { Button } from '@/components/ui/button';

export const StandardProductCard = ({ product }: { product: Product }) => {
  const productImages = product?.images.edges.map((edge) => edge.node.url);
  const productImage = productImages[0];
  const firstVariant = product?.variants?.edges[0] && product.variants.edges[0].node;
  const { currencySymbol, amount } = useMoney(firstVariant.price);
  const oldPrice = product.metafields.find((metafield) => metafield?.key === 'old_price')?.value;
  return (
    <div className="flex bg-[#F9FBFA] border-[#020202] border-opacity-[13%] rounded-b-[8px] border flex-col w-[458px] ">
      <img src={productImage} className="h-[161px] w-full " />
      <div className="flex flex-col gap-1 p-3">
        <h3 className="text-[#333333] font-bold text-xl">{product.title}</h3>
        <div className="flex flex-col ">
          <p className="p-[#333333] font-semibold text-sm">
            {product.vendor}
            Soort: {product.productType}
            <br />
            Artnr: {product.handle}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-1 items-end">
            <h3 className="text-[26px] text-black font-bold">
              {currencySymbol}
              {amount}
            </h3>
            {oldPrice && (
              <p className="text-[#505050] text-[19px]  line-through">
                {currencySymbol}
                {oldPrice}
              </p>
            )}
          </div>
          <Button className="px-4" variant="tertiary">
            Toon informatie
          </Button>
        </div>
      </div>
    </div>
  );
};
