import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/tapijttegels',
  imgSrc: '/stofferen/stofferen-3.png',
  paragraphs: [
    <BodyText key="1">
      Met onze tapijttegelservice geeft u uw woning een frisse en moderne uitstraling. We starten met nauwkeurige
      metingen en bieden advies op maat, zodat u kunt kiezen uit een breed scala aan stijlen en kleuren die perfect bij
      uw interieur passen. Na het reinigen en egaliseren van de vloer leggen onze experts de tapijttegels naadloos en
      stevig. Het resultaat? Een duurzame, comfortabele vloer met een warme uitstraling die lang meegaat!{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Tapijttegels',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Tapijttegels = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
