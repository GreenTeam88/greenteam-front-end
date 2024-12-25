import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/bekleden-laminaat',
  imgSrc: '/traprenovatie/traprenovatie-4.png',
  paragraphs: [
    <BodyText key="1">
      Met onze professionele trapstoffering geeft u uw oude trap niet alleen een frisse uitstraling, maar verbetert u
      ook het comfort en de veiligheid. We beginnen met een zorgvuldige voorbereiding, waarbij we de trap nauwkeurig
      meten en eventuele oude bekleding verwijderen. U kunt kiezen uit een breed scala aan hoogwaardige stoffen die
      perfect passen bij uw interieur. Onze vakmensen zorgen voor een strakke, naadloze en duurzame afwerking. Een
      beklede trap is niet alleen mooier, maar ook veiliger en comfortabeler om op te lopen.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Bekleden met tapijt',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BekledenTapijt = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
