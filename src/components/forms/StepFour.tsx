import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import InputGetter from './Getters/InputGetter';
// import MultiSelectDropdown from './MultiSelectDropdown';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepFourProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: any; // Centralized form data passed down
  updateFormData: (data: any) => void; // Function to update the centralized state
}

// Define the schema using Zod
const schema = z.object({
  newBaseboardsNeeded: z.string().nonempty({ message: 'Please select at least one option' }),
  numberOfMeters: z
    .string()
    .nonempty({ message: 'Please enter the number of meters' })
    .regex(/^\d+$/, 'Enter a valid number'),
});

const StepFour: React.FC<StepFourProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const categories = [
    {
      value: 'Ja, lage',
      label: 'Ja, lage',
      imageUrl: '/images/hoge.png', // Path to the image in your public folder
    },
    {
      value: 'Ja, hoge',
      label: 'Ja, hoge',
      imageUrl: '/images/hoge.png', // Path to the image in your public folder
    },
    {
      value: 'Nee',
      label: 'Nee',
      // No imageUrl needed for this option
    },
  ];

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category.value,
    label: category.label,
    imageUrl: category.imageUrl, // Include imageUrl if available
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData, // Initialize form with existing data
    mode: 'onChange',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData(data); // Update the centralized state with this step's data
      onNext(); // Move to the next step
    })();
  };

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
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-[25px] py-[22px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-[5px] cursor-pointer" onClick={onPrevious}>
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Niet verplicht, wel handig om te weten
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[70%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="newBaseboardsNeeded"
              label="Nieuwe plinten nodig?"
              placeholder="Kies er een"
            />
          </div>

          <div className="flex flex-col gap-[11px]">
            <InputGetter
              form={form}
              name="numberOfMeters"
              label="Aantal meter"
              placeholder="Enter the number of meters"
              type="text"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€1000,00</span>
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

export default StepFour;
