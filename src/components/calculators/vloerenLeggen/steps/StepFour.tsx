import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import InputGetter from '@/components/calculators/Getters/InputGetter';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

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
  const [totalPrice, setTotalPrice] = useState<number>(Number(formData.totalCost) || 0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); // Track button state

  const categories = [
    { value: 'Ja, lage', label: 'Ja, lage', imageUrl: '/images/lage-plinten.svg' },
    { value: 'Ja, hoge', label: 'Ja, hoge', imageUrl: '/images/hoge-plinten.svg' },
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
    const basePrice = Number(formData.totalCost) || 0; // Default to 0 if totalCost is not valid
    let additionalCost = 0;

    if (watchNewBaseboards && watchMeters) {
      const meters = parseInt(watchMeters, 10) || 0; // Parse meters as an integer
      if (watchNewBaseboards === 'Ja, lage') {
        additionalCost = meters * 6; // Flat Plinth (€6/m)
      } else if (watchNewBaseboards === 'Ja, hoge') {
        additionalCost = meters * 12; // High Plinth (€12/m)
      }
    }

    setTotalPrice(basePrice + additionalCost);
  }, [watchNewBaseboards, watchMeters, formData.totalCost]);

  useEffect(() => {
    if (watchNewBaseboards === 'Nee') {
      setIsButtonDisabled(false); // Enable if "Nee" is selected
    } else {
      setIsButtonDisabled(!(watchMeters && /^[0-9]+$/.test(watchMeters)));
    }
  }, [watchNewBaseboards, watchMeters]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData({
        ...formData,
        ...data,
        totalCost: totalPrice || 0, // Ensure totalCost is a number
      });
      onNext();
    })();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px] h-[400px] flex rounded-[4px] relative lg:px-0 z-10 flex-col ">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen! vloren</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-[25px] py-[22px] shadow-lg">
          <div className="flex flex-row items-center justify-between">
            <ChevronLeft className="cursor-pointer" onClick={onPrevious} />
            <span className="text-gray-400 font-sans text-sm">Niet verplicht, wel handig om te weten</span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[75%] h-full bg-green-700"></div>
            </div>
          </div>

          <SingleSelectDropdown
            data={categoryOptions}
            name="newBaseboardsNeeded"
            label="Nieuwe plinten nodig?"
            placeholder="Maak een keuze"
          />

          {watchNewBaseboards && watchNewBaseboards !== 'Nee' && (
            <InputGetter
              form={form}
              name="numberOfMeters"
              label="Aantal meter?"
              placeholder="Voer het aantal meters in"
              type="text"
            />
          )}

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center text-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">
                €{!isNaN(totalPrice) ? totalPrice.toFixed(2) : '0.00'}
              </span>
            </div>

            <CreateButton
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full ${isButtonDisabled ? 'bg-gray-500' : 'bg-primaryDefault'}`}
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
