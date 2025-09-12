import { create } from 'zustand';

type CartStore = {
  isOpen: boolean;
  set: SetCartStore;
};

type SetCartStore = {
  (
    partial: CartStore | Partial<CartStore> | ((state: CartStore) => CartStore | Partial<CartStore>),
    replace?: false
  ): void;
  (state: CartStore | ((state: CartStore) => CartStore), replace: true): void;
};

export const useCartStore = create<CartStore>((set) => ({
  set,
  isOpen: false,
}));
