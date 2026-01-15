import { create } from 'zustand';

type ModalsStore = {
  sizeDetailsModal: boolean;
  set: SetModalsStore;
  'residential-use': boolean;
};

type SetModalsStore = {
  (
    partial: ModalsStore | Partial<ModalsStore> | ((state: ModalsStore) => ModalsStore | Partial<ModalsStore>),
    replace?: false
  ): void;
  (state: ModalsStore | ((state: ModalsStore) => ModalsStore), replace: true): void;
};

export const useModalsStore = create<ModalsStore>((set) => ({
  set,
  sizeDetailsModal: false,
  'residential-use': false,
}));
