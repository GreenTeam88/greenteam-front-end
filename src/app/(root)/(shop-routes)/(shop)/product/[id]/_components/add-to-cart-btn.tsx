'use client';

import { useCart } from '@shopify/hydrogen-react';

import { CartIcon } from '@/components/icons/cart';
import { Button } from '@/components/ui/button';
import { useSelectedVariants } from '@/store/selected-variants';

export const AddToCartBtn = ({ productId }: { productId: string }) => {
  const { linesAdd } = useCart();
  const { selectedVariantId } = useSelectedVariants();
  const addProductToCart = async () => {
    if (!selectedVariantId) return;
    console.log('adding product to the cart, variant id is : ', selectedVariantId);

    await linesAdd([{ merchandiseId: selectedVariantId, quantity: 1 }]);
  };
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
