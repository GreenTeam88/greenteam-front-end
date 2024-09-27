import { PrimaryBtn, SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { HeadlineSemibold } from '@/components/theme/typography';

export const Hero = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center">
      <img src="/home/heroImg.png" className="absolute w-full h-full top-0 left-0 z-0" />

      <div className=" relative z-10 max-w-full h-[484px] gap-[86px] px-[120px] w-[1440px] flex items-center ">
        <div className="flex relative z-10 gap-[86px]">
          <div className="flex flex-col gap-[44px] max-w-[627px] ">
            <div className="flex flex-col w-full gap-[22px] ">
              <h5 className="font-bold text-primaryDefault text-[40px]">
                Zorgeloos een klus uitbesteden tegen een scherpe prijs.
              </h5>
              <p className="max-w-[590px]">
                Gedreven door vakmanschap gaan we samen op zoek naar een passende en duurzame oplossing voor jouw
                project.
              </p>
            </div>
            <div className="flex gap-[22px] items-center">
              <PrimaryBtn>Offerte aanvragen</PrimaryBtn>
              <SecondaryOutlinedBtn>Direct bellen</SecondaryOutlinedBtn>
            </div>
          </div>
        </div>
        <div className="flex rounded-[4px] relative z-10 flex-col  ">
          <div className="bg-primaryDefault rounded-t-[4px] flex items-center justify-center text-white py-[22px] w-full  ">
            <HeadlineSemibold> Snel jouw prijs berekenen!</HeadlineSemibold>
          </div>
          <div className="bg-white w-fit flex flex-col px-[22px] gap-[33px] py-[22px]">
            <div className="flex flex-col gap-[11px]">
              <label>
                Categorie <span className="text-secondaryDefault">*</span>
              </label>
              <input
                placeholder="Kies er een"
                className="px-[20px] w-[342px] border-black20 border rounded-lg  py-[12px] "
              ></input>
            </div>
            <div className="flex flex-col gap-[11px]">
              <label>
                Wat wil je gedaan hebben? <span className="text-secondaryDefault">*</span>
              </label>
              <input
                placeholder="Kies er een"
                className="px-[20px] w-[342px] border-black20 border rounded-lg  py-[12px] "
              ></input>
            </div>
            <PrimaryBtn>Verzenden</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
