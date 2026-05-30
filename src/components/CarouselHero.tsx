'use client';

import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import { DynamicMultiStepForm } from './calculators/dynamic';
import { HeroProps, ParagraphSection } from './hero';

const SLIDES = [
  { id: 1, src: '/home-page.webp' },
  { id: 2, src: '/home-page-2.png' },
  { id: 3, src: '/home-page-3.png' },
];

/**
 * 2026-05-28
 * @author abdelhafid
 * @returns JSX
 */
export default function CarouselHero({ calculatorSlug }: HeroProps) {
  const [index, setIndex] = React.useState(0);
  const TIMEOUT = 6000;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, TIMEOUT);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative flex items-center justify-center w-full px-2 py-6 overflow-hidden h-fit">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={SLIDES[index].id}
            src={SLIDES[index].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex-col lg:flex-row max-w-full lg:min-h-[470px] py-16 lg:py-0 gap-[86px] px-2 lg:px-[120px] w-[1440] flex items-center">
        <ParagraphSection />

        {/* Dynamic calculator with category selection as first step */}
        <DynamicMultiStepForm calculatorSlug={calculatorSlug} />
      </div>
    </div>
  );
}
