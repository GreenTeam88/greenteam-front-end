import { AppHeader } from '@/components/layout/header/main';
import { ShopProvidersWrapper } from '@/components/providers/shop-providers';
import { CartOpener, CartUI } from '@/components/shop/cart';

export default function ShopLayout({ children }: { children: JSX.Element }) {
  return (
    <ShopProvidersWrapper>
      <CartOpener />
      <CartUI />
      {children}
    </ShopProvidersWrapper>
  );
}
