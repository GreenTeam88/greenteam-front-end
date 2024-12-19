import { CheckedIcon } from '@/components/icons/check';
import { PrimaryBtn, PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';

const listItems: string[] = [
  'Slijtage van overmatig gebruik',
  'Extreem veel krasjes ',
  'Vieze vlekken in de vloer',
  'Oud-bollige uitstraling',
];

const QuestionSection = () => {
  return (
    <div className="flex flex-col gap-11 max-w-[400px]">
      <div className="flex flex-col gap-[20px]">
        <H2 className="text-primaryDefault">Ben je het zat om naar die oude vloer te kijken?</H2>
        <div className="flex flex-col ">
          {listItems.map((item) => (
            <div key={item} className="flex gap-2 ">
              <CheckedIcon />
              <BodyText>{item}</BodyText>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <BodyText className="text-secondaryDefault font-bold">Herkenbaar? Geen zorgen, wij lossen het op!</BodyText>
        <PrimaryBtnLink href="/offerte">Offerte aanvragen</PrimaryBtnLink>
      </div>
    </div>
  );
};

type SecondSectionProps = {
  image: string;
  pageName: string;
  sectionName: string;
};

export const SecondSection: React.FC<SecondSectionProps> = ({ image, pageName, sectionName }) => {
  return (
    <div className="flex px-3 flex-col w-full items-center py-6 pb-[200px] gap-[100px]">
      <p className="text-primaryDefault font-normal">
        {sectionName + '  '} <span className="font-bold">- {pageName}</span>{' '}
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-9 py-14">
        <QuestionSection />
        <img className="max-w-full rounded-[10px]" src={image} />
      </div>
    </div>
  );
};
