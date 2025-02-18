import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: (step?: number) => void;
  formData: {
    totalCost: number;
    selectedService?: string;
    TrapType?: string;
    TrapLong?: string;
  };
  updateFormData: (data: any) => void;
}

// Define schema with validation
const schema = z.object({
  TrapType: z.string().min(1, 'Selecteer een traptype'),
  TrapLong: z.string().min(1, 'Selecteer de lengte'),
});

const StepLighting: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const TrapTypesOptions: Option[] = [
    {
      value: 'Rechte trap',
      label: 'Rechte trap',
      imageUrl: '/images/TraprenovatieTraploper/rechte_trap.webp',
    },
    {
      value: 'Bovenkwart linkson',
      label: 'Bovenkwart linkson',
      imageUrl: '/images/TraprenovatieTraploper/bovenkwart_linksom.webp',
    },
    {
      value: 'Bovenkwart rechtsom',
      label: 'Bovenkwart rechtsom',
      imageUrl: '/images/TraprenovatieTraploper/bovenkwart_rechtsom.webp',
    },
    {
      value: 'Onderkwart linksom',
      label: 'Onderkwart linksom',
      imageUrl: '/images/TraprenovatieTraploper/onderkwart_linksom.webp',
    },
    {
      value: 'Onderkwart rechtsom',
      label: 'Onderkwart rechtsom',
      imageUrl: '/images/TraprenovatieTraploper/onderkwart_rechtsom.webp',
    },
    {
      value: 'Tweekwart linksom',
      label: 'Tweekwart linksom',
      imageUrl: '/images/TraprenovatieTraploper/tweekwart_linksom.webp',
    },
    {
      value: 'Tweekwart rechtsom',
      label: 'Tweekwart rechtsom',
      imageUrl: '/images/TraprenovatieTraploper/tweekwart_rechtsom.webp',
    },
  ];

  const TrapLongOptions: Option[] = [
    { value: 'Nee', label: 'Nee' },
    { value: '1 m²', label: '1 m²' },
    { value: '2 m²', label: '2 m²' },
    { value: '3 m²', label: '3 m²' },
    { value: '4 m²', label: '4 m²' },
    { value: '5 m²', label: '5 m²' },
    { value: '6 m²', label: '6 m²' },
    { value: '7 m²', label: '7 m²' },
    { value: '8 m²', label: '8 m²' },
    { value: '9 m²', label: '9 m²' },
  ];

  // React Hook Form setup with default values
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      TrapType: formData.TrapType || '',
      TrapLong: formData.TrapLong || '',
    },
    mode: 'onChange',
  });

  const { handleSubmit, watch, formState } = form;
  const { errors, isValid } = formState;

  // Watch selected values
  const watchTrapType = watch('TrapType');
  const watchTrapLong = watch('TrapLong');

  // Sync formData when values change
  useEffect(() => {
    updateFormData({
      TrapType: watchTrapType,
      TrapLong: watchTrapLong,
    });
  }, [watchTrapType, watchTrapLong]);

  // Handle form submission
  const onSubmitForm = () => {
    onNext();
  };

  return (
    <FormProvider {...form}>
      <form className="w-[386px] flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        {/* Header */}
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

        {/* Form Body */}
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-md">
          {/* Navigation */}
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Een aantal vragen over de trapen
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[35%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Trap Type Selection */}
          <div className="flex flex-col mb-1">
            <SingleSelectDropdown
              data={TrapTypesOptions}
              name="TrapType"
              label="Type trap?"
              placeholder="Maak één of meerdere keuzes"
            />
            {errors.TrapType && <span className="text-red-500 text-sm">{errors.TrapType.message}</span>}
          </div>

          {/* Trap Long Selection */}
          <div className="flex flex-col">
            <SingleSelectDropdown
              data={TrapLongOptions}
              name="TrapLong"
              label="Lengte trap?"
              placeholder="Maak een keuze"
            />
            {errors.TrapLong && <span className="text-red-500 text-sm">{errors.TrapLong.message}</span>}
          </div>

          {/* Price Calculation Placeholder */}
          <div className="flex flex-col space-y-2 mt-auto">
            <div className="flex justify-center text-center items-center">
              <span className="font-semibold text-lg text-green-700">Berekening volgt in stap 3...</span>
            </div>

            {/* Submit Button */}
            <CreateButton
              className={`w-full ${
                isValid
                  ? 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
                  : 'bg-gray-500'
              }`}
              type="button"
              disabled={!isValid}
              onClick={handleSubmit(onSubmitForm)}
            >
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepLighting;
