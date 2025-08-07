import { notFound } from 'next/navigation';

import { getProductById } from '@/utils/shop/query-tools';
import { ProductBasicInfo } from './_components/basic-info';
import { CategorySection } from './_components/category';
import { ColorsVariants } from './_components/colors-variants';
import { ImagesSection } from './_components/images-section';
import { SizeCalculation } from './_components/size-calculation';
import { SizeVariants } from './_components/size-variants';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await getProductById({ productId: decodeURIComponent(id) });
  if (!product) return notFound();
  const productImages = product?.images.edges.map((edge) => edge.node.url);
  return (
    <div className="flex pt-5 max-w-[1440px] flex-col">
      <CategorySection />
      <div className="flex gap-3">
        <ImagesSection images={productImages || []} />
        <div className="flex flex-col gap-3">
          <ProductBasicInfo product={product} />
          <ColorsVariants product={product} />
          <SizeVariants product={product} />
          <SizeCalculation product={product} />
        </div>
      </div>
    </div>
  );
}
