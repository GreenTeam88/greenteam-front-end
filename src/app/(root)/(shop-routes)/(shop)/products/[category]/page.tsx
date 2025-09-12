import { getAllProducts } from '@/utils/shop/query-tools';
import { StandardProductCard } from './_components/cards';
import { PageHeader } from './_components/page-header';

export default async function Page({ params: { category } }: { params: { category: string } }) {
  const products = await getAllProducts();

  const filteredProductsByCategory = products.filter((product) => product.productType === category);
  return (
    <div className="flex px-2 flex-col max-w-full w-[700px] gap-3">
      <PageHeader category={category} />
      <div className="flex flex-wrap gap-5 py-5 max-w-full w-full">
        {filteredProductsByCategory ? (
          filteredProductsByCategory.map((product) => <StandardProductCard product={product} key={product.id} />)
        ) : (
          <div>
            <h3 className="text-2xl font-semibold">No Item Found </h3>
          </div>
        )}
      </div>
    </div>
  );
}
