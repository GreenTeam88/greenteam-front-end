import { create } from 'zustand';

type ProductsPageStatusData = {
  set: SetProductsPageStatusData;
  searchProducts: boolean;
};

type SetProductsPageStatusData = {
  (
    partial:
      | ProductsPageStatusData
      | Partial<ProductsPageStatusData>
      | ((state: ProductsPageStatusData) => ProductsPageStatusData | Partial<ProductsPageStatusData>),
    replace?: false
  ): void;
  (state: ProductsPageStatusData | ((state: ProductsPageStatusData) => ProductsPageStatusData), replace: true): void;
};

export const useProductsPageStatus = create<ProductsPageStatusData>((set) => ({
  searchProducts: false,
  set,
}));
