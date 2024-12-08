'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { CrauselIcon } from '../icons/arrows';
import { H2 } from '../theme/typography';

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
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div> */}
    </div>
  );
};
