// StepTwo.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react'; // Ensure this import is present

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import InputGetter from './Getters/InputGetter';
import MultiSelectDropdown from './MultiSelectDropdown';

interface StepProps {
  onPrevious: () => void; // Optional, depends on your flow control
  onNext: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const schema = z.object({
  selectedFloors: z.array(z.string()).min(1, 'Please select at least one floor'),
  squareMeters: z.string().nonempty({ message: 'Please enter the area in m²' }).regex(/^\d+$/, 'Enter a valid number'),
});

const StepTwo: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const datas = ['0 (Begane grond)', '1', '2', '3', '4', '5', '9', '10+'];
  const dataOptions: Option[] = datas.map((data) => ({
    value: data,
    label: data,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData(data);
      onNext();
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
            <div className="flex items-center gap-[5px] cursor-pointer" onClick={onPrevious}>
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Een aantal vragen over de ruimte(s)
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[40%] h-full bg-green-700 rounded-full"></div>
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
            <InputGetter form={form} name="squareMeters" label="Aantal m2" placeholder="Enter the m2" type="text" />
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

export default StepTwo;
