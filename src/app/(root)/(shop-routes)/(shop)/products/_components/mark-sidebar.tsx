// config for the sidebar

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { appConfig } from '@/config';
import { colorsHexCodesMap } from '@/config/shop-config';

type ParamData = { title: string; params: string[] };
const getSidebarParams = ({ marks }: { marks: string[] }): ParamData[] => {
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

const ParamUI: React.FC<ParamData> = ({ params, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const selectedParams: string[] = JSON.parse(searchParams.get(title) || '[]');
  return (
    <div className="flex flex-col">
      <h3>{title}</h3>
      <div className="flex flex-col gap-1">
        {params.map((param) => (
          <div className="flex gap-1">
            <div className="w-[14px] h-[14px] rounded-full border-[0.4px] border-black p-1 ">
              {selectedParams.includes(param) && <div className="bg-[#195B35]  w-full h-full"></div>}
            </div>

            <h3>{param}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MarkSidebar = ({ marks }: { marks: string[] }) => {
  const allParams = getSidebarParams({ marks });
  return (
    <div className="flex ">
      {allParams.map((param) => (
        <ParamUI title={param.title} params={param.params} />
      ))}
    </div>
  );
};
