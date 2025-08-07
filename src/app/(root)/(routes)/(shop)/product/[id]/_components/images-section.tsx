'use client';

import { useState } from 'react';

export const ImagesSection: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="flex pb-2 flex-col gap-2 w-[509px] ">
      <img src={selectedImage} className="w-full h-[534px] rounded-lg" />
      <div className="flex gap-2">
        {images.map((image) => (
          <img onClick={() => setSelectedImage(image)} className="w-[63px] h-[63px] rounded-sm" src={image} />
        ))}
      </div>
    </div>
  );
};
