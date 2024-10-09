import { BodyText, H2 } from '@/components/theme/typography';

const OurVisionCard = () => {
  return (
    <div className="flex gap-[52px] items-center">
      <img src="/aboutUs/ourVision.png" />
      <div className="flex flex-col max-w-[488px] gap-[11px]">
        <h3 className="font-medium text-[25px] leading-[37px] tracking-[-2%]">Onze visie</h3>
        <p>
          Bij Green Team hebben we een passie voor hout en duurzaamheid. Oorspronkelijk houtbewerkers, hebben wij ons
          gespecialiseerd in vloer en traprenovatie. Wij streven naar topkwaliteit en het{' '}
          <span className="text-secondaryDefault"> overtreffen van verwachtingen.</span>
        </p>
        <p>
          Wij geven om mensen en het milieu, en blijven continu innoveren. Belangrijkste is dat je op Green Team kunt
          vertrouwen; een afspraak is afspraak.
        </p>
      </div>
    </div>
  );
};

const OurMissionCard = () => {
  return (
    <div className="flex gap-[52px] items-center">
      <img src="/aboutUs/ourMission.png" />
      <div className="flex flex-col max-w-[488px] gap-[11px]">
        <h3 className="font-medium text-[25px] leading-[37px] tracking-[-2%]">Onze missie</h3>
        <p>
          Onze missie is om zo duurzaam en groen mogelijk te werk te gaan. We vinden het belangrijk om bewust bij te
          dragen aan een betere wereld. Green Team geeft een houten vloer of trap een tweede leven, waardoor er minder
          bomen gekapt hoeven te worden.{' '}
        </p>
        <p>
          Het circulair inzetten van een houten vloer bespaart gemiddeld 211 kg CO2, gelijk aan 1.788 km rijden met een
          gemiddelde auto. Hergebruik is ook veel kostenefficiënter dan een nieuwe vloer kopen.{' '}
        </p>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="flex bg-white w-full flex-col py-24 gap-6 ">
      <div className="flex flex-col w-full items-center gap-[11px]">
        <H2 className="text-primaryDefault">Over ons</H2>
        <BodyText className="pb-4">Ontdek onze drijfveren en toekomstvisie.</BodyText>
      </div>
      <div className="flex flex-col items-center gap-[34px]">
        <div className="-translate-x-24">
          <OurVisionCard />
        </div>
        <div className="translate-x-24">
          <OurMissionCard />
        </div>
      </div>
    </div>
  );
};
