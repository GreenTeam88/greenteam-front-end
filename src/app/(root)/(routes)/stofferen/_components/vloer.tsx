import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/vloer',
  imgSrc: '/stofferen/stofferen-2.png',
  paragraphs: [
    <BodyText key="1">
      Met onze vloerstoffering transformeren we uw woning met oog voor detail en perfectie. We starten met een
      nauwkeurige meting en helpen u bij het kiezen van hoogwaardige materialen die passen bij uw stijl en behoeften. Na
      een grondige voorbereiding, waarbij de vloer wordt gereinigd en geëgaliseerd, stofferen onze experts uw vloer met
      precisie en vakmanschap. Het resultaat? Een strak afgewerkte vloer die comfort en stijl toevoegt aan uw interieur!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Vloer',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Vloer = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
