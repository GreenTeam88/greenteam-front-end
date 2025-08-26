'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useState } from 'react';

import { cn } from '@/lib/tailwind';
import { AlternativeProducts } from './alternative-products';
import { AtmosphericPhotos, PhotoData } from './atmospheric-photos';
import { DescriptionTab } from './description';
import { GoesWellWith } from './goes-well-with';
import { AllFeatures } from './product-features';
import { ProsAndConsBody, ProsAndConsData } from './pros-and-cons';
import { RelatedProducts } from './related-products';

//     {
//       key: 'old_price',
//       namespace: 'custom',
//       value: '200',
//       type: 'number_integer',
//       description: null
//     },
//     {
//       key: 'ratings_number',
//       namespace: 'custom',
//       value: '15',
//       type: 'number_integer',
//       description: null
//     },
//     {
//       key: 'ratings_average',
//       namespace: 'custom',
//       value: '5',
//       type: 'number_integer',
//       description: null
//     },
//     {
//       key: 'pros_and_cons',
//       namespace: 'custom',
//       value: '[{"value":"Omdat deze vinyl vloer verkrijgbaar is in 200 cm, 300 cm en 400 cm, is de kans kleiner dat u restafval overhoudt.","category":"advantage"},{"value":"In combinatie met de FloorFixx Fini ondervloer voldoet deze vinyl vloer aan de 10 dB eis van de Vereniging van eigenaren.","category":"advantage"},{"value":"Dankzij de Aquagrip toplaag wordt de grip van de vloer niet beduidend minder wanneer er vloeistoffen op worden geknoeid.","category":"advantage"},{"value":"De Diamond Seal toplaag zorgt voor een goede bescherming tegen krassen en slijtage.","category":""},{"value":"Deze vinyl vloer is ftalaatvrij.","category":"advantage"},{"value":"Bij een combinatie van verschillende breedtes dient u rekening te houden met mogelijk kleurverschil (iedere breedte 200 cm / 300 cm / 400 cm komt uit een eigen verfbad.","category":"disadvantage"},{"value":"Deze vinyl vloer heeft een slijtlaag van 0,20 mm. Sommige andere vinyl vloeren uit ons assortiment hebben een dikkere slijtlaag.","category":"disadvantage"},{"value":"Voor het beste resultaat moet uw basisvloer eerst geëgaliseerd worden.","category":"disadvantage"},{"value":"Zware meubels kunnen een afdruk achterlaten in het vinyl.","category":"disadvantage"}]',
//       type: 'json',
//       description: null
//     },
//     {
//       key: 'all_features',
//       namespace: 'custom',
//       value: '[{"category":"Gebruik","features":[{"name":"Woongebruik","value":"Normaal woongebruik"},{"name":"Projectgebruik","value":""},{"name":"Industrieel gebruik","value":""},{"name":"Zwenkwielen","value":""}]},{"category":"Afmetingen","features":[{"name":"Dikte in mm","value":"2"},{"name":"Dikte slijtlaag in mm","value":"0"},{"name":"Rolbreedte in cm","value":"400"}]},{"category":"Geluid","features":[{"name":"Demping van contactgeluiden","value":"Ja"}]}]',
//       type: 'json',
//       description: null
//     },
//     {
//       key: 'product_reviews',
//       namespace: 'custom',
//       value: `[{"stars":"5","description":"Top ervaring gehad met Green Team, kende ze niet, maar kwamen met een scherpe offerte. Samen met de persoon die het kwam leggen een mooi passend tapijt uitgezocht voor onze 2 trappen en overloop. Het ligt er super strak in/op en ziet er geweldig uit!","images":["/reviews/tim-barendregt/img1.webp","/reviews/tim-barendregt/img2.webp"],"date":"11/09/2024","name":"Tim Barendregt"},{"stars":"5","description":"Ik ben ontzettend blij met het werk dat Greenteam heeft geleverd aan mijn trap. Ze hebben mijn trap opnieuw gestoffeerd en het ziet er werkelijk prachtig uit. Het team was zeer professioneel, vriendelijk en efficiënt!","images":["/reviews/veronica-miraza/img1.webp","/reviews/veronica-miraza/img2.webp"],"date":"23/09/2024","name":"Veronica Miraza"},{"stars":"5","description":"Wij hebben onze eiken parketvloer laten schuren en in de olie laten zetten door Greenteam. We zijn erg tevreden met het resultaat, de vloer is weer als nieuw. Bedankt!","images":["/reviews/jac/img1.webp","/reviews/jac/img2.webp","/reviews/jac/img3.webp"],"date":"14/02/2024","name":"Jac"},{"stars":"5","description":"Vanaf het eerste contact met Greenteam was het duidelijk dat ze zeer professioneel en deskundig waren. Ze kwamen op tijd aan en werkten efficiënt om de klus snel te klaren zonder afbreuk te doen aan de kwaliteit van het werk.","images":["/reviews/bouchra/img1.webp"],"date":"01/07/2024","name":"Bouchra"},{"stars":"5","description":"Onlangs de hulp ingeschakeld van het Greenteam..en ik ben dik tevreden! Mijn laminaat kon wel een opknapbeurt gebruiken, en het resultaat mag er wezen. Medewerkers zijn prettig in de omgang, het is betaalbaar en ik kom zeker is terug!","images":["/reviews/steffen-de-back/img1.webp"],"date":"02/05/2023","name":"Steffen de Back"},{"stars":"5","description":"Greenteam heeft mij geholpen om mijn vloer weer in een goede staat te krijgen. Ik dacht dat deze vervangen zou moeten worden maar door hun heb ik veel geld bespaard en ziet mijn vloer er weer top uit!","images":["/reviews/npg-games/img1.webp"],"name":"Npg Games","date":"20/04/2023"},{"stars":"5","description":"Als je je ruimte wilt verheffen met een vloeroptie die elegantie en duurzaamheid uitstraalt, is investeren in houten vloeren een uitstekende beslissing waar je geen spijt van zult krijgen en die investering is dit bedrijf dubbel en dwars waard! Nog nooit zo'n goede service gehad","images":["/reviews/thomas/img1.webp"],"date":"01/07/2024","name":"thomas"},{"stars":"5","description":"Top ervaring gehad met Green Team, kende ze niet, maar kwamen met een scherpe offerte. Samen met de persoon die het kwam leggen een mooi passend tapijt uitgezocht voor onze 2 trappen en overloop. Het ligt er super strak in/op en ziet er geweldig uit!","images":["/reviews/tim/img1.webp"],"date":"13/09/2024","name":"Tim"}]`,
//       type: 'json',
//       description: null
//     },
//     {
//       key: 'related_products',
//       namespace: 'custom',
//       value: '[{"product-id":"Tapijttegel Solid 2077"}]',
//       type: 'json',
//       description: null
//     },
//     {
//       key: 'goes_well_with',
//       namespace: 'custom',
//       value: '[{"product-id":"Tapijttegel Solid 2077"}]',
//       type: 'json',
//       description: null
//     },
//     {
//       key: 'atmospheric_photos',
//       namespace: 'custom',
//       value: '[{"src":"/photos/test.png","alt":"test-photo"}]',
//       type: 'json',
//       description: null
//     },
//     {
//       key: 'description',
//       namespace: 'custom',
//       value: '<div>\n' +
//         '  <h3>Lange levensduur dankzij de toplaag van 0.20 mm en Diamond Seal</h3>\n' +
//         '  <p>\n' +
//         '    Novilon Prima is één van de populairste vinyl vloeren van Nederland. Deze vloer is verkrijgbaar in 8 verschillende\n' +
//         '    designs. De collectie bestaat uit een aantal betontinten, zoals Light Grey Concrete en Dark Grey Concrete. Daarnaast\n' +
//         '    is deze vloer in meerdere houttinten verkrijgbaar, zoals Golden Oak, Grey Oak en Brown Oak.\n' +
//         '  </p>\n' +
//         '</div>;',
//       type: 'multi_line_text_field',
//       description: null
//     },
//     null
//   ],
//   images: { edges: [ [Object] ] },
//   variants: { edges: [ [Object], [Object], [Object], [Object] ] },
//   priceRange: {
//     minVariantPrice: { amount: '0.0', currencyCode: 'EUR' },
//     maxVariantPrice: { amount: '177686.0', currencyCode: 'EUR' }
//   }
// }

