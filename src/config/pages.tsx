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
import ParketrenovatieAanhelenUitbreidenPage from '@/app/(root)/(routes)/parketrenovatie/aanhelen-uitbreiden/page';
import ParketrenovatieDrevelenPage from '@/app/(root)/(routes)/parketrenovatie/drevelen/page';
import ParketrenovatieVGroefFrezenPage from '@/app/(root)/(routes)/parketrenovatie/page';
import ParketrenovatiePlintenEnDeklijstenPage from '@/app/(root)/(routes)/parketrenovatie/plinten-en-deklijsten/page';
import ParketrenovatieReparatiePage from '@/app/(root)/(routes)/parketrenovatie/reparatie/page';
import ParketrenovatieSchurenEnHardwaxenPage from '@/app/(root)/(routes)/parketrenovatie/schuren-en-hardwaxen/page';
import ParketrenovatieSchurenEnLakkenPage from '@/app/(root)/(routes)/parketrenovatie/schuren-en-lakken/page';
import ParketrenovatieSchurenEnOlienPage from '@/app/(root)/(routes)/parketrenovatie/schuren-en-olien/page';
import ParketrenovatieSchurenEnPolijstenPage from '@/app/(root)/(routes)/parketrenovatie/schuren-en-polijsten/page';
import StofferenDeurmatPage from '@/app/(root)/(routes)/stofferen/deurmat/page';
import StofferenDroogloopmatPage from '@/app/(root)/(routes)/stofferen/droogloopmat/page';
import StofferenMeubelsPage from '@/app/(root)/(routes)/stofferen/meubels/page';
import StofferenReinigingsservicePage from '@/app/(root)/(routes)/stofferen/reinigingsservice/page';
import StofferenRodeloperPage from '@/app/(root)/(routes)/stofferen/rode-loper/page';
import StofferenTapijtVerwijderenPage from '@/app/(root)/(routes)/stofferen/tapijt-verwijderen/page';
import StofferenTapijttegelsPage from '@/app/(root)/(routes)/stofferen/tapijttegels/page';
import TrapPage from '@/app/(root)/(routes)/stofferen/trap/page';
import StofferenVloerPage from '@/app/(root)/(routes)/stofferen/vloer/page';
import VloerenLeggenBourgognePage from '@/app/(root)/(routes)/vloeren-leggen/bourgogne/page';
import VloerenLeggenHexagonEn3DPage from '@/app/(root)/(routes)/vloeren-leggen/hexagon-&-3d/page';
import VloerenLeggenHongaarsePuntPage from '@/app/(root)/(routes)/vloeren-leggen/hongaarse-punt/page';
import VloerenLeggenLaminaatPage from '@/app/(root)/(routes)/vloeren-leggen/laminaat/page';
import VloerenLeggenLinoleumPage from '@/app/(root)/(routes)/vloeren-leggen/linoleum/page';
import VloerenLeggenMozaiekEnPatroonPage from '@/app/(root)/(routes)/vloeren-leggen/mozaiek-of-patroon/page';
import VloerenLeggenParketPage from '@/app/(root)/(routes)/vloeren-leggen/parket/page';
import VloerenLeggenPVCPage from '@/app/(root)/(routes)/vloeren-leggen/pvc/page';
import VloerenLeggenTapijtPage from '@/app/(root)/(routes)/vloeren-leggen/tapijt/page';
import VloerenLeggenTapisPage from '@/app/(root)/(routes)/vloeren-leggen/tapis/page';
import VloerenLeggenVisgraatPage from '@/app/(root)/(routes)/vloeren-leggen/visgraat/page';
import VloerenLeggenWalvisgraatPage from '@/app/(root)/(routes)/vloeren-leggen/walvisgraat/page';
import VloerenLeggenWeensePuntPage from '@/app/(root)/(routes)/vloeren-leggen/weense-punt/page';

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
  '/stofferen/trap': <TrapPage />,
  '/stofferen/vloer': <StofferenVloerPage />,
  '/stofferen/tapijttegels': <StofferenTapijttegelsPage />,
  '/stofferen/meubels': <StofferenMeubelsPage />,
  '/stofferen/deurmat': <StofferenDeurmatPage />,
  '/stofferen/droogloopmat': <StofferenDroogloopmatPage />,
  '/stofferen/rode-loper': <StofferenRodeloperPage />,
  '/stofferen/reinigingsservice': <StofferenReinigingsservicePage />,
  '/stofferen/tapijt-verwijderen': <StofferenTapijtVerwijderenPage />,
  '/parketrenovatie/schuren-en-polijsten': <ParketrenovatieSchurenEnPolijstenPage />,
  '/parketrenovatie/schuren-en-lakken': <ParketrenovatieSchurenEnLakkenPage />,
  '/parketrenovatie/schuren-en-olien': <ParketrenovatieSchurenEnOlienPage />,
  '/parketrenovatie/schuren-en-hardwaxen': <ParketrenovatieSchurenEnHardwaxenPage />,
  '/parketrenovatie/aanhelen-uitbreiden': <ParketrenovatieAanhelenUitbreidenPage />,
  '/parketrenovatie/reparatie': <ParketrenovatieReparatiePage />,
  '/parketrenovatie/drevelen': <ParketrenovatieDrevelenPage />,
  '/parketrenovatie/v-groef-frezen': <ParketrenovatieVGroefFrezenPage />,
  '/parketrenovatie/plinten-en-deklijsten': <ParketrenovatiePlintenEnDeklijstenPage />,
  '/vloeren-leggen/parket': <VloerenLeggenParketPage />,
  '/vloeren-leggen/laminaat': <VloerenLeggenLaminaatPage />,
  '/vloeren-leggen/pvc': <VloerenLeggenPVCPage />,
  '/vloeren-leggen/tapijt': <VloerenLeggenTapijtPage />,
  '/vloeren-leggen/linoleum': <VloerenLeggenLinoleumPage />,
  '/vloeren-leggen/visgraat': <VloerenLeggenVisgraatPage />,
  '/vloeren-leggen/walvisgraat': <VloerenLeggenWalvisgraatPage />,
  '/vloeren-leggen/hongaarse-punt': <VloerenLeggenHongaarsePuntPage />,
  '/vloeren-leggen/weense-punt': <VloerenLeggenWeensePuntPage />,
  '/vloeren-leggen/tegel': <VloerenLeggenMozaiekEnPatroonPage />,
  '/vloeren-leggen/mozaiek-of-patroon': <VloerenLeggenMozaiekEnPatroonPage />,
  '/vloeren-leggen/hexagon-&-3d': <VloerenLeggenHexagonEn3DPage />,
  '/vloeren-leggen/tapis': <VloerenLeggenTapisPage />,
  '/vloeren-leggen/bourgogne': <VloerenLeggenBourgognePage />,
   '/traprenovatie/bekleden-met-pvc' :,
   '/traprenovatie/bekleden-met-laminaat' :,
   '/traprenovatie/bekleden-met-hout' :,
   '/traprenovatie/bekleden-met-tapijt' :,
   '/traprenovatie/bekleden-met-linoleum' :,
   '/traprenovatie/schuren-en-behandelen' :,
   '/traprenovatie/schuren-en-schilderen' :,
       '/traprenovatie/beton-cire/metal-stuc' },
       '/traprenovatie/beton-cire/glamour-stuc' },
       '/traprenovatie/beton-cire/brut' },
       '/traprenovatie/beton-cire/parel' },
       '/traprenovatie/beton-cire/croco' },
       '/traprenovatie/beton-cire/venetiaans' },
       '/traprenovatie/beton-cire/acoustic' },
   '/traprenovatie/open-trap' },
   '/traprenovatie/dichte-trap' },
   '/traprenovatie/verlichting' },

};
