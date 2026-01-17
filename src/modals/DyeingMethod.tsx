'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';
import Image from 'next/image';

import { useModalsStore } from '@/store/modals';

export const DyeingMethod = () => {
  const { set, 'dyeing-method': dyeingMethodModal } = useModalsStore();
  return (
    <Modal
      style={{ backgroundColor: 'transparent' }}
      open={dyeingMethodModal}
      onClose={() => set({ 'dyeing-method': false })}
    >
      <div className="w-[1200px] p-10 max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ 'dyeing-method': false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Verfmethode</h3>
          <br />
          <br />
          <p>Geeft aan welke verfmethode gebruikt is om de garens te verven:</p>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <h3 className="text-lg font-bold ">Stukverf</h3>
          <p>
            Bij stukverf worden de garens door een verfbad gehaald. Hierdoor krijgt de vloerbedekking een effen
            kleurlaag.
            <br />
            Omdat een kleurbad eenvoudig aan te maken is, kan er met stukverf snel worden ingespeeld op de laatste
            kleurtrends.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <h3 className="text-lg font-bold ">Garenverf</h3>
          <p>
            Bij garenverf worden de garens los geverfd voordat er een tapijt van wordt gemaakt. Omdat de garens los
            geverfd worden zijn er allerlei patronen in meerdere kleuren te maken.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <h3 className="text-lg font-bold ">Solution dyed</h3>
          <p>
            Solution dyed garens hebben geen kleurlaag, maar zijn door-en-door geverfd. De kleur is namelijk al
            toegevoegd tijdens het produceren van de vezels - en niet daarna pas
            <br />
            Solution dyed garens zijn te vergelijken met een wortel, die van buiten maar ook van binnen oranje is.
            Garens die op een traditionele manier geverfd zijn, zijn te vergelijken met een radijs. De radijs is van
            buiten rood, maar van binnen wit.
            <br />
            Omdat Solution dyed garens door-en-door geverfd zijn blijven de kleuren langer mooi. De garens zijn beter
            bestand tegen UV-licht, zijn vuilafstotend en vlekbestendig én bestand tegen agressieve schoonmaakmiddelen.{' '}
          </p>
        </div>
        <div className="flex gap-10">
          <Image alt="normaal-woongebruik image" width={211} height={97} src={'/modals/solution-dyed-garens.jpg'} />
          <Image alt="normaal-woongebruik image" width={211} height={97} src={'/modals/Garens_met_kleurlaag.jpg'} />
        </div>
        <div className="flex flex-col gap-2 py-4">
          <h3 className="text-lg font-bold ">Printen</h3>
          <p>
            Het design kan ook geprint worden (met een Chromojet printer). De kleuren en patronen worden via deze
            methode tot diep in de vezel doorgedrongen. Dit zorgt ervoor dat de print kleur- en slijtvast is.
            <br />
            <br />
            <p>
              Deze verfmethode wordt vaak toegepast bij vintage tapijten, omdat het gemakkelijk is om mooie,
              gedetailleerde patronen te printen.
            </p>
          </p>
        </div>
      </div>
    </Modal>
  );
};
