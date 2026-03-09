'use client';

import { useState } from 'react';

import { TickDropDownIcon } from '@/components/icons/arrows';
import { cn } from '@/lib/tailwind';
import { useSelectedVariants } from '@/store/selected-variants';

export const ProductSizeInput = () => {
  const [boxOpened, setBoxOpened] = useState(true);
  const { sizeInMeterSquare: sizeInMeterSquar, set } = useSelectedVariants();
  return (
    <div className="flex flex-col py-3 gap-5 pb-5">
      {/* Header */}
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-3 w-full items-center">
          <div className="flex items-center gap-2 laptop:gap-3">
            <div className="flex gap-2 items-center justify-center bg-[#195B35] text-white min-w-[22px] w-[22px] h-[24px] rounded-[6px]">
              2
            </div>
            <p className="text-[#212529] leading-tight text-lg font-bold">Wat is de gewenste oppervlakte?</p>
          </div>
        </div>

        <div className={cn('cursor-pointer', { 'rotate-180': !boxOpened })} onClick={() => setBoxOpened((val) => !val)}>
          <TickDropDownIcon />
        </div>
      </div>

      {/* Content */}
      {boxOpened && (
        <div className="flex flex-col gap-4">
          <p>
            Vul de gewenste <span className="underline decoration-dotted">oppervlakte</span> in vierkante meters in:
          </p>

          <div className="flex gap-3 items-center">
            <input
              type="number"
              value={sizeInMeterSquar}
              onChange={(e) => set({ sizeInMeterSquare: Number(e.target.value || 1) })}
              placeholder="Bijv. 6"
              className="border-[#E0E0E0] px-3 border rounded-[10px] w-[157px] h-[42px]"
            />

            <p className="text-[#212529] leading-[18px]">m²</p>
          </div>

          <p className="text-[#6C757D] text-sm">
            Tip: Meet de lengte en breedte van de ruimte en vermenigvuldig deze om de oppervlakte te berekenen.
          </p>
        </div>
      )}
    </div>
  );
};
