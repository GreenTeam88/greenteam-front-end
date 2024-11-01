'use client';

import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';

import { SearchIcon } from '@/components/icons/searchIcon';
import { BodyTextSemibold, HeadlineSemibold } from '@/components/theme/typography';
import { FAQCard } from '../../diensten/_components/faq';

interface FAQdata {
  question: string;
  answer: string;
}

interface FAQSubCategory {
  subCategory: string;
  FAQs: FAQdata[];
}

interface FAQCategory {
  category: string;
  subCategories: FAQSubCategory[];
}

export const allFAQs: FAQCategory[] = [
  {
    category: 'Behandelingen',
    subCategories: [
      {
        subCategory: 'Filteren op',
        FAQs: [
          {
            question: 'Wat is het verschil tussen lak, hardwax en olie?',
            answer:
              'Lorem ipsum dolor sit amet consectetur. Cursus eu blandit id egestas elementum. Amet tellus dignissim at in tincidunt tortor. Placerat cursus eu blandit id egestas.',
          },
          {
            question: 'Is er een aanbetaling nodig voor jullie aan de slag gaan?',
            answer:
              'Een aanbetaling is bij ons alleen vereist wanneer er veel materiaal moet worden geleverd, zoals bij grote oppervlakten vloer- of tegelwerk. Dit heeft te maken met de aanschaf van producten bij onze groothandels en leveranciers.',
          },
          {
            question: 'Wat zijn de garantievoorwaarden?',
            answer:
              'Per categorie gelden andere garantievoorwaarden. Onze garantie voorwaarden zijn te vinden in onze algemene voorwaarden.',
          },
        ],
      },
      {
        subCategory: 'Filteren op',
        FAQs: [
          {
            question: 'Wat is het verschil tussen lak, hardwax en olie?',
            answer:
              'Lorem ipsum dolor sit amet consectetur. Cursus eu blandit id egestas elementum. Amet tellus dignissim at in tincidunt tortor. Placerat cursus eu blandit id egestas.',
          },
          {
            question: 'Is er een aanbetaling nodig voor jullie aan de slag gaan?',
            answer:
              'Een aanbetaling is bij ons alleen vereist wanneer er veel materiaal moet worden geleverd, zoals bij grote oppervlakten vloer- of tegelwerk. Dit heeft te maken met de aanschaf van producten bij onze groothandels en leveranciers.',
          },
          {
            question: 'Wat zijn de garantievoorwaarden?',
            answer:
              'Per categorie gelden andere garantievoorwaarden. Onze garantie voorwaarden zijn te vinden in onze algemene voorwaarden.',
          },
        ],
      },
    ],
  },
  {
    category: 'second category',
    subCategories: [
      {
        subCategory: 'sub category',
        FAQs: [
          {
            question: 'question',
            answer: 'answer',
          },
        ],
      },
    ],
  },
  {
    category: 'third category',
    subCategories: [],
  },
  {
    category: 'fourth category',
    subCategories: [],
  },
];

const FAQCategories: React.FC<{ selectedCategory: string; setSelectedCategory: Dispatch<SetStateAction<string>> }> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-col gap-[11px] w-full max-w-[198px]">
      <BodyTextSemibold className="text-black20 text-opacity-40">Filteren op</BodyTextSemibold>
      {allFAQs.map((item) => {
        return (
          <div
            key={item.category}
            onClick={() => setSelectedCategory(item.category)}
            className={clsx(
              'py-[11px] cursor-pointer px-[22px] border border-blackDark   rounded-[27px] border-opacity-20 ',
              {
                'border-primaryDefault border-opacity-95 ': selectedCategory === item.category,
              }
            )}
          >
            <BodyTextSemibold>{item.category}</BodyTextSemibold>
          </div>
        );
      })}
    </div>
  );
};

export const AllFAQsUI = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(allFAQs[0].category);
  const selectedCategoryData = allFAQs.find((item) => item.category === selectedCategory);
  return (
    <div className="flex flex-col py-24 w-full max-w-[1200px] gap-[44px]">
      <div className="flex py-[21px] gap-3 px-[16px] bg-white ">
        <SearchIcon />
        <input className="outline-none w-full focus:outline-none " placeholder="Search anything here"></input>
      </div>
      <div className="flex gap-[107px] w-fit">
        <FAQCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className="flex flex-col gap-[77px]">
          {selectedCategoryData &&
            selectedCategoryData.subCategories.map((item) => (
              <div className="flex flex-col gap-[22px]" key={item.subCategory}>
                <HeadlineSemibold>{item.subCategory}</HeadlineSemibold>
                <div className="flex flex-col gap-[11px]">
                  {item.FAQs.map((FAQ) => (
                    <FAQCard key={FAQ.question} {...FAQ} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
