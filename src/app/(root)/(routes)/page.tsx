import CarouselHero from '@/components/CarouselHero';
import { PhoneNumberSection } from '@/components/phoneNumberSection';
import { RatingSection } from '@/components/ratingSection';
// import { Hero } from '../(routes)/_components/hero';
import { ContactSection } from './_components/contactSection';
import { FAQSection } from './_components/FAQSection';
import { FloorAndStairs } from './_components/floorAndStairsSection';
import { GreenSection } from './_components/greenSection';
import { ServicesSection } from './_components/services';
import { WhyGreenTeam } from './_components/whyGreenTeam';

export default function Home() {
  return (
    <div className="relative z-0 flex flex-col items-center w-full">
      <CarouselHero />
      <WhyGreenTeam />
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
