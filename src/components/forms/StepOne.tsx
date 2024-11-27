import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepOneProps {
  onNext: (nextStep?: number) => void;
  formData: any;
  updateFormData: (data: any) => void;
}

// Define the schema using Zod
const schema = z.object({
  selectedCategory: z.string().nonempty({ message: 'Please select a category' }),
  selectedService: z.string().nonempty({ message: 'Select at least one service' }),
});

const StepOne: React.FC<StepOneProps> = ({ onNext, formData, updateFormData }) => {
  const categories = ['Parketrenovatie', 'Traprenovatie', 'Vloeren leggen', 'Stofferen', 'Overig'];
  const servicesWithPrices: Record<string, number> = {
    'Schuren + polijsten + (zonder behandeling)': 17.5,
    'Schuren + polijsten + oliën naturel': 30.0,
    'Schuren + polijsten + oliën in kleur': 32.5,
    'Schuren + polijsten + lakken in naturel': 36.0,
    'Schuren + polijsten + lakken in kleur': 46.0,
    'Schuren + polijsten + hardwax naturel': 30.0,
    'Schuren + polijsten + hardwax in kleur': 35.0,
    'Schuren + polijsten + lakken met Skylt': 35.0,
    'Ben ik nog niet over uit.': 0.0,
    'Ik wil graag advies': 0.0,
  };

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const serviceOptions: Option[] = Object.entries(servicesWithPrices).map(([service, price]) => ({
    value: service,
    label: `${service} - €${price.toFixed(2)}`,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedCategory: formData.selectedCategory || '',
      selectedService: formData.selectedService || '',
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    const selectedServicePrice = servicesWithPrices[data.selectedService] || 0;

    updateFormData({
      ...data,
      selectedServicePrice,
    });

    // Conditional navigation based on selected service
    if (data.selectedService === 'Ben ik nog niet over uit.') {
      onNext(6); // Navigate to Step Five
    } else if (data.selectedService === 'Ik wil graag advies') {
      onNext(9); // Navigate to Contact Info Step
    } else {
      onNext(); // Proceed normally
    }
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[430px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg "
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <HeadlineSemibold>Snel jouw prijs berekenen!</HeadlineSemibold>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-[25px] py-[22px]">
          <div className="flex flex-row items-center justify-between">
            <span className="text-gray-400 font-sans text-sm">Waar kunnen we u mee helpen?</span>
            {(form.watch('selectedCategory') || form.watch('selectedService')) && (
              <div className="w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
                <div className="w-[15%] h-full bg-green-700 rounded-full"></div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="selectedCategory"
              label="Categorie"
              placeholder="Kies er een"
            />
          </div>
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={serviceOptions}
              name="selectedService"
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
