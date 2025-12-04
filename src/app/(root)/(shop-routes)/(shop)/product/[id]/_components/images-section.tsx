'use client';

import { useRef, useState } from 'react';

export const ImagesSection: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;

    // follow the finger
    setOffsetX(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Swipe threshold
    if (offsetX > 80 && selectedIndex > 0) {
      // swipe right → previous image
      setSelectedIndex(selectedIndex - 1);
    } else if (offsetX < -80 && selectedIndex < images.length - 1) {
      // swipe left → next image
      setSelectedIndex(selectedIndex + 1);
    }

    // animate back to center
    setOffsetX(0);
  };

  return (
    <div className="flex pb-2 flex-col gap-2 w-full lg:w-[509px]">
      <div
        className="relative overflow-hidden w-full h-[534px] rounded-lg touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sliding container */}
        <div
          className="flex h-full transition-transform duration-300"
          style={{
            transform: `translateX(calc(${-selectedIndex * 100}% + ${offsetX}px))`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {images.map((img) => (
            <img key={img} src={img} className="w-full h-[534px] object-cover shrink-0" />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((image, i) => (
          <img
            key={image}
            onClick={() => setSelectedIndex(i)}
            className={`w-[63px] h-[63px] cursor-pointer rounded-sm object-cover ${selectedIndex === i ? 'ring-2 ring-blue-500' : ''}`}
            src={image}
          />
        ))}
      </div>
    </div>
  );
};
