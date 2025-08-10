import { CartIcon } from '@/components/icons/cart';
import { Button } from '@/components/ui/button';

export const AddToCartBtn = () => {
  return (
    <div className="w-full items-center justify-center">
      <Button className="w-full" variant="tertiary" size="xl">
        <div className="px-1">
          <CartIcon />
        </div>
        In winkelwagen
      </Button>
    </div>
  );
};
