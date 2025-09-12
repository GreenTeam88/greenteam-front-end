'use client';

import { useCart } from '@shopify/hydrogen-react';

import { useCartStore } from '@/store/cart';

export const CartUI = () => {
  const { lines, checkoutUrl, linesRemove } = useCart();
  const { isOpen, set } = useCartStore();
  console.log('lines ', lines);
  if (!isOpen) return null;
  return (
    <div className="fixed z-50  top-96  right-0">
      <button
        onClick={() => set({ isOpen: true })}
        className="p-2 rounded-2xl"
        style={{ background: '#217946', color: '#fff' }}
      >
        🛒 Cart ({lines?.length})
      </button>
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-80 h-full shadow-lg p-4"
          style={{ background: '#F9FBFA', color: '#212529' }}
        >
          <h2 className="text-lg font-bold mb-4">Your Cart</h2>
          <div className="absolute top-5 right-5" onClick={() => set({ isOpen: false })}>
            <i className="bi hover:text-red-500 hover:text-2xl cursor-pointer bi-x-lg"></i>
          </div>

          {lines?.length === 0 ? (
            <p>Your cart is empty.</p>
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
              <a
                href={checkoutUrl}
                target="_blank"
                className="block text-center mt-3 py-2 rounded-2xl"
                style={{ background: '#217946', color: '#fff' }}
              >
                Checkout
              </a>
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
      {/* Floating Button */}
      <button
        onClick={() => set({ isOpen: true })}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        style={{
          background: '#217946', // primaryDefault
          color: '#fff',
        }}
      >
        <span className="text-lg">🛒</span>
        <span className="font-medium">Cart</span>
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
