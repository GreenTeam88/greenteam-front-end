import { InfoCardProps, OrangeInfoCard } from './cards';

const config: InfoCardProps = {
  title: 'Overige diensten',
  buttonText: 'Offerte aanvragen',
  imgSrc: '/diensten/OverigeDiensten.png',
  paragraphs: [
    <>
      Plinten en deklijsten zijn net zo belangrijk als de vloer zelf. Ze hebben naast een decoratief effect ook een
      functionele werking, namelijk als stootlijst om beschadigingen van de muur te voorkomen.
    </>,
    <>
      Wij bieden een ruim assortiment plinten en deklijsten aan bij Green Team. De meest voorkomende zijn de witte MDF
      in verschillende stijlen en modellen.{' '}
      <span className="text-secondaryDefault">
        Maar ook massief houten plinten of plinten in dezelfde kleur als de vloer behoren tot de mogelijkheden.
      </span>
    </>,
    <>
      Deklijsten worden gebruikt op plaatsen waar geen plinten kunnen worden geplaatst, bijvoorbeeld bij deuropeningen
      of ramen tot aan de grond. Deklijsten zijn ook geschikt voor zwevende vloeren of als er al plinten aanwezig zijn.
      Ook de deklijsten kunnen in dezelfde kleur als de vloer worden geleverd. Informeer naar de mogelijkheden
    </>,
  ],
};

export const OverigeDiensten = () => {
  return <OrangeInfoCard {...config} />;
};
