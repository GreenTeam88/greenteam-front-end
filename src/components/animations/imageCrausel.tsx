'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { CrauselIcon } from '../icons/arrows';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const swipePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[380px] max-w-full">
      <div className="relative h-[400px]   overflow-hidden rounded-lg">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute   object-cover"
            alt={`Slide ${currentIndex + 1}`}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="w-full lg:py-3 gap-[22px] flex items-center justify-center">
        <button onClick={swipePrev} aria-label="Previous image " className="group rotate-180">
          <CrauselIcon />
        </button>

        <button onClick={swipeNext} aria-label="Next image " className="group">
          <CrauselIcon />
        </button>
      </div>
    </div>
  );
};
