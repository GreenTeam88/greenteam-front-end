import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';

type StoreImagesInfo = {
  firstImg: string;
  secondImg: string;
  thirdImgText?: string;
  thirdImgTopText?: string;
  thirdImg: string;
  fourthImg: string;
  fifthImg: string;
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
    <div className="flex w-[90vw] lg:w-fit gap-[20px] flex-col relative  lg:px-0 lg:flex-row ">
      <div className="flex flex-col gap-[24px]  ">
        <img className="w-full lg:w-fit" src={firstImg} />
        <img className="w-full lg:w-fit" src={secondImg} />
      </div>
      <div className="relative w-fit h-fit">
        {thirdImgTopText && (
          <p className="font-bold leading-[20px] text-white absolute top-5 right-1/2 translate-x-1/2">
            {thirdImgTopText}
          </p>
        )}
        <img src={thirdImg} />
        {thirdImgText && (
          <p className="font-bold leading-[20px] text-white absolute bottom-5 right-1/2 translate-x-1/2">
            {thirdImgText}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[24px]">
        <img className="w-full lg:w-fit" src={fourthImg} />
        <img className="w-full lg:w-fit" src={fifthImg} />
      </div>
    </div>
  );
};

export const StoreSection: React.FC<StoreImagesInfo> = (imagesInfo) => {
  return (
    <div className="flex  py-20 items-center flex-col gap-[55px] max-w-[1440px]  w-full px-[120px] lg:items-center relative">
      <div className="flex flex-col gap-[11px] items-center ">
        <H2 className="text-primaryDefault text-center">Wat hebben wij in petto? Uw vloer weer laten stralen!</H2>
        <BodyText className="max-w-[794px] text-center">
          Bekijk hier de resultaten van onze renovaties en ontdek hoe wij parketvloeren, of ze nu beschadigd zijn of
          gewoon toe aan vernieuwing, transformeren tot ware meesterwerken. Uw vloer kan de volgende zijn!
        </BodyText>
      </div>
      <ImagesGallery {...imagesInfo} />
      <PrimaryBtnLink href="/offerte">Bereken jouw vloer</PrimaryBtnLink>
    </div>
  );
};
