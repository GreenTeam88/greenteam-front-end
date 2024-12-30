import { ListCard } from '@/components/listCard';

const listItems: string[] = [
  'Slijtage van overmatig gebruik',
  'Extreem veel krasjes ',
  'Vieze vlekken in de vloer',
  'Oud-bollige uitstraling',
];

type SecondSectionProps = {
  image: string;
  pageName: string;
  sectionName: string;
};

export const SecondSection: React.FC<SecondSectionProps> = ({ image, pageName, sectionName }) => {
  return (
    <ListCard
      pageName={pageName}
      btnLink="/offerte"
      btnText="Offerte aanvragen"
      listTitle="Ben je het zat om naar die oude vloer te kijken?"
      imgSrc={image}
      sectionName={sectionName}
      listItems={listItems}
      orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
    />
  );
};
