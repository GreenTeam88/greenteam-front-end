import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { TermsConditionPageQuestion } from './_components/question';
import { TermsConditions } from './_components/termsConditions';

export default function AlgemeneVoorwaarden() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <TermsConditions />
      <PhoneNumberSection />
      <TermsConditionPageQuestion />
    </div>
  );
}
