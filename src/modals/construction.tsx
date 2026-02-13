'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';

import { useModalsStore } from '@/store/modals';

export const ConstructionModal = () => {
  const { set, construction } = useModalsStore();
  return (
    <Modal style={{ backgroundColor: 'transparent' }} open={construction} onClose={() => set({ construction: false })}>
      <div className="w-full lg:w-[1200px] p-10 max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ construction: false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <h3 className="text-5xl "> Constructie</h3>
        <br />
        <br />
        <p>Geeft de constructievan de pool aan:</p>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Gesneden pool</h3>
          <p>
            Bij tapijten met een gesneden pool zijn de uiteinden afgesneden. Tapijten met een gesneden pool voelen vaak
            iets zachter aan dan tapijten met een lussenpool.
            <br />
            Voordelen van een gesneden pool:
            <br />
          </p>
          <ul className="list list-inside list-disc">
            <li>Zachte en comfortabele uitstraling</li>
            <li>Luxe look en elegante afwerking</li>
            <li>Warmer en voller gevoel onder de voeten</li>
            <li>Geschikt voor diverse interieurstijlen</li>
          </ul>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Lussenpool</h3>
          <p>
            Bij tapijten met een lussenpool blijven de uiteinden ongesneden, waardoor er lussen ontstaan. Tapijten met
            een lussenpool voelen doorgaans minder zacht aan dan tapijten met een lussenpool, maar hebben vaak een iets
            langere levensduur.
            <br />
            Dit zijn de voordelen van de lussenpool:
            <br />
          </p>
          <ul className="list list-inside list-disc">
            <li>Iets beter bestand tegen slijtage</li>
            <li>Gemakkelijk schoon te maken</li>
            <li>Worden minder snel platgelopen, dankzij de lussenstructuur</li>
            <li>Hebben een hele natuurlijke uitstraling</li>
          </ul>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Constructies combineren</h3>
          <p>
            Verschillende poolconstructies kunnen ook met elkaar gecombineerd worden. Zo is er vloerbedekking waarbij
            een gesneden pool en lussenpool met elkaar worden gecombineerd.
          </p>
        </div>
      </div>
    </Modal>
  );
};
