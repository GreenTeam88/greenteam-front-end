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
          <h3 className="text-5xl "> Projectgebruik</h3>
          <br />
          <br />
          <br />
          <p>
            Tapijt met de classificatie ''projectgebruik'' is ook geschikt voor in bedrijfsruimtes. De vloerbedekking
            kan één van de volgende classificaties hebben:
          </p>
          <br />
          <h3 className="font-semibold text-3xl">Licht projectgebruik</h3>
          <br />
          <Image width={211.99} height={100} alt="house image" src="/modals/licht-project-gebruik-31_1.jpg" />
          <br />
          <p>Een tapijt met de classificatie licht projectgebruik is geschikt voor kleinere bedrijfsruimtes.</p>
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Hotelkamers</li>
            <li>Kleine kantoren met één of twee medewerkers</li>
          </ul>
          <br />
          <h3 className="font-semibold text-3xl">Normaal projectgebruik</h3>
          <br />
          <Image
            alt="normaal-woongebruik image"
            width={211}
            height={97}
            src={'/modals/normaal-project-gebruik-32_1.jpg'}
          />
          <br />
          <p>
            Tapijt met deze classificatie is geschikt voor <b>normaal belopen bedrijfsruimtes</b> met een{' '}
            <b>gemiddelde grootte.</b>
          </p>
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <br />
          <ul className="list list-inside list-disc">
            <li>Kantorenv</li>
            <li>Winkelsv</li>
            <li>Restaurantsv</li>
            <li>Studieruimtesv</li>
            <li>Kamers in zorginstellingenv</li>
          </ul>
          <br />
          <h3 className="font-semibold text-3xl">Zwaar projectgebruik</h3>
          <br />
          <Image
            width={212}
            height={99}
            alt="normaal-tot-zwaar-woongebruik"
            src={'/modals/zwaar-project-gebruik-33_1.jpg'}
          />
          <br />
          <p>
            Vloerbedekking met de classificatie zwaar projectgebruik is geschikt voor{' '}
            <b>grotere, intensief belopen bedrijfsruimtes</b>
          </p>{' '}
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <br />
          <ul>
            <li>Kantoren</li>
            <li>Winkels</li>
            <li>Restaurants</li>
            <li>Scholen</li>
            <li>Kinderdagverblijven</li>
            <li>Bibliotheken</li>
            <li>Zorginstellingen</li>
          </ul>
          <br />
          <h3 className="font-semibold text-3xl">Intensief projectgebruik</h3>
          <br />
          <Image
            width={212}
            height={99}
            alt="normaal-tot-zwaar-woongebruik"
            src={'/modals/Intensief_projectgebruik_1.jpg'}
          />
          <br />
          <p>
            Vloerbedekking met de classificatie intensief projectgebruik is geschikt voor{' '}
            <b>grotere, zeer intensief belopen bedrijfsruimtes.</b>
          </p>
          {/* <Image width={212} height={99} alt="normaal-tot-zwaar-woongebruik" src={'/modals/zwaar-wonen-23_1_1.jpg'} />
          <p>
            Tapijt met de classificatie zwaar woongebruik is ook geschikt voor de intensief belopen ruimtes in huis.
          </p> */}
          <br />
          <h3 className="text-lg font-bold ">Bijvoorbeeld</h3>
          <ul className="list-disc list-inside">
            <li>Kantoren</li>
            <li>Winkels</li>
            <li>Restaurants</li>
            <li>Scholen</li>
            <li>Kinderdagverblijven</li>
            <li>Bibliotheken</li>
            <li>Zorginstellingen</li>
          </ul>
        </div>
        <div style={{ background: 'rgba(109, 39, 106, 0.2)' }} className="py-7 rounded-2xl gap-5 flex flex-col  px-5">
          <h3 className="font-semibold text-lg">Advies</h3>
          <p>
            Een vloer met een hogere classificatie kan natuurlijk ook in een kleinere bedrijfsruimte worden gelegd.
            Andersom kan een vloer met een lagere classificatie - bijvoorbeeld licht projectgebruik - kan niet in een
            intensief belopen bedrijfsruimte worden gelegd.
          </p>
        </div>
      </div>
    </Modal>
  );
};
