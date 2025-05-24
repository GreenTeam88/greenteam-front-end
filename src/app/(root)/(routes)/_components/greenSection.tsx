import { PrimaryOutlinedBtnLink } from '@/components/theme/buttons';

export const GreenSection = () => {
  return (
    <>
      {/* desktop version */}
      <div className=" relative hidden lg:flex   bg-green-600 h-fit  py-5 lg:px-0 lg:py-0 px-4 flex-col lg:flex-row w-full">
        <img src="/home/ITPersons.webp" className=" w-[25vw] h-fit " />
        <div style={{ width: '80vw' }} className="absolute top-0 right-0   overflow-visible  h-full lg:-ml-[7%]">
          <img className=" hidden w-full h-full  lg:block object-cover" src="/home/greenBg.svg" />
          <div className="lg:absolute py-4 lg:py-0 lg:top-1/2 items-center lg:items-start lg:-translate-y-1/2 lg:left-[20%] flex flex-col xl:gap-[33px] lg:gap-[8px]">
            <h3 className="text-xl text-center lg:text-start   lg:text-[1.5vw] text-white lg:leading-[1.5vw]  tracking-[-2%] ">
              GreenTeam als dé groene <br />
              zakenpartner <span className="font-bold">voor uw bedrijf!</span>{' '}
            </h3>
            <PrimaryOutlinedBtnLink href="/zakelijk" className="lg:py-2">
              Dat wil ik!
            </PrimaryOutlinedBtnLink>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="flex relative  lg:hidden  bg-green-600 h-fit  pb-5 lg:px-0 lg:py-0  flex-col lg:flex-row w-full">
        <img src="/home/ITPersons.png" className="  h-fit " />
        <div className="  h-full ">
          <div className="py-4  items-center  flex flex-col gap-[33px] ">
            <h3 className="text-xl text-center lg:text-start    text-white   tracking-[-2%] ">
              GreenTeam als dé groene <br /> zakenpartner <span className="font-semibold"> voor uw bedrijf!</span>
            </h3>
            <PrimaryOutlinedBtnLink href="/zakelijk" className="lg:py-2">
              Dat wil ik!
            </PrimaryOutlinedBtnLink>
          </div>
        </div>
      </div>
    </>
  );
};
