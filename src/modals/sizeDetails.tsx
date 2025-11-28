'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';

import { useModalsStore } from '@/store/modals';

export const SizeDetailsModal = () => {
  const { set, sizeDetailsModal } = useModalsStore();
  return (
    <Modal open={sizeDetailsModal} onClose={() => set({ sizeDetailsModal: false })}>
      <div className="w-[800px] max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ sizeDetailsModal: false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5 flex-col py-8">
          <h3 className="text-xl font-bold "> Uitleg rekenhulp</h3>
          <br />
          <p>
            Onze rekenhulp berekend 10.00 tot 15.00 cm extra zodat u wanneer u het product uitgerold heeft in de ruimte
            het netjes langs de kanten op maat kunt snijden
          </p>
          <br />

          <h4 className="text-lg font-semibold">
            Voorbeeld voor producten per doos (bijvoorbeeld PVC en tapijttegels)
          </h4>
          <br />
          <p>
            Uw kamer is 3.90 meter breed en 6.78 meter lang. De rekenhulp berekend dan de vierkante meters.
            <br />
            <br />
            Dus 3.90 x 6.78 = 26.45 m². Daar berekend de rekenhulp 10% snijverlies bij zodat u niet tekort gaat komen
            wanneer u de vloer gaat leggen. 26.45 m² + 10% = 29.10 m².
            <br />
            <br />
            U deelt dit aantal door de pakinhoud van het product dat u zou willen kopen en rond dit af naar boven of
            beneden naar hele pakken. Dit ligt aan de pakinhoud.
            <br />
            <br />
            U rekent met dit hulpmiddel uit hoeveel materiaal u moet bestellen. Bij de berekening wordt rekening
            gehouden met een percentage snijverlies. U heeft namelijk iets meer materiaal nodig dan de precieze afmeting
            van de ruimte.
            <br />
            <br />
            Hoe zorgvuldig wij deze berekening ook voor u hebben gemaakt, u kunt hieraan geen rechten ontlenen.
          </p>
        </div>
      </div>
    </Modal>
  );
};
