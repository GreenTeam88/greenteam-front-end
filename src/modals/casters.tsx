'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';
import Image from 'next/image';

import { useModalsStore } from '@/store/modals';

export const CastersModal = () => {
  const { set, casters: castersModal } = useModalsStore();
  return (
    <Modal style={{ backgroundColor: 'transparent' }} open={castersModal} onClose={() => set({ casters: false })}>
      <div className=" w-full lg:w-[1200px] p-3 lg:p-10 max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ casters: false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-3xl lg:text-5xl "> Zwenkwielen</h3>

          <br />
          <br />
          <p>
            Wanneer de zwenkwielen van bureaustoelen over tapijt rijden kan dit zorgen voor snellere slijtage. Te zachte
            vloerbedekking is daarom vaak ongeschikt voor gebruik van zwenkwielen.
          </p>
          <br />
          <p>
            Wilt u gebruikmaken van zwenkwielen, die vooral onder bureaustoelen zitten? Dan is het belangrijk om tapijt
            te kopen dat hiertegen bestand is.
          </p>
          <h3 className="font-semibold text-3xl">Wonen</h3>
          <br />
          <Image width={211.99} height={100} alt="house image" src="/modals/trapgeschikt-zwenkwielen-wonen_4.jpg" />
          <br />
          <p>
            Tapijt dat bestand is tegen gebruik van zwenkwielen (bureaustoelen) in huis. Denk daarbij aan de werkkamer
            in huis.
          </p>
          <br />
          <h3 className="font-semibold text-3xl">Wonen en werken</h3>
          <br />
          <Image
            alt="normaal-woongebruik image"
            width={211}
            height={97}
            src={'/modals/zwenkwielen-wonen-en-werken_3.jpg'}
          />
          <br />
          <p>
            Tapijt dat bestand is tegen gebruik van zwenkwielen (bureaustoelen) <b>in huis én in bedrijfsruimtes,</b>{' '}
            zoals bijvoorbeeld kantoren.{' '}
          </p>
        </div>
      </div>
    </Modal>
  );
};
