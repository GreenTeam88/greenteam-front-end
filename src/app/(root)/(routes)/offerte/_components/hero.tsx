'use client';

import MultiStepForm from '@/components/calculators/common/MultiStepForm';
import { BodyText, H2 } from '@/components/theme/typography';

export const PageHeroSection = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center py-8 ">
      <img src="/home/heroImg.png" className="absolute hidden lg:block w-full h-full top-0 left-0 z-0" />

      <div className=" relative flex-col z-10 max-w-full lg:h-fit py-[10px]  gap-[40px] px-2 lg:px-[120px] w-[1440px] flex items-center ">
        <div className="max-w-[627px] flex flex-col gap-2">
          <H2 className="text-primaryDefault"> Zorgeloos een klus uitbesteden tegen een scherpe prijs.</H2>
          <BodyText>
            Gedreven door vakmanschap gaan we samen op zoek naar een passende en duurzame oplossing voor jouw project.
          </BodyText>
        </div>
        {/* the form to calculate the price  */}
        <MultiStepForm category="Parketrenovatie" />
      </div>
    </div>
  );
};
