'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';
import { CarouselIcon } from './icons/arrows';

export type StoreImageInfo = {
  firstImg: string;
  firstImgTopText: string;
  firstImgBottomText: string;
  secondImg: string;
  secondImgTopText: string;
  secondImgBottomText: string;
  thirdImgBottomText: string;
  thirdImgTopText: string;
  thirdImg: string;
  fourthImg: string;
  fourthImgTopText: string;
  fourthImgBottomText: string;
  fifthImg: string;
  fifthImgBottomText: string;
  fifthImgTopText: string;
};

export type StoreImagesInfo = {
  title: string;
  description: string;
  btnText: string;
  btnLink?: string;
} & StoreImageInfo;

export type MultiStoreImagesInfo = {
  title: string;
  description: string;
  btnText: string;
  btnLink?: string;
  images: StoreImageInfo[];
};

const ImagesGallery: React.FC<StoreImagesInfo> = ({
  firstImg,
  firstImgBottomText,
  fifthImgBottomText,
  secondImg,
  secondImgBottomText,
  secondImgTopText,
  thirdImg,
  thirdImgTopText,
  thirdImgBottomText,
  fourthImg,
  fourthImgBottomText,
  fourthImgTopText,
  fifthImg,
  fifthImgTopText,
  firstImgTopText,
}) => {
  return (
    <div className="flex preventZoom w-[90vw] lg:w-fit items-center gap-[20px] flex-col relative  lg:px-0 lg:flex-row ">
      <div className={cn('hidden rotate-180 lg:block group cursor-pointer')}>
        <CarouselIcon />
      </div>
      <div className="flex w-full lg:w-fit flex-col gap-[24px]  ">
        {/* first image  */}
        <div className="relative w-full lg:w-fit h-fit">
          <div className="storeImageShadow"></div>
          <img src={firstImg} className="w-full  rounded-[10px]    lg:min-h-[213px] lg:max-h-[213px]" />
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {firstImgTopText}
          </p>
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
            {firstImgBottomText}
          </p>
        </div>
        {/* second image  */}
        <div className="relative w-full lg:w-fit h-fit">
          <div className="storeImageShadow"></div>
          <img src={secondImg} className="w-full  rounded-[10px]    lg:min-h-[326px] lg:max-h-[326px] " />
          <p className="  text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {secondImgTopText}
          </p>
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
            {secondImgBottomText}
          </p>
        </div>
      </div>
      {/* third image  */}
      <div className="relative w-fit h-fit">
        <div className="storeImageShadow"></div>
        <img src={thirdImg} className=" rounded-[10px]  lg:min-h-[564px] lg:max-h-[564px]" />
        {thirdImgTopText && (
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {thirdImgTopText}
          </p>
        )}
        <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
          {thirdImgBottomText}
        </p>
      </div>
      <div className="flex gap-[24px] flex-col">
        {/* fourth image  */}
        <div className="relative w-fit h-fit">
          <div className="storeImageShadow"></div>
          <img src={fourthImg} className="w-full  rounded-[10px]  lg:h-[333px] " />
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {fourthImgTopText}
          </p>
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
            {fourthImgBottomText}
          </p>
        </div>

        {/* fourth image  */}
        <div className="relative w-fit h-fit">
          <div className="storeImageShadow"></div>
          <img src={fifthImg} className="w-full rounded-[10px]  lg:h-[208px]" />
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {fifthImgTopText}
          </p>
          <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
            {fifthImgBottomText}
          </p>
        </div>
      </div>
      <div className={cn('hidden lg:block group cursor-pointer')}>
        <CarouselIcon />
      </div>
    </div>
  );
};

export const StoreSection: React.FC<StoreImagesInfo> = (imagesInfo) => {
  return (
    <div className="flex  py-20 items-center flex-col gap-[55px] max-w-[1440px]  w-full px-2 lg:px-[120px] lg:items-center relative">
      <div className="flex flex-col gap-[11px] items-center ">
        <H2 className="text-primaryDefault text-center">{imagesInfo.title}</H2>
        <BodyText className="max-w-[794px] text-center">{imagesInfo.description}</BodyText>
      </div>
      <ImagesGallery {...imagesInfo} />
      <PrimaryBtnLink href={imagesInfo.btnLink || '/'}>{imagesInfo.btnText}</PrimaryBtnLink>
    </div>
  );
};

