'use client';

import { useMoney } from '@shopify/hydrogen-react';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';

export const ProductBasicInfo = ({ product }: { product: Product }) => {
  const ratingsAverage = product.metafields?.find((metafield) => metafield?.key === 'ratings_average')?.value;
  const ratingsNumber = product.metafields?.find((metafield) => metafield?.key === 'ratings_number')?.value;
  const oldPrice = product.metafields?.find((metafield) => metafield?.key === 'old_price');
  const defaultPrice = product.priceRange.minVariantPrice;
  const liniarMeterPrice = product.variants?.nodes?.find((node) =>
    node.selectedOptions?.find(
      (selectedOption) => selectedOption.name === 'size' && selectedOption.value === 'liniar-meter'
    )
  )?.price;
  const { amount, currencySymbol } = useMoney(defaultPrice);
  return (
    <div className="flex flex-col max-w-[612px]">
      {ratingsAverage && ratingsNumber && (
        <div className="flex gap-1">
          <div className="flex ">
            {Array.from({ length: Math.round(parseFloat(ratingsAverage)) }).map((_, index) => (
              <span key={index}>⭐</span>
            ))}
          </div>
          <p>({ratingsAverage}/5)</p>
          <p className="font-bold">+{ratingsNumber} beoordeling</p>
        </div>
      )}
      <h2 className="font-semibold text-[36px] leading-[43px] text-black">{product.title}</h2>
      <p className="leading-[24px]">
        Merk <span className="font-bold">Forbo</span>
      </p>
      <div className="flex  gap-2 pt-4 items-end">
        <h3 className="text-[#195B35] text-[32px]  font-medium">
          {currencySymbol}
          {amount}
        </h3>
        <p className="leading-[40px]">per m²</p>
      </div>
      <div className="flex gap-4">
        {' '}
        <div className="line-through">Adviesprijs €{oldPrice?.value}</div>
        <div className="flex gap-1">
          {/* <p className="text-[#195B35]">{currencySymbol}</p> */}
          {liniarMeterPrice?.amount}per strekkende meter
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-7">
        <p>{product.description}</p>
        <div className="bg-[#E0E0E0] w-full h-[1px]"></div>
      </div>
    </div>
  );
};
