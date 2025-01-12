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
    numberOfMeters?: string;
    stepCosts: Record<string, number>;
    totalCost?: number;
    isOnRequest?: boolean;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({
  newBaseboardsNeeded: z.string().nonempty({ message: 'Please select at least one option' }),
  numberOfMeters: z.string().regex(/^\d*$/, 'Enter a valid number').optional(),
});

// Pricing configuration
const BASEBOARD_PRICES: Record<string, number> = {
  'Ja, lage': 6, // Flat Plinth (€6/m)
  'Ja, hoge': 12, // High Plinth (€12/m)
  Nee: 0, // No additional cost
};

const StepFour: React.FC<StepFourProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      newBaseboardsNeeded: formData.newBaseboardsNeeded || '',
      numberOfMeters: formData.numberOfMeters || '',
    },
    mode: 'onChange',
  });

  const { control } = form;

  const watchNewBaseboards = useWatch({ control, name: 'newBaseboardsNeeded' });
  const watchMeters = useWatch({ control, name: 'numberOfMeters' });

  // Calculate the cost for this step
  const calculateStepCost = () => {
    const baseboardCostPerMeter = BASEBOARD_PRICES[watchNewBaseboards] || 0;
    const meters = parseInt(watchMeters || '0', 10);
    return baseboardCostPerMeter * meters;
  };

  // Update formData dynamically when inputs change
  useEffect(() => {
    const step4Cost = calculateStepCost();
    const previousTotal = Number(formData.totalCost) || 0;

    updateFormData({
      ...formData,
      newBaseboardsNeeded: watchNewBaseboards,
      numberOfMeters: watchMeters,
      stepCosts: {
        ...formData.stepCosts,
        step4: step4Cost,
      },
      totalCost: previousTotal - (formData.stepCosts?.step4 || 0) + step4Cost, // Adjust total cost dynamically
    });
  }, [watchNewBaseboards, watchMeters]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      const step4Cost = calculateStepCost();
      const previousTotal = Number(formData.totalCost) || 0;

      updateFormData({
        ...formData,
        ...data,
        stepCosts: {
          ...formData.stepCosts,
          step4: step4Cost,
        },
        totalCost: previousTotal - (formData.stepCosts?.step4 || 0) + step4Cost, // Update total cost accurately
      });

      onNext();
    })();
  };

  const isButtonDisabled =
    !watchNewBaseboards || (watchNewBaseboards !== 'Nee' && !(watchMeters && /^[0-9]+$/.test(watchMeters)));

  const categoryOptions: Option[] = [
    { value: 'Ja, lage', label: 'Ja, lage', imageUrl: '/images/lage-plinten.svg' },
    { value: 'Ja, hoge', label: 'Ja, hoge', imageUrl: '/images/hoge-plinten.svg' },
    { value: 'Nee', label: 'Nee' },
  ];

  return (
    <FormProvider {...form}>
      <form className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
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
            placeholder="Kies er een"
          />

          {watchNewBaseboards && watchNewBaseboards !== 'Nee' && (
            <InputGetter
              form={form}
              name="numberOfMeters"
              label="Aantal meter (excl. plinten)"
              placeholder="Voer het aantal meters in"
              type="text"
            />
          )}

          <div className="flex flex-col space-y-2">
            {formData.isOnRequest ? (
              <div className="flex justify-center items-center h-full">
                <span className="font-semibold text-lg text-green-700">Berekening volgt na aanvraag</span>
              </div>
            ) : (
              <div className="flex justify-between items-center text-center">
                <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
                <span className="font-semibold text-lg text-green-700">€{(formData.totalCost || 0).toFixed(2)}</span>
              </div>
            )}

            <CreateButton
              type="button"
              disabled={isButtonDisabled}
              className={`w-full ${isButtonDisabled ? 'bg-gray-500' : 'bg-primaryDefault'}`}
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
