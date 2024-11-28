// StepOne.tsx
import React from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { HeadlineSemibold } from '@/components/theme/typography';

const FinalStep: React.FC = () => {
  const form = useForm<FieldValues>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[430px] flex flex-col rounded-[4px] relative lg:px-0 z-10 shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs bereken!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full flex-1 rounded-b-[8px] flex flex-col px-[22px] gap-[33px] py-[22px] items-center justify-center">
          <h1 className="text-green-700 font-bold text-xl text-center">Bedankt!</h1>
          <p className="text-textDefault text-center">
            Je aanvraag is ontvangen. We nemen <br /> z.s.m. contact met je op!
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default FinalStep;
