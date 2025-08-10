'use client';

import { Product, ProductVariant } from '@shopify/hydrogen-react/storefront-api-types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { TickDropDownIcon } from '@/components/icons/arrows';
import { colorsHexCodesMap, variantsOptionsNames } from '@/config/shop-config';
import { cn } from '@/lib/tailwind';
import { useSelectedVariants } from '@/store/selected-variants';

export const ColorVariant: React.FC<{ color: string; variant: ProductVariant; img?: string }> = ({
  color,
  img,
  variant,
}) => {
  const hexColor = colorsHexCodesMap[color as keyof typeof colorsHexCodesMap];
  const { set, color: selectedColor } = useSelectedVariants();
  const changeColor = () => {
    set({ color, selectedVariantId: variant.id });
  };
  return (
    <div onClick={changeColor} className="flex flex-col items-center gap-2 cursor-pointer">
      {img ? (
        <img
          className={cn('w-[62px] h-[62px] ', { 'border-[#9A7DB9] border-[4px]': color === selectedColor })}
          src={img}
        ></img>
      ) : (
        <div
          style={{ color: hexColor }}
          className={cn('w-[62px] h-[62px] ', { 'border-[#9A7DB9] border-[4px]': color === selectedColor })}
        ></div>
      )}
      <p className="text-[11px] text-[#212529]">{color}</p>
    </div>
  );
};

export const ColorsVariants = ({ product }: { product: Product }) => {
  const { size } = useSelectedVariants();

  const colorsVariants = product.variants?.edges?.filter(
    (edge) =>
      edge.node.selectedOptions.find((selectedOption) => selectedOption.name === variantsOptionsNames.color) &&
      edge.node.selectedOptions.some((option) => option.name === variantsOptionsNames.size && option.value === size)
  );
  const [boxOpened, setBoxOpened] = useState(true);
  console.log('variants + size', size, product.variants);
  const colorOptions = new Set(
    colorsVariants
      .map((variant) =>
        variant.node.selectedOptions
          .filter((option) => option.name === variantsOptionsNames.color)
          .map((option) => option.value)
      )
      .flat()
  );

  return (
    <>
      {colorOptions.size && (
        <div className="flex flex-col  py-3 gap-5 border-[#E0E0E0] border-b pb-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-3 w-full ">
              <div className=" gap-2 bg-[#195B35] text-white  flex items-center justify-center  w-[22px]  h-[24px] rounded-[6px]">
                1
              </div>
              <p className="text-[#212529] text-lg font-bold">Kies de kleur</p>
            </div>
            <div
              className={cn('cursor-pointer', { 'rotate-180': !boxOpened })}
              onClick={() => setBoxOpened((val) => !val)}
            >
              <TickDropDownIcon />
            </div>
          </div>
          {boxOpened && (
            <>
              <div className="flex gap-2 px-2">
                {Array.from(colorOptions).map((colorOption) => {
                  const colorVariant = product.variants.edges.find(
                    (edge) =>
                      edge.node.selectedOptions.some(
                        (option) => option.name === variantsOptionsNames.size && option.value === size
                      ) &&
                      edge.node.selectedOptions.some(
                        (sizeOption) =>
                          sizeOption.name === variantsOptionsNames.color && sizeOption.value === colorOption
                      )
                  );
                  if (!colorVariant) throw new Error('can notge get the color variant');
                  return (
                    <ColorVariant variant={colorVariant.node} color={colorOption} img={colorVariant.node.image?.url} />
                  );
                })}
              </div>
              <div className="w-full flex-col gap-3 rounded-[10px] bg-[#217946] bg-opacity-[12%] h-[100px] flex items-center justify-center">
                <h3 className="font-bold text-[#212529] leading-[24px]">Nog niet uit over de kleur?</h3>
                <Link href="/color-samples" className="text-[#195B35] underline leading-[24px]">
                  Bestel gratis 3 kleurstalen
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
