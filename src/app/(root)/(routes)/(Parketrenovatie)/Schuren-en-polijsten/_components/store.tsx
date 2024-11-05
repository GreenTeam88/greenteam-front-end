import { PrimaryBtn } from "@/components/theme/buttons"
import { BodyText, H2 } from "@/components/theme/typography"


const ImagesGallery = ()=>{
    return <div   className="flex w-full lg:w-fit gap-[20px] flex-col relative  lg:px-0 lg:flex-row "  >
        <div className="flex flex-col gap-[24px]  " >
            <img  className="w-full lg:w-fit"  src="/Parketrenovatie/store1.png" />
            <img  className="w-full lg:w-fit"  src="/Parketrenovatie/store2.png" />
        </div>
        <img src="/Parketrenovatie/store3.png" />
        <div className="flex flex-col gap-[24px]" >
            <img className="w-full lg:w-fit" src="/Parketrenovatie/store4.png" />
            <img className="w-full lg:w-fit" src="/Parketrenovatie/store5.png" />
        </div>

    </div>
}


export const StoreSection = ()=>{
    return <div className="flex  py-20 items-center flex-col gap-[55px] max-w-[1440px]  w-full px-[120px] lg:items-center relative" >
        <div className="flex flex-col gap-[11px] items-center " >
            <H2 className="text-primaryDefault text-center" >Wat hebben wij in petto? Uw vloer weer laten stralen!</H2>
            <BodyText className="max-w-[794px] text-center" >Bekijk hier de resultaten van onze renovaties en ontdek hoe wij parketvloeren, of ze nu beschadigd zijn of gewoon toe aan vernieuwing, transformeren tot ware meesterwerken. Uw vloer kan de volgende zijn!</BodyText>
        </div>
        <ImagesGallery/>
        <PrimaryBtn>Bereken jouw vloer</PrimaryBtn>
    </div>
}