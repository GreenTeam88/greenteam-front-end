import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/tapijt',

  imgSrc: '/vloeren-leggen/vloeren-leggen-4.png',
  paragraphs: [
    <BodyText key="1">
      Tapijt is niet zomaar een vloer; het biedt comfort, stijl en praktische voordelen. Het zorgt voor warmte en
      zachtheid, ideaal voor koude ruimtes en heerlijk comfortabel onder uw voeten. Bovendien biedt tapijt
      geluidsisolatie, waardoor uw huis stiller en rustiger wordt. Het helpt ook de luchtkwaliteit te verbeteren door
      stofdeeltjes vast te houden. Met een breed scala aan kleuren, patronen en texturen biedt tapijt talloze
      decoratieve mogelijkheden. Voor een duurzame oplossing leggen wij het tapijt professioneel, rekening houdend met
      de ondergrond en temperatuur in de ruimte.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Tapijt leggen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Tapijtleggen = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
