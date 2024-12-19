import { BodyText, BodyTextBold, H2 } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/schuren-en-polijsten',

  imgSrc: '/Parketrenovatie/firstFloor.png',
  paragraphs: [
    <BodyText key="1">
      Dagelijks gebruik van een houten vloer leidt onvermijdelijk tot slijtage zoals krasjes, oneffenheden en vlekjes.
      Na verloop van tijd, meestal na 10 tot 20 jaar, is het tijd voor onderhoud en het schuren van de vloer om deze
      weer als nieuw te maken. Schuren verwijdert gebruikssporen en legt de basis voor een glad en glanzend oppervlak.
      Vervolgens wordt de vloer gepolijst, een proces waarbij de oppervlakteruwheid wordt verminderd door herhaald
      schuren met steeds fijner materiaal. Hierdoor verdwijnen pieken en dalen, wat resulteert in een gladde, glanzende
      afwerking. Dit verbetert niet alleen de uitstraling van de vloer, maar kan ook technische voordelen bieden, zoals
      een gladder glijoppervlak.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
    </BodyTextBold>,
  ],
  title: 'Schuren en polijsten',
  secondBtnText: 'offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const ParqueteRenovation = () => {
  return (
    <div className="flex flex-col gap-20  py-28 bg-white  relative z-0 items-center w-full">
      <div className="flex flex-col gap-[11px] items-center">
        <H2 className="text-primaryDefault">Parketrenovatie</H2>
        <BodyText className="text-black">Breng uw parketvloer weer tot leven met professionele renovatie</BodyText>
      </div>
      <WhiteInfoCard className="lg:flex-row-reverse" {...infoCardConfig} />
    </div>
  );
};
