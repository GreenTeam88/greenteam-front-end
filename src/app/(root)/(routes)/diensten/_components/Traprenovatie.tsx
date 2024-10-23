import { InfoCardProps, WhiteInfoCard } from './cards';

const config: InfoCardProps = {
  title: 'Traprenovatie',
  imgSrc: '/diensten/whiteStairs.png',
  buttonText: 'Meer informatie',
  secondBtnText: 'Direct offerte berekenen',
  paragraphs: [
    <>
      Voor een duurzame en sterke houten vloer is het afwerken met lak een uitstekende keuze. Een behandeling met lak is
      bovendien erg geschikt voor vloeren die intensief worden gebruikt of in aanraking komen met vocht, bijvoorbeeld
      als de ruimte grenst aan een buitenruimte. Er wordt daarom vaak gekozen voor een behandeling met lak voor houten
      vloeren in hallen, keukens en woonkamers
    </>,
    <>
      Er zijn veel mogelijkheden voor het afwerken van een houten vloer met lak. Green Team kan zowel particuliere als
      zakelijke klanten voorzien in behoeften. Een houten vloer afwerken met lak levert een aantal voordelen op.
      <span className="text-secondaryDefault">
        {' '}
        Onze parketteurs werken enkel met kwalitatieve en hoogwaardige lak, dit zorgt ervoor dat de vloer zeer goed
        beschermt is tegen vloeistoffen.
      </span>{' '}
      Ook is de vloer na een afwerking met lak nagenoegen onderhoudsvrij, de vloer is relatief goed schoon te houden en
      heeft weinig onderhoud nodig. Bij standaard onderhoud als stofzuigen en dweilen heeft de vloer na een afwerking
      met lak een levensduur tussen de 10 en 15 jaar.
    </>,
  ],
};

export const Traprenovatie = () => {
  return (
    <div className=" py-10">
      <WhiteInfoCard {...config} />
    </div>
  );
};
