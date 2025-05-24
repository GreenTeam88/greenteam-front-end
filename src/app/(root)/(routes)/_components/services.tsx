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
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/home/parketrenovatie.webp',
    link: '/parketrenovatie',
  },
  {
    title: 'Traprenovatie',
    thumbnailSrc: '/home/traprenovatie.webp',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    link: '/traprenovatie',
  },
  {
    title: 'Vloerenleggen',
    thumbnailSrc: '/home/vloerenleggen.webp',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    link: '/vloeren-leggen',
  },
  {
    title: 'Stofferen',
    thumbnailSrc: '/home/grayStair.webp',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    link: '/stofferen',
  },
  {
    title: 'Overige diensten',
    thumbnailSrc: '/home/overigeDiensten.webp',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    link: '/overig',
  },
];

export const ServiceCard: React.FC<ServiceInfo> = ({ description, thumbnailSrc, title, link }) => {
  return (
    <div className="flex max-w-[400px] flex-col pb-[22px] border-opacity-10 bg-white border-black10 border-2  lg:min-w-[387px] gap-[33px] ">
      <img src={thumbnailSrc} className="w-full h-[176px] " />
      <div className="flex flex-col gap-[11px] px-7 ">
        <h5 className="font-bold text-xl ">{title}</h5>
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
    <div className="flex flex-col px-5 lg:px-0 items-center justify-center py-10 lg:py-28">
      <div className="flex flex-col items-center gap-[20px] lg:gap-[55px]">
        <H2 className="text-primaryDefault">Onze diensten</H2>
        <AllServices />
      </div>
    </div>
  );
};
