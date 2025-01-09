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
  formData: {
    stepCosts: { [key: string]: number };
    totalCost: number;
    [key: string]: any;
    numberOfMetersBaseboard?: string;
  }; // Centralized form data passed down
  updateFormData: (data: any) => void; // Function to update the centralized state
}

const schema = z.object({
  newBaseboardsNeeded: z.string().nonempty({ message: 'Please select at least one option' }),
  numberOfMetersBaseboard: z
    .string()
    .regex(/^\d*$/, 'Enter a valid number') // Allow only digits or empty
    .optional(),
});

const StepFour: React.FC<StepFourProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const [stepCost, setStepCost] = useState<number>(formData.stepCosts?.step4 || 0);

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
      numberOfMetersBaseboard: formData.numberOfMetersBaseboard || '',
    },
    mode: 'onChange',
  });

  const watchNewBaseboards = form.watch('newBaseboardsNeeded');
  const watchMeters = form.watch('numberOfMetersBaseboard');

  // Calculate the cost for this step
  const calculateStepCost = () => {
    let cost = 0;

    if (watchNewBaseboards && watchMeters) {
      const meters = parseInt(watchMeters, 10) || 0;
      if (watchNewBaseboards === 'Ja, lage') {
        cost = meters * 6; // Flat Plinth (€6/m)
      } else if (watchNewBaseboards === 'Ja, hoge') {
        cost = meters * 12; // High Plinth (€12/m)
      }
    }

    return cost;
  };

  // Update step cost and propagate it to formData
  useEffect(() => {
    const cost = calculateStepCost();
    setStepCost(cost);

    const updatedStepCosts = {
      ...formData.stepCosts,
      step4: cost,
    };

    updateFormData({
      ...formData,
      stepCosts: updatedStepCosts,
      totalCost: Object.values(updatedStepCosts).reduce((acc: number, cost: number) => acc + cost, 0),
    });
  }, [watchNewBaseboards, watchMeters]);

  const isButtonDisabled =
    !watchNewBaseboards || (watchNewBaseboards !== 'Nee' && (!watchMeters || !/^[0-9]+$/.test(watchMeters)));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData({
        ...formData,
        ...data,
        stepCosts: {
          ...formData.stepCosts,
          step4: stepCost,
        },
      });

      onNext();
    })();
  };

  return (
    <FormProvider {...form}>
      <form className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-md">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
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
                name="numberOfMetersBaseboard"
                label="Aantal meter (excl. plinten)"
                placeholder="Voer het aantal meters in"
                type="text"
              />
            </div>
          )}

          {/* Total price display */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{formData.totalCost.toFixed(2)}</span>
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

export default StepFour;
