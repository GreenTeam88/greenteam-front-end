import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht je op!',
  paragraphs: [
    <BodyText key="1">
      Als dit is wat je wilt, waar wacht je dan op. Bereken via de knop hieronder wat het kost en neem contact met ons
      op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat je zeker weten de juiste beslissing maakt.
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.
    </BodyText>,
    <BodyTextBold key="3" className="text-secondaryDefault">
      {' '}
      Ik wil dat de parketteur langskomt!
    </BodyTextBold>,
  ],
  imgSrc: '/Parketrenovatie/beautiful-shot-modern-house-staircase.png',
  buttonText: 'Direct offerte berekenen',
};

export const WhatWaitingForSection = () => {
  return <WhiteInfoCard {...whatWaitingForConfig} className="lg:py-16" />;
};
