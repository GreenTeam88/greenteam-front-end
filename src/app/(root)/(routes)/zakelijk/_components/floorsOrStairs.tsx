import { PrimaryBtn, PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';

export const FloorsOrStairs = () => {
  return (
    <div className="flex flex-col items-center px-8 lg:px-0  py-40 gap-[32px]  ">
      <div className="flex flex-col items-center gap-[11px]">
        <H2 className="text-primaryDefault">Vloeren of trappen voor bedrijfsruimtes</H2>
        <BodyText className="max-w-[794px] text-center">
          Heb je een nieuw bedrijfsruimte gekocht of is je kantoor opgeleverd? Dan ben je je vast aan het verdiepen in
          een vloer of trap voor je nieuwe bedrijf. Misschien voldoet de huidige vloer of trap niet aan je wensen of is
          deze versleten? In al deze gevallen moet je op zoek naar een nieuwe vloer of trap of mogelijkheid voor je
          bedrijfsruimte.{' '}
        </BodyText>
      </div>
      <PrimaryBtnLink href="/offerte-aanvragen">Offerte aanvragen</PrimaryBtnLink>
    </div>
  );
};
