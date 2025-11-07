'use client';

import { useCart } from '@shopify/hydrogen-react';
import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';

export const CartUI = () => {
  const { lines, checkoutUrl, linesRemove } = useCart();
  const { isOpen, set } = useCartStore();
  const navigateToCheckout = () => {
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };
  if (!isOpen) return null;

  return (
    <div className="fixed    top-96  z-[60] right-0">
      <Button variant="tertiary" onClick={() => set({ isOpen: true })}>
        🛒 Winkelwagen ({lines?.length})
      </Button>
      {isOpen && (
        <div className="fixed bg-lightGray top-0 right-0 w-80 h-full shadow-lg p-4" style={{ color: '#212529' }}>
          <h2 className="text-lg font-bold mb-4">Jouw winkelwagen</h2>
          <div className="absolute top-5 right-5" onClick={() => set({ isOpen: false })}>
            <i className="bi hover:text-red-500 hover:text-2xl cursor-pointer bi-x-lg"></i>
          </div>

          {lines?.length === 0 ? (
            <p>Jouw winkelwagen is leeg</p>
          ) : (
            <ul className="space-y-3">
              {lines?.map((line) => (
                <li
                  key={line?.id}
                  className="flex justify-between items-center p-2 rounded-xl"
                  style={{ background: '#F3F7F5' }}
                >
                  <div>
                    <p>{line?.merchandise?.product?.title}</p>
                    <p className="text-sm">
                      {line?.merchandise?.title} × {line?.quantity}
                    </p>
                  </div>
                  <button onClick={() => line?.id && linesRemove([line.id])} style={{ color: '#F56900' }}>
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Checkout */}
          <div className="mt-6">
            {/* <p className="font-semibold">
              Total: {totalPrice?.amount} {totalPrice?.currencyCode}
            </p> */}
            {checkoutUrl && (
              <Button onClick={navigateToCheckout} className="w-full" variant="tertiary" size="sm">
                Afrekenen
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const CartOpener = () => {
  const { set } = useCartStore();
  const { lines } = useCart();
  return (
    <>
      {/* Floating Button for the cart*/}
      <button
        onClick={() => set({ isOpen: true })}
        className="fixed bottom-6 z-50 right-6 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        style={{
          background: '#217946',
          color: '#fff',
        }}
      >
        <ShoppingCart />
        <span className="font-medium">Winkelwagen</span>
        {lines?.length ||
          (0 > 0 && (
            <span className="ml-2 px-2 py-1 text-xs rounded-full" style={{ background: '#F56900', color: '#fff' }}>
              {lines?.length}
            </span>
          ))}
      </button>
    </>
  );
};
