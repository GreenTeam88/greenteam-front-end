import { InfoCardProps } from '@/components/cards';
import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { ListCard } from '@/components/listCard';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Schuren en schilderen - vakmanschap voor een frisse look',
    imgSrc: '/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-2.png',
    paragraphs: [
      <div key="1">
        Laat uw trap weer stralen met onze professionele aanpak. Wij combineren precisie en hoogwaardige materialen voor
        een perfect resultaat. Waarom kiezen we voor onze service? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Grondig schuren: Voor een gladde ondergrond die klaar is voor een nieuwe verflaag.  </li>
        <li>Professioneel schilderen: Kies uw favoriete kleur of stijl - van modern tot klassiek. </li>
        <li>Duurzame afwerking: Onze kwaliteitsverf zorgt voor een trap die jarenlang meegaat. </li>
        <li>
          Complete make-over: Niet alleen uw trap, maar ook uw deuren, kozijnen en wanden kunnen worden meegenomen. 
        </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Met onze professionele schilderservice krijgt uw trap een compleet nieuwe look, perfect afgestemd op uw stijl
          en interieur!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Hoe bereid ik een oppervlak voor op schuren en schilderen?',
    answer: 'Het enige wat u hoeft te doen is ervoor zorgen dat de ruimte leeg en toegankelijk is.',
  },
  {
    question: 'Hoeveel tijd is nodig voor het drogen na het schuren voordat ik kan beginnen met schilderen?',
    answer:
      'Nadat de specialist klaar is, dient u minimaal rekening te houden met 24 uur niet betreden van de ruimte of trap.  ',
  },
  {
    question: 'Kan ik mijn trap laten schilderen in alle kleuren van de regenboog?',
    answer:
      'Alle kleuren zijn mogelijk, bespreek dit met ons en we sturen een collega langs met voorbeelden en stalen indien gewenst.',
  },
  {
    question: 'Kunnen jullie eerst langskomen?',
    answer:
      'In bepaalde gevallen komen we graag eerst bij u langs. Bijvoorbeeld wanneer u een tapijt voor uw trap wilt uitkiezen, of wanneer we stalen moeten laten zien en de ruimte moeten opmeten, is een bezoek ter plaatse noodzakelijk.',
  },
  {
    question: 'Hoe kan ik bij jullie betalen?',
    answer:
      'Er zijn verschillende betaalmogelijkheden beschikbaar. Na afronding van de werkzaamheden ontvangt u altijd een factuur met de gebruikelijke online betaalopties. Daarnaast kunt u ook eenvoudig een bankoverschrijving doen of, indien gewenst, contant betalen. Op dit moment is het helaas nog niet mogelijk om op locatie te pinnen, maar we streven ernaar dit in de nabije toekomst aan te bieden.',
  },
  {
    question: 'Welke voorbereidingen moet ik treffen?',
    answer:
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn. Het is ook belangrijk dat de ruimte goed toegankelijk is, omdat we vaak werken met zware professionele machines die naar de werkplek gebracht moeten worden.',
  },
];

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Droomt u al langere tijd van een traprenovatie? Bereken via de knop hieronder wat het kost en neem contact met ons
      op voor een afspraak. Als u de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, wat ons advies is en we komen met kleurstalen, zodat u zeker weten de juiste beslissing maakt.
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet noodzakelijk en is advies via mail contact met foto’s voldoende.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Schuren en schilderen"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van overmatig gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-1.png"
        orangeText="Geen zorgen, wij zorgen voor een strakke, moderne trap!"
      />
      <CardsSection
        bottomText="Tijd om uw oude trap op te frissen?"
        title="Hoe wij uw trap transformeren"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-3.png'}
        secondImg="/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-4.png"
        thirdImg="/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-5.png"
        fourthImg="/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-6.png"
        fifthImg="/traprenovatie/schuren-en-schilderen/schuren-en-schilderen-7.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de trappenspecialist langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
