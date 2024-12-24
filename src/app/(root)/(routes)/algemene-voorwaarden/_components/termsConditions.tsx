import Link from 'next/link';

import { BodyTextSemibold, H1 } from '@/components/theme/typography';

export const TermsConditions = () => {
  return (
    <div className="flex gap-[44px] py-14 flex-col-reverse px-10  lg:flex-row ">
      <div className="flex max-w-full lg:w-[901px] flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <H1 className="text-primaryDefault">Algemene voorwaarden</H1>
          <p className="text-[#13113599] text-opacity-60"></p>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">1. Definities</h3>
          <div className="listContainer">
            <p id="2" className="listItem">
              1.1. GreenTeam: de gebruiker van deze algemene voorwaarden, gevestigd te Capelle aan den IJssel onder
              KvK-nummer 76815889.
            </p>
            <p className="listItem">
              1.2. Opdrachtgever: de natuurlijke of rechtspersoon met wie GreenTeam een overeenkomst heeft gesloten of
              beoogt te sluiten.
            </p>
            <p className="listItem">
              1.3. Consument: de opdrachtgever als bedoeld in het vorige lid die niet handelt in de uitoefening van een
              beroep of bedrijf.
            </p>
            <p className="listItem">1.4. Partijen: GreenTeam en de opdrachtgever tezamen.</p>
            <p className="listItem">
              1.5.Overeenkomst: iedere tussen GreenTeam en de opdrachtgever tot stand gekomen overeenkomst, waarmee
              GreenTeam zich verbindt tot het leveren van zaken en/of verrichten van werkzaamheden.
            </p>
            <p className="listItem" id="Definities">
              1.6. Schriftelijk: zowel traditionele schriftelijke communicatie als communicatie per e-mail.
            </p>
          </div>
        </div>

        <div className="boxClassname">
          <h3 className="boxTitle">2. Toepasselijkheid algemene voorwaarden</h3>
          <div className="listContainer">
            <p className="listItem">
              2.1.Overeenkomst: iedere tussen GreenTeam en de opdrachtgever tot stand gekomen overeenkomst, waarmee
              GreenTeam zich verbindt tot het leveren van zaken en/of verrichten van werkzaamheden.
            </p>
            <p className="listItem" id="3">
              2.2.Afwijkingen op deze algemene voorwaarden zijn slechts geldig indien deze schriftelijk tussen GreenTeam
              en opdrachtgever zijn overeengekomen. Afwijkingen van deze algemene voorwaarden gelden slechts éénmalig en
              alleen voor de offerte of overeenkomst waarop de betreffende afwijking betrekking heeft.
            </p>
            <p className="listItem">
              2.3.Partijen sluiten de toepasselijkheid van aanvullende en/of afwijkende algemene voorwaarden van de
              opdrachtgever of van derden uitdrukkelijk uit.
            </p>
            <p className="listItem">
              2.4.Indien één of meerdere bepalingen in deze algemene voorwaarden nietig zijn of vernietigd worden,
              blijven de overige bepalingen van deze algemene voorwaarden volledig van toepassing. GreenTeam en
              opdrachtgever zullen alsdan in overleg treden teneinde nieuwe bepalingen ter vervanging van de nietige
              c.q. vernietigde bepalingen overeen te komen, waarbij, indien en voor zover mogelijk het doel en de
              strekking van de oorspronkelijke bepaling in acht worden genomen.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">3. Offertes en totstandkoming overeenkomst</h3>
          <div className="listContainer">
            <p className="listItem">
              3.1. De offertes van GreenTeam zijn geldig gedurende een termijn van maximaal 30 dagen na dagtekening van
              de offerte, tenzij anders aangegeven. Green Team is slechts aan de door haar gedane offertes gebonden
              indien aanvaarding van de offerte binnen 30 dagen na dagtekening van de offerte schriftelijk door de
              opdrachtgever aan GreenTeam wordt bevestigd.
            </p>
            <p className="listItem">
              3.2. De overeenkomst tussen GreenTeam en de opdrachtgever komt tot stand na ondertekening van de offerte
              door beide partijen of zodra GreenTeam een begin maakt met de uitvoering daarvan.
            </p>
            <p className="listItem" id="4">
              3.3. Indien aanvaarding van de offerte door opdrachtgever (op ondergeschikte punten) afwijkt van het in de
              offerte opgenomen aanbod is GreenTeam daaraan niet gebonden. De overeenkomst komt dan niet in
              overeenstemming met deze afwijkende aanvaarding tot stand, tenzij GreenTeam hiermee schriftelijk akkoord
              gaat.
            </p>
            <p className="listItem">
              3.4. GreenTeam spant zich in het aanbod zo volledig en nauwkeurig mogelijk samen te stellen.
              Ondergeschikte afwijkingen in onder meer beschrijvingen, tekeningen en/of andere specificaties binden
              GreenTeam niet.
            </p>
            <p className="listItem">
              3.5. GreenTeam spant zich in het aanbod zo volledig en nauwkeurig mogelijk samen te stellen.
              Ondergeschikte afwijkingen in onder meer beschrijvingen, tekeningen en/of andere specificaties binden
              GreenTeam niet.
            </p>
            <p className="listItem">
              3.6. Gedane offertes en prijsopgaven gelden niet automatisch voor toekomstige opdrachten.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">4. Prijzen en tarieven</h3>
          <div className="listContainer">
            <p className="listItem">
              3.1. Tenzij de opdrachtgever consument is, zijn de door GreenTeam opgegeven prijzen en tarieven exclusief
              omzetbelasting en eventuele andere van overheidswege opgelegde heffingen. De prijzen en tarieven gelden
              voor de in de opdrachtbevestiging/offerte genoemde overeenkomst conform de opgegeven specificaties en de
              opgegeven periode(n).
            </p>
            <p className="listItem">
              3.2. Indien de opdracht op locatie bij de opdrachtgever wordt uitgevoerd zijn de kosten met betrekking tot
              gas, water en elektra voor rekening van de opdrachtgever.
            </p>
            <p className="listItem">
              3.3. Partijen kunnen bij het tot stand komen van de overeenkomst een vaste prijs overeenkomen. Indien geen
              vaste prijs wordt overeengekomen, zal de prijs worden vastgesteld op grond van het werkelijk bestede
              aantal uren. De prijs wordt alsdan berekend volgens de gebruikelijke uurtarieven van GreenTeam, geldende
              voor de periode waarin de werkzaamheden worden verricht, tenzij een daarvan schriftelijk een afwijkend
              uurtarief is overeengekomen.
            </p>
            <p className="listItem">
              3.4. Bij iedere opdracht kunnen de door de opdrachtgever verschuldigde kosten periodiek, op een door
              GreenTeam bij het aangaan van de overeenkomst aangegeven wijze, in rekening worden gebracht.
            </p>
            <p className="listItem">
              3.5. GreenTeam heeft te allen tijde het recht alle kostprijsverhogende factoren die zijn ontstaan na het
              doen uitbrengen van de offerte, dan wel de totstandkoming van de overeenkomst aan de opdrachtgever in
              rekening te brengen. Indien opdrachtgever een consument is, heeft de consument het recht de overeenkomst
              te ontbinden indien de (kost)prijsverhoging door de opdrachtnemer wordt gewenst binnen 3 maanden nadat de
              overeenkomst tot stand is gekomen.
            </p>
            <p className="listItem" id="5">
              3.6. Elke opdrachtgever is in geval van een prijsstijging van het vaste honorarium of uurtarief van meer
              dan 10% gerechtigd de overeenkomst te ontbinden. De opdrachtgever is niet gerechtigd de overeenkomst te
              ontbinden, indien de bevoegdheid tot verhoging van het vaste honorarium of uurtarief voortvloeit uit een
              bevoegdheid ingevolge de wet.
            </p>
            <p className="listItem">
              3.7. GreenTeam zal de opdrachtgever schriftelijk van het voornemen tot verhoging van het vaste honorarium
              of uurtarief op de hoogte stellen. GreenTeam zal daarbij de omvang van, en de datum waarop de
              prijsverhoging zal ingaan, vermelden.
            </p>
            <p className="listItem">
              3.8. Indien de opdrachtgever de door GreenTeam kenbaar gemaakte verhoging van het vaste honorarium of
              uurtarief van meer dan 10% niet wenst te aanvaarden, is de opdrachtgever gerechtigd binnen 14 dagen na de
              bedoelde kennisgeving de overeenkomst schriftelijk te ontbinden tegen de in de kennisgeving van GreenTeam
              genoemde datum waarop de prijs- of tariefsaanpassing in werking zou treden.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">5. Betalingen en betalingstermijnen</h3>
          <div className="listContainer">
            <p className="listItem">
              5.1. Betaling dient te geschieden binnen veertien (14) dagen na factuurdatum, op een door GreenTeam aan te
              geven wijze. Alle betalingstermijnen zijn te beschouwen als fatale termijnen, tenzij uitdrukkelijk
              schriftelijk anders is overeengekomen.
            </p>
            <p className="listItem">
              5.2. Bij overschrijding van een overeengekomen betalingstermijn wordt de volledige vordering tot betaling
              direct opeisbaar.
            </p>
            <p className="listItem">
              5.3. Elke bevoegdheid van de opdrachtgever tot verrekening of opschorting, uit welke hoofde en om welke
              reden dan ook, wordt uitdrukkelijk uitgesloten.
            </p>
            <p className="listItem">
              5.4. Indien de opdrachtgever niet, niet tijdig of niet volledig betaalt, is hij zonder voorafgaande
              ingebrekestelling in verzuim en wordt hij over het openstaande factuurbedrag de wettelijke rente
              verschuldigd.
            </p>
            <p className="listItem">
              5.5. Indien een opdrachtgever (consument of ondernemer) in verzuim is in de (tijdige) nakoming van zijn
              verplichtingen, dan komen alle buitengerechtelijke kosten, die worden berekend volgens het Besluit
              vergoeding voor buitengerechtelijke incassokosten 2012, voor rekening van voormelde opdrachtgever,
              onverminderd de aan Green Team overigens toekomende rechten, zoals die op schadevergoeding of nakoming.
            </p>
            <p className="listItem">
              5.6. Indien een consument opdrachtgever in gebreke blijft met tijdige en of volledige betaling zal middels
              een herinneringssommatie nog éénmaal een aanvullende betalingstermijn van 14 dagen worden gegund, zonder
              het verschuldigd worden van de buitengerechtelijke incassokosten.
            </p>
            <p className="listItem" id="Betalingen en betalingstermijnen">
              5.7.In geval van wettelijke schuldsanering, liquidatie, faillissement, beslag of surseance van betaling
              van de opdrachtgever zijn de vorderingen van GreenTeam op de Opdrachtgever onmiddellijk opeisbaar.
            </p>
          </div>
        </div>
        <div className="boxClassname" id="Verplichtingen van de opdrachtgever">
          <h3 className="boxTitle">6. Verplichtingen van de opdrachtgever</h3>
          <div className="listContainer">
            <p className="listItem">
              6.1. De opdrachtgever is gehouden GreenTeam tijdig alle informatie te verstrekken, welke GreenTeam naar
              haar oordeel voor een correcte uitvoering van de overeenkomst nodig heeft of waarvan de opdrachtgever
              redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor het uitvoeren van de overeenkomst.
            </p>
            <p className="listItem">
              6.2. Opdrachtgever staat in voor de juistheid, volledigheid en betrouwbaarheid van de aan GreenTeam
              verstrekte informatie, ook indien deze van derden afkomstig is. GreenTeam is niet aansprakelijk voor
              schade, van welke aard ook, die veroorzaakt wordt doordat GreenTeam is uitgegaan van de door de
              opdrachtgever verstrekte onjuiste en/of onvolledige gegevens, tenzij deze onjuistheid of onvolledigheid
              voor GreenTeam kenbaar behoorde te zijn.
            </p>
            <p className="listItem">
              6.3. Indien voor de uitvoering van de overeenkomst benodigde gegevens niet tijdig aan GreenTeam zijn
              verstrekt, heeft GreenTeam het recht de uitvoering van de overeenkomst op te schorten en de uit de
              vertraging voortvloeiende kosten – volgens de gebruikelijke tarieven van GreenTeam – bij opdrachtgever in
              rekening te brengen.
            </p>
            <p className="listItem">
              6.4. De opdrachtgever zal zorgen voor een juiste en tijdige afname en/of een juiste en tijdige uitvoering
              van alle werkzaamheden en toeleveringen, noodzakelijk voor het plaatsen van en/of de juiste werking van
              het product na afronding van de werkzaamheden. Alle kosten die voortvloeien uit het niet nakomen van deze
              verplichtingen door de opdrachtgever, zijn voor rekening van de opdrachtgever.
            </p>
            <p className="listItem">
              6.5. De opdrachtgever zal in ieder geval voor eigen risico en rekening stellen dat:
            </p>
            <div className="flex flex-col gap-4 px-3">
              <p className="listItem">
                a.GreenTeam (personeel) terstond na het bereiken van de plaats van de uitvoering van de werkzaamheden
                hun werkzaamheden kunnen beginnen en daarmee door kunnen gaan gedurende normale werktijden en voorts
                buiten normale werktijden indien dit door GreenTeam noodzakelijk wordt geacht, mits GreenTeam de
                opdrachtgever daarvan tijdig in kennis heeft gesteld;
              </p>
              <p className="listItem">
                b. De toegangswegen tot de plaats van de werkzaamheden geschikt zijn voor het vereiste transport;
              </p>
              <p className="listItem">c. De aangewezen plaats geschikt is voor opslag en werkzaamheden;</p>
              <p className="listItem">
                d. De noodzakelijke afsluitbare opslagruimte voor materiaal, gereedschap en andere materialen
                beschikbaar worden gesteld.
              </p>
            </div>
            <p className="listItem">
              6.6. Indien opdrachtgever niet heeft voldaan aan zijn verplichtingen, dan zal in ieder geval een vast
              bedrag van EUR 150 in rekening worden gebracht voor de onkosten. GreenTeam is daarnaast gerechtigd om
              eventueel bijkomende schade ook bij opdrachtgever in rekening te brengen.
            </p>
          </div>
        </div>
        <div className="boxClassname" id="Uitvoering van de overeenkomst">
          <h3 className="boxTitle">7. Uitvoering van de overeenkomst</h3>
          <div className="listContainer">
            <p className="listItem">
              7.1. GreenTeam zal de overeenkomst naar beste inzicht en vermogen en in overeenstemming met de eisen van
              goed vakmanschap uitvoeren.
            </p>
            <p className="listItem">
              7.2. Indien is overeengekomen dat de overeenkomst in fasen zal worden uitgevoerd, kan GreenTeam de
              uitvoering van de onderdelen die tot een volgende fase behoren, opschorten totdat de opdrachtgever de
              resultaten van de daaraan voorafgaande fase schriftelijk heeft goedgekeurd.
            </p>
            <p className="listItem">
              7.3. Het aangenomen werk en de uitvoering daarvan zijn voor risico en rekening van GreenTeam met ingang
              van het tijdstip van aanvang tot en met de dag waarop het werk als opgeleverd wordt beschouwd.
            </p>
            <p className="listItem">
              7.4. Indien en voor zover een goede uitvoering van de overeenkomst dit vereist, heeft GreenTeam het recht
              bepaalde werkzaamheden te laten verrichten door derden.
            </p>
            <p className="listItem">
              7.5. Opdrachtgever vrijwaart GreenTeam voor eventuele aanspraken van derden, die in verband met de
              uitvoering van de overeenkomst schade lijden en welke aan opdrachtgever toerekenbaar is.
            </p>
          </div>
        </div>
        <div className="boxClassname" id="Wijziging van de overeenkomst">
          <h3 className="boxTitle"> 8. Wijziging van de overeenkomst</h3>
          <div className="listContainer">
            <p className="listItem">
              8.1. Indien de opdrachtgever verlangt wijzigingen in de (uitvoering van de) overeenkomst te brengen, na
              het verstrekken van de opdracht, respectievelijk het tot stand komen van de overeenkomst, dient
              opdrachtgever dit schriftelijk aan GreenTeam te melden, vóórdat GreenTeam een begin heeft gemaakt met de
              uitvoering van de overeenkomst. Deze wijzigingen worden pas onderdeel van de tussen Green Team en
              opdrachtgever gesloten overeenkomst nadat Green Team deze wijzigingen schriftelijk heeft aanvaard, dan wel
              met de uitvoering daarvan is begonnen.
            </p>
            <p className="listItem">
              8.2. Indien de door de opdrachtgever gewenste wijzigingen naar oordeel van GreenTeam een deugdelijke
              uitvoering van de overeenkomst onmogelijk maken, is GreenTeam gerechtigd op deze grond de overeenkomst met
              de opdrachtgever buitengerechtelijk te ontbinden. GreenTeam is in dit geval niet aansprakelijk voor enige
              dientengevolge door de opdrachtgever geleden schade, van welke aard en omvang dan ook. Problemen,
              voortkomend uit de wijzigingen zijn altijd voor rekening en risico van de opdrachtgever.
            </p>
            <p className="listItem">
              8.3. Indien GreenTeam de wijzigingen in de oorspronkelijke overeenkomst aanvaardt of met de uitvoering
              daarvan is begonnen, is de opdrachtgever verplicht alle daaruit voortvloeiende (extra) kosten als kosten
              van meerwerk aan GreenTeam te voldoen, onverminderd de overige betalingsverplichtingen van de
              opdrachtgever ter zake de met GreenTeam gesloten overeenkomst.
            </p>
            <p className="listItem">
              8.4. Indien GreenTeam tijdens de uitvoering van de overeenkomst erachter komt dat het voor een behoorlijke
              uitvoering noodzakelijk is om de te verrichten werkzaamheden te wijzigen of aan te vullen, zal Green Team
              daarvan zo spoedig mogelijk schriftelijk mededeling doen aan de opdrachtgever. GreenTeam zal de
              opdrachtgever daarbij tevens een indicatie geven van de gevolgen voor de termijn van de voltooiing van de
              uitvoering van de overeenkomst, alsmede van de aan het meerwerk verbonden kosten. GreenTeam kan geen
              meerkosten in rekening brengen indien de wijziging of aanvulling het gevolg is van omstandigheden die aan
              GreenTeam kunnen worden toegerekend.
            </p>
            <p className="listItem">
              8.5. Indien GreenTeam voor het overige meent dat er sprake is van meerwerk, zal hij daarvan zo spoedig
              mogelijk schriftelijk mededeling doen aan de opdrachtgever. GreenTeam zal de opdrachtgever daarbij tevens
              een indicatie geven van de gevolgen voor de termijn van de voltooiing van de uitvoering van de
              overeenkomst, alsmede van de aan het meerwerk verbonden kosten.
            </p>
            <p className="listItem">
              8.6. De partijen zullen tijdig en in onderling overleg de overeenkomst dienovereenkomstig aanpassing.
              Indien de opdrachtgever niet binnen zeven (7) werkdagen na ontvangst van de mededeling van GreenTeam heeft
              laten weten bezwaar te hebben tegen het meerwerk, wordt de opdrachtgever geacht dit meerwerk te hebben
              aanvaard en is de opdrachtgever verplicht de daaruit voortvloeiende (extra) kosten aan GreenTeam te
              voldoen.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">9. Levering en uitvoeringstermijn</h3>
          <div className="listContainer">
            <p className="listItem">
              9.1. Levering zal plaatsvinden op de dag vermeld in de orderbevestiging of in gemeenschappelijk overleg en
              nadat de opdrachtgever aan haar verplichtingen heeft voldaan. De door GreenTeam opgegeven levertijden zijn
              geen fatale termijn.
            </p>
            <p className="listItem">
              9.2. GreenTeam stelt de opdrachtgever zo spoedig mogelijk in kennis van het afronden van werkzaamheden ten
              behoeve van oplevering en inspectie. Het door GreenTeam verrichte werk wordt pas als opgeleverd beschouwd
              indien:
            </p>
            <p className="listItem">
              9.3. Indien enige door GreenTeam opgegeven termijnen worden overschreden, is GreenTeam ter zake eerst in
              verzuim nadat de opdrachtgever Green Team schriftelijk in gebreke heeft gesteld en GreenTeam een redelijke
              termijn heeft gegund om alsnog aan haar verplichtingen jegens de opdrachtgever te voldoen.
            </p>
            <p className="listItem">
              9.4. De levertijd is gebaseerd op de werkomstandigheden die bekend waren op het moment van het sluiten van
              de overeenkomst en op tijdige levering van de materialen die GreenTeam voor de uitvoering van de
              overeenkomst heeft besteld. Indien buiten de schuld van GreenTeam een vertraging op zou treden (i) als
              gevolg van een verandering in de bedoelde werkomstandigheden of (ii) als gevolg van een vertraging in de
              levering van materialen die tijdig voor de uitvoering van het werk zijn besteld, komen de opdrachtgever en
              GreenTeam reeds nu overeen dat de leveringstermijn wordt verlengd voor zover noodzakelijk.
            </p>
            <p className="listItem">
              9.5. Het overschrijden van de leveringstermijn zal de opdrachtgever niet het recht geven om derden
              opdracht te geven verplichtingen alsnog uit te voeren, zonder (i) de voorafgaande schriftelijke
              toestemming van GreenTeam dan wel (ii) het overleggen van een onherroepelijk vonnis dat hiertoe strekt.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">10. Opzegging (in geval van consumententransacties, art. 7:764 BW)</h3>
          <div className="listContainer">
            <p className="listItem">
              10.1. Beide partijen kunnen de overeenkomst te allen tijde schriftelijk opzeggen.
            </p>
            <p className="listItem">
              10.2. Indien de door de opdrachtgever gewenste wijzigingen naar oordeel van GreenTeam een deugdelijke
              uitvoering van de overeenkomst onmogelijk maken, is GreenTeam gerechtigd op deze grond de overeenkomst met
              de opdrachtgever buitengerechtelijk te ontbinden. GreenTeam is in dit geval niet aansprakelijk voor enige
              dientengevolge door de opdrachtgever geleden schade, van welke aard en omvang dan ook. Problemen,
              voortkomend uit de wijzigingen zijn altijd voor rekening en risico van de opdrachtgever.
            </p>
            <p className="listItem">
              10.3. GreenTeam is gerechtigd om bij tussentijdse opzegging van de overeenkomst een bedrag bij
              opdrachtgever in rekening te brengen bestaand uit 5% van het totale offertebedrag.
            </p>
            <p className="listItem">
              10.4. Indien de overeenkomst tussentijds wordt opgezegd door GreenTeam, zal Green Team in overleg met
              consument opdrachtgever zorgdragen voor overdracht van de nog te verrichten werkzaamheden aan derden,
              tenzij er feiten en omstandigheden aan de opzegging ten grondslag liggen die aan consument opdrachtgever
              toerekenbaar zijn.
            </p>
            <p className="listItem">
              10.5. Indien de overdracht van werkzaamheden voor GreenTeam extra kosten met zich meebrengt, worden deze
              aan consument opdrachtgever in rekening gebracht.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">11. Opschorting en ontbinding</h3>
          <div className="listContainer">
            <p className="listItem">
              11.1.Indien de opdrachtgever één of meer van zijn verplichtingen jegens GreenTeam niet, niet tijdig of
              niet behoorlijk nakomt, is GreenTeam gerechtigd – onverminderd alle overige aan GreenTeam toekomende
              rechten – de nakoming van zijn verplichtingen jegens de opdrachtgever op te schorten totdat de
              opdrachtgever alsnog volledig zijn verplichtingen jegens GreenTeam is nagekomen.
            </p>
            <p className="listItem">
              11.2.Indien bij GreenTeam de gegronde vrees leeft dat de opdrachtgever zijn verplichtingen niet na zal
              kunnen komen, is GreenTeam gerechtigd de op hem rustende verplichting op te schorten. In dat geval geeft
              GreenTeam de opdrachtgever de gelegenheid om door middel van een verklaring zekerheid te stellen omtrent
              de nakoming van de op de opdrachtgever rustende verplichting. Indien de opdrachtgever hier niet binnen 14
              dagen na dagtekening van het verzoek van GreenTeam aan voldoet, heeft GreenTeam het recht om de
              overeenkomst te ontbinden.
            </p>
            <p className="listItem">
              11.3.Voorts is GreenTeam bevoegd de overeenkomst te (doen) ontbinden, zonder voorafgaande
              ingebrekestelling of rechterlijke tussenkomst, door middel van een schriftelijke buitengerechtelijke
              verklaring, indien:
            </p>
            <div className="flex flex-col gap-3 px-4">
              <p className="listItem">
                a.Zich omstandigheden voordoen welke van dien aard zijn dat nakoming van de overeenkomst onmogelijk is
                geworden of naar maatstaven van redelijkheid en billijkheid niet langer kan worden gevergd, dan wel
                indien zich anderszins omstandigheden voordoen welke van dien aard zijn dat ongewijzigde instandhouding
                van de overeenkomst in redelijkheid niet mag worden verwacht.
              </p>
              <p className="listItem">
                b. Als de opdrachtgever (voorlopige) surséance van betaling wordt verleend, het faillissement van
                opdrachtgever wordt aangevraagd of de opdrachtgever zelf zijn faillissement aanvraagt, de opdrachtgever
                aan zijn schuldeisers een (onderhands) akkoord aanbiedt of (met dit doel) een vergadering van
                schuldeisers bijeenroept of indien met betrekking tot de opdrachtgever (natuurlijk persoon) toepassing
                wordt verzocht of verleend van de Wet schuldsanering natuurlijke personen.
              </p>
              <p className="listItem">
                c. De onderneming van opdrachtgever wordt geliquideerd en/of de ondernemingsactiviteiten van de
                opdrachtgever feitelijk worden gestaakt of naar een plaats buiten Nederland wordt verplaatst.
              </p>
            </div>
            <p className="listItem">
              11.4.Indien de overeenkomst wordt ontbonden, zijn de vorderingen van GreenTeam op de opdrachtgever
              onmiddellijk opeisbaar.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">12. Aansprakelijkheid</h3>
          <div className="listContainer">
            <p className="listItem">
              12.1. Indien GreenTeam aansprakelijk mocht zijn, dan is deze aansprakelijkheid beperkt tot hetgeen in deze
              bepaling is geregeld.
            </p>
            <p className="listItem">
              12.2. Indien GreenTeam aansprakelijk is voor directe schade jegens de ondernemer opdrachtgever, dan is die
              aansprakelijkheid beperkt tot maximaal het factuurbedrag, althans dat gedeelte van de opdracht waarop de
              aansprakelijkheid betrekking heeft. De aansprakelijkheid is te allen tijde beperkt tot maximaal het bedrag
              van de door de verzekering van GreenTeam in het voorkomende geval te verstrekken uitkering.
            </p>
            <p className="listItem">12.3. Onder directe schade wordt uitsluitend verstaan:</p>
            <p className="listItem">
              12.4. GreenTeam is niet aansprakelijk voor enige door de ondernemer opdrachtgever (of derden) geleden ofte
              lijden schade, van welke aard en/of omvang dan ook, samenhangend met of voortvloeiende uit de uitvoering
              van de overeenkomst, daaronder begrepen schade aan in eigendom van de ondernemer opdrachtgever of derden
              toebehorende zaken, alsmede indirecte schade, daaronder bijvoorbeeld begrepen gevolgschade, gederfde
              winst, bedrijfsschade, gemiste besparingen en schade door bedrijfsstagnatie.
            </p>
            <p className="listItem">
              12.5. GreenTeam is jegens de ondernemer opdrachtgever nimmer aansprakelijk voor schade en/of kosten, van
              welke aard en/of omvang dan ook, die op enigerlei wijze samenhangen met of voortvloeien uit handelingen,
              nalatigheden, fouten en/of de kwaliteit van het geleverde werk van derden, die door GreenTeam bij de
              uitvoering van de overeenkomst zijn ingeschakeld, tenzij die schade mede is veroorzaakt door opzet of
              daarmee gelijk te stellen grove onzorgvuldigheid van opdrachtnemer.
            </p>
            <p className="listItem">
              12.6. Het voorgaande lijdt uitzondering in geval van opzet of daarmee gelijk te stellen grove
              onzorgvuldigheid van GreenTeam. Een reeks van samenhangende schadegevallen/gebeurtenissen geldt hierbij
              als één schadegeval/gebeurtenis.
            </p>
            <p className="listItem">
              12.7. De opdrachtgever vrijwaart GreenTeam voor alle aanspraken van derden ter zake van schade in verband
              met de door GreenTeam uitgevoerde overeenkomsten, tenzij rechtens vast komt te staan dat deze aanspraken
              een gevolg zijn van opzet of daarmee gelijk te stellen grove onzorgvuldigheid van GreenTeam en de
              opdrachtgever bovendien aantoont dat hem ter zake geen enkel verwijt treft.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">13. Overmacht</h3>
          <div className="listContainer">
            <p className="listItem">
              13.1. Partijen zijn niet gehouden tot het nakomen van enige verplichting, indien zij daartoe gehinderd
              worden als gevolg van een omstandigheid die niet is te wijten aan schuld, en noch krachtens de wet, een
              rechtshandeling of in het verkeer geldende opvattingen voor hun rekening komt.
            </p>
            <p className="listItem">
              13.2. Onder overmacht wordt in deze algemene voorwaarden verstaan naast hetgeen daaromtrent in de wet en
              jurisprudentie wordt begrepen, alle van buiten komende oorzaken, voorzien of niet-voorzien, waarop
              GreenTeam geen invloed kan uitoefenen, doch waardoor GreenTeam niet in staat is de verplichtingen na te
              komen.
            </p>
            <p className="listItem">
              13.3. GreenTeam heeft ook het recht zich op overmacht te beroepen, indien de omstandigheid die (verdere)
              nakoming verhindert, intreedt nadat GreenTeam haar verplichtingen had moeten nakomen.
            </p>
            <p className="listItem">
              13.4. Partijen kunnen gedurende de periode dat de overmacht voortduurt de verplichtingen uit de
              overeenkomst opschorten. Indien deze periode langer duurt dan 6 maanden is ieder der partijen gerechtigd
              de overeenkomst schriftelijk te ontbinden zonder verplichting tot vergoeding van schade aan de andere
              partij.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle"> 14. Eigendomsvoorbehoud</h3>
          <div className="listContainer">
            <p className="listItem">
              14.1. Na oplevering van het werk blijft GreenTeam eigenaar van de geleverde zaken tot het moment waarop de
              opdrachtgever de op hem rustende verplichtingen uit de overeenkomst volledig nakomt.
            </p>
            <p className="listItem">
              14.2. Indien de opdrachtgever niet aan zijn verplichtingen voldoet, is GreenTeam gerechtigd de onder
              eigendomsvoorbehoud geleverde zaken bij de opdrachtgever op te halen. De opdrachtgever is verplicht
              GreenTeam toegang te verschaffen na het inroepen van het eigendomsvoorbehoud.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle"> 15. Garantie</h3>
          <div className="listContainer">
            <p className="listItem">
              15.1. Indien tijdig, correct en overeenkomstig de bepalingen van artikel 16 is gereclameerd en naar het
              redelijke oordeel van opdrachtnemer genoegzaam is aangetoond dat de producten niet behoorlijk functioneren
              (of werkzaamheden niet deugdelijk zijn verricht), zal opdrachtnemer de keus hebben hetzij de niet
              deugdelijk gebleken producten kosteloos opnieuw te leveren tegen retournering van de ondeugdelijk gebleken
              producten, hetzij de betreffende producten deugdelijk te repareren (of de werkzaamheden opnieuw uit te
              voeren), hetzij opdrachtgever alsnog een in onderling overleg vast te stellen korting op de (koop)prijs te
              verlenen, tenzij bij schriftelijke overeenkomst door opdrachtnemer en opdrachtgever uitdrukkelijk anders
              mocht zijn overeengekomen. Door voldoening aan een van de hiervoor genoemde prestaties zal opdrachtnemer
              ter zake van zijn garantieverplichtingen volledig zijn gecompenseerd en zal opdrachtnemer tot geen enkele
              verdere (schade)vergoeding zijn gehouden.
            </p>
            <p className="listItem">
              15.2. Indien opdrachtnemer producten aan opdrachtgever aflevert welke opdrachtnemer van toeleveranciers
              heeft verkregen, is opdrachtnemer nimmer tot een verdergaande garantie of aansprakelijkheid ten opzichte
              van opdrachtgever gehouden dan waarop opdrachtnemer ten opzichte van haar leverancier aanspraak kan maken.
              In geval van verkoop van producten die worden verkocht onder fabrieksgarantie danwel onderdelengarantie,
              dan is er uitsluitend garantie op de eventuele defecte of in gebreken verkerende afzonderlijke componenten
              cq. onderdelen van de door opdrachtnemer aan opdrachtgever geleverde producten. Eventuele noodzakelijke
              (de)montageafstel- en instelkosten van de onderdelen van/aan het verkochte goed en bijkomende kosten van
              diensten of benodigde materialen zijn volledig voor rekening van de opdrachtgever. Tevens zijn alle
              eventuele administratie-, verzend- en leveringskosten en alle bijkomende kosten om deze fabrieksgarantie
              danwel onderdelengarantie bij de toeleverancier van de opdrachtnemer te bedingen volledig en zonder
              voorbehoud voor rekening van de opdrachtgever. Alle verzendkosten van opdrachtgever naar opdrachtnemer
              zijn te allen tijde voor rekening van opdrachtgever. Garantie wordt uitgesloten op slijtdelen met als
              enige uitzondering fabricagefouten. Onder slijtdelen wordt verstaan: producten of onderdelen van producten
              waarbij kwaliteitsvermindering optreedt door gebruik. Er is uitsluitend garantie op de door opdrachtnemer
              verkochte producten indien dit ondubbelzinnig en duidelijk op de orders, opdrachten, of facturen is
              aangegeven.
            </p>
            <p className="listItem">
              15.3. Opdrachtnemer staat uitdrukkelijk niet in voor aanbeveling of adviezen ter zake van de installatie
              of het gebruik van de producten, noch staat opdrachtnemer in voor zodanige adviezen of instructies van
              opdrachtgever aan zijn afnemers.
            </p>
            <p className="listItem">
              15.4. De producten blijven volledig voor risico van opdrachtgever in het geval door opdrachtnemer aan de
              producten reparatieactiviteiten worden verricht, tenzij de reparatie het gevolg is van een gebrekkige
              prestatie van opdrachtnemer en niet in redelijkheid van opdrachtgever verwacht kan worden dat hij de
              producten voor het bovenstaande risico verzekert.
            </p>
            <p className="listItem">
              15.5. Mocht opdrachtgever eventuele herstellingen of veranderingen zonder voorafgaande toestemming van de
              opdrachtnemer verrichten of door anderen laten verrichten, zal opdrachtnemer niet gehouden zijn, zijn
              garantieverplichtingen na te komen. Tevens geldt dit indien er door opdrachtgever of gelieerde partijen
              oneigenlijk gebruik van de goederen heeft plaatsgevonden, waaronder verstaan wordt al het gebruik waarvoor
              het goed redelijkerwijs en volgens de gebruikershandleiding niet bestemd is.
            </p>
            <p className="listItem">
              15.6. Tenzij nadrukkelijk anders is vermeld, geldt er geen garantie op de goederen en producten die door
              verkoper/opdrachtnemer worden aangeboden
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">16. Klachten</h3>
          <div className="listContainer">
            <p className="listItem">
              16.1. Klachten over de verrichte werkzaamheden dienen door de ondernemer opdrachtgever binnen 14 dagen na
              ontdekking schriftelijk per aangetekend schrijven te worden gemeld aan GreenTeam. Deze termijn van 14
              dagen na ontdekking wordt voor de consument opdrachtgever verlengd tot 2 kalendermaanden. De
              ingebrekestelling dient een zo gedetailleerd mogelijke omschrijving van de tekortkoming(en) te bevatten,
              zodat Green Team in staat is adequaat te reageren.
            </p>
            <p className="listItem">
              16.2. Klachten betreffende de uitvoering van de overeenkomst door GreenTeam geven de opdrachtgever nimmer
              het recht zijn betalingsverplichtingen ten opzichte van GreenTeam op te schorten.
            </p>
            <p className="listItem">
              16.3. Indien Green Team een klacht gegrond acht, is GreenTeam gerechtigd het ontbrekende gedeelte te
              leveren, de geleverde materialen te vervangen of te herstellen, dan wel anderszins de klachten te (doen)
              verhelpen, zulks ter keuze van GreenTeam.
            </p>
          </div>
        </div>
        <div className="boxClassname">
          <h3 className="boxTitle">17. Geschillen en toepasselijk recht</h3>
          <div className="listContainer">
            <p className="listContainer">
              17.1. Op alle rechtsverhoudingen tussen GreenTeam en de opdrachtgever is uitsluitend Nederlands recht van
              toepassing.
            </p>
            <p className="listContainer">
              17.2. Alle geschillen die voortvloeien uit, dan wel verband houden met de rechtsverhoudingen tussen
              GreenTeam en de opdrachtgever waar deze algemene voorwaarden op van toepassing zijn, zullen uitsluitend
              worden voorgelegd aan de bevoegde rechter in het arrondissement waar GreenTeam gevestigd is, tenzij
              bepalingen van dwingend recht anders voorschrijven. Green Team heeft het recht van deze bevoegdheidsregel
              af te wijken en de wettelijke bevoegdheidsregels te hanteren.
            </p>
            <p className="listContainer">
              17.3. Partijen kunnen schriftelijk een andere vorm van geschillenbeslechting overeenkomen.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[11px]">
        <BodyTextSemibold className="text-blackDark text-opacity-40">Inhoudsopgave</BodyTextSemibold>
        <a className="text-blackDark cursor-pointer text-sm">1. Definities</a>
        <a href="#2" className="text-blackDark text-sm">
          2. Toepasselijkheid algemene voorwaarden
        </a>
        <a href="#3" className="text-blackDark text-sm">
          3. Offertes en totstandkoming overeenkomst
        </a>
        <a href="#4" className="text-blackDark text-sm">
          4. Prijzen en tarieven
        </a>
        <a href="#5" className="text-blackDark text-sm">
          5. Betalingen en betalingstermijnen
        </a>
      </div>
    </div>
  );
};
