import { OrangeInfoCard } from '../../diensten/_components/cards';

export const PartnerShipSection = () => {
  return (
    <OrangeInfoCard
      contentContainerClassName="max-w-[392px]"
      className="lg:flex-row-reverse"
      title="Green Team als dé groene zakenpartner voor uw bedrijf"
      buttonText="Offerte aanvragen"
      buttonLink="/offerte"
      imgSrc="/zakelijk/partnership.png"
      paragraphs={[
        <>
          Vertrouwd: Altijd één aanspreekpunt, wel zo vertrouwd. Duurzaam: Samen met onze klanten bewust bezig zijn met
          een betere wereld. Snel: De werkzaamheden worden snel en vakkundig uitgevoerd met oog voor kwaliteit.
          Expertise: Al onze parketteurs hebben veel ervaring en zijn gecertificeerde vakmensen.
        </>,
      ]}
    />
  );
};
