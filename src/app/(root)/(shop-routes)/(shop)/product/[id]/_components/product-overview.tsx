'use client';

import { useMoney } from '@shopify/hydrogen-react';
import { MoneyV2, Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useState } from 'react';

import { TickDropDownIcon } from '@/components/icons/arrows';
import { variantsOptionsNames } from '@/config/shop-config';
import { cn } from '@/lib/tailwind';
import { useSelectedVariants } from '@/store/selected-variants';

export const ProductOverview = ({ product }: { product: Product }) => {
  const { selectedVariantId, linearLength } = useSelectedVariants();
  const [boxOpened, setBoxOpened] = useState(true);
  const selectedVariantInfo = product.variants.edges.find((edge) => edge.node.id === selectedVariantId)?.node;
  const { amount: price, currencySymbol } = useMoney(selectedVariantInfo?.price as MoneyV2);
  if (!selectedVariantInfo) return <></>;
  return (
    <div className="flex flex-col  py-3 gap-5 border-[#E0E0E0] border-b pb-5">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3 w-full ">
          <div className=" gap-2 bg-[#195B35] text-white  flex items-center justify-center  w-[22px]  h-[24px] rounded-[6px]">
            1
          </div>
          <p className="text-[#212529] text-lg font-bold">Kies de kleur</p>
        </div>
        <div className={cn('cursor-pointer', { 'rotate-180': !boxOpened })} onClick={() => setBoxOpened((val) => !val)}>
          <TickDropDownIcon />
        </div>
      </div>
      {boxOpened && (
        <div className="p-5">
          <div className="bg-[#F7F7F7] flex  py-2">
            <img src={selectedVariantInfo.image?.url} />
            <div className="flex gap-3 px-2 flex-col">
              <div className="flex flex-col ">
                <p className="font-bold leading-[24px] ">{product.title}</p>
                <p className=" leading-[24px]">
                  <span className="font-bold">Kleur:</span> {product.title}
                </p>
                <p className=" leading-[24px]">
                  <span className="font-bold">Kleur:</span> {product.title}
                </p>
                <p className=" leading-[24px]">
                  <span className="font-bold">Breedte:</span>
                  {linearLength} meter
                  {
                    selectedVariantInfo.selectedOptions.find((option) => option.name === variantsOptionsNames.size)
                      ?.value
                  }
                </p>
              </div>
              <div className="bg-[#E0E0E0] h-[1px] w-full"></div>
              <div className="text-[#212529] font-medium leading-[32px] text-[32px]">
                {currencySymbol}
                {price}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
