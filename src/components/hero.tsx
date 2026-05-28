'use client';

import React from 'react';

import { DynamicMultiStepForm } from '@/components/calculators/dynamic';
import { PrimaryBtnLink, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { cn } from '@/lib/tailwind';
import SolidOverlay from './ui/SolidOverlay';

export type HeroProps = {
  imgSrc?: string;
  imgClassName?: string;
  // When provided, skips category selection and loads this calculator directly
  calculatorSlug?: string;
  /** @deprecated Use calculatorSlug instead */
  category?: string;
  enableOverly?: boolean;
  overlayOpacity?: number;
};

export const ParagraphSection = () => {
  return (
    <div className="flex  relative items-start z-10 gap-[86px]">
      <div className="flex flex-col items-start gap-[44px] max-w-[627px] ">
        <div className="flex flex-col w-full gap-[22px] ">
          <h5 className="font-bold text-primaryDefault text-[32px] lg:text-[40px]">
            <span className="underline"> Zorgeloos </span> een klus uitbesteden tegen een{' '}
            <span className="underline"> scherpe prijs</span>
          </h5>
          <p className="max-w-[590px]">
            Gedreven door vakmanschap gaan we samen op zoek naar een passende en duurzame oplossing voor uw project.{' '}
          </p>
        </div>
        <div className="flex gap-[22px]    items-center">
          <PrimaryBtnLink href="/offerte">Offerte aanvragen</PrimaryBtnLink>
          <SecondaryOutlinedBtnLink href="tel:+085 401 93 45">Direct bellen</SecondaryOutlinedBtnLink>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({
  imgSrc,
  imgClassName,
  calculatorSlug,
  enableOverly = false,
  overlayOpacity = 50,
}) => {
  return (
    <div className="relative flex items-center justify-center w-full px-2 py-6 h-fit ">
      <img
        src={imgSrc || '/hero.webp'}
        className={cn('absolute  hidden lg:block w-full h-full object-cover top-0 left-0 z-0', imgClassName)}
      />

      <SolidOverlay show={enableOverly} opacity={overlayOpacity} />

      <div className=" relative flex-col lg:flex-row z-2 max-w-full lg:min-h-[470px] py-16 lg:py-0 gap-[86px] px-2 lg:px-[120px] w-[1440px] flex items-center ">
        <ParagraphSection />

        {/* Dynamic calculator with category selection as first step */}
        <DynamicMultiStepForm calculatorSlug={calculatorSlug} />
      </div>
    </div>
  );
};
