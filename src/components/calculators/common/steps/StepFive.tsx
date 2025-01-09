import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepFiveProps {
  onPrevious: () => void;
  onNext: (step?: number) => void;
  onUploadClick: () => void;
  onCommentClick: () => void;
  formData: any; // Centralized form data passed down
  updateFormData: (data: any) => void; // Function to update the centralized state
}

const schema = z.object({
  desiredTimeframe: z.string().nonempty({ message: 'Please select at least one timeframe' }),
  nextStep: z.string().nonempty({ message: 'Please select at least one action' }),
});

const StepFive: React.FC<StepFiveProps> = ({
  onPrevious,
  onNext,
  onUploadClick,
  onCommentClick,
  formData,
  updateFormData,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const categories = ['Spoed', 'Z.s.m', 'Binnen een week', 'Binnen een maand', 'Zodra ik de sleutel heb', 'In overleg'];
  const offers = ['Ik wil graag een officiële offerte', 'Ik wil graag eerst persoonlijk contact'];

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const offersOptions: Option[] = offers.map((offer) => ({
    value: offer,
    label: offer,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const watchDesiredExecutionTimeframe = form.watch('desiredTimeframe');
  const watchSubsequentActions = form.watch('nextStep');

  // Ensure `totalCost` is a number or default to `0`
  const totalCost = typeof formData.totalCost === 'number' ? formData.totalCost : 0;

  // Effect to enable/disable button based on input
  useEffect(() => {
    const isValid = watchDesiredExecutionTimeframe && watchSubsequentActions;
    setIsButtonDisabled(!isValid);
  }, [watchDesiredExecutionTimeframe, watchSubsequentActions]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData(data);
      onNext(); // Proceed to the next step
    })();
  };

  return (
    <FormProvider {...form}>
      <form className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col ">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap ">Planning</span>

            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[90%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="desiredTimeframe"
              label="Gewenste termijn voor uitvoeren?"
              placeholder="Kies er een"
              onChange={(value) => updateFormData({ desiredTimeframe: value })}
            />
          </div>

          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={offersOptions}
              name="nextStep"
              label="De vervolgstap"
              placeholder="Kies er een"
              onChange={(value) => updateFormData({ nextStep: value })}
            />
          </div>
          <div className="flex items-center gap-[5px] mb-1">
            <button
              type="button"
              onClick={onUploadClick}
              className="text-green-700 font-sans text-sm font-bold hover:text-green-900 hover:underline transition-all duration-200"
            >
              Foto uploaden
            </button>
            <span className="text-gray-300">|</span>
            <button
              type="button"
              onClick={onCommentClick}
              className="text-green-700 font-sans text-sm font-bold hover:text-green-900 hover:underline transition-all duration-200"
            >
              Opmerkingen toevoegen
            </button>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col space-y-2">
              {formData.isOnRequest ? (
                <div className="flex justify-center items-center h-full">
                  <span className="font-semibold text-lg text-green-700">Berekening volgt na aanvraag</span>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center text-center">
                    <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
                    <span className="font-semibold text-lg text-green-700">€{totalCost.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>

            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
              type="button"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepFive;
