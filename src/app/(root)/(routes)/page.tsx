import { Hero } from './_components/hero';
import { HomeSecondSection } from './_components/secondSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <HomeSecondSection />
    </div>
  );
}
