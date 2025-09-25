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

export default async function Products({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const allCollections = await getShopifyCollections();
  const currentPage = searchParams?.page;

  const metafields: MetafieldFilter[] = [];
  const colors: string[] = JSON.parse((searchParams?.colors as string) || '[]');
  for (let param in searchParams) {
    console.log(
      'param',
      param,
      productsSidebarParams.find((sidebarParam) => sidebarParam.paramTitle === param)
    );
    const paramValues: string[] = JSON.parse((searchParams[param] as string) || '[]');
    console.log('param values', paramValues);
    if (productsSidebarParams.find((sidebarParam) => sidebarParam.paramName === param)) {
      metafields.push({ title: param, value: paramValues });
    }
  }
  const products = await getAllProducts({ metafields });

  let filteredProducts = products;
  if (colors.length) {
    filteredProducts = filteredProducts.filter((product) =>
      product.variants.edges?.some((edge) => {
        console.log('edge', edge);
        return edge.node.selectedOptions?.some(
          (option) =>
            option.name === variantsOptionsNames.color &&
            colors.some((color) => color.toLowerCase() === option.value.toLocaleLowerCase())
        );
      })
    );
  }

  return (
    <div className="flex gap-3 ">
      <ProductsSidebar collections={allCollections} />
      <div className="flex px-2 pt-5 max-w-[1440px] flex-col">
        <AllCarpetsHeader />
        <SearchProducts />
        <CollectionsSection collections={allCollections} />
        <ProductsSection products={filteredProducts} />
        {!colors.length && <Pagination pagesCount={2} />}
      </div>
    </div>
  );
}
