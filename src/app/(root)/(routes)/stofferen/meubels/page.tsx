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
import { WhyGreenTeamBasicPages } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Meubelstoffering service',
    imgSrc: '/stofferen/meubels/meubels-2.png',
    paragraphs: [
      <div key="1">
        Met onze meubelstoffering service zorgen wij ervoor dat uw meubels weer een blikvanger in uw woning worden:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Inspectie en advies: We beoordelen de staat van uw meubels en adviseren over de beste oplossing. </li>
        <li>Reparatie: Eventuele gebreken worden professioneel hersteld.  </li>
        <li>
          Nieuwe stoffering: We bekleden uw meubels met zorgvuldig geselecteerde stoffen die passen bij uw smaak en
          interieur. 
        </li>
        <li>Perfecte afwerking: Onze experts zorgen voor een strakke pasvorm en hoogwaardige afwerking.  </li>
        <li>Reiniging: Ook reinigen van meubels behoort tot de mogelijkheden van een fris eindresultaat. </li>
      </ul>,
      <p key="4" className="mb-9">
        Met onze deskundige aanpak krijgen uw meubels niet alleen een nieuwe look, maar ook een nieuw leven!{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Staan uw meubels al 10 tot 20 jaar in huis? Dan is het de hoogste tijd om ze een frisse, nieuwe look te geven!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Ik heb vlekken op mijn meubels, wat nu?',
    answer: (
      <BodyText>
        U kunt bij ons een reinigingsbeurt inplannen.
        <br />
        Onze collega komt dan langs om uw meubel te stoomreinigen.Daarna is uw meubel weer als nieuw
      </BodyText>
    ),
  },
  {
    question: 'De stof van mijn stoel laat los, wat nu?',
    answer: (
      <BodyText>
        Graag ontvangen wij foto&lsquo;s van de te repareren meubel(s).
        <br />
        Dan kunnen wij hiervoor een offerte opstellen en u adviseren hoe dit aangepakt kan worden.
      </BodyText>
    ),
  },
  {
    question: 'Wat zijn de onderhoudseisen voor verschillende soorten meubels?',
    answer:
      'Houten meubels vereisen regelmatig onderhoud met olie of was, terwijl stofmeubels regelmatig gestofzuigd en gereinigd moeten worden met geschikte schoonmaakmiddelen.',
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
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn. Het is ook belangrijk dat de ruimte goed toegankelijk is, omdat we vaak werken met zware professionele machines die naar de werkplek gebracht moeten worden. ',
  },
];

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Droomt u al langer van nieuw beklede of gereinigde meubels? Bereken via de knop hieronder wat het kost en neem
      contact met ons op voor een afspraak.{' '}
    </BodyText>,
  ],
  imgSrc: '/stofferen/meubels/meubels-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function StofferenMeubelsPage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/stofferen/hero.png" />
      <ListCard
        sectionName="Stofferen"
        pageName="Meubels"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Hardnekkige vlekken in uw meubilair',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/stofferen/meubels/meubels-1.png"
        orangeText=" Geen zorgen, wij hebben de oplossing! "
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe wij uw meubels vernieuwen"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
        btnLink="/offerte"
      />
      <WhyGreenTeamBasicPages />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Zoals al eerder vermeld hebben wij al 20 jaar aan ervaring en hebben wij parketteurs die super veel kennis en ervaring met zich meebrengen om zo uw vloer weer zo goed als nieuw te maken!"
        btnText="Bereken uw meubel"
        firstImg={'/stofferen/meubels/meubels-3.png'}
        secondImg="/stofferen/meubels/meubels-4.png"
        thirdImg="/stofferen/meubels/meubels-5.png"
        fourthImg="/stofferen/meubels/meubels-6.png"
        fifthImg="/stofferen/meubels/meubels-7.png"
      />
      <WhatWaitingForCard
        orangeText="Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
