// config for the sidebar

import { colorsHexCodesMap } from '@/config/shop-config';

export type ParamData = { title: string; params: string[] };

export const getSidebarParams = ({ marks }: { marks: string[] }): ParamData[] => {
  return [
    {
      title: 'Merk',
      params: marks,
    },
    {
      title: 'Kleur',
      params: Object.keys(colorsHexCodesMap),
    },
    {
      title: 'Groef',
      params: [],
    },
    {
      title: 'Model',
      params: [],
    },
    {
      title: 'Slijtlaag dikte',
      params: [],
    },
  ];
};
