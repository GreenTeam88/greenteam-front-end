import { PrimaryBtn } from '@/components/theme/buttons';
import { PrimaryInput } from '@/components/theme/inputs';

export const SubmissionForm = () => {
  return (
    <div className="flex  px-2 border-t gap-7 border-[#E0E0E0] py-6 flex-wrap w-full flex-col">
      <div className="flex w-full gap-1 ">
        <div className="bg-primaryDefault w-[25px] h-[25px] rounded-[4px] text-sm text-white flex items-center justify-center ">
          2
        </div>
        <h3 className="text-text text-lg font-semibold">Vul uw gegevens in & bestel </h3>
      </div>
      <div className="flex flex-col lg:flex-row py-8 gap-5 items-stretch">
        <form className="flex flex-col max-w-[552px] gap-4">
          <PrimaryInput
            labelText="In welke ruimtes(s) gaat u het tapijt leggen?"
            placeholder="Bijv. woonkamer en hal"
          />
          <PrimaryInput labelText="Naam" placeholder="Uw volledige naam" />
          <PrimaryInput labelText="E-mail" placeholder="Uw emailadres" />
          <PrimaryInput labelText="Telef  oonnummer" placeholder="0612345678" />
          <PrimaryInput labelText="Straatnaam" placeholder="Kerkstraat" />
          <PrimaryInput labelText="Huisnummer + toevoeging" placeholder="10 B2" />
          <PrimaryInput labelText="Postcode" placeholder="5462 GH" />
          <PrimaryInput labelText="Plaats" />
          <div className="py-4">
            <p className="text-[#212529]">
              Door kleurstalen aan te vragen, ontvang je ook inspiratie, aanbiedingen en persoonlijke updates per
              e-mail. Afmelden kan altijd.
            </p>
          </div>
          <PrimaryBtn>Gratis kleurstalen aanvragen</PrimaryBtn>
        </form>
        <div className="flex  items-stretch justify-end pb-28 flex-col">
          <img className="w-[525px] h-[525px]" src="/experience/book.png" />
        </div>
      </div>
    </div>
  );
};
