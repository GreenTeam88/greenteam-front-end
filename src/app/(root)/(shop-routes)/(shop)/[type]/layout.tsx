import { CategorySection } from '../_components/category';

export default async function ProductsPageLayout({
  children,
  params: { type },
}: {
  params: { type: string };
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col py-4 w-full relative z-10  max-w-[1440px] ">
      <CategorySection category={type} />
      {children}
    </div>
  );
}
