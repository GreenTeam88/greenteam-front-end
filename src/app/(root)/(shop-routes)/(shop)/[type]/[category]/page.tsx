import { Pagination } from '@/components/shop/pagination';
import { shopifyProductMetafields } from '@/config/shop-config';
import { getAllProducts } from '@/utils/shop/query-tools';
import { MetafieldFilter } from '@/utils/shop/query/main';
import { MarkSidebar } from '../_components/mark-sidebar';
import { StandardProductCard } from './_components/cards';
import { PageHeader } from './_components/page-header';

export default async function Page({
  params: { category },
  searchParams,
}: {
  params: { category: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
    cursor: string | undefined;
    direction: string | undefined;
  };
}) {
  const metafieldsKeys = Object.keys(searchParams).filter((searchParam) =>
    shopifyProductMetafields.includes(searchParam)
  );
  const metafields: MetafieldFilter[] = metafieldsKeys.map((metafield) => ({
    title: metafield,
    value: JSON.parse((searchParams[metafield] as string) || '[]'),
  }));
  const cursor: string | null = searchParams?.cursor || null;
  const direction: string | null = searchParams?.direction || null;
  const allProducts = await getAllProducts({ metafields, colors: [], cursor, direction });

  const filteredProducts = allProducts.products.filter((product) => product.productType === category);
  const marksData = allProducts.products.map((product) =>
    product.metafields?.find((metafield) => metafield?.key === 'mark')
  );

  const marks: string[] = marksData
    .map((mark) => mark?.value)

    .map((mark) => mark?.toLocaleLowerCase())
    .filter(Boolean) as string[];
  console.log('marks', marks, marksData);
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

      <div className="flex px-2  max-w-full w-full lg:gap-6">
        <MarkSidebar category={category} />

        <div className="flex flex-wrap gap-5 py-5 lg:py-0  max-w-full  w-full">
          {filteredProducts.length ? (
            filteredProducts.map((product) => <StandardProductCard product={product} key={product.id} />)
          ) : (
            <div>
              <h3 className="text-2xl font-semibold">Geen artikel gevonden </h3>
            </div>
          )}
          {allProducts.pageInfo && <Pagination {...allProducts.pageInfo} />}
        </div>
      </div>
    </div>
  );
}
