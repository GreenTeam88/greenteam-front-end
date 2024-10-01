import { PrimaryBtn } from '@/components/theme/buttons';
import { H2 } from '@/components/theme/typography';

const floorStairsImages: string[] = ['/home/stair1.png', '/home/floor.png', '/home/stair2.png'];

export const FloorAndStairs = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-0 py-28 gap-14">
      <H2 className="text-primaryDefault">Je vloer of trap ook laten renoveren?</H2>
      <div className="flex gap-[36px]">
        <img className="hidden lg:block" src="/icons/orangeLeftArrow.svg" />
        <div className="flex flex-col lg:flex-row gap-[22px]">
          {floorStairsImages.map((img) => (
            <img src={img} key={img} className=" lg:w-[385px]" />
          ))}
        </div>
        <img src="/icons/orangeLeftArrow.svg" className="rotate-180 hidden lg:block" />
      </div>
      <PrimaryBtn>Offerte aanvragen</PrimaryBtn>
    </div>
  );
};
