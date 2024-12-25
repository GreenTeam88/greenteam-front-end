import { BodyText, H2 } from '@/components/theme/typography';

export const DienstenSecondSection = () => {
  return (
    <div className="flex flex-col items-center px-8 lg:px-0 gap-[11px] pb-10 lg:py-40 ">
      <H2 className="text-primaryDefault">Diensten</H2>
      <BodyText className="max-w-[794px] text-center">
        Wij bieden <span className="text-secondaryDefault font-bold">professionele renovaties</span> van vloeren en
        trappen met oog voor detail en kwaliteit. Onze ervaren vakmensen leveren duurzame resultaten die uw interieur
        nieuw leven inblazen. Ontdek hieronder al onze diensten.
      </BodyText>
    </div>
  );
};
