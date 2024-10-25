import { PrimaryOutlinedBtnLink } from '@/components/theme/buttons';

export const GreenSection = () => {
  return (
    <div className="flex relative lg:justify-end bg-primaryDefault items-center lg:items-start lg:bg-white   h-fit  py-5 lg:px-0 lg:py-0 px-4 flex-col lg:flex-row w-full">
      <div
        style={{ width: '80vw' }}
        className=" lg:absolute z-20 top-0 left-0 justify-center lg:justify-start flex     overflow-visible  h-full lg:-mr-[7%]"
      >
        <img className=" hidden w-full h-full  lg:block object-cover" src="/aboutUs/greenBg.png" />
        <div className="lg:absolute gap-5 py-4 max-w-[70%] relative  lg:py-0 lg:top-1/2 items-center lg:items-start lg:-translate-y-1/2 lg:left-[20%] flex flex-col xl:gap-[33px] lg:gap-[8px]">
          <h3 className="text-xl   text-center lg:text-start font-bold max-w-[500px]    lg:text-[1.5vw] text-white lg:leading-[37px]  tracking-[-2%] ">
            Wij bieden oplossingen voor trappen en vloeren!{' '}
          </h3>
          <PrimaryOutlinedBtnLink href="/zakelijk" className="lg:py-2">
            Offerte aanvragen
          </PrimaryOutlinedBtnLink>
        </div>
      </div>

      <div className="items-center z-10 hidden lg:flex relative justify-center w-[25vw]  h-[383px]">
        <img src="/zakelijk/wood.png" className="w-full h-full " />
      </div>
    </div>
  );
};
