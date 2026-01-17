'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';

import { useModalsStore } from '@/store/modals';

export const ComfortClassModal = () => {
  const { set, 'comfort-class': residentialUseModal } = useModalsStore();
  return (
    <Modal
      style={{ backgroundColor: 'transparent' }}
      open={residentialUseModal}
      onClose={() => set({ 'comfort-class': false })}
    >
      <div className="w-[1200px] p-10 max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ 'comfort-class': false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Comfortklasse</h3>
          <p>
            De comfortklasse laat zien hoe comfortabel een tapijt loopt.
            <br />
            De comfortklasse wordt weergegeven door middel van kroontjes op een schaal van 1 tot 5.
            <br />
            Tapijten met een hogere comfortklasse bieden meer loopcomfort en luxe. Tapijten met een lagere comfortklasse
            bieden minder comfort en luxe, maar zijn door de lagere pool vaak gemakkelijker schoon te maken.
          </p>
        </div>
        <div style={{ background: 'rgba(109, 39, 106, 0.2)' }} className="py-7 rounded-2xl gap-5 flex flex-col  px-5">
          <h3 className="font-semibold text-lg">Advies:</h3>
          <p>
            Het comfort van een tapijt is te verhogen door een verende, rubberen ondervloer te gebruiken.
            <br />
            Voor het meeste loopgemak raden we Black Pearl 5 mm en Black Diamond 6 mm aan. Deze ondervloeren verlengen
            tevens de levensduur van de vloerbedekking.
          </p>
        </div>
      </div>
    </Modal>
  );
};
