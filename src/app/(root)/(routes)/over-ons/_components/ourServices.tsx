import { H2 } from '@/components/theme/typography';
import { ServiceCard, ServiceInfo } from '../../_components/services';

const services: ServiceInfo[] = [
  {
    title: 'Parketrenovatie',
    link: '/parketrenovatie',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/Parketrenovatie.png',
  },
  {
    title: 'Traprenovatie',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/Traprenovatie.png',
    link: '/traprenovatie',
  },
  {
    title: 'Vloeren leggen',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/VloerenLeggen.png',
    link: '/vloeren-leggen',
  },
  {
    title: 'Stofferen',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/Stofferen.png',
    link: '/stofferen',
  },
];

export const OurServicesSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center max-w-full px-6 relative gap-[55px] py-40 ">
      <img src="/aboutUs/leftLeaf.png" className="absolute left-0 z-0 bottom-0" />
      <H2 className="text-primaryDefault z-10">Onze diensten</H2>
      <div className="flex relative z-10 flex-col lg:flex-row  gap-5 w-fit">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};
