'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';
import Image from 'next/image';

import { useModalsStore } from '@/store/modals';

export const StairsModal = () => {
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
          <h3 className="text-5xl "> Trapgeschikt</h3>
          <br />
          <br />
          <br />
          <p>Geeft aan of het tapijt geschikt is voor op de trap.</p>
          <br />
          <h3 className="font-semibold text-3xl">Wonen</h3>
          <br />
          <Image width={211.99} height={100} alt="house image" src="/modals/trapgeschikt-wonen.png" />
          <br />
          <p>Het tapijt is geschikt voor de trap in huis,</p>
          <br />
          <h3 className="font-semibold text-3xl">Wonen en werken</h3>
          <br />
          <Image
            alt="normaal-woongebruik image"
            width={211}
            height={97}
            src={'/modals/trapgeschikt-wonen-en-werken.png'}
          />
          <br />
          <p>
            Het tapijt is geschikt voor de trap in huis <b>én in bedrijfsruimtes.</b>
          </p>
          <br />
          <h3 className="font-semibold text-3xl">Tapijt op de trap</h3>
          <br />
          <p>
            Een tapijt dat op de trap komt te liggen heeft het zwaarder te verduren, omdat het tapijt buigt bij de
            randen. Daarom zijn niet alle tapijten geschikt voor op de trap.
          </p>{' '}
        </div>
        <div style={{ background: 'rgba(109, 39, 106, 0.2)' }} className="py-7 rounded-2xl gap-5 flex flex-col  px-5">
          <h3 className="font-semibold text-lg">Advies</h3>
          <p>
            Leg voor u het tapijt op de trap legt éérst een goede, rubberen ondervloer. We adviseren om de Black Pearl
            (5 mm) op de trap te leggen. <br />
            Dit is een ondervloer van sponge rubber die ervoor zorgt dat er minder spanning op het tapijt komt te staan.
            Daarmee zorgt deze voor een langere levensduur van het tapijt. Ook zorgt de ondervloer voor meer loopgemak.
          </p>
        </div>
      </div>
    </Modal>
  );
};
