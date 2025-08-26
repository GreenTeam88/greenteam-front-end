// page header config

import { GiftIcon } from '@/components/icons/gift';

type HeaderConfig = {
  name: string;
  img: string;
  description: string | JSX.Element;
  title: string;
};

const headerCategoriesConfig: HeaderConfig[] = [
  {
    name: 'tapijten',
    title: 'tapijten',
    img: '/products/tapijten.jpg',
    description: (
      <p className="text-[#0A0A0A]">
        Ontdek nu de meest uitgebreide tapijtcollectie van Nederland. U koopt deze hoogwaardige tapijten van de beste
        merken voor de laagste prijs in onze webshop.
        <br />
        <br />
        Tapijt voelt warm en zacht aan en heeft goede geluiddempende eigenschappen. Het is ook makkelijk te leggen.
        Bekijk nu onze complete collectie en bestel direct met extra korting:
      </p>
    ),
  },
];

export const PageHeader = ({ category }: { category: string }) => {
  const selectedCategoryData = headerCategoriesConfig.find((config) => config.name === category);
  if (!selectedCategoryData) return null;
  return (
    <div className="flex max-w-[1440px] items-center gap-2">
      <div className="flex flex-col">
        <div className="flex w-full items-center gap-3 justify-center">
          <h3 className="text-[#0A0A0A] font-semibold text-[30px]">{selectedCategoryData.title}</h3>
          <button className="bg-[#195B35] px-1 items-center rounded-[18px] gap-1 flex bg-opacity-20 h-[34px]">
            <GiftIcon />
            <p className="font-semibold text-[8px]">Nu extra korting met code "VLOER"</p>
          </button>
        </div>
        <img className="w-[446px] rounded-[20px] h-[188px] " src={selectedCategoryData.img} />
      </div>
      <div className="w-full h-fit">{selectedCategoryData.description}</div>
    </div>
  );
};
