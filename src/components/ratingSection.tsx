'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

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
    images: ['/reviews/tim-barendregt/img1.png', '/reviews/tim-barendregt/img2.png'],
    date: '11/09/2024',
    name: 'Tim Barendregt',
  },
  {
    stars: 5,
    description:
      'Ik ben ontzettend blij met het werk dat Greenteam heeft geleverd aan mijn trap. Ze hebben mijn trap opnieuw gestoffeerd en het ziet er werkelijk prachtig uit. Het team was zeer professioneel, vriendelijk en efficiënt!',
    images: ['/reviews/veronica-miraza/img1.png', '/reviews/veronica-miraza/img2.png'],
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
    images: ['/reviews/steffen-de-back/img1.png'],

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
    <div className="flex z-40 flex-col gap-[22px] bg-white p-4 lg:p-[22px] w-full ">
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

const DesktopRating: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // the direction of the auto scrolling
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  // when the user scrolls manually , the autoscrolling should be stoped
  const [autoScrollingStoped, setAutoScrollingStoped] = useState(false);

  // scrolling to left function
  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ratings.length - 3 : prevIndex - 1));
  };

  // scrolling to right function
  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ratings.length - 3 ? 0 : prevIndex + 1));
  };

  // Auto-scroll effect with direction change , we need to reset the inverval whenever the direction changes
  useEffect(() => {
    const autoScroll = () => {
      if (direction === 'right') {
        if (currentIndex === ratings.length - 3) {
          setDirection('left');
          setCurrentIndex((prev) => prev - 1);
        } else {
          setCurrentIndex((prev) => prev + 1);
        }
      } else {
        if (currentIndex === 0) {
          setDirection('right');
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex((prev) => prev - 1);
        }
      }
    };

    // don't set the interval if the auto scrolling is stoped
    let animationIntervalId: NodeJS.Timeout;
    if (!autoScrollingStoped) {
      animationIntervalId = setInterval(autoScroll, 4000);
    }
    return () => {
      clearInterval(animationIntervalId);
    };
  }, [direction, currentIndex]);

  return (
    <div className=" gap-3 hidden lg:flex items-center">
      {/* left arrow  */}
      <div
        onClick={() => {
          setAutoScrollingStoped(true);
          slideLeft();
        }}
        className={cn('hidden lg:block group rotate-180 cursor-pointer', {
          invisible: currentIndex === 0,
        })}
      >
        <CarouselIcon />
      </div>
      <div className="relative w-full laptop:mr-[41px]  max-w-[1220px] mx-auto">
        <div className="relative z-10  overflow-hidden">
          <motion.div
            className="flex z-40 overflow-visible   relative"
            animate={{
              x: `-${currentIndex * (100 / 3)}%`,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            style={{
              overflow: 'visible',
            }}
          >
            {ratings.map((item, index) => (
              <div
                key={index}
                className={cn('min-w-[33.333%]  p-2', {
                  '': currentIndex === index,
                })}
              >
                <RatingCard {...item} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Right Arrow */}
      <div
        onClick={() => {
          setAutoScrollingStoped(true);
          slideRight();
        }}
        className={cn('hidden lg:block group cursor-pointer', { invisible: currentIndex === ratings.length - 3 })}
      >
        <CarouselIcon />
      </div>
    </div>
  );
};
const MobileRating = () => {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {ratings.map((rating) => (
        <RatingCard key={rating.name} {...rating} />
      ))}
    </div>
  );
};

export const RatingSection = () => {
  return (
    <div className="w-full relative px-3 lg:px-0 bg-lightOrange gap-[60px] max-w-full flex items-center py-[60px] lg:py-[122px] justify-center">
      <div className="flex flex-col z-10 relative max-w-[1440px] gap-[44px] items-center justify-center">
        {/* top section includes title and ratings on google */}
        <RatingTopSection />
        {/* ratings section includes the cards and the arrows for desktop */}
        <DesktopRating />
        {/* ratings section includes the cards and the arrows for mobile */}

        <MobileRating />
      </div>
    </div>
  );
};
