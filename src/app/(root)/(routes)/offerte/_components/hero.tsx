'use client';

import { Hero } from '@/components/hero';

export const PageHeroSection = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center py-8 ">
      <img src="/home/heroImg.png" className="absolute hidden lg:block w-full h-full top-0 left-0 z-0" />

      <div className=" relative flex-col z-10 max-w-full lg:h-fit py-[10px]  gap-[40px] px-2 lg:px-[120px] w-[1440px] flex items-center ">
        {/* the form to calculate the price  */}
        <Hero imgSrc="/hero.png" />
      </div>
    </div>
  );
};
