'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { H2 } from '@/components/theme/typography';

interface Card {
  title: string;
  description: string;
}

interface CarouselProps {
  cards: Card[];
}

export default function Carousel({ cards }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Duplicate cards for seamless looping
  const extendedCards = [...cards, ...cards, ...cards];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => {
      if (currentIndex >= cards.length * 2) {
        setCurrentIndex(cards.length);
      }
      setIsAnimating(false);
    }, 500); // Match this with animation duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => {
      if (currentIndex <= cards.length - 1) {
        setCurrentIndex(cards.length * 2 - 1);
      }
      setIsAnimating(false);
    }, 500); // Match this with animation duration
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-16 overflow-hidden">
      <div className="relative h-[400px]">
        <motion.div
          className="flex"
          animate={{
            x: `-${(currentIndex % cards.length) * 33.33}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 20,
            mass: 1,
            duration: 0.5,
          }}
          style={{
            width: `${extendedCards.length * 33.33}%`,
          }}
        >
          {extendedCards.map((card, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-4">
              <div
                className="bg-white rounded-lg shadow-lg p-6 h-full 
                             transform transition-all duration-300 
                             hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 
                   bg-white/80 hover:bg-white p-3 rounded-full 
                   shadow-lg transition-all hover:scale-110 z-10
                   disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <H2>Arrow</H2>
      </button>

      <button
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 
                   bg-white/80 hover:bg-white p-3 rounded-full 
                   shadow-lg transition-all hover:scale-110 z-10
                   disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <H2>Arrow</H2>
      </button>
    </div>
  );
}
