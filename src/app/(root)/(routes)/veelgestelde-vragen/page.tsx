import { Hero } from '../_components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { FAQSection } from './_components/faq';
import { AllFAQsUI } from './_components/FAQs';
import { ProblemSolvedQuestion } from './_components/problemSolvedQuestion';

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full bg-bgColor">
      <Hero />
      <AllFAQsUI />
      <PhoneNumberSection />
      <ProblemSolvedQuestion />
    </div>
  );
}
