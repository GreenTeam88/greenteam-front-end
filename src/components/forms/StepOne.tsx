// StepOne.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import MultiSelectDropdown from './MultiSelectDropdown';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepOneProps {
  onNext: () => void;
  formData: any; // Now includes formData to manage state
  updateFormData: (data: any) => void; // Function to update the centralized state
}

// Define the schema using Zod
const schema = z.object({
  selectedCategories: z.string().nonempty({ message: 'Please select a categorie' }),
  selectedServices: z.array(z.string()).min(1, 'Select at least one service'),
});

const StepOne: React.FC<StepOneProps> = ({ onNext, formData, updateFormData }) => {
  const categories = ['Parketrenovatie', 'Traprenovatie', 'Vloeren leggen', 'Stofferen', 'Overig'];
  const services = [
    'Schuren + polijsten + (zonder behandeling)',
    'Schuren + polijsten + oliën naturel',
    'Schuren + polijsten + oliën in kleur',
    'Schuren + polijsen + lakken in naturel',
    'Schuren + polijsen + lakken in kleur',
    'Schuren + polijsen + hardwax naturel',
    'Schuren + polijsen + hardwax in kleur',
    'Schuren + polijsen + lakken met Skylt',
    'Ben ik nog niet over uit.',
    'Ik wil graag advies',
  ];
  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category,
  }));
  const serviceOptions: Option[] = services.map((service) => ({
    value: service,
    label: service,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData, // Initialize form with formData
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData(data); // Update central state with new data
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
            <span className="text-gray-400 font-sans text-sm">Waar kunnen we je mee helpen?</span>
            <div className="w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[20%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="selectedCategories"
              label="Categorie"
              placeholder="Kies er een"
            />
          </div>
          <div className="flex flex-col gap-[11px]">
            <MultiSelectDropdown
              data={serviceOptions}
              name="selectedServices"
              label="Wat wilt u gedaan hebben?"
              placeholder="Kies er een"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€0,00</span>
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

export default StepOne;
