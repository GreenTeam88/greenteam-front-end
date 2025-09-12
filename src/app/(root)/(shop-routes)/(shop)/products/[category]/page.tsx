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
  const allProducts = await getAllProducts();

  let filteredProducts = allProducts.filter((product) => product.productType === category);
  const marksData = allProducts.map((product) => product.metafields.find((metafield) => metafield?.key === 'mark'));
  const marks = marksData.map((mark) => mark?.value).filter((mark) => typeof mark === 'string');
  const allParams = getSidebarParams({ marks });
  for (let param of allParams) {
    const selectedParams: string[] = JSON.parse((searchParams[param.title] as string | undefined) || '[]');
    if (selectedParams.length) {
      filteredProducts = filteredProducts.filter((product) =>
        product.metafields.find((metafield) => selectedParams.includes(metafield?.value || ''))
      );
    }
  }

  return (
    <div className="flex flex-col  gap-3 max-w-[1400px]">
      <PageHeader category={category} />

      <div className="flex px-2  max-w-full w-full gap-2">
        <MarkSidebar category={category} marks={marks} />

        <div className="flex flex-wrap gap-5 py-5 max-w-full  w-full">
          {filteredProducts ? (
            filteredProducts.map((product) => <StandardProductCard product={product} key={product.id} />)
          ) : (
            <div>
              <h3 className="text-2xl font-semibold">No Item Found </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
