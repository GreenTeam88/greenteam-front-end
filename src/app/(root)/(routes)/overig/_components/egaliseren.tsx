import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/overig/egaliseren',
  imgSrc: '/overig/overig-2.png',
  paragraphs: [
    <BodyText key="1">
      Een geëgaliseerde vloer is essentieel voor een strak en duurzaam eindresultaat. Wij reinigen en inspecteren de
      bestaande vloer grondig om een stabiele basis te garanderen, brengen vervolgens een hoogwaardige egalisatiemortel
      aan en strijken deze glad om alle oneffenheden te verwijderen. Na uitharding is de vloer volledig vlak en klaar
      voor elke afwerking, zoals tegels, laminaat, PVC of tapijt. Met onze professionele egalisatieservice creëert u een
      solide en duurzame basis die uw interieur naar een hoger niveau tilt.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Egaliseren',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Egaliseren = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
