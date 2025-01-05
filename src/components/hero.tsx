import React from 'react';

import MultiStepForm from '@/components/calculators/common/MultiStepForm';
import { PrimaryBtnLink, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { cn } from '@/lib/tailwind';

type HeroProps = {
  imgSrc?: string;
  imgClassName?: string;
};

const ParagraphSection = () => {
  return (
    <div className="flex relative items-start z-10 gap-[86px]">
      <div className="flex flex-col items-start gap-[44px] max-w-[627px] ">
        <div className="flex flex-col w-full gap-[22px] ">
          <h5 className="font-bold text-primaryDefault text-[32px] lg:text-[40px]">
            <span className="underline"> Zorgeloos </span> een klus uitbesteden tegen een{' '}
            <span className="underline"> scherpe prijs</span>
          </h5>
          <p className="max-w-[590px]">
            Gedreven door vakmanschap gaan we samen op zoek naar een passende en duurzame oplossing voor jouw project.
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

export const Hero: React.FC<HeroProps> = ({ imgSrc, imgClassName }) => {
  return (
    <div className="relative px-2 py-6  w-full h-fit flex items-center justify-center ">
      <img
        src={imgSrc || '/hero.png'}
        className={cn('absolute hidden lg:block w-full h-full top-0 left-0 z-0', imgClassName)}
      />

      <div className=" relative flex-col lg:flex-row z-0 max-w-full lg:h-[570px] py-16 lg:py-0 gap-[86px] px-2 lg:px-[120px] w-[1440px] flex items-center ">
        <ParagraphSection />

        <MultiStepForm category="Parketrenovatie" />
      </div>
    </div>
  );
};
