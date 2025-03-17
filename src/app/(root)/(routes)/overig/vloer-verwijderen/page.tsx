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
    title: 'Vloer verwijderen',
    imgSrc: '/overig/vloer-verwijderen/vloer-verwijderen-2.png',
    imgClassName: 'max-w-[586px]',
    paragraphs: [
      <div key="1">
        Met onze vloerverwijdering service zorgen wij voor een snelle en moeiteloze start naar uw nieuwe vloer. Dit kunt
        u van ons verwachten:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Inspectie en voorbereiding: We beoordelen de bestaande vloer en bereiden alles voor een efficiënte
          verwijdering. 
        </li>
        <li>
          Professionele machines: Onze experts gebruiken geavanceerde apparatuur om de vloer grondig en stofvrij te
          verwijderen. 
        </li>
        <li>
          Schoon en strak opleveren: Na het verwijderen van tegels, parket, tapijt of laminaat, zorgen we voor een
          schone ondergrond, klaar voor uw nieuwe vloer. 
        </li>
        <li>
          Tijdbesparend en stressvrij: laat ons de zware klus doen, terwijl u zich richt op het uitkiezen van uw nieuwe
          vloer. {' '}
        </li>
      </ul>,

      <p key="4" className="mb-9">
        Bespaar tijd, moeite en rugklachten door het aan ons over te laten. Wij zorgen voor een perfecte voorbereiding
        van uw ruimte!
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Hoe kan ik mijn oude vloer veilig verwijderen?',
    answer:
      'Het is belangrijk om de juiste gereedschappen te gebruiken, zoals een hamer, beitel en een vloerstripper. Echter raden wij bij gelijmde of betegelde ruimtes aan om dit niet zelf te doen. Wij adviseren gebruik te maken van gespecialiseerde apparatuur voor het verwijderen van vloeren.',
  },
  {
    question: 'Wat moet ik doen met eventuele lijmresten na het verwijderen van de vloer?',
    answer:
      'Lijmresten kunnen het beste worden verwijderd met een speciale schuurmachine. Zo zorgen we ervoor dat de ondergrond schoon en glad is voordat je een nieuwe vloer legt.',
  },
  {
    question: 'Kan ik mijn vloer zelf verwijderen, of is het beter om een professional in te schakelen?',
    answer:
      'Dit hangt af van je ervaring en de complexiteit van de vloer. Voor eenvoudige vloeren kun je het zelf doen, maar bij moeilijkere vloeren of grote oppervlakken is het verstandig om een professional in te huren',
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
      Wilt u uw vloer laten verwijderen door een expert? Bereken via de knop hieronder wat het kost en neem contact met
      ons op voor een afspraak. Als u de specialist langs laat komen gaan we bespreken wat voor soort trap u heeft, wat
      de mogelijkheden zijn, ons advies zodat u zeker weet dat u de juiste beslissing maakt. Deze afspraak kost eenmalig
      €50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed.
    </BodyText>,
  ],
  imgSrc: '/overig/vloer-verwijderen/vloer-verwijderen-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
  imgClassName: 'max-w-[387px] ',
};

export default function OverigVloerverwijderenPage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/overig/hero.png" />
      <ListCard
        sectionName="Overig"
        pageName="Vloer verwijderen"
        listTitle="Herkenbaar?"
        imgClassName="max-w-[590px]"
        listItems={[
          'Geen idee waar je moet beginnen',
          'Geen professionele machines',
          'Rugklachten door zwaar werk',
          'Geen tijd',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/overig/vloer-verwijderen/vloer-verwijderen-1.png"
        orangeText="Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
        btnLink="/offerte"
      />
      <OverigWhyGreenTeam />

      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerverwijdering en ontdek de ongeëvenaarde kwaliteit en efficiëntie van onze service. Wij zorgen voor een snelle en zorgvuldige verwijdering van uw oude vloer, zodat u snel kunt genieten van een nieuwe uitstraling in elke ruimte. Veel tevreden klanten hebben al gekozen voor onze vloerverwijdering, en u kan de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/overig/vloer-verwijderen/vloer-verwijderen-3.png'}
        secondImg="/overig/vloer-verwijderen/vloer-verwijderen-4.png"
        thirdImg="/overig/vloer-verwijderen/vloer-verwijderen-5.png"
        fourthImg="/overig/vloer-verwijderen/vloer-verwijderen-6.png"
        fifthImg="/overig/vloer-verwijderen/vloer-verwijderen-7.png"
        firstImgTopText="Vloer verwijderen"
        firstImgBottomText="Roefpad, Lelystad"
        secondImgTopText="Vloer verwijderen"
        secondImgBottomText="Appelgaard, Schiedam"
        thirdImgTopText="Vloer verwijderen"
        thirdImgBottomText="Jufferpad, Zeist"
        fourthImgTopText="Vloer verwijderen"
        fourthImgBottomText="Berkenhof, Goes"
        fifthImgTopText="Vloer verwijderen"
        fifthImgBottomText="Overrijnsepad, Katwijk"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de specialist langs komt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />

      <RatingSection />
    </div>
  );
}
