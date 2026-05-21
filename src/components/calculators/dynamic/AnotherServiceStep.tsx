'use client';

import { ChevronLeft } from 'lucide-react';
import React from 'react';

import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { selectCartTotal, useServiceCart } from '@/store/service-cart';

interface AnotherServiceStepProps {
  // Live total of the in-progress active service (already excluded from the cart).
  activeServiceTotal: number;
  // Whether the active service has any data we'd commit on yes.
  hasActiveService: boolean;
  // Display name of the active service (shown in the offer-summary badge).
  activeServiceName?: string;
  onYes: () => void;
  onNo: () => void;
  onPrevious: () => void;
  // Show the back chevron only when going back lands somewhere meaningful
  // (i.e. the active service's last dynamic step is still loaded and editable).
  canGoBack: boolean;
}

export default function AnotherServiceStep({
  activeServiceTotal,
  hasActiveService,
  activeServiceName,
  onYes,
  onNo,
  onPrevious,
  canGoBack,
}: AnotherServiceStepProps) {
  const cartTotal = useServiceCart(selectCartTotal);
  const cartServices = useServiceCart((state) => state.services);

  const grandTotal = cartTotal + (hasActiveService ? activeServiceTotal : 0);
  // Combined list of all service names in this quote: committed (cart) + active (if any).
  const serviceNames = [
    ...cartServices.map((s) => s.calculator.name),
    ...(hasActiveService && activeServiceName ? [activeServiceName] : []),
  ];

  return (
    <form className="w-[386px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg">
      <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
        <div className="text-center">
          <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
        </div>
      </div>

      <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
        <div className="flex flex-row items-center justify-between">
          {canGoBack && (
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
          )}
          <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">Extra dienst</span>
          <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
            <div className="h-full bg-green-700 rounded-full transition-all duration-300" style={{ width: '85%' }} />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <p className="font-sans text-base font-semibold text-textBlack">
            Wilt u nog een andere dienst toevoegen?
          </p>
          <p className="font-sans text-xs text-gray-500">
            U kunt meerdere diensten in één offerte combineren.
          </p>
        </div>

        {serviceNames.length > 0 && (
          <div className="rounded-md bg-bgColor border border-borderGray p-3 text-xs text-textBlack80">
            <span className="font-semibold text-primaryDefault">
              {serviceNames.length === 1 ? 'Dienst' : 'Diensten'}:
            </span>{' '}
            {serviceNames.join(', ')}
          </div>
        )}

        <div className="flex flex-col gap-2 mt-1">
          <CreateButton
            type="button"
            onClick={onYes}
            className="w-full bg-white text-green-700 border border-green-700 hover:bg-lightGray transition-all duration-300"
          >
            Ja, voeg nog een dienst toe
          </CreateButton>
          <CreateButton
            type="button"
            onClick={onNo}
            className="w-full bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300"
          >
            Nee, doorgaan
          </CreateButton>
        </div>

        <div className="flex flex-col space-y-2 mt-1">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
            <span className="font-semibold text-lg text-green-700">
              {grandTotal > 0 ? `€${grandTotal.toFixed(2)}` : '€0.00'}
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
