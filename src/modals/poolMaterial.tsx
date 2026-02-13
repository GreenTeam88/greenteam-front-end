'use client';

import { Modal } from '@mui/material';
import { X } from 'lucide-react';

import { useModalsStore } from '@/store/modals';

export const PoolMaterial = () => {
  const { set, 'pool-material': poolMaterial } = useModalsStore();
  return (
    <Modal
      style={{ backgroundColor: 'transparent' }}
      open={poolMaterial}
      onClose={() => set({ 'pool-material': false })}
    >
      <div className="w-full lg:w-[1200px] p-10 max-h-[90vh] overflow-auto rounded-lg bg-white absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[90vw] ">
        <div className="w-full px-4  py-4 flex border-b border-b-gray-200 items-center justify-end">
          <div onClick={() => set({ 'pool-material': false })} className="max-w-[100px] relative  max-h-[100px]">
            <X />
          </div>
        </div>
        <div className="flex px-5  flex-col py-8">
          <h3 className="text-5xl "> Poolmateriaal</h3>
          <br />
          <br />
          <p>
            De keuze voor een type garen heeft een grote invloed op bijvoorbeeld de levensduur, de veerkracht, het
            comfort, de uitstraling en stijl en de prijs.
          </p>
          <br />
          <p>Hieronder staan de verschillende garens met daarbij de belangrijkste kenmerken:</p>
          <h3 className="text-lg font-bold ">Polyamide</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Sterkste en meest veerkrachtige synthetische garens</li>
            <li>Polyamide heeft een hele lange levensduur</li>
            <li>Garens springen terug in oorspronkelijke staat nadat ze belopen zijn</li>
            <li>Voelt zacht aan</li>
            <li>Vuil en vlekbestendig</li>
            <li>De meest gebruikte garens</li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Polyester</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Sterke en veerkrachtige synthetische garens</li>
            <li>De garens hebben vaak een levendige, elegante glans</li>
            <li>Voelt heel zacht aan</li>
            <li>U krijgt ‘’meer volume voor minder geld’’</li>
            <li>Goede vlekbestendigheid dankzij laag absorptievermogen</li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Triexta</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Garens van Lano (Smartstrand)</li>
            <li>Triextra-vezels zijn gemaakt van polyester- en maisgarens</li>
            <li>Sterke en veerkrachtige synthetische garens</li>
            <li>Voelt heel zacht aan</li>
            <li>Onderhoudsvriendelijk dankzij Nanoloc-technologie</li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Polypropyleen</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Goedkoopste synthetische garens</li>
            <li>Bestand tegen vlekken</li>
            <li>Schoon te maken met hardnekkige schoonmaakmiddelen</li>
            <li>Waterbestendig</li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Wol</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Deze milieu- en diervriendelijke vezels worden al eeuwen gebruikt</li>
            <li>Wol heeft een hele lange levensduur</li>
            <li>De natuurlijke coating biedt weerstand tegen vuil en vlekken</li>
            <li>Voelt warm en zacht aan</li>
            <li>Hoog ontstekingspunt en daarom brandveilig</li>
            <li>Zorgt voor een betere luchtkwaliteit</li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Geitenhaar</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Gemaakt van Kasjmier geitenhaar</li>
            <li>Milieu- en diervriendelijke garens uit hernieuwbare bron</li>
            <li>Sterk en veerkrachtig</li>
            <li>Goede weerstand tegen vuil en vlekken</li>
            <li>Zorgt voor een betere luchtkwaliteit</li>
          </ul>
          <br />
          <br />

          <h3 className="text-lg font-bold ">Sisal</h3>
          <br />
          <ul className="list-disc list list-inside">
            <li>Tropische vezel uit Brazilië en Mexico</li>
            <li>Milieuvriendelijke garens uit hernieuwbare bron</li>
            <li>Hele natuurlijke uitstraling</li>
            <li>Hardere garens, die slijtvast zijn</li>
          </ul>
          <br />
          <br />
        </div>
      </div>
    </Modal>
  );
};
