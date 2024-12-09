'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { CarouselIcon } from '@/components/icons/arrows';
import { H2 } from '@/components/theme/typography';
import { plusJakartaSansFond } from '@/fonts';
import { cn } from '@/lib/tailwind';

interface RatingInfo {
  stars: number;
  description: string | JSX.Element;
  images: string[];
  name: string;
  date: string;
}

const ratings: RatingInfo[] = [
  {
    stars: 5,
    description:
      'Top ervaring gehad met Green Team, kende ze niet, maar kwamen met een scherpe offerte. Samen met de persoon die het kwam leggen een mooi passend tapijt uitgezocht voor onze 2 trappen en overloop. Het ligt er super strak in/op en ziet er geweldig uit!',
    images: ['/reviews/tim-Barendregt/img1.png', '/reviews/tim-Barendregt/img2.png'],
    date: '11/09/2024',
    name: 'Tim Barendregt',
  },
  {
    stars: 5,
    description:
      'Ik ben ontzettend blij met het werk dat Greenteam heeft geleverd aan mijn trap. Ze hebben mijn trap opnieuw gestoffeerd en het ziet er werkelijk prachtig uit. Het team was zeer professioneel, vriendelijk en efficiënt!',
    images: ['/reviews/Veronica-Miraza/img1.png', '/reviews/Veronica-Miraza/img2.png'],
    date: '23/09/2024',
    name: 'Veronica Miraza ',
  },
  {
    stars: 5,
    description:
      'Wij hebben onze eiken parketvloer laten schuren en in de olie laten zetten door Greenteam. We zijn erg tevreden met het resultaat, de vloer is weer als nieuw. Bedankt!',
    images: ['/reviews/jac/img1.png', '/reviews/jac/img2.png', '/reviews/jac/img3.png'],
    date: '14/02/2024',
    name: 'Jac',
  },
  {
    stars: 5,
    description:
      'Vanaf het eerste contact met Greenteam was het duidelijk dat ze zeer professioneel en deskundig waren. Ze kwamen op tijd aan en werkten efficiënt om de klus snel te klaren zonder afbreuk te doen aan de kwaliteit van het werk.',
    images: ['/reviews/bouchra/img1.png'],

    date: '01/07/2024',
    name: 'Bouchra',
  },
  {
    stars: 5,
    description:
      'Onlangs de hulp ingeschakeld van het Greenteam..en ik ben dik tevreden! Mijn laminaat kon wel een opknapbeurt gebruiken, en het resultaat mag er wezen. Medewerkers zijn prettig in de omgang, het is betaalbaar en ik kom zeker is terug!',
    images: ['/reviews/steffen-de-Back/img1.png'],

    date: '02/05/2023',
    name: 'Steffen de Back',
  },
  {
    stars: 5,
    description: (
      <p>
        Greenteam heeft mij geholpen om mijn vloer weer in een goede staat te krijgen.
        <br />
        Ik dacht dat deze vervangen zou moeten worden maar door hun heb ik veel geld bespaard en ziet mijn vloer er weer
        top uit!
      </p>
    ),
    images: ['/reviews/npg-games/img1.png'],
    name: 'Npg Games',
    date: '20/04/2023',
  },
  {
    stars: 5,
    description:
      "Als je je ruimte wilt verheffen met een vloeroptie die elegantie en duurzaamheid uitstraalt, is investeren in houten vloeren een uitstekende beslissing waar je geen spijt van zult krijgen en die investering is dit bedrijf dubbel en dwars waard! Nog nooit zo'n goede service gehad ",
    images: ['/reviews/thomas/img1.png'],

    date: '01/07/2024',
    name: 'thomas',
  },
  {
    stars: 5,
    description:
      'Top ervaring gehad met Green Team, kende ze niet, maar kwamen met een scherpe offerte. Samen met de persoon die het kwam leggen een mooi passend tapijt uitgezocht voor onze 2 trappen en overloop. Het ligt er super strak in/op en ziet er geweldig uit!',
    images: ['/reviews/tim/img1.png'],

    date: '13/09/2024',
    name: 'Tim',
  },
];

const RatingCard: React.FC<RatingInfo> = ({ stars, date: birthDate, description, images, name }) => {
  return (
    <div className="flex z-40 flex-col gap-[22px] bg-white p-4 lg:p-[22px] lg:w-[380px] ">
      <div className="flex w-full  justify-between">
        <div className="flex ">
          {Array.from({ length: stars }).map((item, index) => (
            <img src="/icons/star.svg" key={index} />
          ))}
        </div>
        <img src="/icons/google.svg" />
      </div>
      {React.isValidElement(description) ? description : <p>{description}</p>}
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
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>();

  // Scroll left animation
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

  // New scroll right animation
  const scrollRight = async () => {
    await Promise.all([
      firstRowAnimation.start({ x: firstRowX.current + 400 }),
      secondRowAnimation.start({ x: secondRowX.current + 400 }),
    ]);
    firstRowX.current += 400;
    secondRowX.current += 400;

    if (firstRowX.current === 1600) {
      await firstRowAnimation.start({ x: -800, transition: { duration: 0 } });
      firstRowX.current = -800;
    }
    if (secondRowX.current === 400) {
      await secondRowAnimation.start({ x: -2000, transition: { duration: 0 } });
      secondRowX.current = -2000;
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const animationIntervalId = setInterval(scrollLeft, 10000);
    animationIntervalId && setIntervalId(animationIntervalId);
    return () => {
      clearInterval(animationIntervalId);
    };
  }, []);

  return (
    <div className="flex gap-[36px] items-center">
      {/* Left Arrow */}
      <div
        onClick={() => {
          if (intervalId) clearInterval(intervalId);
          scrollRight();
        }}
        className="hidden lg:block group rotate-180 cursor-pointer"
      >
        <CarouselIcon />
      </div>

      {/* Ratings for desktop */}
      <div className="hidden lg:flex w-[1200px] gap-[20px] relative h-[400px] overflow-hidden">
        <motion.div
          animate={firstRowAnimation}
          className="flex overflow-visible absolute top-0 left-0 gap-[20px] flex-col lg:flex-row"
        >
          {ratings.map((rating, index) => (
            <RatingCard key={`first-${index}`} {...rating} />
          ))}
        </motion.div>
        <motion.div
          animate={secondRowAnimation}
          className="flex gap-[20px] absolute left-[1200px] top-0 flex-col  overflow-visible lg:flex-row"
        >
          {ratings.slice(3, 6).map((rating, index) => (
            <RatingCard key={`second-${index}`} {...rating} />
          ))}
        </motion.div>
      </div>

      {/* Ratings for mobile */}
      <div className="flex gap-[20px] lg:hidden flex-col lg:flex-row">
        {ratings.map((rating, index) => (
          <RatingCard key={`mobile-${index}`} {...rating} />
        ))}
      </div>

      {/* Right Arrow */}
      <div
        onClick={() => {
          if (intervalId) clearInterval(intervalId);
          scrollLeft();
        }}
        className="hidden lg:block group cursor-pointer"
      >
        <CarouselIcon />
      </div>
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
