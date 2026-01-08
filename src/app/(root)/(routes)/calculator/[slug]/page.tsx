import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DynamicMultiStepForm } from '@/components/calculators/dynamic';
import { RatingSection } from '@/components/ratingSection';
import { getCalculatorBySlug } from '@/lib/calculatorApi';

interface CalculatorPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = await getCalculatorBySlug(slug);

  if (!calculator) {
    return {
      title: 'Calculator niet gevonden - GreenTeam',
    };
  }

  return {
    title: `${calculator.name} - GreenTeam`,
    description: calculator.description || `Bereken de prijs voor ${calculator.name} bij GreenTeam`,
  };
}

// Hero section with dynamic calculator
function DynamicHero({
  slug,
  calculatorName,
  calculatorImage,
}: {
  slug: string;
  calculatorName: string;
  calculatorImage: string | null;
}) {
  return (
    <div className="relative px-2 py-6 w-full h-fit flex items-center justify-center">
      <img
        src={calculatorImage || '/hero.webp'}
        alt={calculatorName}
        className="absolute hidden lg:block w-full h-full top-0 left-0 z-0 object-cover"
      />

      <div className="relative flex-col lg:flex-row z-0 max-w-full lg:min-h-[470px] py-16 lg:py-0 gap-[86px] px-2 lg:px-[120px] w-[1440px] flex items-center">
        <div className="flex relative items-start z-10 gap-[86px]">
          <div className="flex flex-col items-start gap-[44px] max-w-[627px]">
            <div className="flex flex-col w-full gap-[22px]">
              <h5 className="font-bold text-primaryDefault text-[32px] lg:text-[40px]">
                <span className="underline">Zorgeloos</span> een klus uitbesteden tegen een{' '}
                <span className="underline">scherpe prijs</span>
              </h5>
              <p className="max-w-[590px]">
                Gedreven door vakmanschap gaan we samen op zoek naar een passende en duurzame oplossing voor uw project.
              </p>
            </div>
          </div>
        </div>

        <DynamicMultiStepForm calculatorSlug={slug} />
      </div>
    </div>
  );
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await params;
  const calculator = await getCalculatorBySlug(slug);

  if (!calculator) {
    notFound();
  }

  return (
    <div className="flex flex-col relative z-0 items-center w-full">
      <DynamicHero slug={slug} calculatorName={calculator.name} calculatorImage={calculator.baseImage} />

      {/* Calculator info section */}
      {calculator.description && (
        <div className="flex flex-col gap-5 bg-white px-2 lg:px-0 lg:gap-20 py-5 lg:py-28 relative z-0 lg:items-center w-full">
          <div className="flex flex-col gap-[11px] lg:items-center max-w-[800px] text-center">
            <h2 className="text-primaryDefault text-[24px] lg:text-[32px] font-bold">{calculator.name}</h2>
            <p className="text-black">{calculator.description}</p>
          </div>
        </div>
      )}

      <RatingSection />
    </div>
  );
}
