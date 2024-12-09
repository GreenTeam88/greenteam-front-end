import { RatingSection } from '@/components/ratingSection';
import { Hero } from '../_components/hero';
import { QuestionSection } from '../../../../components/animations/question';
import { Drevelen } from './_components/drevelen';
import { FifthSection } from './_components/fifthSection';
import { FourthSection } from './_components/fourthSection';
import { HealingExpanding } from './_components/healingExpanding';
import { ParqueteRenovation } from './_components/parqueteRenovation';
import { PlintenDeklijsten } from './_components/plinten-deklijsten';
import { Reparatie } from './_components/reparatie';
import { ThirdSection } from './_components/thirdSection';
import { VgroefFrezen } from './_components/vgroefFrezen';

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <ParqueteRenovation />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <HealingExpanding />
      <Reparatie />
      <Drevelen />
      <VgroefFrezen />
      <PlintenDeklijsten />
      <RatingSection />
      <QuestionSection />
    </div>
  );
}
