import { create } from 'zustand';

type ModalsStore = {
  sizeDetailsModal: boolean;
  set: SetModalsStore;
  'residential-use': boolean;
  casters: boolean;
  'comfort-class': boolean;
  construction: boolean;
  'dyeing-method': boolean;
  'pool-height': boolean;
  'pool-material': boolean;
  'under-floor-heating': boolean;
  stairs: boolean;
  'project-use': boolean;
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
  casters: false,
  'comfort-class': false,
  construction: false,
  'dyeing-method': false,
  'pool-height': false,
  'pool-material': false,
  'under-floor-heating': false,
  stairs: false,
  'project-use': false,
}));
