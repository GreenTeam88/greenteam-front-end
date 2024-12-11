'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { CarouselIcon } from '@/components/icons/arrows';
import { H2 } from '@/components/theme/typography';
import { ServiceCard, services } from '../../_components/services';

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = async () => {
    if (isAnimating || currentIndex >= services.length - 4) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = async () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      <div className="relative hidden lg:flex max-w-[1600px] mx-auto px-8  gap-2 items-center">
        <div
          onClick={handlePrev}
          className={clsx('hidden group lg:block group rotate-180 cursor-pointer', { invisible: currentIndex === 0 })}
        >
          <CarouselIcon />
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${currentIndex * (100 / 4)}%`,
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 20,
            }}
            style={{
              width: `${(services.length * 100) / 4}%`,
            }}
          >
            {services.map((card) => (
              <div key={card.title} className="w-full">
                <ServiceCard {...card} />
              </div>
            ))}
          </motion.div>
        </div>

        <div
          onClick={handleNext}
          className={clsx('hidden lg:block group cursor-pointer', { invisible: currentIndex >= services.length - 4 })}
        >
          <CarouselIcon />
        </div>
      </div>
      <div className="lg:hidden flex flex-col gap-3 py-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service}></ServiceCard>
        ))}
      </div>
    </>
  );
};
export const OurServicesSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center max-w-full px-6 relative gap-[55px] py-40 ">
      <img src="/aboutUs/leftLeaf.png" className="absolute left-0 z-0 bottom-0" />
      <H2 className="text-primaryDefault z-10">Onze diensten</H2>
      <div className="flex relative z-10 flex-col lg:flex-row  gap-5 w-fit">
        <ServicesCarousel />
      </div>
    </div>
  );
};
