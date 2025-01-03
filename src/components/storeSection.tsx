import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';

type StoreImagesInfo = {
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
};

const ImagesGallery: React.FC<StoreImagesInfo> = ({
  firstImg,
  secondImg,
  thirdImg,
  thirdImgTopText,
  thirdImgText,
  fourthImg,
  fifthImg,
}) => {
  return (
    <div className="flex preventZoom w-[90vw] lg:w-fit gap-[20px] flex-col relative  lg:px-0 lg:flex-row ">
      <div className="flex flex-col gap-[24px]  ">
        <img className="w-full  rounded-[10px]    lg:min-h-[213px] lg:max-h-[213px] " src={firstImg} />
        <img className="w-full  rounded-[10px]    lg:min-h-[326px] lg:max-h-[326px] " src={secondImg} />
      </div>
      <div className="relative w-fit h-fit">
        {thirdImgTopText && (
          <p className="font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {thirdImgTopText}
          </p>
        )}
        <img src={thirdImg} className=" rounded-[10px]  lg:min-h-[564px] lg:max-h-[564px]" />
        {thirdImgText && (
          <p className="font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
            {thirdImgText}
          </p>
        )}
      </div>
      <div className="flex gap-[24px] flex-col">
        <img className="w-full  rounded-[10px]  lg:h-[333px] " src={fourthImg} />
        <img className="w-full rounded-[10px]  lg:h-[208px]" src={fifthImg} />
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
