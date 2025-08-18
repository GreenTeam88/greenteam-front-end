import { variantsOptionsNames } from '@/config/shop-config';
import { getAllProducts, getShopifyCollections } from '@/utils/shop/query-tools';
import { CategorySection } from '../_components/category';
import { CollectionsSection } from './_components/collections';
import { AllCarpetsHeader } from './_components/header';
import { ProductsSection } from './_components/products';
import { SearchProducts } from './_components/search-products';

export default async function Products({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const allCollections = await getShopifyCollections();
  const products = await getAllProducts();
  const colors: string[] = JSON.parse((searchParams?.colors as string) || '[]');
  const filteredProductsByColor = colors?.length
    ? products.filter((product) =>
        product.variants.edges?.some((edge) => {
          console.log('edge', edge);
          return edge.node.selectedOptions?.some(
            (option) =>
              option.name === variantsOptionsNames.color &&
              colors.some((color) => color.toLowerCase() === option.value.toLocaleLowerCase())
          );
        })
      )
    : products;
  return (
    <div className="flex pt-5 max-w-[1440px] flex-col">
      <AllCarpetsHeader />
      <SearchProducts />
      <CollectionsSection collections={allCollections} />
      <ProductsSection products={filteredProductsByColor} />
    </div>
  );
}
