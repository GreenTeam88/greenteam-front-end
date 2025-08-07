import { create } from 'zustand';

type SelectedVariants = {
  size: string | null;
  color: string | null;
  selectedVariantId: string | null;
  set: SetSelectedVariants;
  calculatedPrice: string | null;
};

type SetSelectedVariants = {
  (
    partial:
      | SelectedVariants
      | Partial<SelectedVariants>
      | ((state: SelectedVariants) => SelectedVariants | Partial<SelectedVariants>),
    replace?: false
  ): void;
  (state: SelectedVariants | ((state: SelectedVariants) => SelectedVariants), replace: true): void;
};

export const useSelectedVariants = create<SelectedVariants>((set) => ({
  color: null,
  size: null,
  selectedVariantId: '',
  set,
  calculatedPrice: null,
}));
