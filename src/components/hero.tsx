'use client';

import React from 'react';

import { DynamicMultiStepForm } from '@/components/calculators/dynamic';
import { PrimaryBtnLink, SecondaryBtnLink } from '@/components/theme/buttons';
import { cn } from '@/lib/tailwind';
import { PenUnderline } from './ui/PenUnderline';

export type HeroProps = {
  imgSrc?: string;
  imgClassName?: string;
  // When provided, skips category selection and loads this calculator directly
  calculatorSlug?: string;
  /** @deprecated Use calculatorSlug instead */
  category?: string;
};

export const ParagraphSection = () => {
  return (
    <div className="flex  relative items-start z-10 gap-[86px]">
      <div className="flex flex-col items-start gap-[44px] max-w-[627px]">
        <div className="flex flex-col w-full gap-[22px]">
          <h5 className="font-bold text-[32px] lg:text-[40px] mb-4">
            <span className="px-4 py-3 pb-4 bg-primaryDefault text-[#F3F7F5] rounded-lg box-decoration-clone">
              <PenUnderline>Zorgeloos</PenUnderline> een klus uitbesteden tegen{' '}
              <PenUnderline underlineClassName="-bottom-0">een scherpe</PenUnderline> prijs.
            </span>
          </h5>
          <p className="max-w-[590px] break-words">
            <span className="px-4 py-2 text-[#0B0B0B] bg-[#F3F7F5] rounded-lg box-decoration-clone">
              Gedreven door vakmanschap gaan we samen op zoek naar een passendeen duurzame oplossing voor uw project.
            </span>
          </p>
        </div>
        <div className="flex gap-[22px] items-center flex-col lg:flex-row lg:flex-wrap w-full lg:w-fit *:w-full lg:*:w-fit">
          <SecondaryBtnLink href="/offerte">Offerte aanvragen</SecondaryBtnLink>
          <PrimaryBtnLink href="tel:+085 401 93 45">Bel 085 401 93 45</PrimaryBtnLink>
          <PrimaryBtnLink href="/contact">Gratis thuisadvies</PrimaryBtnLink>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ imgSrc, imgClassName, calculatorSlug }) => {
  return (
    <div className="relative flex items-center justify-center w-full px-2 py-6 h-fit ">
      <img
        src={imgSrc || '/hero.webp'}
        className={cn('absolute  hidden lg:block w-full h-full object-cover top-0 left-0 z-0', imgClassName)}
      />

      <div className=" relative flex-col lg:flex-row z-2 max-w-full lg:min-h-[470px] py-16 lg:py-0 gap-[86px] px-2 lg:px-[120px] w-[1440px] flex items-center ">
        <ParagraphSection />

        {/* Dynamic calculator with category selection as first step */}
        <DynamicMultiStepForm calculatorSlug={calculatorSlug} />
      </div>
    </div>
  );
};
