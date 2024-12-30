'use client';

import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';

import { SearchIcon } from '@/components/icons/searchIcon';
import { BodyTextSemibold, HeadlineSemibold } from '@/components/theme/typography';
import { FAQCard } from '../../diensten/_components/faq';

interface FAQdata {
  question: string;
  answer: string;
}

interface FAQSubCategory {
  subCategory: string;
  FAQs: FAQdata[];
}

interface FAQCategory {
  category: string;
  subCategories: FAQSubCategory[];
}

// chat gpt script
// this is the typescript type of the frequently asked questions that i want to add in my app , interface
// interface FAQdata {
//   question: string;
//   answer: string;
// }

// interface FAQSubCategory {
//   subCategory: string;
//   FAQs: FAQdata[];
// }

// interface FAQCategory {
//   category: string;
//   subCategories: FAQSubCategory[];
// }
//  ; i will give you a document text that contains the category as a first title , beneath the category  , the is the subcategory (some faq does not have subcategory , in this case the subcatgory should be an empty string ) , beneath the subcategory there is the frequently asked questions with question and answer beneath the question there is the answer, you should give me an array of
// FAQdata , FAQSubcategory , FAQCategory , i will give you the document chunk by chunk

const faqs: FAQCategory[] = [
  {
    category: 'Vloer renovatie',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Welke behandeling moet ik kiezen voor weinig onderhoud?',
            answer:
              'Uiteraard wilt u zo lang mogelijk genieten van uw vloer en daarbij het liefst zo weinig mogelijk tijd kwijt zijn aan onderhoud. Een van de mogelijke behandelingen is het afwerken van de houten vloer met lak. Door de vloer met lak te behandelen, voorziet u deze van een sterk pantser waarbij de houtporiën volledig worden afgesloten van vocht en vuil. Dit pantser zorgt ervoor dat de vloer langer meegaat en goed beschermd is.',
          },
          {
            question: 'Hoe kan ik mijn houten vloer het beste onderhouden?',
            answer:
              'Het is belangrijk dat uw houten vloer goed wordt onderhouden na de renovatie. Zo haalt u er het meeste voordeel uit en blijft de vloer langer in goede staat. De parketteurs van GreenTeam geven na de renovatie een onderhoudsrapport mee. Hierin vindt u informatie over het schoonhouden van de vloer en advies over de juiste onderhoudsproducten. U kunt bij GreenTeam ook terecht voor een jaarlijkse reinigingsbeurt van uw vloer.',
          },
          {
            question: 'Hoelang moet de vloer drogen?',
            answer:
              'De droogtijd van uw vloer hangt volledig af van de gekozen behandeling. Het is essentieel om de vloer goed te laten uitharden voordat deze weer wordt gebruikt. Bij een behandeling met lak of hardwax heeft de vloer 24 uur nodig om te drogen. Na 3 dagen kan de vloer weer volledig worden belast, en het duurt 10 dagen voordat hij volledig is uitgehard. Voor een oliebehandeling geldt dat de vloer na 24 uur beloopbaar is en na 3 dagen volledig uitgehard. GreenTeam geeft altijd gedetailleerde informatie over de droogtijden na de renovatie.',
          },
          {
            question: 'Uit welk type hout bestaat mijn vloer?',
            answer:
              'Wanneer wij een vloer gaan renoveren, is het belangrijk om vooraf te weten van welk houttype de vloer is gemaakt. Er zijn veel verschillende houtsoorten en niet elk type is geschikt voor alle behandelingen. Bij reparatie of vervanging is het cruciaal om te weten welk hout gebruikt moet worden. Ook als u uw bestaande vloer wilt uitbreiden en de parketteurs van GreenTeam de vloer gaan aanvullen, willen we graag vooraf weten welk type vloer er momenteel ligt. Zo kunnen we altijd een optimaal resultaat garanderen.',
          },
          {
            question: 'Wat is het verschil tussen reinigen of onderhoud?',
            answer:
              'Het reinigen van de houten vloer kan worden gezien als een grote schoonmaak. Bij onderhoud wordt de oude toplaag van de vloer geschuurd, waardoor ook hardnekkige vlekken en krassen worden verwijderd. Na het schuren wordt de vloer behandeld met olie, lak of hardwax voor extra bescherming en een mooie uitstraling.',
          },
          {
            question: 'Kunnen jullie ook een kapotte vloer renoveren?',
            answer:
              'Bij schade aan een vloer is volledige vervanging in veel gevallen niet nodig. De parketteurs van GreenTeam kunnen veel vloerbeschadigingen repareren. Slechte delen van de vloer kunnen worden vervangen, gaten en kieren kunnen we opvullen en v-groeven kunnen worden gefreesd. Wij geven altijd een eerlijk advies of de schade aan jouw vloer te repareren is.',
          },
          {
            question: 'Plaatst en levert GreenTeam ook plinten?',
            answer:
              'GreenTeam levert ook nieuwe deklijsten of plinten. Onze parketteurs zijn zeer ervaren in het plaatsen hiervan, zodat uw gerenoveerde vloer volledig en netjes wordt afgewerkt. De deklijsten en plinten beschermen bovendien de muren tegen beschadigingen. Heeft u al plinten of deklijsten? Aangezien onze machines niet geschikt zijn om deze te schuren, adviseren wij om deze vooraf te verwijderen. Als dit niet mogelijk is, kunnen wij ze zorgvuldig afplakken om schade te voorkomen. Zo zorgen wij ervoor dat uw renovatie tot in de details perfect wordt uitgevoerd.',
          },
          {
            question: 'Zijn de werkzaamheden stofvrij?',
            answer:
              'Bij GreenTeam werken wij uitsluitend met hoogwaardige producten en machines. Al onze schuurmachines zijn aangesloten op professionele stofzuigers, zodat wij uw vloer stofarm kunnen schuren. Dit is niet alleen beter voor uw gezondheid, maar ook voor die van onze parketteurs, en draagt bij aan een beter eindresultaat. Mocht er toch een kleine hoeveelheid stof vrijkomen, dan ruimen onze parketteurs dit zorgvuldig op. Zo zorgen wij voor een schone en veilige werkomgeving en een perfect afgewerkte vloer.',
          },
          {
            question: 'Wat als ik nog geen keuze heb gemaakt voor de kleur?',
            answer:
              'Er zijn veel verschillende opties in glans en kleuren voor uw houten vloer. U kunt uw keuze tot enkele dagen voor de start van de renovatie doorgeven aan onze parketteurs. Als u twijfelt tussen twee opties, is dat ook geen probleem. De parketteurs nemen beide opties mee en helpen u ter plekke bij het maken van de juiste keuze. Op deze manier bent u verzekerd van een vloer die perfect aansluit bij uw wensen en stijl.',
          },
          {
            question: 'Zit er garantie op de werkzaamheden?',
            answer:
              'Bij renovatiewerkzaamheden zijn harde garanties vaak moeilijk te geven, omdat elk type hout uniek is en hout een levend natuurproduct blijft. Ook de staat van de vloer speelt een belangrijke rol in het eindresultaat. De parketteurs van GreenTeam zetten zich in voor een optimaal resultaat. Bent u uiteindelijk niet (helemaal) tevreden met het resultaat? Neem dan gerust contact met ons op. Wij denken graag met u mee over een passende oplossing.',
          },
        ],
      },
    ],
  },
  {
    category: 'Vloer schuren',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Veroorzaakt het schuren ook zichtbare krasjes?',
            answer:
              'Tijdens het schuurproces van een parketvloer kunnen kleine krasjes ontstaan door de wrijving van het schuurpapier op het hout. Het schuren begint met een grove korrel en gaat geleidelijk over naar fijnere korrels. De parketteurs van GreenTeam maken gebruik van professionele machines en hoogwaardig schuurpapier. Hierdoor zijn de krasjes die door het schuren ontstaan, met het blote oog vrijwel niet zichtbaar.',
          },
          {
            question: 'Hoeveel stof komt er vrij tijdens de werkzaamheden?',
            answer:
              'Bij GreenTeam maken wij gebruik van de meest hoogwaardige machines en producten. Onze machines zijn aangesloten op professionele stofzuigers, waardoor wij het schuren zo stofarm mogelijk uitvoeren. Dit draagt bij aan het beste eindresultaat. Mocht er toch wat stof ontsnappen, dan zullen wij dit vanzelfsprekend na het schuren opzuigen.',
          },
          {
            question: 'Wat is stofarm schuren?',
            answer:
              'De parketteurs van GreenTeam maken gebruik van hoogwaardige machines die zijn aangesloten op professionele stofzuigers. Dit zorgt ervoor dat stof direct wordt opgezogen, wat beter is voor uw gezondheid en die van onze parketteurs. Stofarm schuren betekent echter niet dat we stofvrij werken; er kan altijd wat stof ontsnappen van de stofzuigers. Zodra we klaar zijn met ons werk, zorgen we er vanzelfsprekend voor dat dit wordt opgeruimd.',
          },
          {
            question: 'Wordt de vloer onder de radiator ook geschuurd?',
            answer:
              'Wij streven altijd naar een zorgvuldig eindresultaat en zullen, waar mogelijk, ook onder de radiator schuren. Het kan echter voorkomen dat er in sommige situaties te weinig ruimte is onder de radiator of soortgelijke objecten om de vloer goed te behandelen. De parketteurs van GreenTeam zullen u hierover informeren tijdens of voor de werkzaamheden, zodat u volledig op de hoogte bent van de mogelijkheden.',
          },
          {
            question: 'Kunnen jullie ook om meubels heen schuren?',
            answer:
              'Als meubels moeilijk te verplaatsen zijn, zullen de parketteurs van GreenTeam om het meubel heen werken. Dit is altijd mogelijk, maar kan leiden tot oneffenheden op de vloer en mogelijke schade aan de meubels; dit gebeurt op eigen risico. Houd er rekening mee dat de ruimte onder het meubel onbehandeld blijft. Als u het meubel later verplaatst, zult u het verschil in afwerking kunnen zien. Heeft u hulp nodig bij het verplaatsen van zware meubels? Dan kunt u ook hiervoor een offerte bij ons aanvragen.',
          },
          {
            question: 'Wordt het rooster van de convectorput ook geschuurd en behandeld?',
            answer:
              'Wij schuren roosters van convectorputten niet op traditionele wijze, omdat de kracht van de schuurmachines schade en oneffenheden kan veroorzaken. Het is echter mogelijk om het rooster van de convectorput te laten behandelen. Onze parketteurs nemen het rooster mee om het uit elkaar te halen en in de werkplaats van GreenTeam volledig op te schuren. Het krijgt dezelfde behandeling als uw vloer. Vergeet niet deze behandeling op te geven bij het indienen van uw offerteaanvraag.',
          },
          {
            question: 'Kunnen de krassen in mijn vloer nog verholpen worden?',
            answer:
              'Door schuren kunnen krassen eenvoudig worden weggewerkt. De meeste oppervlakkige krassen kunnen wij verwijderen door de vloer weer mooi egaal te schuren. Bij diepere krassen kunnen deze aanzienlijk verminderd worden, maar soms blijven ze zichtbaar. De parketteurs van GreenTeam geven altijd eerlijk advies over de mogelijkheden voor het verhelpen van krassen in uw vloer.',
          },
          {
            question: 'Wat gebeurt er met het schuurafval?',
            answer:
              'Na het afronden van de renovatiewerkzaamheden aan uw vloer, nemen wij het schuurafval mee. De parketteurs van GreenTeam zorgen ervoor dat de ruimte altijd netjes achterblijft. Wij werken graag zo duurzaam mogelijk en brengen het afval naar zorgvuldig geselecteerde groene verwerkingsbedrijven, waar het op een milieuvriendelijke manier wordt gerecycled.',
          },
        ],
      },
    ],
  },
  // {
  //   category: 'Behandelingen',
  //   subCategories: [
  //     {
  //       subCategory: '',
  //       FAQs: [
  //         {
  //           question: 'Wat is het verschil tussen lak, hardwax en olie?',
  //           answer:
  //             'Er zijn drie mogelijkheden om uw houten vloer te behandelen: lak, hardwax (ook wel hardwax-olie genoemd) en olie. Combinaties van deze behandelingen zijn ook mogelijk. Een lakbehandeling sluit het hout volledig af, waardoor de vloer beschermd is tegen vuil en vocht. Dit is ideaal voor intensief gebruikte vloeren. Lak kan in kleur en met een glanzende of matte afwerking worden aangebracht en vereist weinig onderhoud. Hardwax biedt bescherming tegen vuil en vocht en geeft een warme uitstraling. Het benadrukt de houtstructuur en geeft een vollere uitstraling met een lichte glans. Een olieafwerking zorgt voor een luxe, matte uitstraling en kan plaatselijk worden bijgewerkt bij krassen of slijtage, maar vereist relatief veel onderhoud.',
  //         },
  //         {
  //           question: 'Hoe kan ik mijn met lak behandelde vloer het beste onderhouden?',
  //           answer:
  //             'Een vloer die is behandeld met lak vereist over het algemeen weinig onderhoud. Het is echter belangrijk om regelmatig te stofzuigen om krassen te voorkomen. De vloer kan daarnaast worden schoongemaakt met geschikte reinigingsproducten. Hier zijn de onderhoudsrichtlijnen voor lakvloeren: Wekelijks reinigen met een pH-neutrale, ontvettende reiniger. Deze reiniger is huidvriendelijk, bevat geen chloor of chemische conserveringsmiddelen, en is biologisch afbreekbaar. Elk halfjaar de vloer behandelen met een onderhoudsmiddel dat hoge slijtvastheid biedt en de glans van de lak behoudt. Dit product dient water- en vuilafstotend te zijn. Wij adviseren het gebruik van parket polish als een hoogwaardig en duurzaam onderhoudsproduct. Het heeft een hoge slijtvastheid en is ook water- en vuilafstotend. Door het onderhoud op deze manier uit te voeren, kunt u slijtage op een duurzame manier voorkomen.',
  //         },
  //         {
  //           question: 'Wanneer is de met lak behandelde vloer droog en uitgehard?',
  //           answer:
  //             'Wanneer een houten vloer is behandeld met lak, is deze 24 uur na het aanbrengen weer droog en beloopbaar. Na 72 uur (3 dagen) is de vloer weer belastbaar, en na 10 dagen is de laklaag volledig uitgehard. Voor een optimaal droogproces is een kamertemperatuur van 18 tot 20 graden in de behandelde ruimtes aan te raden. Bij lagere temperaturen of een hoge ondergrond- en luchtvochtigheid kan het droogproces langer duren.',
  //         },
  //         {
  //           question: 'Hoelang duurt het schuren en behandelen van de vloer met lak?',
  //           answer:
  //             'De duur van de werkzaamheden is volledig afhankelijk van de oppervlakte van de vloer die behandeld moet worden. Gemiddeld kunnen de parketteurs van GreenTeam tussen de 60 m² en 100 m² per dag schuren. Op dezelfde dag kan de houten vloer in de eerste laklaag worden gezet. De tweede en derde laklaag worden op de volgende dag aangebracht.',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    category: 'Behandelingen',
    subCategories: [
      {
        subCategory: 'Lak',
        FAQs: [
          {
            question: 'Kan onze parketvloer worden gelakt nadat deze is geolied?',
            answer:
              'Dat is mogelijk. Door het polijsten en schuren van de houten vloer worden de eerdere behandelingen, evenals vlekken en krassen, weggeschuurd. Na het opschuren komt het ‘kale’ hout weer tevoorschijn, wat de gelegenheid biedt om een nieuwe behandeling voor uw vloer te kiezen.',
          },
          {
            question: 'Komen er snel krassen in een met lak behandelde vloer?',
            answer:
              'Lak biedt uitstekende bescherming voor uw houten vloer. De parketteurs van GreenTeam brengen de lak in drie lagen aan voor extra duurzaamheid. Ondanks de bescherming kunnen er door verschillende factoren toch krassen ontstaan. Deze worden voor een groot deel opgevangen door de lak, waardoor ze oppervlakkig blijven en het hout niet snel beschadigen.',
          },
          {
            question: 'Heeft de lak een sterke geur?',
            answer:
              'De lak die wij gebruiken voor de behandeling van houten vloeren heeft geen sterke geur. Daarnaast is de lak milieuvriendelijk en duurzaam dankzij de consequente ecologische selectie van grondstoffen.',
          },
        ],
      },
      {
        subCategory: 'Olie',
        FAQs: [
          {
            question: 'Hoe kan ik mijn met olie behandelde vloer het beste onderhouden?',
            answer:
              'Een met olie behandelde vloer heeft relatief veel onderhoud nodig. Een geoliede vloer is gevoelig voor vlekken. Wij raden aan om wekelijks te reinigen met een pH-neutrale, ontvettende reiniger. Voor duurzaam onderhoud adviseren wij een jaarlijkse behandeling met een onderhoudsolie met waterafstotende werking. Dit onderhoud voorkomt slijtage op een duurzame wijze.',
          },
          {
            question: 'Wanneer is de met olie behandelde vloer droog en uitgehard?',
            answer:
              'Wanneer een houten vloer is behandeld met olie, is deze na 24 uur weer droog en beloopbaar. Na 72 uur (3 dagen) is de vloer volledig uitgehard. Voor een optimaal droogproces adviseren wij een kamertemperatuur van 18 tot 20 graden in de behandelde ruimtes. Bij lagere temperaturen of een hoge ondergrond- en luchtvochtigheid kan het droogproces langer duren.',
          },
          {
            question: 'Kan onze parketvloer worden gelakt nadat deze is geolied?',
            answer:
              "Het is mogelijk om de houten vloer te polijsten en te schuren, waardoor de eerdere behandeling, evenals vlekken en krassen, worden verwijderd. Na het opschuren van de vloer komt het 'kale' hout tevoorschijn, wat u de kans biedt om een nieuwe behandeling voor de vloer te kiezen.",
          },
          {
            question: 'Men zegt dat een behandeling met olie minder krasgevoelig is dan lak, klopt dit?',
            answer:
              'Dat is niet correct. Een behandeling met lak biedt de meeste bescherming, terwijl een behandeling met olie de minste bescherming biedt. Het voordeel van olie is echter dat het mogelijk is om plaatselijke krassen bij te werken. Dit is niet mogelijk bij een laklaag.',
          },
          {
            question: 'Heeft de olie een sterke geur?',
            answer:
              'De olie die wij gebruiken voor de behandeling van houten vloeren heeft geen sterke geur. Daarnaast is de olie milieuvriendelijk en duurzaam dankzij de consequente ecologische selectie van grondstoffen.',
          },
        ],
      },
      {
        subCategory: 'Hardwax',
        FAQs: [
          {
            question: 'Hoe kan ik mijn met hardwax behandelde vloer het beste onderhouden?',
            answer:
              'Een met hardwax behandelde vloer vereist regelmatig onderhoud. Stofzuigen en het gebruik van een huidvriendelijke, pH-neutrale reiniger zijn belangrijk. Voor hardnekkige vlekken adviseren wij een verzorgingsmiddel op wasbasis. Dit onderhoud voorkomt op duurzame wijze slijtage van de vloer.',
          },
          {
            question: 'Wanneer is de met hardwax behandelde vloer droog en uitgehard?',
            answer:
              'Wanneer de houten vloer is behandeld met hardwax, is deze na minimaal 24 uur weer droog en beloopbaar. Na 72 uur (3 dagen) is de vloer volledig belastbaar, en na 10 dagen is de hardwax volledig uitgehard.',
          },
          {
            question: 'Bestaat er een verschil tussen hardwax en hardwax-olie?',
            answer:
              'Met hardwax en hardwax-olie wordt hetzelfde bedoeld. Wanneer u de houten vloer laat hardwaxen, gebeurt dit met hardwax-olie. Deze olie bevat een laagje wax en biedt daarmee bescherming tegen vuil en vocht.',
          },
          {
            question: 'Heeft de hardwax een sterke geur?',
            answer:
              'De olie die wij gebruiken voor de behandeling van houten vloeren heeft geen sterke geur. Daarnaast is de olie milieuvriendelijk en duurzaam dankzij de consequente ecologische selectie van grondstoffen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Kosten',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Wanneer ontvang ik de factuur van de werkzaamheden?',
            answer:
              'Wij versturen de factuur na het afronden van de werkzaamheden. De factuur dient binnen 14 dagen te worden voldaan.',
          },
          {
            question: 'Moet er een aanbetaling worden gedaan?',
            answer:
              'Een aanbetaling is bij GreenTeam niet nodig. U heeft wel de mogelijkheid om naar wens 25%, 33% of 50% aan te betalen. U ontvangt na het afronden van de werkzaamheden de factuur met het restbedrag. Deze factuur dient binnen 14 dagen te worden voldaan.',
          },
          {
            question: 'Waarom staat er niks over plinten in mijn offerte?',
            answer:
              'Het demonteren, leveren en/of plaatsen van deklijsten of plinten zit niet bij de standaard werkzaamheden inbegrepen. Als u dat wel graag zou willen bij de renovatie van de houten vloer kan u dit aangeven bij de offerte-aanvraag. Heeft u een offerte gekregen en wilt u daarnaast nog deklijsten of plinten? Neem dan contact met ons op.',
          },
        ],
      },
    ],
  },
  {
    category: 'Offerte',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Wanneer ontvang ik de offerte?',
            answer:
              'Als u via de website van GreenTeam een offerte-aanvraag hebt ingediend krijgt u binnen 24 uur een persoonlijke offerte per e-mail.',
          },
          {
            question: 'Ik heb een offerte aangevraagd, maar nog niet ontvangen.',
            answer:
              'Als u via de website van GreenTeam een offerte-aanvraag hebt ingediend krijgt u binnen 24 uur een persoonlijke offerte per e-mail. Heeft u nog niks ontvangen? Check dan of de offerte in de spam box terecht is gekomen of neem telefonisch contact met ons op. We zorgen ervoor dat u alsnog zo snel mogelijk een offerte op maat van ons ontvangt.',
          },
          {
            question: 'Hoe pas ik mijn offerte-aanvraag aan?',
            answer:
              'Wij gaan meteen voor u aan de slag zodra wij de offerte-aanvraag hebben ontvangen. Wilt u nog iets aanpassen of toevoegen aan de aanvraag, stuur ons dan een mail. Als u de offerte al hebt ontvangen, geef dan het nummer van de offerte aan in de mail, dan kunnen we u zo snel mogelijk helpen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Werkwijze',
    subCategories: [
      {
        subCategory: 'Planning',
        FAQs: [
          {
            question: 'Wanneer kunnen jullie starten met de werkzaamheden?',
            answer:
              'We werken bij GreenTeam met diverse teams. Daarom zijn we flexibel en kunnen we rekening houden met jouw wensen. Heeft u een specifieke tijd in gedachten of is renovatie van de vloer op korte termijn noodzakelijk? Neem dan contact met ons op. We denken graag met u mee.',
          },
          {
            question: 'Wanneer ontvang ik de planning van de werkzaamheden?',
            answer:
              'Na het accepteren van de offerte zullen we telefonisch contact met u opnemen om de planning van de werkzaamheden te bespreken. Als we een geschikt moment hebben gevonden, zetten we de data van werkzaamheden vast. Als er onverhoopt wijzigingen zijn in jouw planning, dan horen we dat graag zo snel mogelijk van u.',
          },
          {
            question: 'Moet ik zelf aanwezig zijn bij de start van de werkzaamheden?',
            answer:
              'Wij zullen op de eerste dag altijd een inspectieronde lopen, zodat er achteraf geen onduidelijkheden of misverstanden ontstaan. Daarom vragen we u altijd om op de eerste dag van de werkzaamheden onze parketteurs persoonlijk te ontvangen. Op dat moment heeft u zelf ook de mogelijkheid om nog vragen te stellen en afspraken te maken.',
          },
          {
            question: 'Op welk tijdstip beginnen jullie met de werkzaamheden?',
            answer:
              'Wij beginnen over het algemeen tussen 08.00 uur en 10.00 uur met de werkzaamheden. Als van dit tijdstip wordt afgeweken dan informeren we u daar tijdig over. Het is in overleg ook mogelijk om op een ander tijdstip te starten met de werkzaamheden als dat beter uitkomt. We houden graag rekening met uw wensen.',
          },
          {
            question: 'Waarom hebben jullie een uitloopdag ingepland?',
            answer:
              'Wij streven er natuurlijk altijd naar om de werkzaamheden binnen de geplande tijd af te ronden. Het is mogelijk dat er onvoorziene omstandigheden plaatsvinden waardoor de werkzaamheden een dag langer in beslag zullen nemen. Zodra het duidelijk is dat er gebruik moet worden gemaakt van een uitloopdag, communiceren we dit zo tijdig mogelijk.',
          },
          {
            question: 'Moeten we de muren schilderen voor of na het schuren van de vloer?',
            answer:
              'Dat is per situatie verschillend. Het is belangrijk dat de behandelde vloer goed kan uitharden. De vloer kan pas na drie dagen weer belast worden. Plan de werkzaamheden voor het schilderen dan ook na minstens drie dagen na ons aankomen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Voorbereiding',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Moeten alle meubels uit de ruimte die geschuurd gaat worden?',
            answer:
              'De parketteurs van GreenTeam kunnen de gehele vloer alleen egaal en netjes behandelen als de ruimtes volledig leeg zijn. Er wordt gewerkt met grote schuurmachines die ruimte nodig hebben. In een lege ruimte is de kans op beschadigingen minimaal.',
          },
          {
            question: 'Moet ik de tv, gordijnen en schilderijen verwijderen uit de ruimte vanwege stof?',
            answer:
              'Dat is niet nodig. De parketteurs bij GreenTeam werken met hoogwaardige machines en producten die zijn aangesloten op professionele stofzuigers. Op deze manier wordt er stofvrij geschuurd. Dit levert het beste eindresultaat van uw vloer op en is ook nog eens beter voor de gezondheid van onze parketteurs. Het is mogelijk dat er wat stof ontsnapt tijdens de werkzaamheden, maar dit zal altijd worden opgeruimd.',
          },
          {
            question: 'Kunnen de werkzaamheden ook opgesplitst worden, zodat wij de meubels kunnen verplaatsen?',
            answer:
              'De parketteurs van GreenTeam kunnen het behandelen van vloeren tot 80 m² op één dag uitvoeren. Als bij een oppervlakte van minder dan 80 m² het gewenst is om de werkzaamheden op te splitsen, dan rekenen wij daar een meerprijs voor van €300,-. Ons advies is om de werkzaamheden niet op te splitsen als er sprake is van een vloer in een doorlopende ruimte. Het is dan mogelijk dat er contrasten op de vloer ontstaan.',
          },
          {
            question: 'Worden de plinten ook geschuurd of vervangen?',
            answer:
              'Het is niet mogelijk om de plinten te laten schuren. Onze machines zijn te zwaar om de plinten egaal en op een nette manier te kunnen bewerken en er kan ook schade aan de plinten ontstaan. Als je van plan bent om nieuwe plinten te plaatsen, dan is het advies om de oude plinten voor de behandeling weg te halen. Op deze manier kan de gehele vloer worden behandeld door onze parketteurs.',
          },
        ],
      },
    ],
  },
  {
    category: 'Na de vloerrenovatie',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Wat is de beste temperatuur voor de ruimte na de vloerrenovatie?',
            answer:
              'Voor het meest optimale droogproces raden wij aan een normale kamertemperatuur aan van 18 tot 20 graden in de behandelde ruimtes. Bij een lagere temperatuur of hoge ondergrond- en luchtvochtigheid kan het drogingsproces langer duren.',
          },
          {
            question: 'Moet ik ergens op letten bij het inrichten van de ruimte na de vloerrenovatie?',
            answer:
              'Ons advies is om 3 dagen na de behandeling van de vloer de meubels weer terug te plaatsen. Let er daarbij wel op dat je bij het terugplaatsen de meubels niet over de vloer schuift, dan kunnen er krassen ontstaan. Daarnaast adviseren wij ook om altijd viltjes onder alle meubels te plaatsen. De eerste drie maanden is de kans op verkleuring van de vloer door UV-licht het grootst. Als je de kans op verkleuring wilt minimaliseren is ons advies om het vloerkleed pas terug te plaatsen na de eerste drie maanden.',
          },
          {
            question: 'Wanneer kan ik na de vloerrenovatie een vloerkleed neerleggen?',
            answer:
              'U kunt 10 dagen na de behandeling van de vloer het vloerkleed weer terugleggen. De eerste drie maanden is de kans op verkleuring van de vloer door UV-licht het grootst. Als u de kans op verkleuring wilt minimaliseren is ons advies om het vloerkleed pas terug te plaatsen na de eerste drie maanden.',
          },
        ],
      },
    ],
  },
  {
    category: 'Onderhoud',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Hoe kan ik mijn vloer het beste onderhouden na de renovatie?',
            answer:
              'Het onderhoud van de houten vloer is volledig afhankelijk van de manier van afwerking. Na de renovatie ontvangt u altijd een rapport van de parketteurs met informatie over de werkzaamheden. In dit rapport is ook advies opgenomen over het beste onderhoud van de vloer en welke producten u hiervoor kunt gebruiken. Daarnaast kunnen de parketteurs van GreenTeam de vloer jaarlijks voorzien van een reinigingsbeurt.',
          },
          {
            question: 'Wanneer kan ik na de renovatie de vloer weer dweilen?',
            answer:
              'Na de behandeling moet de vloer nog uitharden. Ons advies is daarom om de eerste twee weken de vloer niet te dweilen. Dweilen kan ervoor zorgen dat de vloer lichtjes wordt ontvet, wat tijdens het uithardingsproces zoveel mogelijk moet worden voorkomen. Na twee weken is het mogelijk om de vloer weer licht vochtig te dweilen.',
          },
          {
            question: 'Kunnen kleurverschillen in mijn houten vloer nog verholpen worden?',
            answer:
              'Met de juiste behandeling is het mogelijk om kleurverschillen in een houten vloer aanzienlijk te verminderen. Een behandeling met olie is voor veel houtsoorten een optie, met een ruime keuze aan tinten en kleuren. Aangezien hout een levend natuurproduct is, kunnen er echter altijd enkele afwijkingen in de vloer blijven bestaan.',
          },
          {
            question: 'Hoe kan ik krassen in de vloer voorkomen?',
            answer:
              'Ons advies om krassen te voorkomen is om altijd viltjes onder alle meubels te plaatsen. Dit vermindert de kans op krassen tijdens het verschuiven van meubels. Het is ook verstandig om bij elke entree van de woning een inloopmat te gebruiken om het zand op de vloer zoveel mogelijk te verminderen, aangezien zand de meeste krassen en slijtage op houten vloeren veroorzaakt. Probeer ten slotte meubels zoveel mogelijk te tillen in plaats van over de vloer te schuiven.',
          },
          {
            question: 'Waar kan ik de beste onderhoudsproducten aanschaffen?',
            answer:
              'Wij geven altijd een passend advies over de beste onderhoudsproducten die u kunt gebruiken voor het onderhoud en de reiniging van uw vloer. Mocht u vragen hebben over het gebruik of de aanschaf van onderhoudsproducten, dan kunt u contact opnemen met GreenTeam.',
          },
        ],
      },
    ],
  },
  {
    category: 'Vloeren Leggen',
    subCategories: [
      {
        subCategory: 'Parket leggen',
        FAQs: [
          {
            question: 'Hoelang duurt het om een parketvloer te leggen?',
            answer:
              'De duur van het leggen van parket hangt af van de grootte van de ruimte en het patroon. Gemiddeld kan het 1 tot 3 dagen duren, inclusief voorbereidingen zoals egaliseren.',
          },
          {
            question: 'Is parket geschikt voor vloerverwarming?',
            answer:
              'Ja, veel soorten parket zijn geschikt voor vloerverwarming, maar het is belangrijk om een deskundige te raadplegen om het juiste type hout en installatie te kiezen.',
          },
          {
            question: 'Hoe onderhoud ik mijn parketvloer na installatie?',
            answer:
              'Regelmatig stofzuigen en dweilen met een licht vochtige doek is voldoende. Voor langdurig onderhoud wordt aangeraden om de vloer jaarlijks te oliën of te lakken.',
          },
        ],
      },
      {
        subCategory: 'Laminaat leggen',
        FAQs: [
          {
            question: 'Hoelang duurt het om laminaat te leggen?',
            answer:
              'De tijd hangt af van de grootte van de ruimte, maar een gemiddelde kamer kan in 1 tot 2 dagen worden gelegd.',
          },
          {
            question: 'Is een ondervloer nodig bij het leggen van laminaat?',
            answer:
              'Ja, een ondervloer is meestal vereist voor geluidsdemping, isolatie en bescherming tegen vocht. Laminaat kan vaak over bestaande vloeren worden gelegd, behalve op tapijt.',
          },
        ],
      },
      {
        subCategory: 'PVC leggen',
        FAQs: [
          {
            question: 'Hoelang duurt het om een PVC-vloer te leggen?',
            answer:
              'De duur hangt af van de grootte van de ruimte en de voorbereiding, maar gemiddeld duurt het 1-2 dagen.',
          },
          {
            question: 'Kan PVC over een bestaande vloer gelegd worden?',
            answer: 'Ja, mits de ondergrond vlak en stabiel is.',
          },
          {
            question: 'Is PVC-vloer geschikt voor vloerverwarming?',
            answer: 'Ja, PVC werkt goed met vloerverwarming.',
          },
          {
            question: 'Hoe onderhoud ik een PVC-vloer?',
            answer: 'Regelmatig stofzuigen en dweilen met milde schoonmaakmiddelen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Traprenovatie',
    subCategories: [
      {
        subCategory: 'Bekleden met PVC',
        FAQs: [
          {
            question: 'Wat zijn de voordelen van PVC vloerbedekking?',
            answer:
              'PVC is duurzaam, waterbestendig en gemakkelijk te onderhouden. Het is ook verkrijgbaar in verschillende stijlen en kleuren, waardoor het geschikt is voor diverse interieurontwerpen.',
          },
          {
            question: 'Kan ik PVC zelf leggen of heb ik professionele hulp nodig?',
            answer:
              'Hoewel het mogelijk is om PVC zelf te leggen, kan professionele installatie zorgen voor een betere afwerking en duurzaamheid. Dit is vooral belangrijk bij ingewikkelde patronen.',
          },
          {
            question: 'Hoe onderhoud ik een PVC vloer?',
            answer:
              'PVC vloeren vereisen minimaal onderhoud; regelmatig stofzuigen en af en toe dweilen met een mild schoonmaakmiddel is meestal voldoende om ze in topconditie te houden.',
          },
        ],
      },
      {
        subCategory: 'Bekleden met laminaat',
        FAQs: [
          {
            question: 'Is laminaat geschikt voor alle ruimtes in huis?',
            answer:
              'Laminaat is veelzijdig en kan in de meeste ruimtes worden gebruikt, maar het is minder geschikt voor vochtige ruimtes zoals badkamers. Het is belangrijk om een watervast type laminaat te kiezen voor keukens of bij de voordeur.',
          },
          {
            question: 'Hoelang gaat laminaat mee?',
            answer:
              'Met goed onderhoud kan laminaat tot 15-25 jaar meegaan. Het is echter afhankelijk van de kwaliteit en de intensiteit van het gebruik.',
          },
          {
            question: 'Kan ik laminaat zelf leggen?',
            answer:
              'Ja dat kan, echter vereist het veel precisie en geduld om het goed te leggen. Wij raden aan om dit door een specialist te laten doen. Dan bent u gegarandeerd van goed resultaat met garantie.',
          },
        ],
      },
      {
        subCategory: 'Bekleden met hout',
        FAQs: [
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
              'Ja, het aanbrengen van houten bekleding kan vaak als een doe-het-zelfproject worden uitgevoerd, maar het is belangrijk om de juiste technieken en gereedschappen te gebruiken voor een mooi resultaat. Onze specialisten beschikken over alle correcte apparatuur en machines om de klus goed uit te kunnen voeren.',
          },
        ],
      },
      {
        subCategory: 'Bekleden met tapijt',
        FAQs: [
          {
            question: 'Hoe onderhoud ik tapijt het beste?',
            answer:
              'Er zijn speciale middelen om uw tapijt schoon en correct te onderhouden. Zo mag een tapijt niet nat schoongemaakt worden want dan kunnen er eventueel vlekken ontstaan. Vraag onze specialisten hoe u dit het beste wel kunt doen.',
          },
          {
            question: 'Is tapijt geschikt voor huisdieren?',
            answer:
              'Tapijt is zeer geschikt voor huisdieren. Het biedt huisdieren een veilige en slipvrije ondergrond om veilig naar boven of beneden te kunnen lopen zonder te vallen of uit te glijden.',
          },
          {
            question: 'Wat zijn de voordelen van tapijt ten opzichte van andere vloerbedekkingen?',
            answer:
              'Tapijt biedt voordelen zoals comfort, geluidsisolatie en warmte, vergeleken met harde vloeren zoals laminaat of PVC.',
          },
        ],
      },
    ],
  },
  {
    category: 'Verlichting',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Welke soorten verlichting zijn het beste voor een trap?',
            answer:
              'De beste opties zijn LED-strips, wandlampen of inbouwverlichting, omdat ze een heldere en gelijkmatige verlichting bieden zonder te veel ruimte in te nemen.',
          },
          {
            question: 'Moet ik de trapverlichting dimbaar maken?',
            answer:
              'Dimbare verlichting kan handig zijn voor het creëren van sfeer en het aanpassen van de lichtsterkte aan verschillende situaties, zoals tijdens een filmavond of een romantisch diner.',
          },
          {
            question: 'Hoe installeer ik verlichting in mijn traprenovatie?',
            answer:
              'Het installeren van trapverlichting wordt gedaan door onze specialisten die ook uw traprenovatie verzorgen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Vloeren leggen',
    subCategories: [
      {
        subCategory: 'Tapijt leggen',
        FAQs: [
          {
            question: 'Moet de ondervloer voorbereid worden voordat het tapijt gelegd kan worden?',
            answer:
              'Ja, het is belangrijk dat de ondervloer schoon, vlak en droog is voordat het tapijt gelegd wordt om een gladde en duurzame afwerking te garanderen.',
          },
          {
            question: 'Hoelang duurt het om tapijt te leggen?',
            answer:
              'Het leggen van tapijt kan meestal binnen een dag worden voltooid, afhankelijk van de grootte van de ruimte.',
          },
          {
            question: 'Kan tapijt over een bestaande vloer worden gelegd?',
            answer:
              'Tapijt kan vaak over een andere harde vloerbedekking worden gelegd, maar tapijt over tapijt wordt afgeraden.',
          },
        ],
      },
      {
        subCategory: 'Linoleum leggen',
        FAQs: [
          {
            question: 'Is de ondervloer belangrijk bij het leggen van linoleum?',
            answer:
              'Ja, de ondervloer moet vlak, schoon en droog zijn om een goede hechting en een strak resultaat te garanderen. We raden aan om de ondervloer te laten egaliseren voor het beste resultaat.',
          },
          {
            question: 'Hoe onderhoudsvriendelijk is linoleum?',
            answer:
              'Linoleum is duurzaam en eenvoudig te onderhouden, het kan regelmatig worden schoongemaakt met een vochtige dweil.',
          },
          {
            question: 'Kan linoleum op vloerverwarming gelegd worden?',
            answer:
              'Ja, linoleum is geschikt voor gebruik met vloerverwarming, mits deze gelijkmatig verdeeld wordt en niet te warm wordt.',
          },
        ],
      },
      {
        subCategory: 'Visgraat leggen',
        FAQs: [
          {
            question: 'Is een visgraatvloer geschikt voor vloerverwarming?',
            answer:
              'Ja, een visgraatvloer kan gecombineerd worden met vloerverwarming, mits de vloer op de juiste manier wordt gelegd.',
          },
          {
            question: 'Hoeveel extra materiaal heb ik nodig bij een visgraatpatroon?',
            answer:
              'Bij het leggen van een visgraatvloer wordt vaak aangeraden om 10-15% extra materiaal te bestellen vanwege snijverlies.',
          },
          {
            question: 'Wat is het verschil tussen visgraat en een standaard plankenvloer?',
            answer:
              'Een visgraatvloer heeft een uniek, diagonaal patroon, terwijl een standaard plankenvloer rechte planken parallel aan elkaar heeft.',
          },
        ],
      },
      {
        subCategory: 'Walvisgraat',
        FAQs: [
          {
            question: 'Wat is een walvisgraatvloer en hoe verschilt het van een visgraatvloer?',
            answer:
              'Een walvisgraatvloer heeft bredere en langere planken dan een traditionele visgraatvloer, wat zorgt voor een robuust en elegant patroon.',
          },
          {
            question: 'Is een walvisgraatvloer moeilijker te leggen dan andere patronen?',
            answer:
              'Ja, vanwege het unieke patroon en de grotere planken vereist een walvisgraatvloer meer precisie en vakmanschap.',
          },
          {
            question: 'Welke soorten hout zijn geschikt voor een walvisgraatvloer?',
            answer:
              'Eikenhout is een populaire keuze, maar andere houtsoorten zoals notenhout kunnen ook gebruikt worden.',
          },
        ],
      },
      {
        subCategory: 'Hongaarse punt',
        FAQs: [
          {
            question: 'Wat is het verschil tussen een Hongaarse punt en visgraatpatroon?',
            answer:
              'Het verschil zit in de hoeken: bij een Hongaarse punt worden de planken onder een hoek van 45 of 60 graden gelegd, terwijl bij visgraat de planken haaks op elkaar liggen.',
          },
          {
            question: 'Is een Hongaarse punt duurder om te leggen dan andere vloeren?',
            answer:
              'Ja, dit patroon vereist meer precisie en tijd, waardoor het vaak iets duurder is dan rechte planken.',
          },
          {
            question: 'Welke houtsoorten zijn geschikt voor een Hongaarse punt?',
            answer:
              'Eikenhout is populair, maar andere houtsoorten zoals walnoot of esdoorn kunnen ook gebruikt worden.',
          },
        ],
      },
      {
        subCategory: 'Weense punt',
        FAQs: [
          {
            question: 'Wat is een Weense punt vloer en hoe verschilt het van andere legpatronen?',
            answer:
              'Een Weense punt is vergelijkbaar met de Hongaarse punt, maar de planken worden onder een scherpe hoek van 30 graden gelegd, wat een subtieler patroon creëert.',
          },
          {
            question: 'Is een Weense punt vloer geschikt voor elk type ruimte?',
            answer:
              'Ja, het patroon kan zowel in kleine als grote ruimtes gebruikt worden om een elegante uitstraling te creëren.',
          },
          {
            question: 'Zijn er specifieke houtsoorten die beter geschikt zijn voor een Weense punt?',
            answer: 'Eiken is populair, maar andere houtsoorten zoals esdoorn en beuken kunnen ook worden gebruikt.',
          },
        ],
      },
    ],
  },
  // {
  //   category: 'Vloeren leggen',
  //   subCategories: [
  //     {
  //       subCategory: 'PVC Tegels',
  //       FAQs: [
  //         {
  //           question: 'Wat zijn de voordelen van PVC tegels ten opzichte van traditionele vloerbedekkingen?',
  //           answer:
  //             'PVC tegels zijn waterbestendig, gemakkelijk te onderhouden en beschikbaar in diverse stijlen en kleuren, waardoor ze een veelzijdige keuze zijn voor verschillende ruimtes.',
  //         },
  //         {
  //           question: 'Hoe worden PVC tegels gelegd en moet ik hiervoor een professional inhuren?',
  //           answer:
  //             'PVC tegels kunnen worden gelijmd of met een click-systeem gelegd. Voor de beste resultaten is het aan te raden om een professional in te schakelen, vooral voor grotere oppervlakken.',
  //         },
  //         {
  //           question: 'Kunnen PVC tegels op een bestaande vloer worden gelegd?',
  //           answer:
  //             'Ja, PVC tegels kunnen meestal over bestaande vloeren worden gelegd, mits de ondergrond vlak en schoon is. Het is belangrijk om eventuele oneffenheden voor te behandelen.',
  //         },
  //       ],
  //     },
  //     {
  //       subCategory: 'Mozaïek of Patroon',
  //       FAQs: [
  //         {
  //           question: 'Wat zijn de voordelen van mozaïekvloeren?',
  //           answer:
  //             'Mozaïekvloeren zijn veelzijdig, duurzaam en geven een unieke uitstraling aan elke ruimte. Ze zijn ook eenvoudig te onderhouden en verkrijgbaar in diverse materialen en ontwerpen.',
  //         },
  //         {
  //           question: 'Hoe wordt een mozaïekvloer gelegd?',
  //           answer:
  //             'Een mozaïekvloer wordt meestal in een specifiek patroon gelegd, waarbij de tegels of stukjes handmatig worden geplaatst en bevestigd met lijm of voegmiddel.',
  //         },
  //         {
  //           question: 'Is het moeilijk om een mozaïekpatroon zelf te maken?',
  //           answer:
  //             'Het maken van een mozaïekpatroon kan enige vaardigheid en geduld vereisen, vooral bij complexe ontwerpen. Voor beginners is het raadzaam om met eenvoudigere patronen te beginnen of een professional in te schakelen.',
  //         },
  //       ],
  //     },
  //     {
  //       subCategory: 'Hexagon & 3D',
  //       FAQs: [
  //         {
  //           question: 'Wat zijn de voordelen van hexagonale tegels?',
  //           answer:
  //             'Hexagonale tegels bieden een uniek en modern ontwerp, zijn veelzijdig in gebruik en kunnen een interessante visuele impact creëren in elke ruimte.',
  //         },
  //         {
  //           question: 'Kunnen hexagonale tegels binnen en buiten worden gebruikt?',
  //           answer:
  //             'Ja, hexagonale tegels zijn geschikt voor zowel binnen- als buitentoepassingen, mits ze van de juiste materialen zijn gemaakt.',
  //         },
  //         {
  //           question: 'Hoe onderhoud ik hexagonale tegels?',
  //           answer:
  //             'Het onderhoud is eenvoudig: regelmatig schoonmaken met milde reinigingsmiddelen en het toepassen van een geschikte sealer kan de levensduur verlengen.',
  //         },
  //         {
  //           question: 'Wat zijn 3D-patronen en waar worden ze gebruikt?',
  //           answer:
  //             '3D-patronen zijn ontwerpen die diepte en textuur creëren. Ze worden vaak gebruikt in vloeren, wanden en decoratieve elementen.',
  //         },
  //         {
  //           question: 'Hoe worden 3D-patronen geïnstalleerd?',
  //           answer:
  //             'De installatie kan variëren afhankelijk van het materiaal, maar meestal vereist het een nauwkeurige afstemming en soms speciale technieken om het gewenste effect te bereiken.',
  //         },
  //         {
  //           question: 'Zijn 3D-patronen moeilijk te onderhouden?',
  //           answer:
  //             'Het onderhoud van 3D-patronen hangt af van het materiaal. Over het algemeen is regelmatig schoonmaken voldoende, maar zorg voor extra aandacht bij complexe texturen.',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    category: 'Speciale vloeren',
    subCategories: [
      {
        subCategory: 'Tapis',
        FAQs: [
          {
            question: 'Wat is tapis en hoe verschilt het van andere parketvloeren?',
            answer:
              'Tapis is een traditionele vloerbedekking die is gemaakt van massief hout en vaak wordt gebruikt in complexe patronen. In tegenstelling tot andere parketvloeren biedt tapis een luxueuze uitstraling en is het vaak handgemaakt.',
          },
          {
            question: 'Kan tapis worden geïnstalleerd in vochtige ruimtes?',
            answer:
              'Tapis is minder geschikt voor vochtige ruimtes zoals badkamers of kelders, omdat hout kan uitzetten of kromtrekken. Het is beter om tapis te installeren in droge en goed geventileerde gebieden.',
          },
          {
            question: 'Hoe onderhoud ik een tapis vloer?',
            answer:
              'Regelmatig stofzuigen en het gebruik van een vochtige doek zijn essentieel. Daarnaast is het aan te raden om periodiek een houten vloerolie of -lak aan te brengen voor extra bescherming en glans.',
          },
        ],
      },
      {
        subCategory: 'Bourgogne',
        FAQs: [
          {
            question: 'Wat is het bourgondische patroon en waar wordt het gebruikt?',
            answer:
              'Het bourgondische patroon is een type vloeren-patroon dat vaak wordt gebruikt in hout- en tegelvloeren. Het staat bekend om zijn elegante en symmetrische ontwerp, wat het ideaal maakt voor zowel klassieke als moderne interieurs.',
          },
          {
            question: 'Is het moeilijk om een bourgondische vloer te leggen?',
            answer:
              'Het leggen van een bourgondische vloer vereist precisie en ervaring vanwege de complexe patronen. Het is raadzaam om een professional in te schakelen voor een nauwkeurige installatie.',
          },
          {
            question: 'Hoe onderhoud ik een bourgondische vloer?',
            answer:
              'Regelmatig schoonmaken met een zachte bezem of stofzuiger is belangrijk. Daarnaast is het aan te raden om de vloer af en toe te behandelen met de juiste onderhoudsproducten om de levensduur en uitstraling te behouden.',
          },
        ],
      },
    ],
  },
  {
    category: 'Beton Ciré',
    subCategories: [
      {
        subCategory: 'Beton Ciré Algemeen',
        FAQs: [
          {
            question: 'Hoe wordt beton ciré aangebracht?',
            answer:
              'Beton ciré is een decoratieve afwerking die wordt gemaakt van een mengsel van cement en andere materialen. Het wordt in dunne lagen aangebracht op verschillende oppervlakken zoals vloeren en muren.',
          },
          {
            question: 'Is beton ciré waterbestendig?',
            answer:
              'Ja, beton ciré kan waterbestendig zijn, maar het is belangrijk om een goede afwerking en behandeling te gebruiken om vochtproblemen te voorkomen.',
          },
          {
            question: 'Hoe onderhoud ik beton ciré?',
            answer:
              'Onderhoud omvat regelmatig schoonmaken met milde schoonmaakmiddelen en het opnieuw behandelen met een geschikt impregneermiddel om de afwerking te beschermen.',
          },
        ],
      },
      {
        subCategory: 'Beton Ciré Glamour Stuc',
        FAQs: [
          {
            question: 'Wat is beton ciré glamour stuc?',
            answer:
              'Beton ciré glamour stuc is een luxe, decoratieve afwerking die een strakke en moderne uitstraling biedt, vaak met een glanzende of metallic finish.',
          },
          {
            question: 'Hoe onderhoud ik beton ciré glamour stuc?',
            answer:
              'Het is belangrijk om het regelmatig schoon te maken met een zachte doek en milde reinigingsmiddelen om de glans en uitstraling te behouden.',
          },
          {
            question: 'Is beton ciré glamour stuc geschikt voor vochtige ruimtes?',
            answer:
              'Ja, het is waterafstotend en kan goed worden gebruikt in vochtige ruimtes zoals badkamers, mits goed aangebracht.',
          },
        ],
      },
      {
        subCategory: 'Beton Ciré Parel',
        FAQs: [
          {
            question: 'Wat is beton ciré parel?',
            answer:
              'Beton ciré parel is een luxe afwerking van beton die een glanzende, parelachtige uitstraling heeft, waardoor het ideaal is voor moderne en elegante interieurs.',
          },
          {
            question: 'Kan ik beton ciré parel gebruiken in natte ruimtes, zoals badkamers?',
            answer:
              'Ja, beton ciré parel is waterafstotend en kan veilig worden gebruikt in natte ruimtes, mits goed geïnstalleerd en behandeld.',
          },
          {
            question: 'Hoe onderhoud ik beton ciré parel?',
            answer:
              'Het onderhoud is eenvoudig: regelmatig schoonmaken met een zachte doek en milde schoonmaakmiddelen. Het is ook aan te raden om periodiek een sealer aan te brengen voor extra bescherming.',
          },
        ],
      },
      {
        subCategory: 'Beton Ciré Acoustic',
        FAQs: [
          {
            question: 'Wat is beton ciré acoustic?',
            answer:
              'Beton ciré acoustic is een speciale variant van beton ciré die ontworpen is om geluidsabsorberende eigenschappen te bieden, waardoor het ideaal is voor ruimtes waar geluidsoverlast een probleem kan zijn.',
          },
          {
            question: 'Waar kan ik beton ciré acoustic gebruiken?',
            answer:
              'Deze afwerking is geschikt voor verschillende toepassingen, waaronder wanden en plafonds in woonruimtes, commerciële gebouwen en openbare instellingen, waar akoestiek belangrijk is.',
          },
          {
            question: 'Hoe onderhoud ik beton ciré acoustic?',
            answer:
              'Het onderhoud omvat regelmatig schoonmaken met een zachte doek en een milde schoonmaakoplossing. Voor een langdurige bescherming kan periodiek een geschikte sealer worden aangebracht.',
          },
        ],
      },
    ],
  },
  {
    category: 'Trappen',
    subCategories: [
      {
        subCategory: 'Open Trappen',
        FAQs: [
          {
            question: 'Wat zijn de voordelen van een open trap?',
            answer:
              'Een open trap zorgt voor een luchtige en moderne uitstraling, vergroot de lichtinval en maakt de ruimte visueel ruimer.',
          },
          {
            question: 'Is een open trap veilig voor kinderen en huisdieren?',
            answer:
              'Hoewel open trappen aantrekkelijk zijn, kunnen ze gevaarlijk zijn voor kleine kinderen en huisdieren. Het is belangrijk om extra voorzorgsmaatregelen te nemen, zoals het installeren van hekjes of leuningen.',
          },
          {
            question: 'Hoe onderhoud ik een open trap?',
            answer:
              'Onderhoud bestaat uit regelmatig stofzuigen en afstoffen om vuil en stof te verwijderen. Bij houten trappen is het ook belangrijk om deze periodiek te schuren en te behandelen.',
          },
        ],
      },
      {
        subCategory: 'Dichte Trappen',
        FAQs: [
          {
            question: 'Wat zijn de voordelen van een dichte trap?',
            answer:
              'Dichte trappen bieden extra veiligheid en stabiliteit, vooral voor kleine kinderen en huisdieren. Ze kunnen ook beter passen in verschillende interieurstijlen en zijn vaak gemakkelijker te bekleden.',
          },
          {
            question: 'Hoe onderhoud ik een dichte trap?',
            answer:
              'Regelmatig schoonmaken met een stofzuiger of doek is belangrijk. Voor houten trappen is het nodig om deze periodiek te schuren en te behandelen om slijtage te voorkomen.',
          },
          {
            question: 'Welke bekleding is het beste voor een dichte trap?',
            answer:
              'Populaire opties zijn tapijt, laminaat of hout. De keuze hangt af van de gewenste uitstraling, comfort en gebruiksgemak.',
          },
        ],
      },
    ],
  },
  {
    category: 'Schuren en Behandelen',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Hoe vaak moet ik mijn houten vloeren schuren en behandelen?',
            answer:
              'Gemiddeld wordt dit één keer in de tien jaar gedaan, of bij een verhuizing. Dit is echter afhankelijk van het gebruik van de vloer, de ruimte en het onderhouden van de vloer. Uiteindelijk bepaalt u zelf wanneer u het tijd vindt om de vloer een nieuwe uitstraling te geven.',
          },
          {
            question: 'Welke behandelingen zijn beschikbaar na het schuren van mijn vloer?',
            answer:
              'U kunt de vloer laten oliën, hardwaxen of laten lakken. Elk heeft zijn eigen uitstraling en eigenschappen.',
          },
          {
            question: 'Kan ik zelf schuren en behandelen, of moet ik een professional inschakelen?',
            answer:
              'Wij raden aan om hier niet zelf aan te beginnen. Het inschakelen van een vakman voor het schuren en behandelen van vloeren is de beste keuze. Wij beschikken over alle machines en apparatuur om dit professioneel te kunnen uitvoeren.',
          },
        ],
      },
    ],
  },
  {
    category: 'Schuren en Schilderen',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Hoe bereid ik een oppervlak voor op schuren en schilderen?',
            answer: 'Het enige wat u hoeft te doen is ervoor zorgen dat de ruimte leeg en toegankelijk is.',
          },
          {
            question: 'Hoeveel tijd is nodig voor het drogen na het schuren voordat ik kan beginnen met schilderen?',
            answer:
              'Nadat de specialist klaar is, dient u minimaal rekening te houden met 24 uur niet betreden van de ruimte of trap.',
          },
          {
            question: 'Kan ik mijn trap laten schilderen in alle kleuren van de regenboog?',
            answer:
              'Alle kleuren zijn mogelijk, bespreek dit met ons en we sturen een collega langs met voorbeelden en stalen indien gewenst.',
          },
        ],
      },
    ],
  },
  {
    category: 'Speciale Beton Ciré Afwerkingen',
    subCategories: [
      {
        subCategory: 'Beton Ciré Brut',
        FAQs: [
          {
            question: 'Wat is beton ciré brut?',
            answer:
              'Beton ciré brut is een ruwe, onbehandelde variant van beton ciré die een industriële en authentieke uitstraling biedt, perfect voor moderne interieurs.',
          },
          {
            question: 'Is beton ciré brut geschikt voor vloeren?',
            answer:
              'Ja, beton ciré brut is zeer geschikt voor vloeren, maar het moet goed worden aangebracht en behandeld om slijtage en vlekken te voorkomen.',
          },
          {
            question: 'Hoe onderhoud ik beton ciré brut?',
            answer:
              'Onderhoud omvat regelmatig reinigen met een zachte doek en milde schoonmaakmiddelen. Het is ook belangrijk om een geschikte sealer aan te brengen voor extra bescherming.',
          },
        ],
      },
      {
        subCategory: 'Beton Ciré Croco',
        FAQs: [
          {
            question: 'Wat is beton ciré croco?',
            answer:
              'Beton ciré croco is een decoratieve afwerking met een unieke krokodillenleer-structuur, die een luxe en onderscheidende uitstraling geeft aan wanden en vloeren.',
          },
          {
            question: 'Is beton ciré croco geschikt voor vochtige ruimtes?',
            answer:
              'Ja, beton ciré croco is waterafstotend en kan in vochtige ruimtes worden toegepast, zoals badkamers, mits goed behandeld.',
          },
          {
            question: 'Hoe onderhoud ik beton ciré croco?',
            answer:
              'Het onderhoud is eenvoudig: regelmatig schoonmaken met een zachte doek en milde schoonmaakmiddelen, en periodiek een sealer aanbrengen voor extra bescherming.',
          },
        ],
      },
      {
        subCategory: 'Beton Ciré Venetiaans',
        FAQs: [
          {
            question: 'Wat is beton ciré venetiaans?',
            answer:
              'Beton ciré venetiaans is een decoratieve, cementgebonden afwerking die de uitstraling van marmer of andere natuurlijke stenen nabootst, met een luxe en elegante uitstraling.',
          },
          {
            question: 'Kan ik beton ciré venetiaans gebruiken in vochtige ruimtes?',
            answer:
              'Ja, beton ciré venetiaans is waterafstotend en kan worden toegepast in vochtige ruimtes zoals badkamers, mits correct afgewerkt met een geschikte sealer.',
          },
          {
            question: 'Hoe onderhoud ik beton ciré venetiaans?',
            answer:
              'Voor het onderhoud is het belangrijk om regelmatig schoon te maken met een milde zeep en een zachte doek. Een jaarlijkse behandeling met een sealer kan helpen de afwerking te beschermen en te laten stralen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Stofferen',
    subCategories: [
      {
        subCategory: 'Trap',
        FAQs: [
          {
            question: 'Kunnen jullie ook de zijkanten stofferen?',
            answer:
              'Wij kunnen uw trap met of zonder zijkanten stofferen. Eventuele overlopen of plateaus kunnen ook worden meegenomen indien gewenst.',
          },
          {
            question: 'Hoe kan ik de veiligheid van mijn trap verbeteren?',
            answer:
              'Veiligheid kan worden verbeterd door antislipmaterialen te gebruiken, goede verlichting te installeren en trapleuningen te plaatsen op de juiste hoogte.',
          },
          {
            question: 'Wat zijn de kosten van traprenovatie?',
            answer:
              'De kosten variëren afhankelijk van het type trap, het materiaal en de complexiteit van de renovatie. Zo is een dichte trap minder ingewikkeld dan een open trap.',
          },
        ],
      },
      {
        subCategory: 'Vloer',
        FAQs: [
          {
            question: 'Welke soorten vloeren zijn er beschikbaar?',
            answer:
              'Er zijn meerdere soorten tapijt beschikbaar, in alle kleuren en soorten, zowel hoogpolig als laagpolig. Wij adviseren u graag over wat het beste bij u past.',
          },
          {
            question: 'Hoe onderhoud ik mijn vloer het beste?',
            answer:
              'Het onderhoud hangt af van het type vloer. Regelmatig stofzuigen, vegen en af en toe diep reinigen met geschikte producten zijn belangrijk.',
          },
          {
            question: 'Kunnen jullie ook tapijt leggen in mijn bedrijfspand?',
            answer:
              "Graag helpen wij u met het leggen van elk soort tapijt in elke mogelijke ruimte, zoals scholen, bedrijfspanden, hotels, spa's en meer.",
          },
        ],
      },
      {
        subCategory: 'Tapijttegels',
        FAQs: [
          {
            question: 'Wat zijn de voordelen van tapijttegels?',
            answer:
              'Tapijttegels bieden flexibiliteit in ontwerp, zijn gemakkelijk te vervangen bij schade en zorgen voor geluidsisolatie en comfort.',
          },
          {
            question: 'Hoe worden tapijttegels gelegd?',
            answer:
              'Tapijttegels kunnen eenvoudig worden gelegd op een vlakke ondergrond met lijm of een zelfklevende onderzijde, wat het proces versnelt.',
          },
          {
            question: 'Zijn tapijttegels gemakkelijk te onderhouden?',
            answer:
              'Ja, tapijttegels zijn eenvoudig te onderhouden; regelmatig stofzuigen en af en toe reinigen met een geschikte tapijtreiniger is meestal voldoende.',
          },
        ],
      },
    ],
  },
  {
    category: 'Reinigingsservice',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Welke soorten stoffen kunnen worden gereinigd?',
            answer:
              'Onze reinigingsservice kan een breed scala aan stoffen behandelen, waaronder katoen, polyester en microvezel. Neem contact met ons op voor specifieke informatie.',
          },
          {
            question: 'Hoelang duurt het om meubels te reinigen?',
            answer:
              'De tijdsduur voor het reinigen van meubels varieert, afhankelijk van de grootte en de stof. Meestal duurt het enkele uren tot een dag.',
          },
          {
            question: 'Is de reinigingsdienst veilig voor huisdieren en kinderen?',
            answer:
              'Ja, wij gebruiken milieuvriendelijke en niet-giftige reinigingsproducten die veilig zijn voor zowel huisdieren als kinderen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Vloer verwijderen',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Wat is de beste manier om tapijt te verwijderen?',
            answer:
              'Tapijt verwijderen is vaak een zware klus. Wij raden aan om dit niet zelf te doen om schade te voorkomen.',
          },
          {
            question: 'Hoe kan ik de lijmresten van de ondervloer verwijderen?',
            answer: 'Wij kunnen dit voor u wegschuren met speciaal daarvoor geschikte zware machines.',
          },
          {
            question: 'Kan ik mijn vloer zelf verwijderen, of is het beter om een professional in te schakelen?',
            answer:
              'Dit hangt af van uw ervaring en de complexiteit van de vloer. Voor moeilijkere vloeren of grote oppervlakken is het verstandig om een professional in te huren.',
          },
        ],
      },
    ],
  },
  {
    category: 'Overig',
    subCategories: [
      {
        subCategory: 'Vloerverwarming',
        FAQs: [
          {
            question: 'Wat zijn de voordelen van vloerverwarming?',
            answer:
              'Vloerverwarming zorgt voor een gelijkmatige warmteverdeling, verhoogt het comfort en kan energiezuiniger zijn dan traditionele radiatoren.',
          },
          {
            question: 'Is vloerverwarming geschikt voor elke vloerbedekking?',
            answer:
              'Ja, maar het is belangrijk om te controleren of de gekozen vloerbedekking, zoals tegels of laminaat, geschikt is voor vloerverwarming.',
          },
          {
            question: 'Hoeveel kost het om vloerverwarming te installeren?',
            answer:
              'De kosten variëren afhankelijk van het type systeem, de oppervlakte en de installatiemethode, maar het is een investering die zich op de lange termijn terugbetaalt.',
          },
        ],
      },
      {
        subCategory: 'Egaliseren',
        FAQs: [
          {
            question: 'Wat is het doel van egaliseren?',
            answer:
              'Het egaliseren van een vloer zorgt voor een vlakke, stevige ondergrond, waardoor de vloerbedekking beter kan worden aangebracht en ongelijkheden worden verminderd.',
          },
          {
            question: 'Hoelang duurt het egaliseren van een vloer?',
            answer:
              'De duur hangt af van de grootte van de ruimte en de gebruikte egalisatieproducten, maar meestal duurt het proces enkele uren tot een dag.',
          },
          {
            question: 'Kan ik zelf een vloer egaliseren, of is het beter om een professional in te schakelen?',
            answer:
              'Zelf egaliseren is mogelijk met de juiste kennis en materialen, maar voor de beste resultaten is het vaak raadzaam om een professional in te schakelen.',
          },
        ],
      },
      {
        subCategory: 'Natuursteen behandelen',
        FAQs: [
          {
            question: 'Hoe kan ik mijn natuurstenen vloer het beste schoonmaken?',
            answer:
              'Gebruik een pH-neutrale schoonmaakmiddel en vermijd agressieve chemicaliën die het oppervlak kunnen beschadigen.',
          },
          {
            question: 'Moet ik mijn natuursteen impregneren?',
            answer:
              'Ja, impregneren helpt om het steen te beschermen tegen vlekken en vocht, waardoor de levensduur wordt verlengd.',
          },
          {
            question: 'Hoe vaak moet ik mijn natuursteen opnieuw behandelen?',
            answer:
              'Dit hangt af van het gebruik en de slijtage, maar meestal is het aan te raden om elke 1-3 jaar opnieuw te behandelen.',
          },
        ],
      },
    ],
  },
  {
    category: 'Opslag',
    subCategories: [
      {
        subCategory: '',
        FAQs: [
          {
            question: 'Wat is de beste manier om meubels op te slaan?',
            answer:
              'Zorg ervoor dat meubels schoon en droog zijn voordat je ze opbergt. Gebruik dekens of afdekzeilen om ze te beschermen tegen stof en krassen. U kunt dit in de garage zetten, in een partytent, maar u kunt hiervoor ook een container huren om tijdelijk de meubels voor de deur op te slaan.',
          },
          {
            question: 'Hoelang kan ik mijn spullen veilig opslaan?',
            answer:
              'De meeste spullen kunnen langdurig worden opgeslagen, maar het is belangrijk om regelmatig te controleren op schimmel, vocht en ongedierte.',
          },
          {
            question: 'Moet ik mijn opgeslagen spullen verzekeren?',
            answer:
              'Ja, het is verstandig om een verzekering te overwegen voor waardevolle spullen om financiële verliezen te voorkomen. Echter gaat het bij een renovatie vaak, maar om enkele dagen tot enkele weken.',
          },
        ],
      },
    ],
  },
];

