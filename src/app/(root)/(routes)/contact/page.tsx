import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '@/components/phoneNumberSection';
import { ContactSection } from '../_components/contactSection';
import { ContactFormSection } from './_components/contactFormSection';
import { ContactFAQs } from './_components/faqSection';

function DienstenPage() {
  return (
    <div className="flex w-full bg-bgColor items-center flex-col">
      <Hero />
      <ContactFormSection />
      <ContactFAQs />
      <ContactSection />
      <PhoneNumberSection />
    </div>
  );
}

export default DienstenPage;
