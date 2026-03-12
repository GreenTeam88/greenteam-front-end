import { Pagination } from '@/components/shop/pagination';
import { variantsOptionsNames } from '@/config/shop-config';
import { getAllProducts, getShopifyCollections } from '@/utils/shop/query-tools';
import { MetafieldFilter } from '@/utils/shop/query/main';
import { CollectionsSection } from '../_components/collections';
import { AllCarpetsHeader } from '../_components/header';
import { ProductsSection } from '../_components/products';
import { ProductsSidebar } from '../_components/products-sidebar';
import { SearchProducts } from '../_components/search-products';
import { productsSidebarParams } from '../config/main';

export const revalidate = 1000;
export default async function Page({
  searchParams,
  params: { type, vendor },
}: {
  searchParams?: { [key: string]: string | undefined };
  params: { type: string; vendor: string };
}) {
  const allCollections = await getShopifyCollections();
  const metafields: MetafieldFilter[] = [];
  const colors: string[] = JSON.parse((searchParams?.colors as string) || '[]');
  for (const param in searchParams) {
    if (productsSidebarParams.find((sidebarParam) => sidebarParam.paramName === param)) {
      const paramValues: string[] = JSON.parse((searchParams[param] as string) || '[]');
      metafields.push({ title: param, value: paramValues });
    }
  }
  const cursor: string | null = searchParams?.cursor || null;
  const direction: string | null = searchParams?.direction || null;
  const title: string | null = searchParams?.title || null;
  const data = await getAllProducts({
    cursor,
    title,
    metafields,
    colors,
    direction,
    productType: type,
    vendor: vendor,
  });
  // filtering products based on the colors
  let filteredProducts =
    colors.length && !colors.includes('Alle kleuren')
      ? data.products.filter((product) => {
          const colorsVariants = product.variants?.edges?.filter((edge) =>
            edge.node?.selectedOptions?.find((selectedOption) => selectedOption.name === variantsOptionsNames.color)
          );
          const productColors = Array.from(
            new Set(
              colorsVariants?.map((variant) => {
                return variant.node.selectedOptions?.find(
                  (selectedOption) => selectedOption.name === variantsOptionsNames.color
                )?.value;
              })
            )
          );
          return colors.some((color) => productColors.includes(color));
        })
      : data.products;
  if (title) filteredProducts = filteredProducts.filter((prod) => prod.title.includes(title));
  return (
    <div className="flex gap-3  ">
      <ProductsSidebar collections={allCollections} />
      <div className="flex   px-2 pt-5 lg:pt-0 relative z-0 max-w-[1440px] flex-col">
        <AllCarpetsHeader />
        <SearchProducts />
        <CollectionsSection collections={allCollections} />
        <ProductsSection searchedInput={title || ''} products={filteredProducts} />
        {!colors.length && data.pageInfo && <Pagination {...data.pageInfo} />}
      </div>
    </div>
  );
}
