import { getShopifyCollections } from '@/utils/shop/query-tools';
import { ProductsSidebar } from './_components/products-sidebar';

export default async function ProductsPageLayout({ children }: { children: React.ReactNode }) {
  const allCollections = await getShopifyCollections();
  console.log('all collections', allCollections);
  return (
    <div className="flex gap-3 py-4 max-w-[1440px] ">
      <ProductsSidebar collections={allCollections} />
      {children}
    </div>
  );
}
