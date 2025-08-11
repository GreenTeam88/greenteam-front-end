'use client';

import { useMoney } from '@shopify/hydrogen-react';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import Link from 'next/link';

import { GiftIcon } from '@/components/icons/gift';
import { TruckIcon } from '@/components/icons/truck';
import { colorsHexCodesMap } from '@/config/shop-config';

export const ProductCard = ({ product }: { product: Product }) => {
  const productImage = product.images?.nodes && product.images?.nodes[0]?.url;
  const firstVariant = product?.variants?.edges[0] && product.variants.edges[0].node;
  const { currencySymbol, amount } = useMoney(firstVariant.price);
  return (
    <div className="flex flex-col">
      <div className="w-[282px] h-[282px] relative">
        {productImage ? (
          <img src={productImage} className="w-full h-full absolute  rounded-t-lg " />
        ) : (
          <img src="/shop/products/product-default-image.png" className="w-full h-full z-0 absolute  rounded-t-lg " />
        )}
        <div className="bg-[#D3E0D9] w-fit flex rounded-lg gap-1 z-10 relative top-2 left-[6px] h-[28px] items-center px-1 pr-3">
          <GiftIcon />
          <p className="text-black font-bold text-[9px] leading-[24px] ">Bestseller</p>
        </div>
        <button className="w-[253px] h-[30px] text-[12px] flex items-center z-10 left-1/2 -translate-x-1/2 rounded-lg text-[#195B35]   font-bold absolute top-[237px] justify-center bg-[#D3E0D9]">
          400 en 500 cm breed
        </button>
      </div>
      <div className="flex gap-2 p-2">
        {Object.entries(colorsHexCodesMap)
          .slice(0, 5)
          .map(([color, hexCode]) => (
            <div key={color} style={{ backgroundColor: hexCode }} className="w-[40px] h-[40px]"></div>
          ))}
      </div>
      <div className="flex gap-2 items-end ">
        <h4 className="text-[#212529]  text-xl font-bold">
          {currencySymbol + ' '} {amount}
        </h4>
        <p className="text-[#212529] text-[12px]">per st. meter</p>
      </div>
      <div className="flex py-4 pt-2 px-2 items-center gap-2">
        <TruckIcon />
        <p className="text-[#56A54E] font-semibold text-xs">
          {' '}
          {product?.metafields?.find((item) => item?.key === 'deliverytime')?.value || ' Levertijd 3 - 5 dagen'}
        </p>
      </div>
      <Link
        href={`/product/${encodeURIComponent(product.id)}`}
        className="w-[275px] bg-[#195B35] border-[3px] border-[#195B35] h-[42px] rounded-[10px] text-white flex items-center justify-center font-semibold"
      >
        Bekijk {'>'}
      </Link>
    </div>
  );
};
