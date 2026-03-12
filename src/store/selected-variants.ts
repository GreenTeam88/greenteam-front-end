import { create } from 'zustand';

type SelectedVariants = {
  size: string | null;
  color: string | null;
  sizeInMeterSquare: string;
  selectedVariantId: string | null;
  set: SetSelectedVariants;
  linearLength: number;
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
export const defaultVariantConfig = {
  color: null,
  size: null,
  sizeInMeterSquare: '1',
  selectedVariantId: '',
  linearLength: 0,
  calculatedPrice: null,
} as const;
export const useSelectedVariants = create<SelectedVariants>((set) => ({
  set,
  ...defaultVariantConfig,
}));
