'use client';

import { useMoney } from '@shopify/hydrogen-react';
import { Product, ProductVariant } from '@shopify/hydrogen-react/storefront-api-types';
import { useEffect, useState } from 'react';

import { TickDropDownIcon } from '@/components/icons/arrows';
import { variantsOptionsNames } from '@/config/shop-config';
import { cn } from '@/lib/tailwind';
import { useSelectedVariants } from '@/store/selected-variants';

export const SizeVariantBox = ({ option, variant }: { option: string; variant: ProductVariant }) => {
  const { amount, currencySymbol } = useMoney(variant.price);
  const { set, size } = useSelectedVariants();

  const changeSize = () => {
    set({ size: option, selectedVariantId: variant.id });
  };
  return (
    <div
      onClick={changeSize}
      className={cn(
        'flex flex-col gap-3 cursor-pointer items-center justify-center  h-[100px] w-[185px] rounded-[10px]',
        {
          'border-[#9A7DB9] border-[3px]  ': size === option,
          'border border-[#E0E0E0] ': size !== option,
        }
      )}
    >
      <h3 className="text-[#212529] font-bold text-[15px] ">{parseFloat(option || '')} meter</h3>
      <h4 className="text-[#195B35]">
        {currencySymbol}
        {amount}p/m
      </h4>
    </div>
  );
};

export const SizeVariants = ({ product }: { product: Product }) => {
  const [boxOpened, setBoxOpened] = useState(true);
  const { color, set } = useSelectedVariants();
  // const variant = product.variants.edges.find((edge) => edge.node.id === selectedVariantId)?.node;
  const sizeVariants = product.variants.edges.filter((edge) =>
    edge.node.selectedOptions.find((selectedOption) => selectedOption.name === variantsOptionsNames.size)
  );
  const sizeOptions = new Set(
    sizeVariants
      .map((variant) =>
        variant.node.selectedOptions
          .filter((option) => option.name === variantsOptionsNames.size)
          .map((option) => option.value)
      )
      .flat()
  );

  useEffect(() => {
    const defaultVariant = product.variants.edges[0];
    const defaultColor = defaultVariant.node.selectedOptions.find(
      (option) => option.name === variantsOptionsNames.color
    );
    const defaultSize = defaultVariant.node.selectedOptions.find((option) => option.name === variantsOptionsNames.size);
    set({ color: defaultColor?.value, size: defaultSize?.value, selectedVariantId: defaultVariant.node.id });
  }, []);

  // if (!variant) throw new Error('can not get the current variant');
  return (
    <>
      {sizeOptions.size && (
        <div className="flex flex-col  py-3 gap-5  border-[#E0E0E0] border-b pb-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-3 w-full items-center">
              <div className="flex gap-3 items-center justify-center ">
                <div className="flex gap-2 bg-[#195B35] text-white   w-[22px]  h-[24px] items-center justify-center rounded-[6px]">
                  2
                </div>
                <p className="text-[#212529] text-lg font-bold">Kies de rolbreedte </p>
              </div>
              <p>Help me kiezen</p>
            </div>
            <div
              className={cn('cursor-pointer', { 'rotate-180': !boxOpened })}
              onClick={() => setBoxOpened((val) => !val)}
            >
              <TickDropDownIcon />
            </div>
          </div>
          {boxOpened && (
            <div className="flex gap-3">
              {Array.from(sizeOptions).map((option) => {
                const sizeVariant =
                  product.variants.edges.find(
                    (edge) =>
                      edge.node.selectedOptions.some(
                        (option) => option.name === variantsOptionsNames.color && option.value === color
                      ) &&
                      edge.node.selectedOptions.some(
                        (sizeOption) => sizeOption.name === variantsOptionsNames.size && sizeOption.value === option
                      )
                  ) || product.variants.edges[0];
                if (!sizeVariant) throw new Error('can not get the size variant');
                return <SizeVariantBox variant={sizeVariant?.node} key={option} option={option} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};
