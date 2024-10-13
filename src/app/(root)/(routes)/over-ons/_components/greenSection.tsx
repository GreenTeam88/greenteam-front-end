import { PrimaryOutlinedBtnLink } from '@/components/theme/buttons';
import { BodyText } from '@/components/theme/typography';

export const GreenSection = () => {
  return (
    <div className="flex relative lg:justify-end bg-primaryDefault items-center lg:items-start lg:bg-white   h-fit  py-5 lg:px-0 lg:py-0 px-4 flex-col lg:flex-row w-full">
      <div
        style={{ width: '80vw' }}
        className=" lg:absolute top-0 left-0 justify-center lg:justify-start flex     overflow-visible  h-full lg:-ml-[7%]"
      >
        <img className=" hidden w-full h-full  lg:block object-cover" src="/aboutUs/greenBg.png" />
        <div className="lg:absolute gap-5 py-4 max-w-[70%] relative  lg:py-0 lg:top-1/2 items-center lg:items-start lg:-translate-y-1/2 lg:left-[20%] flex flex-col xl:gap-[33px] lg:gap-[8px]">
          <h3 className="text-xl  max-w-full text-center lg:text-start   lg:text-[1.5vw] text-white lg:leading-[1.5vw]  tracking-[-2%] ">
            20 jaar ervaring in trap en vloerrenovatieVan eenmanszaak naar{' '}
            <span className="font-semibold">landelijke specialist. </span>{' '}
          </h3>
          <BodyText className="text-white text-center lg:text-start max-w-full">
            Bij Green Team zetten we ons al 20 jaar lang dag in dag uit in om vloeren een tweede leven te geven. Met al
            onze ervaring zijn wij dan ook dé specialist voor wat betreft het renoveren van vloeren. Wij zijn
            uitgegroeid van een eenmanszaak tot een volwaardig bedrijf met vestigingen door heel Nederland. De groei van
            Green Team komt voort uit de gedachte dat er altijd iets beter kan, wij willen ons graag onderscheiden van
            andere aanbieders op de markt. Dit doen wij door continu in beweging te blijven en te optimaliseren tijdens
            het volgen van onze missie om de wereld een stukje groener en beter te maken.
          </BodyText>
          <PrimaryOutlinedBtnLink href="/zakelijk" className="lg:py-2">
            Dat wil ik!
          </PrimaryOutlinedBtnLink>
        </div>
      </div>

      <div className="items-center hidden lg:flex justify-center w-[25vw] bg-white h-[383px]">
        <img src="/aboutUs/greenImg.png" className="   " />
      </div>
    </div>
  );
};
