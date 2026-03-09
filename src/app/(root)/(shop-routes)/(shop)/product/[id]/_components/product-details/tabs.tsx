'use client';

import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useState } from 'react';

import { cn } from '@/lib/tailwind';
import { AlternativeProducts } from './alternative-products';
import { AtmosphericPhotos } from './atmospheric-photos';
import { DescriptionTab } from './description';
import { GoesWellWith } from './goes-well-with';
import { NoDataProvided } from './no-data-provided';
import { AllFeatures } from './product-features';
import { ProsAndConsBody } from './pros-and-cons';
import { RelatedProducts } from './related-products';

// the config of the tabs

export const productDetailsTabs = [
  {
    title: 'Plus- en minpunten',
    name: 'pros-and-cons',
    body: ({ product }: { product: Product }) => {
      const stringfiedProsAndCons = product.metafields.find(
        (metafield) => metafield?.key === 'product_metafields_custom_pros'
      )?.value;
      if (!stringfiedProsAndCons) return <NoDataProvided />;

      const prosAndCons = stringfiedProsAndCons
        ? JSON.parse(stringfiedProsAndCons)?.filter((item: any) => !item?.value?.includes('<'))
        : [];

      if (!prosAndCons) return <NoDataProvided />;
      return <ProsAndConsBody prosAndConsData={prosAndCons} />;
    },
  },
  {
    title: 'Productomschrijving',
    name: 'productomschrijving',
    body: ({ product }: { product: Product }) => {
      const description = product.metafields.find((metafield) => metafield?.key === 'description')?.value as string;
      if (!description) return <NoDataProvided />;
      return <DescriptionTab description={description} />;
    },
  },
  {
    title: "Sfeerfoto's",
    name: 'atmospheric-photos',
    body: ({ product }: { product: Product }) => {
      const atmospheric_photos_refrences = product.metafields.find(
        (metafield) => metafield?.key === 'atmospheric_photos'
      )?.references;
      console.log('stringfied photos', atmospheric_photos_refrences);
      if (!atmospheric_photos_refrences) return <NoDataProvided />;
      const photos = atmospheric_photos_refrences.nodes
        .map((node: any) => ({ src: node?.image?.url || node?.url, alt: '' }))
        .filter(Boolean);
      return <AtmosphericPhotos photos={photos} />;
    },
  },
  {
    title: 'Gaat goed samen met',
    name: 'goes-well-with',
    body: ({ product }: { product: Product }) => {
      const goes_well_width_products = product.metafields.find(
        (metafield) => metafield?.key === 'goes_well_width_products'
      )?.references;
      const productsList = goes_well_width_products?.nodes.map((node) => ({ 'product-id': node.id })) || [];
      return <GoesWellWith products={productsList} />;
    },
  },
  {
    title: 'Alternatieven',
    name: 'alternatives',
    body: ({ product }: { product: Product }) => {
      const alternatives_metafield = product.metafields.find(
        (metafield) => metafield?.key === 'alternatives'
      )?.references;
      if (!alternatives_metafield) return <NoDataProvided />;

      const productsList = alternatives_metafield?.nodes.map((node) => ({ 'product-id': node.id })) || [];
      return <AlternativeProducts alternativeProducts={productsList} />;
    },
  },
  {
    title: 'Gerelateerde producten',
    name: 'related-products',
    body: ({ product }: { product: Product }) => {
      const stringfiedRelatedProducts = product.metafields.find(
        (metafield) => metafield?.key === 'related_products'
      )?.references;

      if (!stringfiedRelatedProducts) return <NoDataProvided />;
      const goes_well_width_products = product.metafields.find(
        (metafield) => metafield?.key === 'related_products'
      )?.references;
      const productsList = goes_well_width_products?.nodes.map((node) => ({ 'product-id': node.id })) || [];

      return <RelatedProducts relatedProducts={productsList} />;
    },
  },
  {
    title: 'Alle productkenmerken',
    name: 'product-features',
    body: ({ product }: { product: Product }) => {
      const stringfiedFeatures = product.metafields.find((metafield) => metafield?.key === 'product_features')
        ?.value as string;
      console.log('metafields', product.metafields);

      if (!stringfiedFeatures) return <NoDataProvided />;

      const allFeatures = [...JSON.parse(stringfiedFeatures || '[]')];
      if (allFeatures) return <AllFeatures allFeatures={allFeatures} />;
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
      <div className="flex gap-1 px-6 h-fit lg:h-[81px] max-w-full justify-center lg:justify-start py-2 lg:py-0 flex-wrap lg:flex-nowrap items-center   w-full bg-[#F9FBFA] ">
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
