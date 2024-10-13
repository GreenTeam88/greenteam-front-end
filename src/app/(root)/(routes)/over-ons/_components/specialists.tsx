import { BodyText, H2 } from '@/components/theme/typography';
import { SpecialistInfo, specialists } from '../config';

const SpecialistCard: React.FC<SpecialistInfo> = ({ imgSrc, name, role }) => {
  return (
    <div className="flex p-[22px] items-center flex-col bg-white border-2 gap-1 border-black20 border-opacity-20">
      <img className="w-[234px] " src={imgSrc} />
      <div className="flex flex-col gap-[11px]">
        <h3 className="font-bold text-center text-xl leading-[14px] tracking-[-2%]">{name}</h3>
        <BodyText className="text-center">{role}</BodyText>
      </div>
    </div>
  );
};

export const SpecialistsSection = () => {
  return (
    <div className="flex w-full items-center px-5 lg:px-0 gap-[55px] py-44 flex-col">
      <H2 className="text-primaryDefault text-center lg:text-start">Maak kennis met onze specialisten</H2>
      <div className="flex max-w-[897px] justify-center w-full  flex-wrap gap-[18px]">
        {specialists.map((specialist) => (
          <SpecialistCard key={specialist.name} {...specialist} />
        ))}
      </div>
    </div>
  );
};
