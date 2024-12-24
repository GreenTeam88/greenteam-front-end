import React from 'react';

import { Hero } from '@/components/hero';
import { ContactSection } from '../_components/contactSection';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { FAQSection } from '../diensten/_components/faq';
import { ContactFormSection } from './_components/contactFormSection';

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
