import Link from 'next/link';

import { BodyTextSemibold, H1 } from '@/components/theme/typography';

export const PrivacyPolicyText = () => {
  return (
    <div className="flex gap-[44px] py-14 flex-col px-10  lg:flex-row ">
      <div className="flex max-w-full lg:w-[901px] flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <H1 className="text-primaryDefault">Privacy policy</H1>
          <p className="text-[#13113599] text-opacity-60">Laatst bijgewerkt: Januari 2024</p>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">Dagelijkse werking</h3>
          <div className="listContainer">
            <p className="listItem">
              Dit privacybeleid heeft betrekking op de website van GreenTeam, gepubliceerd als www.greenteam.nl, als ook
              de diensten die wij met deze website aanbieden. Via deze diensten worden persoonsgegevens verzameld en
              verwerkt. Op het verwerken van persoonsgegevens is de Algemene Verordening Gegevensbescherming, kortweg
              AVG, van toepassing. GreenTeam maakt gebruik van persoonsgegevens en dient zich daarom te houden aan de
              AVG. GreenTeam respecteert uw privacy, in het bijzonder uw rechten met betrekking tot de verwerking van
              persoonsgegevens. Vanwege volledige transparantie hebben wij daarom een beleid geformuleerd en
              geïmplementeerd met betrekking tot deze verwerkingen zelf, het doel ervan, alsook de mogelijkheden voor
              betrokkenen om hun rechten zo goed mogelijk te kunnen uitoefenen. De huidige op de website beschikbare
              versie van het privacybeleid is de enige versie die van toepassing is zolang u de website bezoekt, totdat
              een nieuwe versie de huidige versie vervangt.
            </p>
          </div>
        </div>

        <div className="boxClassname">
          <h3 className="boxTitle">Persoonsgegevens die wij verwerken</h3>
          <div className="listContainer">
            <p className="listItem">
              GreenTeam verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf
              aan ons verstrekt. GreenTeam kan bijvoorbeeld de volgende persoonsgegevens verwerken:
            </p>
            <ul className="list-disc list-inside">
              <li>Uw voor- en achternaam</li>
              <li>Uw adresgegevens</li>
              <li>Uw telefoonnummer</li>
              <li>Uw e-mailadres</li>
              <li>Uw IP-adres</li>
            </ul>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">Doeleinden voor het verzamelen van informatie </h3>
          <div className="listContainer">
            <p className="listItem">
              GreenTeam verwerkt uw persoonsgegevens om contact met u op te kunnen nemen als u daar om verzoekt, en/of
              om u schriftelijk (per e-mail en/of per post) te kunnen benaderen. Daarnaast kan GreenTeam uw
              persoonsgegevens gebruiken in het kader van het uitvoeren van een met u gesloten overeenkomst.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">Delen van persoonsgegevens met derden</h3>
          <div className="listContainer">
            <p className="listItem">
              GreenTeam verstrekt uw persoonsgegevens alleen aan derden indien dit noodzakelijk is voor de uitvoering
              van een overeenkomst met u, of om te voldoen aan een wettelijke verplichting.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">Bewaartermijnen</h3>
          <div className="listContainer">
            <p className="listItem">
              GreenTeam bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor
              uw gegevens worden verzameld. Uw gegevens worden niet langer dan vijf jaar bewaard indien er geen
              overeenkomst met u tot stand komt.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">Beveiligen</h3>
          <div className="listContainer">
            <p className="listItem">
              GreenTeam neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies,
              onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. De website van
              GreenTeam maakt gebruik van een betrouwbaar SSL Certificaat om te borgen dat uw persoonsgegevens niet in
              verkeerde handen vallen. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen
              zijn van misbruik, of indien u meer informatie wenst over de beveiliging van de door Green Team verzamelde
              persoonsgegevens, neem dan contact op met ons via info@greenteam.nl.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">Gegevens inzien, aanpassen of verwijderen</h3>
          <div className="listContainer">
            <p className="listItem">
              De toepasselijke Algemene Verordening Gegevensbescherming geeft u het recht op informatie en toegang tot
              uw persoonsgegevens, recht op het corrigeren of verwijderen van persoonsgegevens, recht op beperking van
              de verwerking van persoonsgegevens en het recht op overdraagbaarheid van deze gegevens. Ook heeft u het
              recht om bezwaar te maken tegen de verwerking van uw persoonsgegevens wanneer deze worden verwerkt voor
              directe marketingdoeleinden of als de verwerking is gebaseerd op een legitiem belang. De toestemming voor
              het gebruiken van persoonsgegevens kan op elk moment worden ingetrokken, indien de verwerking is gebaseerd
              op de gegeven toestemming. U kunt bij ons een verzoek indienen om persoonsgegevens die wij van u
              beschikken in een computerbestand naar u of een ander, door u genoemde organisatie, te sturen. U kunt een
              verzoek tot inzage correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot
              intrekking van jouw toestemming of bezwaar op de verwerking van de persoonsgegevens sturen naar
              info@greenteam.nl. Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen wij om een
              kopie van je identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine
              readable zone – de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN)
              zwart. Dit ter bescherming van uw privacy. We reageren zo snel mogelijk, maar binnen vier weken, op uw
              verzoek. Green Team wil u er tevens op wijzen dat u de mogelijkheid heeft om een klacht in te dienen bij
              de nationale toezichthouder, de Autoriteit Persoonsgegevens. Meer informatie vindt u op de volgende
              website:
            </p>
            <p className="listItem">
              https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[11px]">
        <BodyTextSemibold className="text-blackDark text-opacity-40">Inhoudsopgave</BodyTextSemibold>
        <h3 className="text-blackDark text-sm">1. Definities</h3>
        <h3 className="text-blackDark text-sm">
          2. Toepasselijkheid{' '}
          <Link href="/algemene-voorwaarden" className="hover:text-primaryDefault">
            algemene voorwaarden
          </Link>
        </h3>
        <h3 className="text-blackDark text-sm">3. Offertes en totstandkoming overeenkomst</h3>
        <h3 className="text-blackDark text-sm">4. Prijzen en tarieven</h3>
        <h3 className="text-blackDark text-sm">5. Betalingen en betalingstermijnen</h3>
      </div>
    </div>
  );
};
