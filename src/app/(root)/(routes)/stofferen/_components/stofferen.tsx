import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold, H2 } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/trap',
  imgSrc: '/stofferen/stofferen-1.png',
  paragraphs: [
    <BodyText key="1">
      Met onze trapstoffering maken we van uw trap een stijlvolle blikvanger. We starten met een nauwkeurige meting en
      zorgen voor een grondige voorbereiding door oude bekleding te verwijderen en de trap perfect klaar te maken. U
      kunt kiezen uit hoogwaardige stoffen die aansluiten bij uw interieur, waarna onze vakmensen uw trap strak en
      duurzaam afwerken. Het resultaat? Een trap die niet alleen prachtig oogt, maar ook comfortabel en veilig is. Geef
      uw trap een tweede leven, volledig afgestemd op uw wensen!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Trap',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Stofferen = () => {
  return (
    <div className="flex flex-col gap-20  py-28 bg-white  relative z-0 items-center w-full">
      <div className="flex flex-col gap-[11px] items-center">
        <H2 className="text-primaryDefault">Stofferen</H2>
        <BodyText className="text-black">Breng uw trap weer tot leven met professionele renovatie</BodyText>
      </div>
      <WhiteInfoCard className="lg:flex-row-reverse" {...infoCardConfig} />
    </div>
  );
};
