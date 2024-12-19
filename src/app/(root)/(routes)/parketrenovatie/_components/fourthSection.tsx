import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/schuren-en-olien',

  imgSrc: '/Parketrenovatie/thirdFloor.png',
  paragraphs: [
    <BodyText key="1">
      Dagelijks gebruik laat zijn sporen na op een houten vloer, zoals krasjes, oneffenheden en vlekjes. Na 10 tot 20
      jaar is het dan ook tijd voor onderhoud en een grondige schuurbeurt om de vloer weer als nieuw te maken. Voor een
      duurzame afwerking en bescherming is een professionele oliebehandeling een uitstekende keuze. De parketteurs van
      Green Team gebruiken hoogwaardige apparatuur om de olie diep in het hout te laten trekken, waardoor de natuurlijke
      schoonheid van de vloer wordt versterkt. Olie biedt niet alleen een warme uitstraling, maar maakt het ook
      eenvoudig om krassen, vlekken of slijtage bij te werken. Bovendien kan de vloer, afhankelijk van de houtsoort, een
      nieuwe kleur krijgen. Twijfelt u over de beste optie? Geen probleem! Wij nemen verschillende kleuren mee, zodat u
      ter plekke kunt kiezen. Ons team adviseert u graag voor het beste resultaat.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Schuren en oliën',
  secondBtnText: 'Direct Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const FourthSection = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
