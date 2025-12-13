import { CartOpener, CartUI } from '@/components/shop/cart';

export default function ShopLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <CartOpener />
      <CartUI />
      {children}
    </>
  );
}
