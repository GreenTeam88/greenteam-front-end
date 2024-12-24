import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { TermsConditionPageQuestion } from '../algemene-voorwaarden/_components/question';
import { PrivacyPolicyText } from './_component/privacyPolicyText';

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <PrivacyPolicyText />
      <PhoneNumberSection />
      <TermsConditionPageQuestion />
    </div>
  );
}
