// config for the sidebar

import { colorsHexCodesMap } from '@/config/shop-config';

export type ParamData = { name: string; title: string; params: string[] };

export const getSidebarParams = ({ marks }: { marks: string[] }): ParamData[] => {
  return [
    {
      name: 'mark',
      title: 'Merk',
      params: [
        'Ambiant',
        'Best Wool Carpets',
        'Belakos',
        'Bonaparte',
        'Desso',
        'Forbo',
        'Gelasta',
        'Hamat',
        'Interfloor',
        'Lano',
        'Parade',
        'Sfeervol Wonen',
        'Smartstrand',
        'Tretford',
      ],
    },
    {
      name: 'colors',
      title: 'Kleur',
      params: Object.keys(colorsHexCodesMap),
    },
  ];
};
