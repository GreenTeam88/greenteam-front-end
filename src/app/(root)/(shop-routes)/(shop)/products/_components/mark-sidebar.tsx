'use client';

import { Button } from '@mui/material';
import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { CloseIcon } from '@/components/icons/close';
import { getSidebarParams, ParamData } from '../[category]/config/main';

const ParamUI: React.FC<ParamData & { category: string }> = ({ params, title, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const selectedParams: string[] = JSON.parse(searchParams.get(title) || '[]');
  const router = useRouter();
  const handleToggleParam = ({ param }: { param: string }) => {
    let newParams: string[];

    if (selectedParams.includes(param)) {
      // Remove param if already selected
      newParams = selectedParams.filter((p) => p !== param);
    } else {
      // Add param if not selected
      newParams = [...selectedParams, param];
    }

    // Create new URLSearchParams object
    const updatedSearchParams = new URLSearchParams(searchParams.toString());

    if (newParams.length > 0) {
      updatedSearchParams.set(title, JSON.stringify(newParams));
    } else {
      // Remove the param key if no values left
      updatedSearchParams.delete(title);
    }

    // Push new URL
    router.push(`${category}?${updatedSearchParams.toString()}`);
  };
  return (
    <div className="flex flex-col gap-2">
      <div onClick={() => setIsOpen((val) => !val)} className="flex gap-1 items-center">
        <div className="bg-black w-[11px] h-[2px]"></div>

        <h3 className="font-semibold ">{title}</h3>
      </div>
      <div className="flex flex-col gap-1">
        {params.map((param) => (
          <div onClick={() => handleToggleParam({ param })} className="flex gap-1 items-center cursor-pointer">
            <div className="w-[10px] h-[10px] laptop:w-[14px] laptop:h-[14px] rounded-full border-[0.4px] border-black p-[2px] ">
              {selectedParams.includes(param) && <div className="bg-[#195B35]  rounded-full w-full h-full"></div>}
            </div>

            <p className="text-[9px] capitalize"> {param}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MarkSidebar = ({ marks, category }: { marks: string[]; category: string }) => {
  const allParams = getSidebarParams({ marks });
  const [markSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="lg:flex  flex-col gap-3 hidden  bg-[#F3F7F5] py-4 pl-4 h-fit rounded-[13px] pr-10">
        {allParams.map((param) => (
          <ParamUI title={param.title} params={param.params} category={category} />
        ))}
      </div>
      <div className="lg:hidden absolute top-[106px] right-0 flex flex-col px-1">
        {markSidebarOpen ? (
          <div className="w-full flex justify-end">
            {' '}
            <i
              onClick={() => setSidebarOpen(false)}
              className="bi absolute top-3  right-3 text-3xl font-semibold text-red-500 bi-x-lg"
            ></i>
          </div>
        ) : (
          <ArrowBigLeftDash size={50} onClick={() => setSidebarOpen(true)} />
        )}
        {markSidebarOpen && (
          <div>
            <div className="flex bg-bgColor px-3 py-3 flex-col gap-1">
              {allParams.map((param) => (
                <ParamUI title={param.title} params={param.params} category={category} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
