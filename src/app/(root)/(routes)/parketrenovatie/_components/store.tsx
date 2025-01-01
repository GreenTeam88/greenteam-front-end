import { StoreImagesInfo, StoreSection } from '@/components/storeSection';

export const ParketrenovatieStoreSection: React.FC<Omit<StoreImagesInfo, 'title' | 'description' | 'btnText'>> = (
  imagesInfo
) => {
  return (
    <StoreSection
      {...imagesInfo}
      title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
      description="Bekijk hier de resultaten van onze renovaties en ontdek hoe wij parketvloeren, of ze nu beschadigd zijn of gewoon toe aan vernieuwing, transformeren tot ware meesterwerken. Uw vloer kan de volgende zijn!"
      btnText="Bereken jouw vloer"
    />
  );
};
