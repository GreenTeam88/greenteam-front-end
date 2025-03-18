import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';
import { CarouselIcon } from './icons/arrows';

export type StoreImagesInfo = {
  title: string;
  description: string;
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
  btnText: string;
  btnLink?: string;
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
