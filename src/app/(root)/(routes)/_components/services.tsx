import Link from 'next/link';
import React from 'react';

import { ForwardArrow } from '@/components/icons/homePageIcons';
import { H2 } from '@/components/theme/typography';

export interface ServiceInfo {
  title: string;
  description: string;
  thumbnailSrc: string;
  link: string;
}

export const services: ServiceInfo[] = [
  {
    title: 'Parketrenovatie',
    description:
      'Geef uw parketvloer een frisse uitstraling met een professionele renovatie. Herstel slijtage en beschadigingen voor een vloer die weer als nieuw oogt. Laat uw parket vakkundig opknappen en geniet van een duurzame, stijlvolle afwerking.',
    thumbnailSrc: '/home/parketrenovatie.webp',
    link: '/parketrenovatie',
  },
  {
    title: 'Traprenovatie',
    thumbnailSrc: '/home/traprenovatie.webp',
    description:
      'Ga stapsgewijs te werk voor een perfect resultaat en een trap die weer als nieuw is. Elke trede wordt zorgvuldig gerenoveerd voor een duurzame en stijlvolle afwerking. Zo krijgt uw trap de aandacht die het verdient en gaat hij jarenlang mee.',
    link: '/traprenovatie',
  },
  {
    title: 'Vloeren leggen',
    thumbnailSrc: '/home/vloerenleggen.webp',
    description:
      'Ga stapsgewijs te werk voor een perfect resultaat en een trap die weer als nieuw is. Elke trede wordt zorgvuldig gerenoveerd voor een duurzame en stijlvolle afwerking. Zo krijgt uw trap de aandacht die het verdient en gaat hij jarenlang mee.',
    link: '/vloeren-leggen',
  },
  {
    title: 'Vloerverwarming',
    thumbnailSrc: '/home/overigeDiensten.webp',
    description:
      'Breng uw woning naar een hoger comfortniveau met professionele vloerverwarming. Ongelijkmatige warmte en koude plekken worden verholpen voor een aangename en constante temperatuur in huis. Geniet van een energiezuinige en stijlvolle oplossing die zorgt voor optimaal wooncomfort, jarenlang.',
    link: '/overig/vloerverwarming',
  },
  {
    title: 'Tegelen',
    thumbnailSrc: '/home/telegen.webp',
    description:
      'Voor tegelwerk bieden wij maatwerkoplossingen van hoge kwaliteit. Van het betegelen van badkamers en keukens tot het leggen van hoogwaardige vloertegels, alles wordt vakkundig uitgevoerd. Kies voor een strakke en stijlvolle afwerking die perfect aansluit bij uw interieur.',
    link: '/overig/tegelen',
  },
];

export const ServiceCard: React.FC<ServiceInfo> = ({ description, thumbnailSrc, title, link }) => {
  return (
    <div className="flex max-w-[400px] flex-col pb-[22px] border-opacity-10 bg-white border-black10 border-2  lg:min-w-[387px] gap-[33px] ">
      <img src={thumbnailSrc} className="w-full h-[176px] " />
      <div className="flex flex-col gap-[11px] px-7 ">
        <h5 className="text-xl font-bold ">{title}</h5>
        <p>{description}</p>
      </div>
      <Link
        href={link}
        className="text-[13px] flex items-center gap-2 cursor-pointer px-6 group hover:text-secondaryDefault text-primaryDefault hover: font-bold"
      >
        Meer weten
        <ForwardArrow />
      </Link>
    </div>
  );
};

const AllServices = () => {
  return (
    <div className="flex flex-wrap  items-center  justify-center gap-[23px] lg:w-[1307px] max-w-full">
      {services.map((serviceInfo) => (
        <ServiceCard key={serviceInfo.title} {...serviceInfo} />
      ))}
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10 lg:px-0 lg:py-28">
      <div className="flex flex-col items-center gap-[20px] lg:gap-[55px]">
        <H2 className="text-primaryDefault">Onze diensten</H2>
        <AllServices />
      </div>
    </div>
  );
};
