import { PrimaryOutlinedBtn } from '@/components/theme/buttons';

export const GreenSection = () => {
  return (
    <div className="flex relative   bg-green-600 h-fit  py-5 lg:py-0 px-4 flex-col lg:flex-row w-full">
      <img src="/home/ITPersons.png" className=" w-[25vw] h-fit " />
      <div style={{ width: '80vw' }} className="absolute top-0 right-0   overflow-visible  h-full lg:-ml-[7%]">
        <img className=" hidden w-full h-full  lg:block object-cover" src="/home/greenBg.svg" />
        <div className="lg:absolute py-4 lg:py-0 lg:top-1/2 items-center lg:items-start lg:-translate-y-1/2 lg:left-[20%] flex flex-col gap-[33px]">
          <h3 className="text-xl text-center lg:text-start lg:text-[30px] text-white lg:leading-[37px] tracking-[-2%] ">
            GreenTeam als dé groene <br /> zakenpartner <span className="font-semibold"> voor jouw bedrijf!</span>
          </h3>
          <PrimaryOutlinedBtn>Dat wil ik!</PrimaryOutlinedBtn>
        </div>
      </div>
    </div>
  );
};
