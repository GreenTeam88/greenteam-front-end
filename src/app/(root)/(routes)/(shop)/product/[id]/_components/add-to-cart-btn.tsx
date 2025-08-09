import { CartIcon } from '@/components/icons/cart';
import { Button } from '@/components/ui/button';

export const AddToCartBtn = () => {
  return (
    <div className="w-full items-center justify-center">
      <Button variant="tertiary" size="xl">
        <CartIcon />
        In winkelwagen
      </Button>
    </div>
  );
};
