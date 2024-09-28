import React from 'react';

import { H2 } from '@/components/theme/typography';
import { plusJakartaSansFond } from '@/fonts';
import { cn } from '@/lib/tailwind';

interface RatingInfo {
  stars: number;
  description: string;
  images: string[];
  name: string;
  birthDate: string;
}

const ratings: RatingInfo[] = [
  {
    stars: 5,
    description:
      'Geweldige service van Green Team! De parketvloer werd perfect gelegd met veel oog voor detail. De vakmensen waren vriendelijk en professioneel. Zeer tevreden met het resultaat. Vijf sterren!',
    images: ['/home/ratingImg1.png', '/home/ratingImg2.png'],
    birthDate: '01/07/2024',
    name: 'Sara Sacasa',
  },
  {
    stars: 5,
    description:
      'Geweldige service van Green Team! De parketvloer werd perfect gelegd met veel oog voor detail. De vakmensen waren vriendelijk en professioneel. Zeer tevreden met het resultaat. Vijf sterren!',
    images: ['/home/ratingImg1.png', '/home/ratingImg2.png'],
    birthDate: '01/07/2024',
    name: 'Sara Sacasa',
  },
  {
    stars: 5,
    description:
      'Geweldige service van Green Team! De parketvloer werd perfect gelegd met veel oog voor detail. De vakmensen waren vriendelijk en professioneel. Zeer tevreden met het resultaat. Vijf sterren!',
    images: ['/home/ratingImg1.png', '/home/ratingImg2.png'],
    birthDate: '01/07/2024',
    name: 'Sara Sacasa',
  },
];

const RatingCard: React.FC<RatingInfo> = ({ stars, birthDate, description, images, name }) => {
  return (
    <div className="flex flex-col gap-[22px] bg-white  p-[22px] w-[387px] ">
      <div className="flex w-full  justify-between">
        <div className="flex ">
          {Array.from({ length: stars }).map((item, index) => (
            <img src="/icons/star.svg" key={index} />
          ))}
        </div>
        <img src="/icons/google.svg" />
      </div>
      <p>{description}</p>
      <div className="flex gap-[11px]">
        {images.map((imgSrc) => (
          <img src={imgSrc} key={imgSrc} className="w-[43px] h-[43px] rounded-[4px]" />
        ))}
      </div>
      <div className="flex flex-col">
        <h5 className={cn(plusJakartaSansFond.className, 'text-[14px] text-[#3D3D3D]')}>{name}</h5>
        <p className={cn(plusJakartaSansFond.className, 'text-[7A7A7A] text-[8px]')}>{birthDate}</p>
      </div>
    </div>
  );
};

export const RatingSection = () => {
  return (
    <div className="w-full bg-lightOrange gap-[60px] max-w-full flex items-center py-[122px] justify-center">
      <img src="/icons/arrowLeft.svg" />

      <div className="flex flex-col max-w-[1440px] gap-[44px] items-center justify-center">
        <div className="flex items-center relative justify-between w-full ">
          <H2 className="text-primaryDefault">Wat vinden onze klanten?</H2>
          <img src="/home/googleRating.png" className="absolute top-1/2 -translate-y-1/2 right-0" />
        </div>
        <div className="flex gap-[20px]">
          {ratings.map((rating) => (
            <RatingCard key={rating.name} {...rating} />
          ))}
        </div>
      </div>
      <img src="/icons/arrowLeft.svg" className="rotate-180" />
    </div>
  );
};
