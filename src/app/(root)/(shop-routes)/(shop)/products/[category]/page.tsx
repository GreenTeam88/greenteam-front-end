import { getAllProducts } from '@/utils/shop/query-tools';
import { StandardProductCard } from './_components/cards';
import { PageHeader } from './_components/page-header';

export default async function Page({ params: { category } }: { params: { category: string } }) {
  const products = await getAllProducts();

  const filteredProductsByCategory = products.filter((product) => product.productType === category);
  return (
    <div className="flex flex-col gap-3">
      <PageHeader category={category} />
      <div className="flex flex-wrap gap-5 py-5 px-3 w-full">
        {filteredProductsByCategory.map((product) => (
          <StandardProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
