'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';
import Image from 'next/image';

import { useModalsStore } from '@/store/modals';

export const ResidentialUseModal = () => {
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
          <h3 className="text-5xl "> Woongebruik</h3>
          <br />
          <br />
          <br />
          <p>
            De classificatie ´´woongebruik´´ geeft aan hoe intensief een tapijt in huis kan worden belopen. Een tapijt
            kan éen van de volgende classificaties hebben:
          </p>
          <br />
          <h3 className="font-semibold text-3xl">Licht woongebruik</h3>
          <br />
          <Image width={211.99} height={100} alt="house image" src="/modals/licht-woongebruik.jpg" />
          <br />
          <p>Tapijt dat geschikt is voor licht woongebruik kan in de kleinere kamers in huis worden gelegd.</p>
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Slaapkamer</li>
            <li>Logeerkamer</li>
          </ul>
          <br />
          <h3 className="font-semibold text-3xl">Normaal woongebruik</h3>
          <br />
          <Image alt="normaal-woongebruik image" width={211} height={97} src={'/modals/normaal-woongebruik.jpg'} />
          <br />
          <p>
            Tapijt met de classificatie normaal woongebruik is ook geschikt voor{' '}
            <b>een normaal belopen kamer (van een eenpersoon- of tweepersoonshuishouden).</b>
          </p>
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <br />
          <ul className="list list-inside list-disc">
            <li>Woonkamer</li>
            <li>Eetkamer</li>
            <li>Kinderkamer</li>
            <li>Hobbykamer</li>
          </ul>
          <br />
          <h3 className="font-semibold text-3xl">Normaal tot zwaar woongebruik</h3>
          <br />
          <Image
            width={212}
            height={99}
            alt="normaal-tot-zwaar-woongebruik"
            src={'/modals/normaal-tot-zwaar-woongebruik-22plus_1.jpg'}
          />
          <br />
          <p>
            Tapijt met de classificatie normaal tot zwaar woongebruik is ook geschikt voor een normaal belopen kamer
            (van gezinnen met kinderen en huisdieren).
          </p>{' '}
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <br />
          <ul>
            <li>Woonkamer</li>
            <li>Eetkamer</li>
            <li>Kinderkamer</li>
            <li>Hobbykamer</li>
          </ul>
          <br />
          <h3 className="font-semibold text-3xl">Zwaar woongebruik</h3>
          <br />
          <Image width={212} height={99} alt="normaal-tot-zwaar-woongebruik" src={'/modals/zwaar-wonen-23_1_1.jpg'} />
          <br />
          <p>
            Tapijt met de classificatie zwaar woongebruik is ook geschikt voor de{' '}
            <b> intensief belopen ruimtes in huis.</b>
          </p>
          {/* <Image width={212} height={99} alt="normaal-tot-zwaar-woongebruik" src={'/modals/zwaar-wonen-23_1_1.jpg'} />
          <p>
            Tapijt met de classificatie zwaar woongebruik is ook geschikt voor de intensief belopen ruimtes in huis.
          </p> */}
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <ul className="list-disc list-inside">
            <li>Woonkamer</li>
            <li>Eetkamer</li>
            <li>Werkkamer</li>
            <li>Speelkamer</li>
            <li>Hal en overloop</li>
          </ul>
        </div>
        <div style={{ background: 'rgba(109, 39, 106, 0.2)' }} className="py-7 rounded-2xl gap-5 flex flex-col  px-5">
          <h3 className="font-semibold text-lg">Advies</h3>
          <p>
            Omdat tapijten met een hogere classificatie vaak een langere levensduur hebben, worden deze vaak in het hele
            huis gelegd, dus ook in de slaapkamers en logeerkamer.
          </p>
          <p>
            <b>
              {' '}
              Het is mogelijk om een vloer met een hogere classificatie in een kleinere kamer te leggen. Andersom is het
              natuurlijk niet aan te raden.
            </b>{' '}
            Leg dus geen tapijt met de classificatie &lsquo;&lsquo;licht woongebruik&lsquo;&lsquo; in een intensief
            belopen woonkamer of werkkamer.
          </p>
        </div>
      </div>
    </Modal>
  );
};
