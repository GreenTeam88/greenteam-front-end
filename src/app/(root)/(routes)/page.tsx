import { ContactSection } from './_components/contactSection';
import { FAQSection } from './_components/FAQSection';
import { FloorAndStairs } from './_components/floorAndStairsSection';
import { GreenSection } from './_components/greenSection';
import { Hero } from './_components/hero';
import { PhoneNumberSection } from './_components/phoneNumberSection';
import { RatingSection } from './_components/ratingSection';
import { HomeSecondSection } from './_components/secondSection';
import { ServicesSection } from './_components/services';

export default function Home() {
  return (
    <div className="flex flex-col relative z-0 items-center w-full">
      <Hero />
      <HomeSecondSection />
      <RatingSection />
      <ServicesSection />
      <GreenSection />
      <FloorAndStairs />
      <FAQSection />
      <ContactSection />
      <PhoneNumberSection />
    </div>
  );
}
