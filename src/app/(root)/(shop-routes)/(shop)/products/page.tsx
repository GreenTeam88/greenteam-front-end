import { getAllProducts, getShopifyCollections } from '@/utils/shop/query-tools';
import { CollectionsSection } from './_components/collections';
import { AllCarpetsHeader } from './_components/header';
import { ProductsSection } from './_components/products';
import { SearchProducts } from './_components/search-products';

export default async function Products() {
  const allCollections = await getShopifyCollections();
  const products = await getAllProducts();

  return (
    <div className="flex px-2 pt-5 max-w-[1440px] flex-col">
      <AllCarpetsHeader />
      <SearchProducts />
      <CollectionsSection collections={allCollections} />
      <ProductsSection products={products} />
    </div>
  );
}
