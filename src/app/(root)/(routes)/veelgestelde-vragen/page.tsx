import { Hero } from '../_components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { ProblemSolvedQuestion } from './_components/problemSolvedQuestion';

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <PhoneNumberSection />
      <ProblemSolvedQuestion />
    </div>
  );
}
