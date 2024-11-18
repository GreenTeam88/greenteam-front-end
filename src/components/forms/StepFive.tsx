import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepFiveProps {
  onNext: () => void;
  onUploadClick: () => void;
  onCommentClick: () => void;
  formData: any; // Centralized form data passed down
  updateFormData: (data: any) => void; // Function to update the centralized state
}

// Define the schema using Zod
const schema = z.object({
  desiredExecutionTimeframe: z.string().nonempty({ message: 'Please select at least one timeframe' }),
  subsequentActions: z.string().nonempty({ message: 'Please select at least one action' }),
});

const StepFive: React.FC<StepFiveProps> = ({ onNext, onUploadClick, onCommentClick, formData, updateFormData }) => {
  const categories = ['Spoed', 'Z.s.m', 'Binnen een week', 'Binnen een maand', 'Zodra ik de sleutel heb', 'In overleg'];
  const offers = ['Ik wil graag een offerte', 'Ik wil graag eerst persoonlijk contact'];

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
    defaultValues: formData, // Initialize form with existing data
    mode: 'onChange',
  });

  // Immediately update centralized state when a field value changes
  const handleFieldChange = (name: string, value: any) => {
    updateFormData({ [name]: value }); // Update the specific field in the centralized state
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData(data); // Update centralized state with form data
      onNext(); // Proceed to the next step
    })();
  };

  const text = "Foto's uploaden";

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[430px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel jouw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-[17px] py-[22px]">
          <div className="flex flex-row items-center justify-between">
            <span className="text-gray-400 font-sans text-sm">Planning</span>
            <div className="w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[85%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="desiredExecutionTimeframe"
              label="Gewenste termijn voor uitvoeren?"
              placeholder="Kies er een"
              onChange={(value) => updateFormData({ desiredExecutionTimeframe: value })} // Update centralized state
            />
          </div>

          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={offersOptions}
              name="subsequentActions"
              label="De vervolgstap"
              placeholder="Kies er een"
              onChange={(value) => handleFieldChange('subsequentActions', value)} // Update state on change
            />
          </div>
          <div className="flex items-center gap-[5px] mb-1">
            <button type="button" onClick={onUploadClick} className="text-green-700 font-sans text-sm font-bold">
              {text}
            </button>
            <span className="text-gray-300">|</span>
            <button type="button" onClick={onCommentClick} className="text-green-700 font-sans text-sm font-bold">
              Opmerkingen toevoegen
            </button>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€5000,00</span>
            </div>
            <CreateButton className="bg-primaryDefault w-full" type="submit">
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepFive;
