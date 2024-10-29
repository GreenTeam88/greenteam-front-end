'use client';

import { PrimaryBtn, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { HeadlineSemibold } from '@/components/theme/typography';

const ParagraphSection = () => {
  return (
    <div className="flex relative  items-center lg:items-start z-10 gap-[86px]">
      <div className="flex flex-col items-center lg:items-start gap-[44px] max-w-[627px] ">
        <div className="flex flex-col w-full gap-[22px] ">
          <h5 className="font-bold text-primaryDefault text-[32px] lg:text-[40px]">
            <span className="underline">Zorgeloos</span> een klus uitbesteden tegen een{' '}
            <span className="underline"> scherpe prijs.</span>
          </h5>
          <p className="max-w-[590px]">
            Gedreven door vakmanschap gaan we samen op zoek naar een passende en duurzame oplossing voor jouw project.
          </p>
        </div>
      </div>
    </div>
  );
};

const FormSection = () => {
  return (
    <div className="flex  rounded-[4px] relative w-full max-w-[628px] lg:px-0  z-10 flex-col  ">
      <div className="bg-primaryDefault rounded-t-[8px] flex  items-center justify-center text-white py-[22px] w-full  ">
        <HeadlineSemibold> Snel jouw prijs berekenen!</HeadlineSemibold>
      </div>
      <div className="bg-white   rounded-b-[8px] flex flex-col w-full px-[22px] gap-[33px] py-[22px]">
        <div className="flex flex-col gap-[11px] w-full">
          <label>
            Categorie <span className="text-secondaryDefault">*</span>
          </label>
          <input
            placeholder="Kies er een"
            className="px-[20px] lg:w-full border-black20 border rounded-lg  py-[12px] "
          ></input>
        </div>
        <div className="flex flex-col gap-[11px] w-full">
          <label>
            Wat wil je gedaan hebben? <span className="text-secondaryDefault">*</span>
          </label>
          <input placeholder="Kies er een" className="px-[20px]  border-black20 border rounded-lg  py-[12px] "></input>
        </div>
        <PrimaryBtn className="w-full">Verzenden</PrimaryBtn>
      </div>
    </div>
  );
};

export const PageHeroSection = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center py-8 ">
      <img src="/home/heroImg.png" className="absolute hidden lg:block w-full h-full top-0 left-0 z-0" />

      <div className=" relative flex-col z-10 max-w-full lg:h-fit py-[10px]  gap-[40px] px-2 lg:px-[120px] w-[1440px] flex items-center ">
        {/* paragraph section includes the title , the paragraph and the buttons */}
        <ParagraphSection />
        {/* the form to calculate the price  */}
        <FormSection />
      </div>
    </div>
  );
};
