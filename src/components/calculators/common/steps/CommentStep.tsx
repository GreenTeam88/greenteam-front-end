// StepOne.tsx
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import DetailsGetter from '@/components/calculators/Getters/DetailsGetter';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';

interface StepOneProps {
  onPrevious: () => void;
  onComment: (data: FieldValues) => void;
}

const CommentStep: React.FC<StepOneProps> = ({ onPrevious, onComment }) => {
  const form = useForm<FieldValues>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Trigger comment submission logic
    const formData = form.getValues();
    onComment(formData);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[379px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full flex-1 rounded-b-[8px] flex flex-col px-[22px] py-[22px] gap-[20px]">
          <div
            className="flex flex-row items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all "
            onClick={onPrevious}
          >
            <ChevronLeft />
            <span className="text-gray-700 font-sans text-sm">Terug</span>
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <DetailsGetter form={form} />
          </div>

          <div className="flex flex-col space-y-2 mt-auto">
            <CreateButton
              className=" w-full bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300"
              type="submit"
            >
              Opslaan
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CommentStep;
