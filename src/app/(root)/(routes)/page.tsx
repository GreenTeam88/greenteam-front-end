import { FAQSection } from './_components/FAQSection';
import { FloorAndStairs } from './_components/floorAndStarisSection';
import { GreenSection } from './_components/greenSection';
import { Hero } from './_components/hero';
import { RatingSection } from './_components/ratingSection';
import { HomeSecondSection } from './_components/secondSection';
import { ServicesSection } from './_components/services';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <HomeSecondSection />
      <RatingSection />
      <ServicesSection />
      <GreenSection />
      <FloorAndStairs />
      <FAQSection />
    </div>
  );
}
