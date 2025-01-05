import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/overig/tegelen',
  imgSrc: '/overig/overig-4.png',
  paragraphs: [
    <BodyText key="1">
      Onze tegelservice combineert stijl en functionaliteit voor elke ruimte in uw woning. We starten met het reinigen
      en egaliseren van de vloer om een stabiele basis te creëren, waarna u kunt kiezen uit een breed assortiment tegels
      die passen bij uw stijl, van robuuste vloertegels tot elegante wandtegels. Onze ervaren tegelzetters leggen de
      tegels met oog voor detail en zorgen voor een strak en duurzaam resultaat. Dankzij een zorgvuldige afwerking wordt
      uw vloer niet alleen functioneel, maar ook een echte blikvanger. Tegels bieden een combinatie van schoonheid,
      slijtvastheid en onderhoudsgemak.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Tegelen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Tegelen = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
