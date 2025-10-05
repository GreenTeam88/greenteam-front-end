import { shopifyProductMetafields } from '@/config/shop-config';
import { MetafieldFilter } from '@/utils/shop/query';
import { getAllProducts } from '@/utils/shop/query-tools';
import { MarkSidebar } from '../_components/mark-sidebar';
import { StandardProductCard } from './_components/cards';
import { PageHeader } from './_components/page-header';
import { getSidebarParams } from './config/main';

export default async function Page({
  params: { category },
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const metafieldsKeys = Object.keys(searchParams).filter((searchParam) =>
    shopifyProductMetafields.includes(searchParam)
  );
  const metafields: MetafieldFilter[] = metafieldsKeys.map((metafield) => ({
    title: metafield,
    value: JSON.parse((searchParams[metafield] as string) || '[]'),
  }));
  const allProducts = await getAllProducts({ metafields, colors: [], cursor: null, direction: null });

  let filteredProducts = allProducts.products.filter((product) => product.productType === category);
  const marksData = allProducts.products.map((product) =>
    product.metafields?.find((metafield) => metafield?.key === 'mark')
  );

  const marks: string[] = marksData
    .map((mark) => mark?.value)

    .map((mark) => mark?.toLocaleLowerCase())
    .filter(Boolean) as string[];
  console.log('marks', marks, marksData);
  const allParams = getSidebarParams({ marks }).filter(Boolean);
  // for (const param of allParams) {
  //   const selectedParams: string[] = JSON.parse((searchParams[param.title] as string | undefined) || '[]');
  //   if (selectedParams.length) {
  //     filteredProducts = filteredProducts.filter((product) =>
  //       product.metafields?.find((metafield) => selectedParams.includes(metafield?.value.toLowerCase() || ''))
  //     );
  //   }
  // }
  return (
    <div className="flex flex-col  gap-3 max-w-[1400px]">
      <PageHeader category={category} />

      <div className="flex px-2  max-w-full w-full gap-2">
        <MarkSidebar category={category} marks={Array.from(new Set(marks))} />

        <div className="flex flex-wrap gap-5 py-5 max-w-full  w-full">
          {filteredProducts.length ? (
            filteredProducts.map((product) => <StandardProductCard product={product} key={product.id} />)
          ) : (
            <div>
              <h3 className="text-2xl font-semibold">Geen artikel gevonden </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
