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
