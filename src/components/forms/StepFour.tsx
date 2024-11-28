import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import InputGetter from './Getters/InputGetter';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepFourProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: any; // Centralized form data passed down
  updateFormData: (data: any) => void; // Function to update the centralized state
}

const schema = z.object({
  newBaseboardsNeeded: z.string().nonempty({ message: 'Please select at least one option' }),
  numberOfMeters: z
    .string()
    .regex(/^\d*$/, 'Enter a valid number') // Allow only digits or empty
    .optional(),
});

const StepFour: React.FC<StepFourProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const [totalPrice, setTotalPrice] = useState<number>(formData.totalCost || 0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); // Track button state

  const categories = [
    { value: 'Ja, lage', label: 'Ja, lage', imageUrl: '/images/hoge.png' },
    { value: 'Ja, hoge', label: 'Ja, hoge', imageUrl: '/images/hoge.png' },
    { value: 'Nee', label: 'Nee' },
  ];

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category.value,
    label: category.label,
    imageUrl: category.imageUrl,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      ...formData,
      newBaseboardsNeeded: formData.newBaseboardsNeeded || '',
      numberOfMeters: formData.numberOfMeters || '',
    },
    mode: 'onChange',
  });

  const watchNewBaseboards = form.watch('newBaseboardsNeeded');
  const watchMeters = form.watch('numberOfMeters');

  useEffect(() => {
    const basePrice = formData.totalCost || 0; // Start with the price from the previous step
    let additionalCost = 0;

    if (watchNewBaseboards && watchMeters) {
      const meters = parseInt(watchMeters, 10) || 0;
      if (watchNewBaseboards === 'Ja, lage') {
        additionalCost = meters * 6; // Flat Plinth (€6/m)
      } else if (watchNewBaseboards === 'Ja, hoge') {
        additionalCost = meters * 12; // High Plinth (€12/m)
      }
    }

    setTotalPrice(basePrice + additionalCost);
  }, [watchNewBaseboards, watchMeters, formData.totalCost]);

  // Update the button disabled state based on conditions
  useEffect(() => {
    if (watchNewBaseboards === 'Nee') {
      setIsButtonDisabled(false); // Button enabled if "Nee" is selected
    } else {
      // If "Ja, lage" or "Ja, hoge" is selected, disable the button until the number of meters is entered
      setIsButtonDisabled(!(watchMeters && /^[0-9]+$/.test(watchMeters)));
    }
  }, [watchNewBaseboards, watchMeters]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData({
        ...formData,
        ...data,
        totalCost: totalPrice, // Save the updated total price
      });
      onNext();
    })();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px] h-[430px] flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs bereken!</HeadlineSemibold>
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
              <div className="w-[75%] h-full bg-green-700 rounded-full hover:text-green-700 transition-all-"></div>
            </div>
          </div>

          {/* Dropdown for plinth selection */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="newBaseboardsNeeded"
              label="Nieuwe plinten nodig?"
              placeholder="Kies er een"
            />
          </div>

          {/* Input for meters */}
          {watchNewBaseboards && watchNewBaseboards !== 'Nee' && (
            <div className="flex flex-col gap-[11px]">
              <InputGetter
                form={form}
                name="numberOfMeters"
                label="Aantal meter (excl. plinten)"
                placeholder="Enter the number of meters"
                type="text"
              />
            </div>
          )}

          {/* Total price display */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{totalPrice.toFixed(2)}</span>
            </div>
            <CreateButton
              className={`w-full ${isButtonDisabled ? 'bg-gray-500' : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'}`}
              type="submit"
              disabled={isButtonDisabled}
            >
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepFour;
