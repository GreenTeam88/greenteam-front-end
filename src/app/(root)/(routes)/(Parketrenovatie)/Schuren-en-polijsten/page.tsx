import { ContactSection } from '../../_components/contactSection';
import { FAQSection } from '../../_components/FAQSection';
import { Hero } from '../../_components/hero';
import { PhoneNumberSection } from '../../_components/phoneNumberSection';
import { SecondSection } from './_components/secondSection';
import { StoreSection } from './_components/store';
import { ThirdSection } from './_components/thirdSection';
import { WhatWaitingForSection } from './_components/whatWaitingFor';
import { WhyGreenTeam } from './_components/whyGreenTeam';

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <WhyGreenTeam />
      <StoreSection />
      <WhatWaitingForSection />
      <FAQSection />
      <ContactSection />
      <PhoneNumberSection />
    </div>
  );
}
