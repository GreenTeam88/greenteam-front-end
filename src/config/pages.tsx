import AlgemeneVoorwaarden from '@/app/(root)/(routes)/algemene-voorwaarden/page';
import ContactPage from '@/app/(root)/(routes)/contact/page';
import DienstenPage from '@/app/(root)/(routes)/diensten/page';
import OffertePage from '@/app/(root)/(routes)/offerte/page';
import OverOnsPage from '@/app/(root)/(routes)/over-ons/page';
import OverigEgaliserenPage from '@/app/(root)/(routes)/overig/egaliseren/page';
import OverigGietvloerenPage from '@/app/(root)/(routes)/overig/gietvloeren/page';
import OverigNatuursteenbehandelenPage from '@/app/(root)/(routes)/overig/natuursteen-behandelen/page';
import OverigOpslagPage from '@/app/(root)/(routes)/overig/opslag/page';
import OverigPage from '@/app/(root)/(routes)/overig/page';
import OverigTegelenPage from '@/app/(root)/(routes)/overig/tegelen/page';
import OverigVloerverwijderenPage from '@/app/(root)/(routes)/overig/vloer-verwijderen/page';
import OverigVloerverwarmingPage from '@/app/(root)/(routes)/overig/vloerverwarming/page';

type PagesMapType = {
  [key: string]: React.ReactNode;
};

export const pagesMap: PagesMapType = {
  'algemene-voorwaarden': <AlgemeneVoorwaarden />,
  contact: <ContactPage />,
  diensten: <DienstenPage />,
  offerte: <OffertePage />,
  'over-ons': <OverOnsPage />,
  overig: <OverigPage />,
  '/overig/vloerverwarming': <OverigVloerverwarmingPage />,
  '/overig/egaliseren': <OverigEgaliserenPage />,
  '/overig/gietvloeren': <OverigGietvloerenPage />,
  '/overig/tegelen': <OverigTegelenPage />,
  '/overig/vloer-verwijderen': <OverigVloerverwijderenPage />,
  '/overig/natuursteen-behandelen': <OverigNatuursteenbehandelenPage />,
  '/overig/opslag': <OverigOpslagPage />,
};
