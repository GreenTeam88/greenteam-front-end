import React from 'react';

import { H2 } from '@/components/theme/typography';

interface ServiceInfo {
  title: string;
  description: string;
  thumbnailSrc: string;
}

const services: ServiceInfo[] = [
  {
    title: 'Parketrenovatie',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/home/parketrenovatie.png',
  },
  {
    title: 'Traprenovatie',
    thumbnailSrc: '/home/traprenovatie.png',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
  },
  {
    title: 'Vloerenleggen',
    thumbnailSrc: '/home/vloerenleggen.png',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
  },
  {
    title: 'Stofferen',
    thumbnailSrc: '/home/grayStair.png',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
  },
  {
    title: 'Overige diensten',
    thumbnailSrc: '/home/overigeDiensten.png',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
  },
];

export const ServiceCard: React.FC<ServiceInfo> = ({ description, thumbnailSrc, title }) => {
  return (
    <div className="flex flex-col pb-[22px] border-opacity-10 border-black10 border-2 w-[387px] gap-[33px] ">
      <img src={thumbnailSrc} className="w-full h-[176px] " />
      <div className="flex flex-col gap-[11px] px-7 ">
        <h5 className="font-bold text-xl ">{title}</h5>
        <p>{description}</p>
      </div>
      <p className="text-[13px] px-6 text-primaryDefault font-bold">
        Meer weten <img className="mx-2 inline" src="/icons/greenRightArrow.svg" />
      </p>
    </div>
  );
};

const AllServices = () => {
  return (
    <div className="flex flex-wrap  items-center justify-center gap-[23px] w-[1207px] max-w-full">
      {services.map((serviceInfo) => (
        <ServiceCard key={serviceInfo.title} {...serviceInfo} />
      ))}
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-52">
      <div className="flex flex-col items-center gap-[55px]">
        <H2 className="text-primaryDefault">Onze diensten</H2>
        <AllServices />
      </div>
    </div>
  );
};
