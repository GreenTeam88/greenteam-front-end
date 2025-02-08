// import { BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from './cards';

const config: InfoCardProps = {
  title: 'Traprenovatie',
  imgSrc: '/diensten/whiteStairs.png',
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',

  paragraphs: [
    <>
      Dagelijks wordt er op een trap gelopen, vaak intensief. Het is dan ook niet vreemd dat er na verloop van tijd
      gebruikssporen zoals slijtage, beschadigingen en verkleuringen zichtbaar worden. Elke trap zal daarom op een
      gegeven moment toe zijn aan renovatie. Met een professionele traprenovatie kunt u uw trap weer laten stralen als
      nieuw!
    </>,

    <>
      Een trap renoveren is een vak apart.
      <span className="text-secondaryDefault"> GreenTeam is al ruim 20 jaar dé specialist in traprenovaties.</span> Onze
      vakmensen hebben uitgebreide ervaring met verschillende materialen en stijlen. We zorgen voor een strakke en
      duurzame afwerking, waarbij we hoogwaardige en professionele technieken gebruiken. Geen trede, hoek of rand wordt
      overgeslagen – zo bent u verzekerd van een perfect eindresultaat.{' '}
    </>,
    <>
      Bij GreenTeam draait alles om duurzaamheid en kwaliteit. Wij geloven in het vernieuwen in plaats van vervangen.
      Door uw trap een tweede leven te geven, draagt u niet alleen bij aan een beter milieu, maar bespaard u ook
      aanzienlijk op kosten vergeleken met het plaatsen van een geheel nieuwe trap.
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
