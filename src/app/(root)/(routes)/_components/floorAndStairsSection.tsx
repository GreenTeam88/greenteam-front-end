import { PrimaryBtn } from '@/components/theme/buttons';
import { H2 } from '@/components/theme/typography';

const floorStairsImages: string[] = ['/home/stair1.png', '/home/floor.png', '/home/stair2.png'];

export const FloorAndStairs = () => {
  return (
    <div className="flex flex-col items-center py-28 gap-14">
      <H2 className="text-primaryDefault">Je vloer of trap ook laten renoveren?</H2>
      <div className="flex gap-[22px]">
        {floorStairsImages.map((img) => (
          <img src={img} key={img} className="w-[385px]" />
        ))}
      </div>
      <PrimaryBtn>Offerte aanvragen</PrimaryBtn>
    </div>
  );
};
