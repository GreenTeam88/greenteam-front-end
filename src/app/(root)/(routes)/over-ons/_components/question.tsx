'use client';

import React, { useState } from 'react';

import { PrimaryBtn, PrimaryBtnLink, SecondaryOutlinedBtn, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { PrimaryInput, SelectInput } from '@/components/theme/inputs';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';

const QuestionForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [Gewenstebehandeling, setGewenstebehandeling] = useState('');
  const [VoorEnAchternaam, setVoorEnAchternaam] = useState('');
  const [email, setEmail] = useState('');
  const [straatnaamEnHuisnummer, setStraatnaamEnHuisnummer] = useState('');
  const [postCode, setPostCode] = useState('');
  const [Woonplaats, setWoonplaats] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <div className="flex max-w-[489px] flex-col bg-white">
      <div className="bg-primaryDefault w-full  rounded-t-[8px] flex  items-center justify-center text-white py-[22px]  ">
        <HeadlineSemibold> Snel jouw prijs berekenen!</HeadlineSemibold>
      </div>
      <div className="flex flex-col  border-opacity-20 p-[22px] border-black20 border rounded-lg py-[22px] gap-[22px]">
        <div className="flex w-full gap-3 justify-between">
          <SelectInput
            label="Categorie"
            required={true}
            placeHolder="Kies er een"
            value={category}
            setValue={setCategory}
            values={['val1', 'val2']}
          />
          <SelectInput
            label="Gewenste behandeling"
            required={true}
            placeHolder="Kies er een"
            value={Gewenstebehandeling}
            setValue={setGewenstebehandeling}
            values={['val1', 'val2']}
          />
        </div>
        <PrimaryInput
          labelText="Voor en achternaam"
          aria-required={true}
          value={VoorEnAchternaam}
          onChange={(e) => setVoorEnAchternaam(e.target.value)}
        />
        <PrimaryInput
          labelText="E-mailadres"
          aria-required={true}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="flex w-full gap-3 justify-between">
          <PrimaryInput
            aria-required={true}
            value={straatnaamEnHuisnummer}
            onChange={(e) => setStraatnaamEnHuisnummer(e.target.value)}
            labelText="Straatnaam en huisnummer"
          ></PrimaryInput>
          <PrimaryInput
            aria-required={true}
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            labelText="Postcode"
          ></PrimaryInput>
        </div>
        <div className="flex w-full gap-3 justify-between">
          <PrimaryInput
            aria-required={true}
            value={Woonplaats}
            onChange={(e) => setWoonplaats(e.target.value)}
            labelText="Woonplaats"
          ></PrimaryInput>
          <PrimaryInput
            aria-required={true}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            labelText="Telefoonnummer"
          ></PrimaryInput>
        </div>
        <PrimaryBtn>Verzenden</PrimaryBtn>
      </div>
    </div>
  );
};

const QuestionsParagraph = () => {
  return (
    <div className="flex max-w-[488px] flex-col gap-11">
      <div className="flex flex-col  gap-[11px]">
        <H2 className="text-primaryDefault">Heeft u nog vragen?</H2>
        <BodyText>
          Wij begrijpen dat u graag duidelijkheid wilt voordat u een beslissing neemt. Onze experts staan klaar om al uw
          vragen te beantwoorden en u te voorzien van de informatie die u nodig heeft.
        </BodyText>
      </div>
      <div className="flex gap-2">
        <PrimaryBtnLink href="/veelgestelde-vragen">Veelgestelde vragen</PrimaryBtnLink>
        <SecondaryOutlinedBtnLink href="/contact">Contact opnemen</SecondaryOutlinedBtnLink>
      </div>
    </div>
  );
};

export const QuestionSection = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row items-center justify-center py-24 gap-[92px]">
      <QuestionForm />
      <QuestionsParagraph />
    </div>
  );
};
