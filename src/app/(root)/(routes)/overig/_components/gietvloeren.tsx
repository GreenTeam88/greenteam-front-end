import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/overig/gietvloeren',
  imgSrc: '/overig/overig-3.png',
  paragraphs: [
    <BodyText key="1">
      Een gietvloer is een naadloze en stijlvolle oplossing die elke ruimte een moderne en minimalistische uitstraling
      geeft. Deze duurzame en onderhoudsvriendelijke vloer is slijtvast, waterdicht en eenvoudig schoon te maken,
      waardoor hij perfect is voor keukens, badkamers, woonkamers en kantoren. Met eindeloze mogelijkheden in kleuren en
      afwerkingen kunt u de vloer volledig afstemmen op uw interieur, terwijl hij comfort en hygiëne biedt voor
      dagelijks gebruik. Met een gietvloer creëert u een elegante, moderne basis die uw interieur naar een hoger niveau
      tilt.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Gietvloeren',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Gietvloeren = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
