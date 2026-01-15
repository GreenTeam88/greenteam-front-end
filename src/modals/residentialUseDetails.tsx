'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';
import Image from 'next/image';

import { useModalsStore } from '@/store/modals';

export const ResidentialUseModal = () => {
  const { set, 'residential-use': residentialUseModal } = useModalsStore();
  return (
    <Modal open={residentialUseModal} onClose={() => set({ sizeDetailsModal: false })}>
      <div className="w-[800px] max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ sizeDetailsModal: false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5 flex-col py-8">
          <h3 className="text-xl font-bold "> Woongebruik</h3>
          <br />
          <p>
            De classificatie ´´woongebruik´´ geeft aan hoe intensief een tapijt in huis kan worden belopen. Een tapijt
            kan éen van de volgende classificaties hebben:
          </p>
          <br />
          <div className="flex flex-col">
            <Image width={211.99} height={100} alt="house image" src="/modals/licht-woongebruik.jpg" />
          </div>
          <h3 className="text-xl font-bold ">Bijvoorbeeld</h3>
          <ul>
            <li>Slaapkamer</li>
            <li>Logeerkamer</li>
          </ul>
          <br />
          <h3>Normaal woongebruik</h3>
          <Image alt="normaal-woongebruik image" width={211} height={97} src={'/modals/normaal-woongebruik.jpg'} />
          <p>
            Tapijt met de classificatie normaal woongebruik is ook geschikt voor een normaal belopen kamer (van een
            eenpersoon- of tweepersoonshuishouden).
          </p>
          <h3>Bijvoorbeeld</h3>
          <ul>
            <li>Woonkamer</li>
            <li>Eetkamer</li>
            <li>Kinderkamer</li>
            <li>Hobbykamer</li>
          </ul>
          <Image
            width={212}
            height={99}
            alt="normaal-tot-zwaar-woongebruik"
            src={'/modals/normaal-tot-zwaar-woongebruik.jpg'}
          />
          <h3>Normaal tot zwaar woongebruik</h3>
          <Image
            width={212}
            height={99}
            alt="normaal-tot-zwaar-woongebruik"
            src={'/modals/normaal-tot-zwaar-woongebruik-22plus_1.jpg'}
          />
          <p>
            Tapijt met de classificatie normaal tot zwaar woongebruik is ook geschikt voor een normaal belopen kamer
            (van gezinnen met kinderen en huisdieren).
          </p>
          <h3>Bijvoorbeeld</h3>
          <ul>
            <li>Woonkamer</li>
            <li>Eetkamer</li>
            <li>Kinderkamer</li>
            <li>Hobbykamer</li>
          </ul>
          <Image width={212} height={99} alt="normaal-tot-zwaar-woongebruik" src={'/modals/zwaar-wonen-23_1_1.jpg'} />
          <p>
            Tapijt met de classificatie zwaar woongebruik is ook geschikt voor de intensief belopen ruimtes in huis.
          </p>
          <h3>Bijvoorbeeld</h3>
          <li>Woonkamer</li>
          <li>Eetkamer</li>
          <li>Werkkamer</li>
          <li>Speelkamer</li>
          <li>Hal en overloop</li>
        </div>
        <div style={{ background: 'rgba(109, 39, 106, 0.2)' }} className="py-4 px-3 gap-5 flex flex-col ">
          <h3>Advies</h3>
          <p>
            Omdat tapijten met een hogere classificatie vaak een langere levensduur hebben, worden deze vaak in het hele
            huis gelegd, dus ook in de slaapkamers en logeerkamer.
          </p>
          <p>
            Het is mogelijk om een vloer met een hogere classificatie in een kleinere kamer te leggen. Andersom is het
            natuurlijk niet aan te raden. Leg dus geen tapijt met de classificatie ''licht
          </p>
          <p>woongebruik'' in een intensief belopen woonkamer of werkkamer.</p>
        </div>
      </div>
    </Modal>
  );
};
