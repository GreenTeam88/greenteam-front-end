import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

export type StoreImagesInfo = {
  title: string;
  description: string;
  firstImg: string;
  secondImg: string;
  thirdImgText?: string;
  thirdImgTopText?: string;
  thirdImg: string;
  fourthImg: string;
  fifthImg: string;
  btnText: string;
  btnLink?: string;
  firstImgClassName?: string;
  secondImgClassName?: string;
  thirdImgClassName?: string;
  fourthImgClassName?: string;
  fifthImgClassName?: string;
};

const ImagesGallery: React.FC<StoreImagesInfo> = ({
  firstImg,
  secondImg,
  thirdImg,
  thirdImgTopText,
  thirdImgText,
  fourthImg,
  fifthImg,
  firstImgClassName,
  secondImgClassName,
  thirdImgClassName,
  fourthImgClassName,
  fifthImgClassName,
}) => {
  return (
    <div className="flex w-[90vw] lg:w-fit gap-[20px] flex-col relative  lg:px-0 lg:flex-row ">
      <div className="flex flex-col gap-[24px]  ">
        <img
          className={cn(
            'w-full object-contain   rounded-[10px] xl:min-w-[285px] xl:min-[h-[213px] ',
            firstImgClassName
          )}
          src={firstImg}
        />
        <img
          className={cn(
            'w-full object-contain   rounded-[10px] xl:min-w-[285px] xl:min-[h-[326px]',
            secondImgClassName
          )}
          src={secondImg}
        />
      </div>
      <div className="relative w-fit h-fit">
        {thirdImgTopText && (
          <p className="font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {thirdImgTopText}
          </p>
        )}
        <img src={thirdImg} className={cn(' rounded-[10px]  xl:min-w-[386px] xl:min-[h-[564px]', thirdImgClassName)} />
        {thirdImgText && (
          <p className="font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
            {thirdImgText}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[24px]">
        <img
          className={cn('w-full  rounded-[10px] xl:min-w-[483px] xl:min-h-[333px] ', fourthImgClassName)}
          src={fourthImg}
        />
        <img
          className={cn('w-full rounded-[10px] xl:min-w-[483px] xl:min-h-[208px]', fifthImgClassName)}
          src={fifthImg}
        />
      </div>
    </div>
  );
};

export const StoreSection: React.FC<StoreImagesInfo> = (imagesInfo) => {
  return (
    <div className="flex  py-5 lg:py-20 items-center flex-col gap-[28px] lg:gap-[55px] max-w-[1440px]  w-full px-2 lg:px-[120px] lg:items-center relative">
      <div className="flex flex-col gap-[11px] items-center ">
        <H2 className="text-primaryDefault text-center">{imagesInfo.title}</H2>
        <BodyText className="max-w-[794px] text-center">{imagesInfo.description}</BodyText>
      </div>
      <ImagesGallery {...imagesInfo} />
      <PrimaryBtnLink href={imagesInfo.btnLink || '/'}>{imagesInfo.btnText}</PrimaryBtnLink>
    </div>
  );
};