export const MultiStoreSection: React.FC<MultiStoreImagesInfo> = ({ images, title, btnText, description, btnLink }) => {
  return (
    <div className="flex  py-20 items-center flex-col gap-[55px] max-w-[1440px]  w-full px-2 lg:px-[120px] lg:items-center relative">
      <div className="flex flex-col gap-[11px] items-center ">
        <H2 className="text-primaryDefault text-center">{title}</H2>
        <BodyText className="max-w-[794px] text-center">{description}</BodyText>
      </div>
      <MultiImagesGallery images={images} />
      <PrimaryBtnLink href={btnLink || '/'}>{btnText}</PrimaryBtnLink>
    </div>
  );
};

export const MultiImagesGallery: React.FC<{ images: StoreImageInfo[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // The preload function
  const preloadImages = (imageSet: StoreImageInfo) => {
    const urls = [imageSet.firstImg, imageSet.secondImg, imageSet.thirdImg, imageSet.fourthImg, imageSet.fifthImg];
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  // Preload next and previous images whenever index changes
  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    const prevIndex = (index - 1 + images.length) % images.length;
    preloadImages(images[nextIndex]);
    preloadImages(images[prevIndex]);
  }, [index, images]);
  return (
    <div className="flex preventZoom w-[90vw] lg:w-fit items-center gap-[20px] flex-col relative lg:px-0 lg:flex-row">
      <div className="hidden rotate-180 lg:block group cursor-pointer" onClick={prevImage}>
        <CarouselIcon />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 flex-col lg:flex-row"
        >
          {/* First Image */}
          <div className="flex w-full lg:w-fit   flex-col gap-[24px]">
            <div className="relative w-full lg:w-fit h-fit">
              <div className="storeImageShadow"></div>
              <img src={images[index].firstImg} className="w-full rounded-[10px] lg:min-h-[213px] lg:max-h-[213px]" />
              {images[index].firstImgTopText && (
                <p className="text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
                  {images[index].firstImgTopText}
                </p>
              )}
              {images[index].firstImgBottomText && (
                <p className="text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
                  {images[index].firstImgBottomText}
                </p>
              )}
            </div>

            {/* Second Image */}
            <div className="relative w-full lg:w-fit h-fit">
              <div className="storeImageShadow"></div>
              <img src={images[index].secondImg} className="w-full rounded-[10px] lg:min-h-[326px] lg:max-h-[326px]" />
              {images[index].secondImgTopText && (
                <p className="text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
                  {images[index].secondImgTopText}
                </p>
              )}
              {images[index].secondImgBottomText && (
                <p className="text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
                  {images[index].secondImgBottomText}
                </p>
              )}
            </div>
          </div>
          {/* third image  */}
          <div className="relative w-fit h-fit">
            <div className="storeImageShadow"></div>
            <img src={images[index].thirdImg} className=" rounded-[10px]  lg:min-h-[564px] lg:max-h-[564px]" />
            {images[index].thirdImgTopText && (
              <p className=" text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
                {images[index].thirdImgTopText}
              </p>
            )}
            <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
              {images[index].thirdImgBottomText}
            </p>
          </div>
          {/* fourth image  */}
          <div className="flex w-full lg:w-fit   flex-col gap-[24px]">
            <div className="relative w-fit h-fit">
              <div className="storeImageShadow"></div>
              <img src={images[index].fourthImg} className="w-full  rounded-[10px]  lg:h-[333px] " />
              <p className=" text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
                {images[index].fourthImgTopText}
              </p>
              <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
                {images[index].fourthImgBottomText}
              </p>
            </div>

            {/* fourth image  */}
            <div className="relative w-fit h-fit">
              <div className="storeImageShadow"></div>
              <img src={images[index].fifthImg} className="w-full rounded-[10px]  lg:h-[208px]" />
              <p className=" text-center w-full font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
                {images[index].fifthImgTopText}
              </p>
              <p className=" text-center w-full font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
                {images[index].fifthImgBottomText}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hidden lg:block group cursor-pointer" onClick={nextImage}>
        <CarouselIcon />
      </div>
    </div>
  );
};
