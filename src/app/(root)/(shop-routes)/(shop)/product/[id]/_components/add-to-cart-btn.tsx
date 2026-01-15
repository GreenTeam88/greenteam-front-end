'use client';

import { useCart } from '@shopify/hydrogen-react';
import { toast } from 'sonner';

import { CartIcon } from '@/components/icons/cart';
import { Button } from '@/components/ui/button';
import { useSelectedVariants } from '@/store/selected-variants';

export const AddToCartBtn: React.FC = () => {
  const { linesAdd, error } = useCart();
  const { selectedVariantId } = useSelectedVariants();
  const addProductToCart = async () => {
    if (!selectedVariantId) return;
    await linesAdd([{ merchandiseId: selectedVariantId, quantity: 1 }]);
    toast.success('Uw product is toegevoegd aan uw winkelwagen!');
  };
  error && console.log('cart error', error);
  return (
    <div className="w-full items-center justify-center">
      <Button disabled={!selectedVariantId} onClick={addProductToCart} className="w-full" variant="tertiary" size="xl">
        <div className="px-1">
          <CartIcon />
        </div>
        In winkelwagen
      </Button>
    </div>
  );
};
