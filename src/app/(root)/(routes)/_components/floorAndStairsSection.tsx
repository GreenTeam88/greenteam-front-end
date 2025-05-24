import { ArrowIcon } from '@/components/icons/homePageIcons';
import { PrimaryBtnLink } from '@/components/theme/buttons';
import { H2 } from '@/components/theme/typography';

const floorStairsImages: string[] = ['/home/stair1.webp', '/home/floor.webp', '/home/stair2.webp'];

export const FloorAndStairs = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-0 py-28 gap-14">
      <H2 className="text-primaryDefault">Uw vloer of trap ook laten renoveren? </H2>
      <div className="flex gap-[36px] items-center">
        <span className="cursor-pointer hidden lg:inline rotate-180">
          <ArrowIcon />
        </span>
        <div className="flex flex-col lg:flex-row gap-[22px]">
          {floorStairsImages.map((img) => (
            <img src={img} key={img} className="rounded-lg lg:w-[385px]" />
          ))}
        </div>
        <span className="cursor-pointer hidden lg:inline">
          {' '}
          <ArrowIcon />
        </span>
      </div>
      <PrimaryBtnLink href="/offerte">Offerte aanvragen</PrimaryBtnLink>
    </div>
  );
};
