import { getShopifyCollections } from '@/utils/shop/query-tools';
import { CollectionsSection } from './_components/collections';
import { AllCarpetsHeader } from './_components/header';
import { SearchProducts } from './_components/search-products';

export default async function Products() {
  const allCollections = await getShopifyCollections();

  return (
    <div className="flex flex-col">
      <AllCarpetsHeader />
      <SearchProducts />
      <CollectionsSection collections={allCollections} />
    </div>
  );
}
