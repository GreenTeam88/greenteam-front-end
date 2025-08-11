import { ShopHeader } from '@/components/layout/header/shop-header';

export default function ShopLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <ShopHeader />
      {children}
    </>
  );
}
