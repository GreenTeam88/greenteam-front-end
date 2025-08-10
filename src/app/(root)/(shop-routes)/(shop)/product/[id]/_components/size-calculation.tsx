'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useEffect, useState } from 'react';

import { TickDropDownIcon } from '@/components/icons/arrows';
import { CalculationIcon } from '@/components/icons/calculation';
import { cn } from '@/lib/tailwind';
import { useSelectedVariants } from '@/store/selected-variants';

export const SizeCalculation = ({ product }: { product: Product }) => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(1);
  const { set, linearLength } = useSelectedVariants();
  const [boxOpened, setBoxOpened] = useState(true);
  const [calculationBoxOpened, setCalculationBoxOpened] = useState(true);

  const { size } = useSelectedVariants();

  const calculateLinearLength = () => {
    const area = length * width;
    const linearLength = area / Number(size);
    set({ linearLength });
  };

  useEffect(calculateLinearLength, [length, width, size]);
  return (
    <div className="flex flex-col  py-3 gap-5 pb-5">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-3 w-full items-center">
          <div className="flex items-center gap-3 ">
            <div className="flex gap-2  items-center justify-center bg-[#195B35] text-white   w-[22px]  h-[24px] rounded-[6px]">
              3
            </div>
            <p className="text-[#212529] text-lg font-bold">Hoeveel meter heeft u nodig? </p>
          </div>
          <p>Help me kiezen</p>
        </div>
        <div className={cn('cursor-pointer', { 'rotate-180': !boxOpened })} onClick={() => setBoxOpened((val) => !val)}>
          <TickDropDownIcon />
        </div>
      </div>
      {boxOpened && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col  gap-5">
            <p>
              Vul het aantal <span className="underline decoration-dotted">strekkende meters</span> in:
            </p>
            <div className="flex gap-3 items-center">
              <input
                value={linearLength}
                type="number"
                onChange={(e) => set({ linearLength: Number(e.target.value) })}
                className="border-[#E0E0E0] px-2  border rounded-[10px] w-[157px] h-[42px] "
              />
              <p className="text-[#212529] leading-[18px]">(wordt naar boven afgerond op 5cm)</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] h-fit w-full px-6 gap-5 flex flex-col rounded-[15px] py-8">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <CalculationIcon />
                <h3 className="font-bold leading-[24px]">Onzeker over de hoeveelheid?</h3>
                <p className="underline decoration-dotted">Uitleg</p>
              </div>
              <div
                className={cn('cursor-pointer', { 'rotate-180': !calculationBoxOpened })}
                onClick={() => setCalculationBoxOpened((val) => !val)}
              >
                <TickDropDownIcon />
              </div>
            </div>
            {calculationBoxOpened && (
              <div className="flex flex-col gap-2 ">
                <p>Gebruik onze rekenhulp en vul de afmetingen van de vloer in:</p>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label className="text-[#212529] text-[11px] leading-[24px] font-semibold"> Lengte (m)</label>
                    <input
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      type="number"
                      className="border-[#E0E0E0] border rounded-[10px] w-[81px] h-[31px] text-center bg-white "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#212529] text-[11px] leading-[24px] font-semibold"> Breedte (m)</label>
                    <input
                      value={width}
                      type="number"
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="border-[#E0E0E0] w-[81px] border rounded-[10px]  h-[31px] text-center bg-white "
                    />
                  </div>
                </div>
                <p className="text-[#212529]"> Dat is een oppervlakte van 6 m2.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
