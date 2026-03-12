'use client';

import { useCart } from '@shopify/hydrogen-react';
import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import { SecondaryBtn } from '../theme/buttons';

export const CartUI = () => {
  const { lines, cost, checkoutUrl, linesRemove } = useCart();
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
        <div className="fixed top-0 right-0 h-full w-80 bg-white border-l border-gray-200 shadow-xl p-6 flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold tracking-wide">Jouw winkelwagen</h2>
            <button onClick={() => set({ isOpen: false })} className="text-gray-500 hover:text-red-500 transition">
              <i className="bi bi-x-lg text-lg"></i>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto pr-1">
            {lines?.length === 0 ? (
              <p className="text-gray-500 text-sm">Jouw winkelwagen is leeg</p>
            ) : (
              <ul className="space-y-4">
                {lines?.map((line) => (
                  <li
                    key={line?.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="text-sm space-y-1">
                      <p className="font-medium text-gray-800">{line?.merchandise?.product?.title}</p>

                      <p className="font-semibold text-gray-800">
                        {line?.cost?.totalAmount?.amount} {line?.cost?.totalAmount?.currencyCode}
                      </p>
                    </div>

                    <button
                      onClick={() => line?.id && linesRemove([line.id])}
                      className="text-red-500 hover:text-red-600 text-lg"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex pt-2 px-2">
            <ul className="list-disc ">
              <li>
                Subtotal : {cost?.totalAmount?.amount} {cost?.totalAmount?.currencyCode}
              </li>
              <li>Verzending : Gratis</li>

              <li>
                TOTAL : {cost?.totalAmount?.amount} {cost?.totalAmount?.currencyCode}
              </li>
            </ul>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 border-t pt-4">
            {checkoutUrl && (
              <Button onClick={navigateToCheckout} className="w-full" variant="tertiary" size="sm">
                Afrekenen {cost?.totalAmount?.amount} {cost?.totalAmount?.currencyCode}
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
      <SecondaryBtn
        onClick={() => set({ isOpen: true })}
        className="fixed bottom-6 z-50 right-6 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        // style={{
        //   background: '#217946',
        //   color: '#fff',
        // }}
      >
        <ShoppingCart />
        <span className="font-medium">Winkelwagen</span>
        {lines?.length ||
          (0 > 0 && (
            <span className="ml-2 px-2 py-1 text-xs rounded-full" style={{ background: '#F56900', color: '#fff' }}>
              {lines?.length}
            </span>
          ))}
      </SecondaryBtn>
    </>
  );
};
