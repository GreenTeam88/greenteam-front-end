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
import { OverigWhyGreenTeam } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Opslag',
    imgSrc: '/overig/opslag/opslag-2.png',
    paragraphs: [
      <div key="1">
        Met onze opslagservice zorgen we ervoor dat uw meubels tijdelijk veilig en overzichtelijk worden opgeslagen,
        zodat u zich nergens druk om hoeft te maken. Hoe wij dit aanpakken: {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Inpakken en ophalen: We helpen u bij het zorgvuldig inpakken van uw meubels en halen ze bij u thuis op. {' '}
        </li>
        <li>Veilige opslag: Uw meubels worden opgeslagen in onze goed beveiligde, geconditioneerde opslagruimte.  </li>
        <li>
          Georganiseerd en toegankelijk: Alles wordt overzichtelijk opgeslagen, zodat uw spullen snel en makkelijk weer
          toegankelijk zijn. {' '}
        </li>
        <li>
          Terugbezorging op maat: Zodra uw ruimte weer beschikbaar is, leveren wij uw meubels in perfecte staat terug. {' '}
        </li>
      </ul>,

      <p key="4" className="mb-9">
        Onze opslagoplossing biedt niet alleen een veilige plek voor uw spullen, maar ook gemoedsrust tijdens uw
        renovatie of verhuizing.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Onze opslagservice bewaart uw spullen veilig en overzichtelijk, zodat u zorgeloos kunt verhuizen of renoveren!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is de beste manier om meubels op te slaan?',
    answer:
      'Zorg ervoor dat meubels schoon en droog zijn voordat je ze opbergt. Gebruik dekens of afdekzeilen om ze te beschermen tegen stof en krassen.',
  },
  {
    question: 'Hoelang kan ik mijn spullen veilig opslaan?',
    answer:
      'De meeste spullen kunnen langdurig worden opgeslagen, maar het is belangrijk om regelmatig te controleren op schimmel, vocht en ongedierte.',
  },
  {
    question: 'Moet ik mijn opgeslagen spullen verzekeren?',
    answer:
      'Ja, het is verstandig om een verzekering te overwegen voor waardevolle spullen om financiële verliezen te voorkomen.',
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
  title: 'Waar wacht je op!',
  paragraphs: [
    <BodyText key="1">
      Als dit is wat je wilt, waar wacht je dan op. Bereken via de knop hieronder wat het kost en neem contact met ons
      op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat je zeker weten de juiste beslissing maakt.
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.
    </BodyText>,
  ],
  imgSrc: '/overig/opslag/opslag-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/overig/hero.png" />
      <ListCard
        sectionName="Overig"
        pageName="Opslag"
        listTitle="Herkenbaar?"
        listItems={['Geen ruimte in huis', 'Te kleine tuin', 'Geen schuur of garage', 'Geen oprit of voortuin']}
        btnLink="/Offerte aanvragen"
        btnText="Offerte aanvragen"
        imgSrc="/overig/opslag/opslag-1.png"
        orangeText="Geen zorgen, wij hebben de oplossing!"
      />
      <CardsSection
        bottomText="Help, ik heb hulp nodig met mijn meubels."
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw opslag behoefte"
      />
      <OverigWhyGreenTeam />

      <StoreSection
        title="Wat hebben wij in petto? Jouw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze opslagdiensten en ontdek de ongeëvenaarde kwaliteit en veiligheid voor jouw spullen. Wij zorgen voor een zorgvuldige en veilige opslag, zodat je met een gerust hart jouw bezittingen kunt bewaren. Veel tevreden klanten hebben al gekozen voor onze opslagoplossingen, en jij kunt u volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/overig/opslag/opslag-3.png'}
        secondImg="/overig/opslag/opslag-4.png"
        thirdImg="/overig/opslag/opslag-5.png"
        fourthImg="/overig/opslag/opslag-6.png"
        fifthImg="/overig/opslag/opslag-7.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />

      <RatingSection />
    </div>
  );
}
