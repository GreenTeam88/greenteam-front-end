import { InfoCardProps, OrangeInfoCard } from './cards';

const config: InfoCardProps = {
  title: 'Vloerenleggen',
  imgSrc: '/diensten/Vloerenleggen.png',
  buttonText: 'Meer informatie',
  secondBtnText: 'Direct offerte berekenen',
  paragraphs: [
    <>
      Een vloer laten afwerken met olie laat je natuurlijk doen door een professional. De parketteurs van Green Team
      maken voor alle behandelingen gebruik van professionele en hoogwaardige machines, ook voor het in- en uitboenen
      van de olie. Op deze manier zorgen wij ervoor dat de olie diep in de vloer trekt.
    </>,
    <>
      Een houten vloer met olie behandelen zorgt voor een natuurlijke uitstraling. Een behandeling met olie zorgt voor
      een goede bescherming van de houten vloer.
      <span className="text-secondaryDefault">
        {' '}
        Ook is het mogelijk om een met olie behandelde vloer plaatselijk krassen, vlekken of slijtage bij te werken.
      </span>
    </>,
    <>
      {' '}
      Als de houtsoort van de vloer dat toelaat dan is het zelfs mogelijk om kleur aan te brengen bij een afwerking met
      olie. Ben je niet zeker van de kleur? Geen probleem, de parketteurs van Green Team kunnen meerdere kleuren
      meenemen zodat jij ter plaatse nog de juiste keuze kunt maken. Wij adviseren je graag.
    </>,
  ],
};

export const Vloerenleggen = () => {
  return <OrangeInfoCard {...config} />;
};
