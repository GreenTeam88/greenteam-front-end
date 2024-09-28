import { PrimaryOutlinedBtn } from '@/components/theme/buttons';

export const GreenSection = () => {
  return (
    <div className="flex relative w-full">
      <img src="/home/happyPeople.png" className="w-[40%]" />
      <div className="relative w-full  h-fit -ml-[7%]">
        <img className="w-full" src="/home/greenBg.svg" />
        <div className="absolute top-1/2 -translate-y-1/2 left-[20%] flex flex-col  gap-[33px]">
          <h3 className="text-[30px] text-white leading-[37px] tracking-[-2%] ">
            GreenTeam als dé groene <br /> zakenpartner <span className="H2"> voor jouw bedrijf!</span>
          </h3>
          <PrimaryOutlinedBtn>Dat wil ik!</PrimaryOutlinedBtn>
        </div>
      </div>
    </div>
  );
};
