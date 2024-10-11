import { H2 } from '@/components/theme/typography';
import { ServiceCard, ServiceInfo } from '../../_components/services';

const services: ServiceInfo[] = [
  {
    title: 'Parketrenovatie',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/Parketrenovatie.png',
  },
  {
    title: 'Traprenovatie',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/Traprenovatie.png',
  },
  {
    title: 'Vloeren leggen',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/VloerenLeggen.png',
  },
  {
    title: 'Stofferen',
    description:
      'Bij Green Team hebben we een passie voor vloeren en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons ges',
    thumbnailSrc: '/aboutUs/Stofferen.png',
  },
];

export const OurServicesSection = () => {
  return (
    <div className="flex flex-col gap-[55px] py-16 items-center">
      <H2 className="text-primaryDefault">Onze diensten</H2>
      <div className="flex  gap-5 w-full">
        {services.map((service) => (
          <ServiceCard {...service} />
        ))}
      </div>
    </div>
  );
};
