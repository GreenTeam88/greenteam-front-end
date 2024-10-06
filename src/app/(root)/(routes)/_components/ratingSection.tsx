'use client';

import { motion, useAnimateMini, useAnimation } from 'framer-motion';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React, { useEffect, useRef } from 'react';

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
    <div className="flex flex-col gap-[22px] bg-white p-4 lg:p-[22px] lg:w-[380px] ">
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
          <img src={imgSrc} key={imgSrc} className="w-[43px] hover:scale-[4] h-[43px] rounded-[4px]" />
        ))}
      </div>
      <div className="flex flex-col">
        <h5 className={cn(plusJakartaSansFond.className, 'text-[14px] text-[#3D3D3D]')}>{name}</h5>
        <p className={cn(plusJakartaSansFond.className, 'text-[7A7A7A] text-[8px]')}>{birthDate}</p>
      </div>
    </div>
  );
};

const RatingTopSection = () => {
  return (
    <div className="flex flex-col gap-7 items-center relative justify-center  w-[90%] ">
      <H2 className="text-primaryDefault text-center lg:text-start">Wat vinden onze klanten?</H2>
      <img src="/home/googleRating.png" className="lg:absolute  lg:top-1/2 lg:-translate-y-1/2 lg:right-0" />
    </div>
  );
};

const Ratings = () => {
  const firstRowAnimation = useAnimation();
  const firstRowX = useRef(0);
  const secondRowAnimation = useAnimation();
  const secondRowX = useRef(0);

  // the animation logic
  const scrollLeft = async () => {
    await Promise.all([
      firstRowAnimation.start({ x: firstRowX.current - 400 }),
      secondRowAnimation.start({ x: secondRowX.current - 400 }),
    ]);
    firstRowX.current -= 400;
    secondRowX.current -= 400;
    if (firstRowX.current === -1200) {
      await firstRowAnimation.start({ x: 1200, transition: { duration: 0 } });
      firstRowX.current = 1200;
    }
    if (secondRowX.current === -2400) {
      await secondRowAnimation.start({ x: 0, transition: { duration: 0 } });
      secondRowX.current = 0;
    }
  };

  useEffect(() => {
    const animationIntervalId = setInterval(scrollLeft, 3000);
    return () => {
      clearInterval(animationIntervalId);
    };
  }, []);
  return (
    <div className="flex  gap-[36px]">
      <img className="hidden lg:block" src="/icons/arrowLeft.svg" />
      {/* ratings for mobile */}
      <div className="hidden lg:flex w-[1200px]  gap-[20px] relative h-[400px]   overflow-hidden">
        <motion.div animate={firstRowAnimation} className="flex absolute top-0 left-0 gap-[20px]  flex-col lg:flex-row">
          {ratings.map((rating) => (
            <RatingCard key={rating.name} {...rating} />
          ))}
        </motion.div>
        <motion.div
          animate={secondRowAnimation}
          className="flex gap-[20px] absolute left-[1200px] top-0  flex-col lg:flex-row"
        >
          {ratings.map((rating) => (
            <RatingCard key={rating.name} {...rating} />
          ))}
        </motion.div>
      </div>
      {/* ratings for desktop */}
      <div className="flex  gap-[20px] lg:hidden  flex-col lg:flex-row">
        {ratings.map((rating) => (
          <RatingCard key={rating.name} {...rating} />
        ))}
      </div>

      <img src="/icons/arrowLeft.svg" className="rotate-180 hidden lg:block" />
    </div>
  );
};
export const RatingSection = () => {
  return (
    <div className="w-full px-3 lg:px-0 bg-lightOrange gap-[60px] max-w-full flex items-center py-[122px] justify-center">
      <div className="flex flex-col max-w-[1440px] gap-[44px] items-center justify-center">
        {/* top section includes title and ratings on google */}
        <RatingTopSection />
        {/* ratings section includes the cards and the arrows */}
        <Ratings />
      </div>
    </div>
  );
};
