import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/dichte-trap',
  imgSrc: '/traprenovatie/traprenovatie-16.png',
  paragraphs: [
    <BodyText key="1">
      Een dichte trap biedt niet alleen praktische voordelen, maar zorgt ook voor een strakke en complete uitstraling in
      uw woning. Wat mag u van ons verwachten? Wij monteren stootborden met precisie om uw open trap naadloos om te
      bouwen naar een dichte trap. Elke trap wordt stevig en duurzaam afgewerkt voor stabiliteit en veiligheid, en is
      aanpasbaar aan uw stijl met bekleding naar keuze, zoals PVC, tapijt of laminaat. Met vakmanschap en aandacht voor
      detail brengen wij uw visie tot leven, zodat uw trap niet alleen veiligheid en geluidsisolatie biedt, maar ook een
      moderne, afgewerkte uitstraling heeft.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Dichte trap',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const DichteTrap = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
