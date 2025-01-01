'use client';

import { PrimaryBtn, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { PrimaryInput, PrimaryTextArea } from '@/components/theme/inputs';
import { BodyText, BodyTextSemibold, H1, LinkTypography } from '@/components/theme/typography';
import { appConfig } from '@/config';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-[40px] pr-[22px]">
      <div className="flex flex-col ">
        <H1 className="text-primaryDefault">Wij staan voor u klaar </H1>
        <BodyText className="max-w-[383px]">
          Heb je vragen of wil je meer informatie? Neem gerust contact met ons op, we helpen je graag verder!
        </BodyText>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex gap-[22px]  items-center">
          <img src="/icons/envelope.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>{appConfig.email}</BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href={`mailto:${appConfig.email}`}
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Email verzenden
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px]  items-center">
          <img src="/icons/phone.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>{appConfig.phoneNumber}</BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href={`tel:${appConfig.phoneNumber}`}
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Bellen
            </LinkTypography>
          </div>
        </div>
        <div className="flex items-center  gap-[22px]">
          <img src="/icons/locationIcon.svg" />
          <div className="flex items-center gap-[11px]">
            <BodyTextSemibold>
              Rivium Boulevard 2 (HQ)
              <br />
              2909 LK, Capelle aan den IJssel
            </BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href="https://maps.app.goo.gl/wSKHyT9dW8tugEVk6"
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Op de kaart bekijken
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px] ">
          <img src="/icons/clock.svg" className="h-fit" />
          <div className="flex flex-col">
            {appConfig.openingTimes.map((openingTime) => (
              <div className="flex" key={openingTime.day}>
                <BodyTextSemibold className="w-[120px]">{openingTime.day} :</BodyTextSemibold>
                <BodyText className="w-[120px]">{openingTime.time}</BodyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TopSection = () => {
  return (
    <div className="flex w-full gap-[11px] flex-col lg:flex-row items-center justify-center">
      <BodyText className="text-center lg:text-start">
        Misschien is je vraag al beantwoord in onze veelgestelde vragen.
      </BodyText>
      <SecondaryOutlinedBtnLink href="/veelgestelde-vragen">Veelgestelde vragen</SecondaryOutlinedBtnLink>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex flex-col bg-white border border-black20 border-opacity-20 rounded-lg p-[22px] gap-[32px] max-w-full lg:w-[488px] ">
      <PrimaryInput labelText="Voornaam" />
      <PrimaryInput labelText="Achternaam" />
      <PrimaryInput labelText="E-mailadres" />
      <PrimaryInput labelText="Telefoonnummer" />
      <PrimaryTextArea labelText="Opmerking" />
      <PrimaryBtn className="w-full">Verzenden</PrimaryBtn>
    </div>
  );
};

export const ContactFormSection = () => {
  return (
    <div className="flex flex-col py-4 lg:py-10 px-5 gap-20">
      <TopSection />
      <div className="flex gap-12 w-full flex-col lg:flex-row justify-between max-w-[1400px]">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
