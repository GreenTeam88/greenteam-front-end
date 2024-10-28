import { PrimaryBtn, SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, HeadlineSemibold } from '@/components/theme/typography';

export const ProblemSolvedQuestion = () => {
  return (
    <div className="flex flex-col w-full bg-lightOrange py-24 items-center justify-center gap-[22px]">
      <HeadlineSemibold className="text-primaryDefault"> Hebben we je probleem kunnen oplossen?</HeadlineSemibold>
      <div className="flex gap-[22px]">
        <PrimaryBtn>Ja, het was nuttig voor mij</PrimaryBtn>
        <SecondaryOutlinedBtn>Nee, het was niet nuttig voor mij</SecondaryOutlinedBtn>
      </div>
      <BodyText>We zijn blij dat we je hebben kunnen helpen!</BodyText>
    </div>
  );
};
