import { StoreSection } from '@/components/storeSection';

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

export const ParketrenovatieStoreSection: React.FC<StoreImagesInfo> = (imagesInfo) => {
  return (
    <StoreSection
      {...imagesInfo}
      title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
      description="Bekijk hier de resultaten van onze renovaties en ontdek hoe wij parketvloeren, of ze nu beschadigd zijn of gewoon toe aan vernieuwing, transformeren tot ware meesterwerken. Uw vloer kan de volgende zijn!"
      btnText="Bereken jouw vloer"
    />
  );
};
