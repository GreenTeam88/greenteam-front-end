'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';

import { useModalsStore } from '@/store/modals';

export const PoolHeightModal = () => {
  const { set, 'residential-use': residentialUseModal } = useModalsStore();
  return (
    <Modal
      style={{ backgroundColor: 'transparent' }}
      open={residentialUseModal}
      onClose={() => set({ 'residential-use': false })}
    >
      <div className="w-[1200px] p-10 max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ sizeDetailsModal: false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Poolhoogte groep</h3>
          <br />
          <br />
          <p>Geeft aan wat de poolhoogte van het tapijt is in mm.</p>
          <br />
          <p>
            Tapijten hebben verschillende poolhoogtes. We kunnen tapijten indelen op poolhoogte in de volgende
            categorieën:
          </p>
          <h3 className="text-lg font-bold ">Laag: tot 6 mm</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Duurzaam en minder vatbaar voor slijtage</li>
            <li>Het makkelijkste om schoon te maken</li>
            <li>Strakke, moderne uitstraling</li>
            <li>Het beste voor drukbezochte (commerciële) ruimtes</li>
            <li>Het meest geschikt voor zwenkwielen en rolstoelen </li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Gemiddeld: 6 mm tot 12 mm</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Voelt zacht aan</li>
            <li>Gemakkelijk om schoon te maken</li>
            <li>Goede balans tussen comfort en onderhoudsgemak</li>
            <li>Warme en gezellige uitstraling</li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Hoog: hoger dan 12 mm</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Voelt het zachtste aan</li>
            <li>Iets meer moeite om vuilvrij te maken</li>
            <li>De meest luxe en comfortabele poolhoogte</li>
            <li>Hele warme en gezellige uitstraling</li>
            <li>De beste demping van contactgeluiden, zoals loopgeluiden</li>
          </ul>
          <br />
          <br />
        </div>
        <div style={{ background: 'rgba(109, 39, 106, 0.2)' }} className="py-7 rounded-2xl gap-5 flex flex-col  px-5">
          <h3 className="font-semibold text-lg">Opmerking:</h3>
          <p>dit is algemene informatie over de verschillende poolhoogtes.</p>
          <p>
            Kijk altijd naar de specifieke kenmerken van een tapijt om bijvoorbeeld te zien of het tapijt geschikt is
            voor drukbezochte (commerciele) ruimtes en of deze bestand is tegen gebruik van zwenkwielen.
          </p>
        </div>
      </div>
    </Modal>
  );
};
