import { InformationIcon } from '@/components/icons/information-icon';

type Feature = {
  name: string;
  value: string;
};

type CategoryFeature = {
  category: string;
  features: Feature[];
};

const FeatureItemUI = ({ feature }: { feature: Feature }) => {
  return (
    <div className="flex w-full py-3 items-center border-b-[#F7F7F7] border-b justify-between">
      <div className="flex w-1/2 gap-1 items-center">
        <InformationIcon />
        <p className="text-black">{feature.name}</p>
      </div>
      <p className="text-black  w-1/2   ">{feature.value || '-'}</p>
    </div>
  );
};

const CategoryFeatureUI = ({ categoryFeature }: { categoryFeature: CategoryFeature }) => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full bg-[#F7F7F7] px-1 py-3">
        <h3 className="text-black text-xl font-bold">{categoryFeature.category}</h3>
      </div>
      <div className="flex flex-col ">
        {categoryFeature.features.map((feature) => (
          <FeatureItemUI key={feature.name} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export const AllFeatures = ({ allFeatures }: { allFeatures: CategoryFeature[] }) => {
  return (
    <div className="flex flex-col py-8 gap-4">
      <h3 className="text-[32px] text-paragraph font-semi">Gerelateerde producten</h3>
      <div className="flex flex-col">
        {allFeatures.map((feature) => (
          <CategoryFeatureUI key={feature.category} categoryFeature={feature} />
        ))}
      </div>
    </div>
  );
};
