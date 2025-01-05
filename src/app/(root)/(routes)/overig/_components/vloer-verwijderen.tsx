import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/overig/vloer-verwijderen',
  imgSrc: '/overig/overig-5.png',
  paragraphs: [
    <BodyText key="1">
      Met onze vloerverwijderingsservice zorgen wij voor een snelle en stressvrije start naar uw nieuwe vloer. We
      beginnen met een grondige inspectie en voorbereiding, gevolgd door het gebruik van professionele machines om
      vloeren zoals tegels, parket, tapijt of laminaat grondig en stofvrij te verwijderen. Na afloop leveren we een
      schone, strakke ondergrond op, volledig klaar voor uw nieuwe vloer. Bespaar tijd, moeite en rugklachten door het
      zware werk aan ons over te laten, zodat u zich kunt focussen op het kiezen van de perfecte vloer.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Vloer verwijderen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const VloerVerwijderen = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
