import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/hongaarse-punt',

  imgSrc: '/vloeren-leggen/vloeren-leggen-8.png',
  paragraphs: [
    <BodyText key="1">
      Het subtiele verschil tussen een visgraatvloer en een Hongaarse punt creëert een unieke uitstraling. Bij de
      Hongaarse punt worden planken in een hoek van 45 of 60 graden gelegd, wat zorgt voor strakke lijnen en een elegant
      patroon. Kies voor 60 graden voor een rustige, verfijnde look of 45 graden voor een speelser en dynamischer
      effect. Deze tijdloze stijl past perfect in zowel moderne als klassieke interieurs en combineert vakmanschap met
      veelzijdigheid. Of u nu warmte of luxe wilt toevoegen, de Hongaarse punt biedt de perfecte balans.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Hongaarse punt',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const HongaarsePunt = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
