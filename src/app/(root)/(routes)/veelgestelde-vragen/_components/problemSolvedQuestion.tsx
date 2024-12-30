import { PrimaryBtn, SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, HeadlineSemibold } from '@/components/theme/typography';

export const ProblemSolvedQuestion = () => {
  return (
    <div className="flex flex-col w-full bg-lightOrange py-12 lg:py-24 items-center justify-center gap-[22px]">
      <HeadlineSemibold className="text-primaryDefault"> Hebben we je probleem kunnen oplossen?</HeadlineSemibold>
      <div className="flex  lg:gap-[22px] flex-col gap-3">
        <PrimaryBtn className="w-full lg:w-fit">Ja, het was nuttig voor mij</PrimaryBtn>
        <SecondaryOutlinedBtn className="w-full lg:w-fit">Nee, het was niet nuttig voor mij</SecondaryOutlinedBtn>
      </div>
      <BodyText>We zijn blij dat we je hebben kunnen helpen!</BodyText>
    </div>
  );
};
