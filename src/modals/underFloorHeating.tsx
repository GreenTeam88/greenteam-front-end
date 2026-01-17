'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';
import Image from 'next/image';

import { useModalsStore } from '@/store/modals';

export const UnderFloorHeatingModal = () => {
  const { set, 'under-floor-heating': underFloorHeating } = useModalsStore();
  return (
    <Modal
      style={{ backgroundColor: 'transparent' }}
      open={underFloorHeating}
      onClose={() => set({ 'under-floor-heating': false })}
    >
      <div className="w-[1200px] p-10 max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ 'under-floor-heating': false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Geschikt voor vloerverwarming</h3>
          <br />
          <br />
          <Image width={211.99} height={100} alt="house image" src="/modals/vloerverwarming-pit.jpg" />
          <br />
          <p>
            Geeft aan of het tapijt geschikt is voor gebruik van vloerverwarming - zowel elektrische als watergedragen
            vloerverwarming.
          </p>
        </div>
      </div>
    </Modal>
  );
};
