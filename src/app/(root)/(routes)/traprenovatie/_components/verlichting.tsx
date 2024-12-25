import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovaties/verlichting',
  imgSrc: '/traprenovaties/traprenovaties-17.png',
  paragraphs: [
    <BodyText key="1">
      Onze trapverlichting combineert functionaliteit en stijl, waardoor uw trap niet alleen veiliger wordt, maar ook
      een echte blikvanger in uw woning. We bepalen nauwkeurig de beste locaties voor LED-verlichting om elke trede
      optimaal te verlichten, en de LED-strips worden zorgvuldig gemonteerd voor een naadloze installatie die perfect
      past bij uw trapdesign. De verlichting voegt een warme, moderne uitstraling toe aan uw interieur, terwijl het
      energiezuinig en duurzaam is. Met onze trapverlichting krijgt uw trap niet alleen een praktische upgrade, maar
      wordt het ook een stijlvolle toevoeging aan uw woning.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Verlichting',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Verlichting = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
