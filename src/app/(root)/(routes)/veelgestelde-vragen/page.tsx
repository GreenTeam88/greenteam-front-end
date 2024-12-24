import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
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
