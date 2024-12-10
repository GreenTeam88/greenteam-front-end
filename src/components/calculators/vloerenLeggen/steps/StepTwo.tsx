import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import MultiSelectDropdown from '@/components/calculators/Getters/MultiSelectDropdown';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: {
    selectedFloors?: string[];
    existingFloorType?: string;
    stepCosts?: Record<string, number>;
    totalCost?: number;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({
  selectedFloors: z.array(z.string()).min(1, 'Please select at least one floor'),
  existingFloorType: z.string().nonempty({ message: 'Please select the existing floor type' }),
});

const StepTwo: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const FLOOR_COST = 25; // €25 per floor level

  const floorOptions = ['0 (Begane grond)', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  const floorTypeOptions = ['Beton', 'Hout', 'Laminaat', 'PVC', 'Grind', 'Tegels', 'Lijmresten', 'Tapijt'];

  const dataOptions: Option[] = floorOptions.map((data) => ({
    value: data,
    label: data,
  }));

  const floorTypeDropdownOptions: Option[] = floorTypeOptions.map((floorType) => ({
    value: floorType,
    label: floorType,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedFloors: formData.selectedFloors || [],
      existingFloorType: formData.existingFloorType || '',
    },
    mode: 'onChange',
  });

  const { control } = form;

  // Watch inputs
  const selectedFloors = useWatch({ control, name: 'selectedFloors' }) || [];
  const existingFloorType = useWatch({ control, name: 'existingFloorType' }) || '';

  // Calculate the cost for this step
  const calculateStepCost = () => {
    // Calculate floor level cost
    return selectedFloors.reduce((totalCost: number, floor: string) => {
      const floorNumber = parseInt(floor.split(' ')[0], 10); // Extract the floor number
      if (!isNaN(floorNumber) && floorNumber > 0) {
        totalCost += FLOOR_COST;
      }
      return totalCost;
    }, 0);
  };

  // Update formData when inputs change
  useEffect(() => {
    const step2Cost = calculateStepCost();

    const updatedStepCosts = {
      ...(formData.stepCosts || {}),
      step2: step2Cost,
    };

    updateFormData({
      ...formData,
      selectedFloors,
      existingFloorType,
      stepCosts: updatedStepCosts,
      totalCost: Object.values(updatedStepCosts).reduce((acc, cost) => acc + cost, 0), // Safely calculate totalCost
    });
  }, [selectedFloors, existingFloorType]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit(() => {
      const step2Cost = calculateStepCost();

      const updatedStepCosts = {
        ...(formData.stepCosts || {}),
        step2: step2Cost,
      };

      updateFormData({
        ...formData,
        selectedFloors,
        existingFloorType,
        stepCosts: updatedStepCosts,
        totalCost: Object.values(updatedStepCosts).reduce((acc, cost) => acc + cost, 0), // Safely calculate totalCost
      });

      onNext();
    })();
  };

  const isButtonDisabled = !selectedFloors.length || !existingFloorType;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[400px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] h-full">
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
              <div className="w-[30%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <MultiSelectDropdown
              data={dataOptions}
              name="selectedFloors"
              label="Welke verdieping(en)?"
              placeholder="Kies er een"
            />
          </div>

          <div className="flex flex-col">
            <SingleSelectDropdown
              data={floorTypeDropdownOptions}
              name="existingFloorType"
              label="Wat is de huidige ondergrond?"
              placeholder="Selecteer een type vloer"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">
                €{(formData.stepCosts?.step2 || 0).toFixed(2)}
              </span>
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

export default StepTwo;
