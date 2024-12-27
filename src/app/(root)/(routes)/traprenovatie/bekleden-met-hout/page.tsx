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
    title: 'Houten trapbekleding - elegantie en vakmanschap     ',
    imgSrc: '/traprenovatie/bekleden-met-hout/bekleden-met-hout-2.png',
    paragraphs: [
      <div key="1">
        Onze trapbekleding van hoogwaardig hout tilt uw interieur naar een hoger niveau. Wat maakt onze service uniek? {' '}
      </div>,
      <ul key="2" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Hoogwaardige materialen: Kies uit een breed scala aan houtsoorten, zoals klassiek eiken of modern walnoot. {' '}
        </li>
        <li>Perfecte afwerking: Wij zorgen voor een naadloze bekleding, afgestemd op uw interieurstijl. </li>
        <li>
          Duurzaam en stijlvol: hout combineert natuurlijke schoonheid met slijtvastheid voor een trap die jarenlang
          meegaat. 
        </li>
        <li>Karakter en warmte: Geef uw trap een uitstraling die uw woning weer laat stralen. </li>
      </ul>,
      <BodyText key="3">
        Met ons vakmanschap zorgen wij ervoor dat uw trap een echte blikvanger wordt, passend bij uw unieke smaak en
        stijl.
      </BodyText>,
      <div key="5" className="mt-6">
        <BodyText className="text-secondaryDefault font-bold">
          Met ons vakmanschap zorgen wij ervoor dat uw trap een echte blikvanger wordt, passend bij uw unieke smaak en
          stijl. {' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat zijn de voordelen van houten bekleding?',
    answer:
      'Houten bekleding biedt een warme uitstraling, duurzaamheid en natuurlijke isolatie. Het kan ook de waarde van een woning verhogen.',
  },
  {
    question: 'Is het onderhoud van houten bekleding moeilijk?',
    answer:
      'Houten bekleding vereist regelmatig onderhoud, zoals reinigen en afwerken met olie of lak om slijtage en veroudering te voorkomen.',
  },
  {
    question: 'Kan ik houten bekleding zelf aanbrengen?',
    answer:
      ' het is belangrijk om de juiste technieken en gereedschappen te gebruiken voor een mooi resultaat. Onze specialisten beschikken over alle correcte apparatuur en machines om de klus goed uit te kunnen voeren.',
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
      Droomt u al langere tijd van een perfect afgewerkte trap?. Bereken via de knop hieronder wat het kost en neem
      contact met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort hout
      u heeft, wat de mogelijkheden zijn, ons advies en we komen met kleurstalen zodat je zeker weten de juiste
      beslissing maakt. Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan
      ons uitbesteed. In heel veel gevallen is deze afspraak niet nodig, en is advies via mail contact met foto’s
      voldoende.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/bekleden-met-hout/bekleden-met-hout-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Bekleden met hout"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/bekleden-met-hout/bekleden-met-hout-1.png"
        orangeText="Geen zorgen, wij transformeren uw trap!"
      />
      <CardsSection
        bottomText="Tijd om uw oude trap te vervangen?"
        title="Hoe wij uw trap bekleden met hout"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <WhyGreenTeam />
      <StoreSection
        title=" Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/bekleden-met-hout/bekleden-met-hout-3.png'}
        secondImg="/traprenovatie/bekleden-met-hout/bekleden-met-hout-4.png"
        thirdImg="/traprenovatie/bekleden-met-hout/bekleden-met-hout-5.png"
        fourthImg="/traprenovatie/bekleden-met-hout/bekleden-met-hout-6.png"
        fifthImg="/traprenovatie/bekleden-met-hout/bekleden-met-hout-7.png"
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
