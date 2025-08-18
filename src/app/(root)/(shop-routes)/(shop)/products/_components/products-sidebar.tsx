'use client';

import { Collection } from '@shopify/hydrogen-react/storefront-api-types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { colorsHexCodesMap } from '@/config/shop-config';
import { cn } from '@/lib/tailwind';

// sidebar section config
const params: { paramName: string; paramTitle: string; items: string[] }[] = [
  {
    paramName: 'Woongebruik',
    items: ['Licht woongebruik', 'Normaal woongebruik', 'Normaal tot zwaar woongebruik', 'Zwaar woongebruik'],
    paramTitle: 'woongebruik',
  },
  {
    paramName: 'Projectgebruik',
    paramTitle: 'Projectgebruik',
    items: ['Projectgebruik', 'Licht projectgebruik', 'Normaal projectgebruik', 'Zwaar projectgebruik'],
  },
  {
    paramName: 'Trapgeschikt',
    paramTitle: 'Trapgeschikt',
    items: ['        Wonen', 'Wonen en werken'],
  },
  {
    paramName: 'Geschikt voor  vloerverwarming',
    paramTitle: 'Geschikt voor vloerverwarming',
    items: [],
  },
  {
    paramName: 'Zwenkwielen',
    paramTitle: 'Zwenkwielen',
    items: ['Wonen en werken', 'Wonen'],
  },
  {
    paramName: 'Poolhoogte groep',
    paramTitle: 'Poolhoogte groep',
    items: ['Laag', 'Gemiddeld', 'Hoog'],
  },
  {
    paramName: 'Comfortklasse',
    paramTitle: 'Comfortklasse',
    items: [],
  },
  {
    paramName: 'Constructie',
    paramTitle: 'Constructie',
    items: [],
  },
  {
    paramName: 'Poolmateriaal',
    paramTitle: 'Poolmateriaal',
    items: ['Polyamide', 'Polyester', 'Polypropyleen', 'Wol', 'Geitenhaar', 'Triexta'],
  },
  {
    paramName: 'Verfmethode',
    paramTitle: 'Verfmethode',
    items: ['Stukverf', 'Garenverf', 'Solution dyed', 'Chromojet'],
  },
];

const Menu = () => {
  return (
    <div className="flex pt-3 gap-4 flex-col pb-5  w-full border-b-[#DFDFDF] border-b">
      <div className="flex w-full justify-between">
        <h3 className="text-lg font-bold ">Menu</h3>
        <div className="bg-[#575757]"></div>
      </div>
      <p className="text-[#195B35] pl-4">Alle tapijten</p>
    </div>
  );
};

const Collections = ({ collections }: { collections: Collection[] }) => {
  return (
    <div className="flex pt-3 gap-4 flex-col pb-5  w-full border-b-[#DFDFDF] border-b">
      <div className="flex w-full justify-between">
        <h3 className="text-lg font-bold ">Collecties</h3>
        <div className="bg-[#575757]"></div>
      </div>
      {collections.map((collection) => (
        <p key={collection.id} className="text-[#195B35] pl-4">
          {collection.title}
        </p>
      ))}
    </div>
  );
};

export const ColorOption = ({ name, hexCode }: { name: string; hexCode?: string }) => {
  const searchParams = useSearchParams();
  const searchParamsColors = searchParams.get('colors');
  const colors: string[] = searchParamsColors ? JSON.parse(decodeURIComponent(searchParamsColors)) : [];
  const isColorSelected = colors.includes(name);
  const router = useRouter();
  const pathname = usePathname();
  const toggleColor = () => {
    const currSearchParams = new URLSearchParams(searchParams.toString());

    if (isColorSelected) {
      const updatedColors = colors.filter((color) => color !== name);
      updatedColors.length
        ? currSearchParams.set('colors', JSON.stringify(updatedColors))
        : currSearchParams.delete('colors');
      console.log('pushing', `${pathname}/?${currSearchParams.toString()}`);
      router.push(`${pathname}/?${currSearchParams.toString()}`);
    } else {
      currSearchParams.set('colors', JSON.stringify([...colors, name]));
      console.log('pushing to :', `${pathname}/?${currSearchParams.toString()}`);

      router.push(`${pathname}?${currSearchParams.toString()}`);
    }
  };
  return (
    <div onClick={toggleColor} className="flex items-center gap-2 cursor-pointer">
      <div
        className={cn('bg-white border border-[#DEE2E6]  rounded-full w-[15px] h-[15px]', {
          'border-[#195B35] border-8': isColorSelected,
        })}
      ></div>
      {hexCode && <div style={{ backgroundColor: hexCode }} className={`flex w-[20px] h-[20px] `}></div>}
      <p className="capitalize text-[15px]">{name}</p>
    </div>
  );
};

export const ColorsSection = () => {
  return (
    <div className="flex pt-3 gap-4 flex-col pb-5  w-full border-b-[#DFDFDF] border-b">
      <div className="flex w-full justify-between">
        <h3 className="text-lg font-bold ">Kleuren</h3>
        <div className="bg-[#575757]"></div>
      </div>
      <ColorOption name="Alle kleuren" />
      {Object.entries(colorsHexCodesMap).map(([name, hexCode]) => (
        <ColorOption key={hexCode} hexCode={hexCode} name={name} />
      ))}
    </div>
  );
};
const QueryItemUI = ({ itemName, paramName }: { itemName: string; paramName: string }) => {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.get(paramName);
  const allItems: string[] = searchParamsString ? JSON.parse(decodeURIComponent(searchParamsString)) : [];
  const isItemSelected = allItems.includes(itemName);
  const router = useRouter();
  const toggleSelect = () => {
    const currSearchParams = new URLSearchParams(searchParams.toString());

    if (isItemSelected) {
      const updatedItems = allItems.filter((item) => item !== itemName);
      updatedItems.length
        ? currSearchParams.set(paramName, JSON.stringify(updatedItems))
        : currSearchParams.delete(paramName);
      router.push(`/?${currSearchParams.toString()}`);
    } else {
      currSearchParams.set(paramName, JSON.stringify([...allItems, paramName]));
      router.push(`/?${currSearchParams.toString()}`);
    }
  };
  return (
    <div className="flex items-center gap-2">
      <div
        onClick={toggleSelect}
        className={cn('bg-white border border-[#DEE2E6] rounded-sm w-[15px] h-[15px]', {
          'border-[#195B35] border-8': isItemSelected,
        })}
      ></div>
      <p className="capitalize text-[15px]">{itemName}</p>
    </div>
  );
};

const QuerySection = ({
  paramsValues,
  title,
  paramName,
}: {
  paramsValues: string[];
  title: string;
  paramName: string;
}) => {
  return (
    <div className="flex pt-3 pb-7 gap-4 flex-col w-full border-b-[#DFDFDF] border-b">
      <div className="flex w-full justify-start gap-6">
        <h3 className="text-lg font-bold ">{title}</h3>
        <p>Uitleg</p>
      </div>
      {paramsValues.map((param) => (
        <QueryItemUI key={param} itemName={param} paramName={paramName} />
      ))}
    </div>
  );
};

export const ProductsSidebar = ({ collections }: { collections: Collection[] }) => {
  return (
    <div className="min-w-[334px] w-fit  px-4   py-8 bg-[#F3F7F5] rounded-[13px] ">
      <Menu />
      <Collections collections={collections} />
      <ColorsSection />
      {params.map((param) => (
        <QuerySection
          key={param.paramName}
          paramName={param.paramName}
          paramsValues={param.items}
          title={param.paramTitle}
        />
      ))}
    </div>
  );
};
