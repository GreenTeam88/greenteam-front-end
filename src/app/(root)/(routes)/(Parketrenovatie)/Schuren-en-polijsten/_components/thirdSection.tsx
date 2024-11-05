import { BodyText, H2, HeadlineSemibold } from "@/components/theme/typography"
import { InfoCardProps, OrangeInfoCard } from "../../../diensten/_components/cards"
import { PrimaryBtn } from "@/components/theme/buttons"

const cardsConfig  : InfoCardProps[] = [{
    title : "Schuren" ,
    imgSrc : "/Parketrenovatie/image12.png" ,
    paragraphs : [<>Dagelijks wordt er gelopen op een houten vloer. Het is dan ook logisch dat op een gegeven moment gebruikssporen zoals krasjes, oneffenheden en vlekjes te zien zijn. Elke houten vloer zal daarom op een gegeven moment onderhouden moeten worden en worden geschuurd. Op deze manier kan je alle gebruikssporen laten verdwijnen en is je houten vloer weer zo goed als nieuw. Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!</> , <><BodyText className="text-secondaryDefault" >Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!</BodyText></> ]
} , {
    title : "Polijsten" ,
    imgSrc : "/Parketrenovatie/image13.png" ,
    paragraphs :  [<><BodyText>Polijsten is het proces waardoor een oppervlak van een materiaal glad en glanzend gemaakt wordt, waardoor de oppervlakteruwheid verkleind wordt en het materiaal een sterk spiegelend effect verkrijgt. Dit gebeurt standaard na het opschuren.</BodyText>  </> , <><BodyText className="text-secondaryDefault" >Dit gebeurt standaard na het opschuren.</BodyText> </>]
}]

export const ThirdSection = ()=>{
    return <div className="flex w-full py-16 gap-12 px-3 lg:px-0 bg-secondaryLight flex-col items-center" >
        <div className="flex gap-3 flex-col items-center" >
<H2 className="text-primaryDefault" >Hoe gaat schuren en polijsten in zijn werk?</H2>
<BodyText>Stapsgewijs naar een perfect resultaat</BodyText>
        </div>
        <div className="flex flex-col py-3 " >
            {cardsConfig.map(cardConfig=><OrangeInfoCard className="lg:py-7" {...cardConfig} />)}
        </div>
        <div className="flex gap-5 p-[22px] border border-black10 border-opacity-10 rounded-[10px] items-center" >
            <HeadlineSemibold>Help, mijn oude vloer is aan vervanging toe!</HeadlineSemibold>
            <PrimaryBtn>Bereken jouw vloer</PrimaryBtn>
        </div>
    </div>
}