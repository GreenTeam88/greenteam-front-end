import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '@/components/phoneNumberSection';
import { TermsConditionPageQuestion } from '../algemene-voorwaarden/_components/question';
import { AllFAQsUI } from './_components/FAQs';

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full bg-bgColor">
      <Hero />
      <AllFAQsUI />
      <PhoneNumberSection />
      <TermsConditionPageQuestion />
      {/* <ProblemSolvedQuestion /> */}
    </div>
  );
}
