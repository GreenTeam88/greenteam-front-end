'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import Link from 'next/link';
import { useState } from 'react';

import { TickDropDownIcon } from '@/components/icons/arrows';
import { colorsHexCodesMap, variantsOptionsNames } from '@/config/shop-config';
import { cn } from '@/lib/tailwind';
import { useSelectedVariants } from '@/store/selected-variants';

export const ColorVariant: React.FC<{ color: string; img?: string }> = ({ color, img }) => {
  const hexColor = colorsHexCodesMap[color as keyof typeof colorsHexCodesMap];
  return (
    <div className="flex flex-col items-center gap-2">
      {img ? (
        <img className="w-[62px] h-[62px] " src={img}></img>
      ) : (
        <div style={{ color: hexColor }} className="w-[62px] h-[62px] "></div>
      )}
      <p className="text-[11px] text-[#212529]">{color}</p>
    </div>
  );
};

export const ColorsVariants = ({ product }: { product: Product }) => {
  const colorsVariants = product.variants?.edges?.filter((edge) =>
    edge.node.selectedOptions.find((selectedOption) => selectedOption.name === variantsOptionsNames.color)
  );
  const [boxOpened, setBoxOpened] = useState(true);
  const { calculatedPrice, size, set } = useSelectedVariants();
  const selectedSizeOption = product.variants.edges.find((edge) => {
    edge.node.selectedOptions.find((option) => option.name === variantsOptionsNames.size);
  });
  console.log('variants + size', size, product.variants);

  return (
    <>
      {colorsVariants?.length && (
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
                {colorsVariants
                  .filter((variant) =>
                    variant.node.selectedOptions.some(
                      (option) => option.name === variantsOptionsNames.size && option.value === size
                    )
                  )
                  .map((variant) => {
                    const colorOption = variant.node.selectedOptions.find((option) => option.name === 'Color');
                    return <ColorVariant color={colorOption?.value as string} img={variant.node.image?.url} />;
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
