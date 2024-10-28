import { Hero } from '../_components/hero';
import { TermsConditions } from './_components/termsConditions';

export default function AlgemeneVoorwaarden() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <TermsConditions />
    </div>
  );
}
