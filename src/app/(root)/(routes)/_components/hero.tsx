import MultiStepForm from '@/components/forms/MultiStepForm';
import { PrimaryBtnLink, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';

// import { HeadlineSemibold } from '@/components/theme/typography';

const ParagraphSection = () => {
  return (
    <div className="flex relative  items-center lg:items-start z-10 gap-[86px]">
      <div className="flex flex-col items-center lg:items-start gap-[44px] max-w-[627px] ">
        <div className="flex flex-col w-full gap-[22px] ">
          <h5 className="font-bold text-primaryDefault text-[32px] lg:text-[40px]">
            Zorgeloos een klus uitbesteden tegen een scherpe prijs.
          </h5>
          <p className="max-w-[590px]">
            Gedreven door vakmanschap gaan we samen op zoek naar een passende en duurzame oplossing voor jouw project.
          </p>
        </div>
        <div className="flex gap-[22px] items-center">
          <PrimaryBtnLink href="/offerte-aanvragen">Offerte aanvragen</PrimaryBtnLink>
          <SecondaryOutlinedBtnLink href="tel:+085 401 93 45">Direct bellen</SecondaryOutlinedBtnLink>
        </div>
      </div>
    </div>
  );
};

// export const Hero = () => {
//   return (
//     <div className="relative w-full h-[700px] flex items-center justify-center pt-0">
//       <img src="/home/heroImg.png" className="absolute hidden lg:block w-full h-full top-0 left-0 z-0 object-cover" />
//       <div className="relative flex flex-col lg:flex-row items-center justify-center z-10 gap-10 lg:gap-[86px] max-w-[1440px] px-4 lg:px-[120px] w-full pb-8">
//         {/* Paragraph section */}
//         <div className="flex-1 flex justify-center lg:justify-start">
//           <ParagraphSection />
//         </div>
//         {/* MultiStepForm section */}
//         <div className="flex-1 flex items-start justify-center pt-0">
//           <div className="self-stretch mt-0">
//             <MultiStepForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Hero = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center ">
      <img src="/home/heroImg.png" className="absolute hidden lg:block w-full h-full top-0 left-0 z-0" />

      <div className=" relative flex-col lg:flex-row z-10 max-w-full lg:h-[680px] py-16 lg:py-0 gap-[86px] px-2 lg:px-[120px] w-[1440px] flex items-center ">
        <ParagraphSection />

        <MultiStepForm />
      </div>
    </div>
  );
};
