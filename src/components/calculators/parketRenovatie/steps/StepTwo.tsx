import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import InputGetter from '@/components/calculators/Getters/InputGetter';
import MultiSelectDropdown from '@/components/calculators/Getters/MultiSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const schema = z.object({
  selectedFloors: z.array(z.string()).min(1, 'Please select at least one floor'),
  squareMeters: z.string().nonempty({ message: 'Please enter the area in m²' }).regex(/^\d+$/, 'Enter a valid number'),
});

const StepTwo: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const FLOOR_COST = 25; // €25 per floor level
  const servicePricePerM2 = formData.selectedServicePrice || 0; // Price per m² from Step One
  console.log('service price : ', servicePricePerM2);
  console.log('type:', typeof servicePricePerM2);

  const datas = ['0 (Begane grond)', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  const dataOptions: Option[] = datas.map((data) => ({
    value: data,
    label: data,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const { control } = form;

  const selectedFloors = useWatch({ control, name: 'selectedFloors', defaultValue: [] });
  const squareMeters = useWatch({ control, name: 'squareMeters', defaultValue: '' });

  const calculateTotal = () => {
    const area = parseInt(squareMeters, 10) || 0;

    // Calculate floor cost based on floor-specific logic
    const floorLevelCost = selectedFloors.reduce((totalCost: number, floor: string) => {
      const floorNumber = parseInt(floor.split(' ')[0], 10); // Extract the floor number
      if (!isNaN(floorNumber) && floorNumber > 0) {
        totalCost += FLOOR_COST; // Add the cost for each additional floor
      }
      return totalCost;
    }, 0);

    const baseCost = servicePricePerM2 * area;
    const totalCost = floorLevelCost + baseCost;

    // Cap the total cost at 999,999.99
    return Math.min(totalCost, 999999.99).toFixed(2);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      const totalCost = calculateTotal();

      updateFormData({
        ...data,
        totalCost, // Include total cost in formData
        baseCost: servicePricePerM2 * parseInt(data.squareMeters || '0', 10),
        floorLevelCost: selectedFloors.reduce((totalCost: number, floor: string) => {
          const floorNumber = parseInt(floor.split(' ')[0], 10);
          if (!isNaN(floorNumber) && floorNumber > 0) {
            totalCost += FLOOR_COST;
          }
          return totalCost;
        }, 0),
      });

      onNext();
    })();
  };

  const isButtonDisabled = !selectedFloors.length || !squareMeters;

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
          <div className="flex flex-col gap-[11px]">
            <InputGetter
              form={form}
              name="squareMeters"
              label="Aantal m2"
              placeholder="Voer het aantal m2 in"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{calculateTotal()}</span>
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

export default StepTwo;
