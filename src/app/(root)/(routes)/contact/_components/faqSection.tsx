import { Link } from 'lucide-react';

import { FAQType, WhiteBgFAQSection } from '@/components/FAQSection';

const FAQs: FAQType[] = [
  {
    answer:
      'Wij werken met meerdere teams en specialisten, waardoor we niet beperkt zijn tot één locatie of provincie. We zijn actief in heel Nederland en voeren, in uitzonderlijke gevallen, ook opdrachten uit in België en op de Waddeneilanden.',
    question: 'Werken jullie door heel Nederland?',
  },
  {
    question: 'Hoe kan ik bij jullie betalen?',
    answer:
      'Er zijn verschillende betaalmogelijkheden beschikbaar. Na afronding van de werkzaamheden ontvangt u altijd een factuur met de gebruikelijke online betaalopties. Daarnaast kunt u ook eenvoudig een bankoverschrijving doen of, indien gewenst, contant betalen.',
  },
  {
    question: 'Hoelang duurt een renovatie?',
    answer:
      'De duur van een renovatie hangt sterk af van de omvang van het project. Zo kan de renovatie van één trap doorgaans binnen één dag worden afgerond, terwijl drie trappen waarschijnlijk twee dagen in beslag zullen nemen.',
  },
  {
    question: 'Kunnen jullie eerst langskomen?',
    answer:
      'In bepaalde gevallen komen we graag eerst bij u langs. Bijvoorbeeld wanneer u een tapijt voor uw trap wilt uitkiezen, of wanneer we stalen moeten laten zien en de ruimte moeten opmeten, is een bezoek ter plaatse noodzakelijk.',
  },
  {
    question: 'Welke voorbereidingen moet ik treffen?',
    answer:
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn.',
  },
  {
    question: 'Is er een aanbetaling nodig voor jullie aan de slag gaan?',
    answer:
      'Een aanbetaling is bij ons alleen vereist wanneer er veel materiaal moet worden geleverd, zoals bij grote oppervlakten vloer- of tegelwerk. Dit heeft te maken met de aanschaf van producten bij onze groothandels en leveranciers.',
  },
  {
    question: 'Wat zijn de garantievoorwaarden?',
    answer: (
      <>
        Per categorie gelden andere garantievoorwaarden. Onze garantie voorwaarden zijn te vinden in onze{' '}
        <Link href="/algemene-voorwaarden" className="hover:text-primaryDefault">
          algemene voorwaarden
        </Link>
        .
      </>
    ),
  },
];

export const ContactFAQs = () => <WhiteBgFAQSection FAQs={FAQs} />;