const FAQCategories: React.FC<{ selectedCategory: string; setSelectedCategory: Dispatch<SetStateAction<string>> }> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-col gap-[11px] w-fit lg:w-full  max-w-[198px]">
      <BodyTextSemibold className="text-black20 text-opacity-40">Filteren op</BodyTextSemibold>
      {faqs.map((item) => {
        return (
          <div
            key={item.category}
            onClick={() => setSelectedCategory(item.category)}
            className={clsx(
              'py-[11px] cursor-pointer px-1 lg:px-[22px] border border-blackDark   rounded-[27px] border-opacity-20 ',
              {
                'border-primaryDefault border-opacity-95 ': selectedCategory === item.category,
              }
            )}
          >
            <BodyTextSemibold className="text-xs text-center lg:text-start lg:text-base">
              {item.category}
            </BodyTextSemibold>
          </div>
        );
      })}
    </div>
  );
};

export const AllFAQsUI = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(faqs[0].category);
  const [searchedText, setSearchedText] = useState('');
  const selectedCategoryData = faqs.find((item) => item.category === selectedCategory);
  const displayedFAQs: FAQSubCategory[] | undefined = faqs
    .find((faqCategory) => faqCategory.category === selectedCategory)
    ?.subCategories.map(({ FAQs, subCategory }) =>
      searchedText.length
        ? { FAQs: FAQs.filter((faq) => faq.question.includes(searchedText)), subCategory }
        : { FAQs, subCategory }
    );

  return (
    <div className="flex px-1 flex-col py-24 w-full max-w-[1200px] gap-[44px]">
      <div className="flex py-[21px] gap-3 px-[16px] bg-white ">
        <SearchIcon />
        <input
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
          className="outline-none w-full focus:outline-none "
          placeholder="Zoeken"
        ></input>
      </div>
      <div className="flex gap-1 lg:gap-[107px] w-fit">
        <FAQCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className="flex flex-col gap-[77px]">
          {selectedCategoryData &&
            displayedFAQs?.length &&
            displayedFAQs?.map((item) => (
              <div className="flex flex-col gap-[22px]" key={item.subCategory}>
                <HeadlineSemibold>{item.subCategory}</HeadlineSemibold>
                <div className="flex flex-col gap-[11px]">
                  {item.FAQs.map((FAQ) => (
                    <FAQCard key={FAQ.question} {...FAQ} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
