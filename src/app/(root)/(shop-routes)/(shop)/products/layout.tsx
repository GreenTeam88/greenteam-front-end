import { getShopifyCollections } from '@/utils/shop/query-tools';
import { CategorySection } from '../_components/category';
import { ProductsSidebar } from './_components/products-sidebar';

export default async function ProductsPageLayout({ children }: { children: React.ReactNode }) {
  const allCollections = await getShopifyCollections();
  return (
    <div className="flex flex-col py-4 max-w-[1440px] ">
      <CategorySection />

      <div className="flex gap-3 ">
        <ProductsSidebar collections={allCollections} />
        {children}
      </div>
    </div>
  );
}
