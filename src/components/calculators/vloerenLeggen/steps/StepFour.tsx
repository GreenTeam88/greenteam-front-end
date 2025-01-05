import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
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
    newBaseboardsNeeded?: string;
    BaseboardsMeters?: string; // Unique field for square meters in StepFour
    stepCosts: Record<string, number>;
    totalCost?: number;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({
  newBaseboardsNeeded: z.string().nonempty({ message: 'Please select at least one option' }),
  BaseboardsMeters: z
    .string()
    .regex(/^\d*$/, 'Enter a valid number') // Allow only digits or empty
    .optional(),
});

const StepFour: React.FC<StepFourProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      newBaseboardsNeeded: '',
      BaseboardsMeters: '',
    },
    mode: 'onChange',
  });

  const { control } = form;

  // Watch fields
  const watchNewBaseboards = useWatch({ control, name: 'newBaseboardsNeeded' });
  const BaseboardsMeters = useWatch({ control, name: 'BaseboardsMeters' }); // Unique name for this step

  const baseboardOptions: Option[] = [
    { value: 'Ja, lage', label: 'Ja, lage', imageUrl: '/images/lage-plinten.svg' },
    { value: 'Ja, hoge', label: 'Ja, hoge', imageUrl: '/images/hoge-plinten.svg' },
    { value: 'Nee', label: 'Nee' },
  ];

  // Calculate step cost
  const calculateStepCost = () => {
    if (watchNewBaseboards === 'Nee') return 0;

    const meters = parseInt(BaseboardsMeters || '0', 10);
    if (watchNewBaseboards === 'Ja, lage') {
      return meters * 6; // Flat Plinth (€6/m)
    } else if (watchNewBaseboards === 'Ja, hoge') {
      return meters * 12; // High Plinth (€12/m)
    }
    return 0;
  };

  // Avoid updating step cost multiple times
  useEffect(() => {
    const currentStepCost = calculateStepCost();

    // Update only if the cost has changed
    if (formData.stepCosts.step4 !== currentStepCost) {
      updateFormData({
        ...formData,
        newBaseboardsNeeded: watchNewBaseboards,
        BaseboardsMeters,
        stepCosts: {
          ...formData.stepCosts,
          step4: currentStepCost, // StepFour-specific cost
        },
        totalCost: Object.values<number>({
          ...formData.stepCosts,
          step4: currentStepCost,
        }).reduce((acc, cost) => acc + cost, 0), // Total across all steps
      });
    }
  }, [watchNewBaseboards, BaseboardsMeters]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit(() => {
      onNext(); // Avoid recalculating costs on submission
    })();
  };

  const isButtonDisabled =
    !watchNewBaseboards || (watchNewBaseboards !== 'Nee' && !(BaseboardsMeters && /^[0-9]+$/.test(BaseboardsMeters)));

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-md">
          <div className="flex flex-row items-center justify-between">
            <ChevronLeft className="cursor-pointer" onClick={onPrevious} />
            <span className="text-gray-400 font-sans text-sm">Niet verplicht, wel handig om te weten</span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[75%] h-full bg-green-700"></div>
            </div>
          </div>

          {/* Dropdown for New Baseboards */}
          <SingleSelectDropdown
            data={baseboardOptions}
            name="newBaseboardsNeeded"
            label="Nieuwe plinten nodig?"
            placeholder="Maak een keuze"
          />

          {/* Input for Meters */}
          {watchNewBaseboards && watchNewBaseboards !== 'Nee' && (
            <InputGetter
              form={form}
              name="BaseboardsMeters" // Use unique name
              label="Aantal meter?"
              placeholder="Voer het aantal meters in"
              type="text"
            />
          )}

          {/* Total Price Display */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center text-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{(formData.totalCost || 0).toFixed(2)}</span>
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
