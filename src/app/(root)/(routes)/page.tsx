import { Hero } from './_components/hero';
import { RatingSection } from './_components/ratingSection';
import { HomeSecondSection } from './_components/secondSection';
import { ServicesSection } from './_components/services';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <HomeSecondSection />
      <RatingSection />
      <ServicesSection />
    </div>
  );
}
