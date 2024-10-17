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
    <div className="flex flex-col max-w-full px-6 relative gap-[55px] py-40 items-center">
      <H2 className="text-primaryDefault">Onze diensten</H2>
      <div className="flex flex-col lg:flex-row  gap-5 w-full">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};
