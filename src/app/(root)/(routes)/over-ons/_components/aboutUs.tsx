import { BodyText, H2 } from '@/components/theme/typography';

const OurVisionCard = () => {
  return (
    <div className="flex gap-3 lg:gap-[52px] flex-col-reverse  lg:flex-row items-center">
      <img src="/aboutUs/it-team.png" className="w-full  lg:w-fit" />
      <div className="flex px-2 flex-col  max-w-[488px] gap-[11px]">
        <h3 className="font-medium text-[25px] leading-[37px] tracking-[-2%] text-primaryDefault">Onze visie</h3>
        <p className="text-[13px]">
          Bij Green Team hebben we een passie voor hout en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons
          gespecialiseerd in vloer en traprenovatie. Wij streven naar topkwaliteit en het{' '}
          <span className="text-secondaryDefault font-bold"> overtreffen van verwachtingen.</span>
        </p>
        <p className="text-[13px]">
          Wij geven om mensen en het milieu, en blijven continu innoveren. Belangrijkste is dat je op Green Team kunt
          vertrouwen; een afspraak is afspraak.
        </p>
      </div>
    </div>
  );
};

const OurMissionCard = () => {
  return (
    <div className="flex gap-3 lg:gap-[52px]  flex-col-reverse lg:flex-row items-center">
      <img className="w-full lg:w-fit" src="/aboutUs/our-mission.png" />
      <div className="flex flex-col px-3 max-w-[488px] gap-[11px]">
        <h3 className="font-medium text-[25px] leading-[37px] tracking-[-2%] text-primaryDefault">Onze missie</h3>
        <p className="text-[13px]">
          Onze missie is om zo <span className="text-secondaryDefault font-bold"> duurzaam en groen</span> mogelijk te
          werk te gaan. We vinden het belangrijk om bewust bij te dragen aan een betere wereld. Green Team geeft een
          houten vloer of trap een tweede leven, waardoor er minder bomen gekapt hoeven te worden.{' '}
        </p>
        <p className="text-[13px]">
          Het circulair inzetten van een houten vloer bespaart gemiddeld 211 kg CO2, gelijk aan 1.788 km rijden met een
          gemiddelde auto. Hergebruik is ook veel kostenefficiënter dan een nieuwe vloer kopen.{' '}
        </p>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="flex px-2 w-full flex-col pb-24 lg:py-24 gap-6 ">
      <div className="flex flex-col w-full items-center gap-[11px]">
        <H2 className="text-primaryDefault">Over ons</H2>
        <BodyText className="pb-4">Ontdek onze drijfveren en toekomstvisie.</BodyText>
      </div>
      <div className="flex flex-col items-center gap-16 lg:gap-[34px]">
        <div className="lg:-translate-x-24">
          <OurVisionCard />
        </div>
        <div className="lg:translate-x-24">
          <OurMissionCard />
        </div>
      </div>
    </div>
  );
};
