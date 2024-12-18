import { InfoCardProps, OrangeInfoCard } from '../../diensten/_components/cards';

const config: InfoCardProps = {
  mainTitle: 'Samenwerkingen',
  title: 'De vakmensen van GreenTeam denken graag mee met al je vragen. ',
  imgSrc: '/zakelijk/construction-team-working-blueprint-new-project.png',
  buttonText: 'Offerte aanvragen',
  imgClassName: 'max-w-[598px]',
  buttonLink: '/offerte',
  paragraphs: [
    <>
      <span className="text-secondaryDefault">Indien nodig schakelen we hulp in van betrouwbare partners.</span>
    </>,
    <>
      De vakmensen van GreenTeam denken graag mee met al je vragen. We werken al vele jaren samen met verschillende
      partijen voor wat we niet zelf kunnen doen. Zo geldt het ook omgekeerd. Dat is waarom ons brede netwerk bestaat
      uit partners als: architecten, aannemers, vastgoedontwikkelaars en woningbeheerders.
    </>,
    <>
      Wij staan altijd open voor nieuwe samenwerkingen. Dus kan jij iets wat wij niet kunnen of heb jij geen verstand
      van vloeren, maar wel van andere (onderhouds)klussen in bedrijfspanden of woningen? Dan kijken we graag of we
      samen kunnen werken! Neem contact met ons op om de mogelijkheden te bespreken.
    </>,
  ],
};

export const CollaberationsSection = () => {
  return <OrangeInfoCard {...config} />;
};
