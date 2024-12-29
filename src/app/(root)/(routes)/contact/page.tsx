import React from 'react';

import { Hero } from '@/components/hero';
import { ContactSection } from '../_components/contactSection';
import { FAQSection } from '../_components/FAQSection';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { ContactFormSection } from './_components/contactFormSection';
import { ContactFAQs } from './_components/faqSection';

function DienstenPage() {
  return (
    <div className="flex w-full bg-bgColor items-center flex-col">
      <Hero />
      <ContactFormSection />
      <FAQSection />
      <ContactSection />
      <PhoneNumberSection />
    </div>
  );
}

export default DienstenPage;
