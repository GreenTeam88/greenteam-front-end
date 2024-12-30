import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '@/components/phoneNumberSection';
import { ContactSection } from '../_components/contactSection';
import { FAQSection } from '../_components/FAQSection';
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
