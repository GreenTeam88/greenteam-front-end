import { InfoCardProps, WhiteInfoCard } from './cards';

const config: InfoCardProps = {
  imgSrc: '/diensten/stairs.png',
  buttonText: 'Offerte aanvragen',
  title: 'Stofferen',
  paragraphs: [
    <>
      Een afwerking van de houten vloer met hardwax is vergelijkbaar met olie, alleen zorgt hardwax voor een extra
      beschermende laag wax op de vloer. De vloer is daardoor beter bestand tegen vuil en vocht dan een vloer die
      behandeld is met olie. Ook benadrukt hardwax de structuur van het hout en geeft het een mooie, warme uitstraling
      aan de houten vloer.
    </>,
    <>
      Een vloer die behandeld is met hardwax heeft relatief veel onderhoud en reiniging nodig.
      <span className="text-secondaryDefault">
        Gemorste vloeistoffen op de vloer zullen direct moeten worden verwijderd, anders heb je kans op kringen in de
        vloer.
      </span>
      Daarnaast is het verstandig om de vloer jaarlijks te onderhouden met een onderhoudswas. De parketteurs van Green
      Team geven graag een eerlijk advies over de juiste producten.
    </>,
    <>
      Ruimtes die vaak worden behandeld met hardwax zijn bijvoorbeeld slaapkamers, bovenverdiepingen of gangen. Een
      behandeling met hardwax is mogelijk in drie varianten: zijdeglans, wit of mat. De witte variant is een zijdeglans
      hardwax. Wij adviseren je graag over de beste afwerking en bijbehorende variant.
    </>,
  ],
};

export const Stoffren = () => {
  return (
    <div className="py-28 bg-transparent">
      <WhiteInfoCard {...config} />
    </div>
  );
};
