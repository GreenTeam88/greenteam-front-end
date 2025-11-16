import { SmallDoneIcon } from '@/components/icons/done';

export const TextSection = () => {
  return (
    <div className="flex flex-col py-14 gap-5">
      <h3 className="text-[#212529] font-semibold text-[36px]">Gratis kleurstalen — Kies, bestel en ervaar thuis.</h3>
      <p className="text-[#212529]">
        Ontdek uw perfecte vloer. Vraag gratis stalen aan en ervaar zelf de kleur, stof en structuur.
      </p>
      <div className="flex my-3 flex-col text-[#212529]  gap-2">
        <p>
          <div className="inline-flex px-2">
            <SmallDoneIcon />
          </div>
          Kies tot 3 kleurstalen
        </p>
        <p>
          <div className="inline-flex px-2">
            <SmallDoneIcon />
          </div>
          Vul uw gegevens in{' '}
        </p>
        <p>
          <div className="inline-flex px-2">
            <SmallDoneIcon />
          </div>
          Ontvang ze gratis binnen 5 dagen thuis{' '}
        </p>
      </div>
    </div>
  );
};
