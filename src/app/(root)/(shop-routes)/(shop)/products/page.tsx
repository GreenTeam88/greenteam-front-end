import { Pagination } from '@/components/shop/pagination';
import { variantsOptionsNames } from '@/config/shop-config';
import { MetafieldFilter } from '@/utils/shop/query';
import { getAllProducts, getShopifyCollections } from '@/utils/shop/query-tools';
import { CollectionsSection } from './_components/collections';
import { AllCarpetsHeader } from './_components/header';
import { ProductsSection } from './_components/products';
import { ProductsSidebar } from './_components/products-sidebar';
import { SearchProducts } from './_components/search-products';

export const productsSidebarParams: { paramName: string; paramTitle: string; items: string[] }[] = [
  {
    paramName: 'Woongebruik',
    items: ['Licht woongebruik', 'Normaal woongebruik', 'Normaal tot zwaar woongebruik', 'Zwaar woongebruik'],
    paramTitle: 'woongebruik',
  },
  {
    paramName: 'Projectgebruik',
    paramTitle: 'Projectgebruik',
    items: ['Projectgebruik', 'Licht projectgebruik', 'Normaal projectgebruik', 'Zwaar projectgebruik'],
  },
  {
    paramName: 'Trapgeschikt',
    paramTitle: 'Trapgeschikt',
    items: ['        Wonen', 'Wonen en werken'],
  },
  {
    paramName: 'Geschikt voor  vloerverwarming',
    paramTitle: 'Geschikt voor vloerverwarming',
    items: [],
  },
  {
    paramName: 'Zwenkwielen',
    paramTitle: 'Zwenkwielen',
    items: ['Wonen en werken', 'Wonen'],
  },
  {
    paramName: 'Poolhoogte groep',
    paramTitle: 'Poolhoogte groep',
    items: ['Laag', 'Gemiddeld', 'Hoog'],
  },
  {
    paramName: 'Comfortklasse',
    paramTitle: 'Comfortklasse',
    items: [],
  },
  {
    paramName: 'Constructie',
    paramTitle: 'Constructie',
    items: [],
  },
  {
    paramName: 'Poolmateriaal',
    paramTitle: 'Poolmateriaal',
    items: ['Polyamide', 'Polyester', 'Polypropyleen', 'Wol', 'Geitenhaar', 'Triexta'],
  },
  {
    paramName: 'Verfmethode',
    paramTitle: 'Verfmethode',
    items: ['Stukverf', 'Garenverf', 'Solution dyed', 'Chromojet'],
  },
];

export default async function Products({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const allCollections = await getShopifyCollections();

  const metafields: MetafieldFilter[] = [];
  const colors: string[] = JSON.parse((searchParams?.colors as string) || '[]');
  for (let param in searchParams) {
    if (productsSidebarParams.find((sidebarParam) => sidebarParam.paramName === param)) {
      const paramValues: string[] = JSON.parse((searchParams[param] as string) || '[]');
      metafields.push({ title: param, value: paramValues });
    }
  }
  const cursor: string | null = searchParams?.cursor || null;
  const direction: string | null = searchParams?.direction || null;
  const data = await getAllProducts({ cursor, metafields, colors, direction });
  // filtering products based on the colors
  console.log('colors', colors);
  const filteredProducts =
    colors.length && !colors.includes('Alle kleuren')
      ? data.products.filter((product) => {
          const colorsVariants = product.variants?.edges?.filter((edge) =>
            edge.node.selectedOptions.find((selectedOption) => selectedOption.name === variantsOptionsNames.color)
          );

          const productColors = Array.from(
            new Set(
              colorsVariants?.map((variant) => {
                return variant.node.selectedOptions.find(
                  (selectedOption) => selectedOption.name === variantsOptionsNames.color
                )?.value;
              })
            )
          );
          return colors.some((color) => productColors.includes(color));
        })
      : data.products;
  return (
    <div className="flex gap-3 ">
      <ProductsSidebar collections={allCollections} />
      <div className="flex px-2 pt-5 max-w-[1440px] flex-col">
        <AllCarpetsHeader />
        <SearchProducts />
        <CollectionsSection collections={allCollections} />
        <ProductsSection products={filteredProducts} />
        {!colors.length && <Pagination {...data.pageInfo} />}
      </div>
    </div>
  );
}
