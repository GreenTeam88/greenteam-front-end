import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: (step?: number) => void;
  onUploadClick: (field: string) => void; // For uploading photos
  formData: {
    stepCosts: Record<string, number>;
    totalCost: number;
    damageRepairsNeeded?: string;
    numberOfRepairs?: string;
    [key: string]: any;
  };
  updateFormData: (data: any) => void;
}

const StepThreePart1: React.FC<StepProps> = ({ onPrevious, onNext, onUploadClick, formData, updateFormData }) => {
  const categories = ['Ja', 'Nee'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category === 'Ja' ? 'Ja (Let op: Berekening volgt na aanvraag)' : category,
  }));

  const numberOptions: Option[] = numbers.map((number) => ({
    value: number,
    label: number,
  }));

  const schema = z.object({
    damageRepairsNeeded: z.string().nonempty({ message: 'Please select an option' }),
    numberOfRepairs: z.string().optional(),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      damageRepairsNeeded: formData.damageRepairsNeeded || '',
      numberOfRepairs: formData.numberOfRepairs || '',
    },
    mode: 'onChange',
  });

  const watchDamageRepairs = form.watch('damageRepairsNeeded');
  const watchNumberOfRepairs = form.watch('numberOfRepairs');

  const [stepCost, setStepCost] = useState<number>(formData.stepCosts?.step3Part1 || 0);

  // Function to calculate the cost for this step
  const calculateStepCost = (): number => {
    // if (watchDamageRepairs === 'Ja') {
    //   // Optionally assign a cost per repair if needed
    //   // const numberOfRepairs = parseInt(watchNumberOfRepairs || '0', 10);
    //   return 0; // Example: €10 per repair
    // }
    return 0; // No cost if "Nee" is selected
  };

  // Update the step cost and propagate it to formData
  useEffect(() => {
    const newCost = calculateStepCost();
    setStepCost(newCost);

    const updatedStepCosts = {
      ...formData.stepCosts,
      step3Part1: newCost,
    };

    updateFormData({
      ...formData,
      stepCosts: updatedStepCosts,
      totalCost: Object.values(updatedStepCosts).reduce((acc, cost) => acc + cost, 0),
    });
  }, [watchDamageRepairs, watchNumberOfRepairs]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData({
        ...formData,
        ...data,
        stepCosts: {
          ...formData.stepCosts,
          step3Part1: stepCost,
        },
      });

      onNext();
    })();
  };

  const isButtonDisabled = !watchDamageRepairs || (watchDamageRepairs === 'Ja' && !watchNumberOfRepairs);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px] h-[400px] flex rounded-[4px] relative lg:px-0 z-10 flex-col ">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-md ">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Een aantal vragen over de ruimte(s)
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[45%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <SingleSelectDropdown
              data={categoryOptions}
              name="damageRepairsNeeded"
              label="Zijn er beschadigingen of reparaties nodig?"
              placeholder="Kies er een"
            />
          </div>

          {watchDamageRepairs === 'Ja' && (
            <>
              <div className="flex flex-col w-44">
                <label
                  className="text-xs cursor-pointer"
                  onClick={() => {
                    updateFormData(form.getValues());
                    onUploadClick('damagePhotos');
                  }}
                >
                  <span className="font-bold text-green-700 hover:text-green-900 hover:underline transition-all duration-200">
                    Foto uploaden
                  </span>
                  <span className="text-gray-400 font-sans"> (Niet verplicht)</span>
                </label>
              </div>

              <div className="flex flex-col">
                <SingleSelectDropdown
                  data={numberOptions}
                  name="numberOfRepairs"
                  label="Aantal beschadigingen of reparaties"
                  placeholder="Selecteer een aantal"
                />
              </div>
            </>
          )}

          {/* Total Price Display */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center ">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{formData.totalCost.toFixed(2)}</span>
            </div>
            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
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

export default StepThreePart1;
