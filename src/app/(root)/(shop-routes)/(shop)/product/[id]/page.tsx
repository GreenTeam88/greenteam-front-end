import { notFound } from 'next/navigation';

import { SizeDetailsModal } from '@/modals/sizeDetails';
import { getProductById } from '@/utils/shop/query-tools';
import { CategorySection } from '../../_components/category';
import { AddToCartBtn } from './_components/add-to-cart-btn';
import { ProductBasicInfo } from './_components/basic-info';
import { ColorsVariants } from './_components/colors-variants';
import { ProductContactInfo } from './_components/contact-info';
import { ProductProperties } from './_components/foor-instalation';
import { ImagesSection } from './_components/images-section';
import { NeedHelp } from './_components/need-help';
import { ProductTabs } from './_components/product-details/tabs';
import { SizeCalculation } from './_components/size-calculation';
import { SizeVariants } from './_components/size-variants';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const decodedProductId = decodeURIComponent(id);
  const product = await getProductById({ productId: decodedProductId });
  if (!product) return notFound();
  const productImages = product?.images.edges.map((edge) => edge.node.url);
  console.log('product', product.metafields);
  return (
    <>
      <SizeDetailsModal />
      <div className="flex pt-5 px-2 lg:px-0 max-w-[1440px] flex-col">
        <CategorySection />
        <div className="flex flex-col  lg:flex-row gap-3">
          <ImagesSection images={productImages || []} />
          <div className="flex flex-col gap-3">
            <ProductBasicInfo product={product} />
            <ColorsVariants product={product} />
            <SizeVariants product={product} />
            <SizeCalculation product={product} />
            <AddToCartBtn />
            <NeedHelp />
            <ProductProperties />
          </div>
        </div>
        <ProductTabs product={product} />

        <ProductContactInfo />
      </div>
    </>
  );
}