// the config of the tabs

export const productDetailsTabs = [
  {
    title: 'Plus- en minpunten',
    name: 'pros-and-cons',
    body: ({ product }: { product: Product }) => {
      const prosAndCons = JSON.parse(
        product.metafields.find((metafield) => metafield?.key === 'pros_and_cons')?.value as string
      ) as ProsAndConsData;
      return <ProsAndConsBody prosAndConsData={prosAndCons} />;
    },
  },
  {
    title: 'Productomschrijving',
    name: 'productomschrijving',
    body: ({ product }: { product: Product }) => {
      const description = product.metafields.find((metafield) => metafield?.key === 'description')?.value as string;
      return <DescriptionTab description={description} />;
    },
  },
  {
    title: "Sfeerfoto's",
    name: 'atmospheric-photos',
    body: ({ product }: { product: Product }) => {
      const photos = JSON.parse(
        product.metafields.find((metafield) => metafield?.key === 'atmospheric_photos')?.value as string
      ) as PhotoData[];
      return <AtmosphericPhotos photos={photos} />;
    },
  },
  {
    title: 'Gaat goed samen met',
    name: 'goes-well-with',
    body: ({ product }: { product: Product }) => {
      const products = JSON.parse(
        product.metafields.find((metafield) => metafield?.key === 'goes_well_with')?.value as string
      ) as { 'product-id': string }[];
      return <GoesWellWith products={products} />;
    },
  },
  {
    title: 'Alternatieven',
    name: 'alternatives',
    body: ({ product }: { product: Product }) => {
      const alternatives = JSON.parse(
        product.metafields.find((metafield) => metafield?.key === 'related_products')?.value as string
      ) as { 'product-id': string }[];
      return <AlternativeProducts alternativeProducts={alternatives} />;
    },
  },
  {
    title: 'Gerelateerde producten',

    name: 'related-products',
    body: ({ product }: { product: Product }) => {
      const relatedProducts = JSON.parse(
        product.metafields.find((metafield) => metafield?.key === 'related_products')?.value as string
      ) as { ['product-id']: string }[];
      return <RelatedProducts relatedProducts={relatedProducts} />;
    },
  },
  {
    title: 'Alle productkenmerken',
    name: 'product-features',
    body: ({ product }: { product: Product }) => {
      const allFeatures = JSON.parse(
        product.metafields.find((metafield) => metafield?.key === 'all_features')?.value as string
      );
      return <AllFeatures allFeatures={allFeatures} />;
    },
  },
] as const;
type TabName = (typeof productDetailsTabs)[number]['name'];

export const ProductTabs = ({ product }: { product: Product }) => {
  const [selectedTab, setSelectedTab] = useState<TabName>(productDetailsTabs[0].name);
  const selectedTabConfig = productDetailsTabs.find((tab) => tab.name === selectedTab);

  if (!selectedTabConfig) throw new Error('can not get the data of the selected tab!');
  return (
    <div className="flex flex-col w-full  lg:w-[1400px] pb-3">
      <div className="flex gap-1 h-[81px] items-center   w-full bg-[#F9FBFA] ">
        {productDetailsTabs.map((tab) => (
          <div
            key={tab.name}
            className={cn('px-3 py-1  rounded-lg', {
              'bg-[#195B35] cursor-cell  text-white': selectedTab === tab.name,
              'text-paragraph cursor-pointer': selectedTab !== tab.name,
            })}
            onClick={() => setSelectedTab(tab.name)}
          >
            {' '}
            {tab.title}
          </div>
        ))}
      </div>
      {selectedTabConfig.body({ product })}
    </div>
  );
};
