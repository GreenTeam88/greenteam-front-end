import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/weense-punt',

  imgSrc: '/vloeren-leggen/vloeren-leggen-9.png',
  paragraphs: [
    <BodyText key="1">
      De Weense punt is een verfijnd vloerpatroon dat, met zijn zachtere hoeken van 135 graden, een tijdloze en serene
      uitstraling aan uw interieur geeft. Dit elegante design combineert de charme van visgraat met een subtiele,
      harmonieuze twist. Het patroon laat vloeren ruimer lijken, waardoor het perfect is voor zowel grote als kleine
      ruimtes. Bovendien past de Weense punt moeiteloos in zowel moderne als klassieke interieurs. Met deze stijlvolle
      keuze brengt u niet alleen rust en ruimte, maar ook een vleugje verfijning in uw woning.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Weense punt',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const WeensePunt = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
