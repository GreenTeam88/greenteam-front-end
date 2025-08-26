import { Product } from '@shopify/hydrogen-react/storefront-api-types';

export const StandardProductCard = ({ product }: { product: Product }) => {
  const productImg = product.images.nodes[0].url;
  return (
    <div className="flex bg-[#F9FBFA] flex-col w-[458px] ">
      <img src={productImg} className="h-[161px] w-full " />
      <div className="flex flex-col gap-1 p-3">
        <h3 className="text-[#333333] font-bold text-xl">{product.title}</h3>
        <div className="flex flex-col ">
          <p className="p-[#333333] font-semibold text-sm">
            {product.vendor}
            Soort: {product.productType}
            <br />
            Artnr: {product.handle}
          </p>
        </div>
      </div>
    </div>
  );
};
