import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';

type CoreValueCardProps = {
  title: string;
  paragraph: string;
};

const coreValuesInfo: CoreValueCardProps[] = [
  {
    title: 'Betrouwbaar en redelijk',
    paragraph:
      'U kunt van ons altijd een duidelijke, betrouwbare en redelijke offerte en opdrachtbeschrijving verwachten. Zodat de opdrachtbeschrijving duidelijk is voor beide partijen, zonder onverwachte kosten achteraf.',
  },
  {
    title: 'Klantgericht',
    paragraph:
      'Wij vinden duidelijkheid en transparantie tijdens het proces erg belangrijk. Daarom krijgt elke klant van ons een duidelijke planning voordat gestart wordt met de werkzaamheden. Zo weet u precies wanneer we aan het werk zijn en hoe lang de werkzaamheden zullen duren. Na afloop bespreken we de uitgevoerde werkzaamheden met bijbehorend advies voor de toekomst en eventueel onderhoud.',
  },
  {
    title: 'Duurzaam',
    paragraph:
      'Duurzaamheid is een belangrijk onderdeel van onze werkwijze. We kiezen bewust voor milieuvriendelijke materialen en technieken die de impact op het milieu minimaliseren. Door duurzame keuzes te maken, dragen we bij aan een betere toekomst en zorgen we ervoor dat onze projecten niet alleen nu, maar ook in de toekomst van waarde blijven. We streven ernaar om verantwoorde keuzes te maken die zowel goed zijn voor onze klanten als voor de planeet. We heten niet voor niets GreenTeam!',
  },
  {
    title: 'Transparant',
    paragraph:
      'Na afloop van de werkzaamheden ontvangt u de factuur met bijbehorend advies voor de toekomst en eventueel onderhoud. Alle werkzaamheden worden door Green Team nauwkeurig bijgehouden en opgeslagen, zodat wij altijd weten wat de staat van een door ons behandelde vloer is.',
  },
];

const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, paragraph }) => {
  return (
    <div className="flex  lg:max-w-[284px] border-2 rounded-[10px] border-black10 border-opacity-10 flex-col  py-[33px] px-[22px] gap-[11px]">
      <HeadlineSemibold className="text-primaryDefault">{title}</HeadlineSemibold>
      <BodyText>{paragraph}</BodyText>
    </div>
  );
};

export const CoreValues = () => {
  return (
    <div className="flex flex-col w-full gap-10 py-14 items-center justify-center">
      <H2 className="text-primaryDefault">Onze Kernwaarden</H2>
      <div className="flex flex-col lg:flex-row gap-5 px-7">
        {coreValuesInfo.map((coreInfo) => (
          <CoreValueCard {...coreInfo} key={coreInfo.title} />
        ))}
      </div>
    </div>
  );
};
