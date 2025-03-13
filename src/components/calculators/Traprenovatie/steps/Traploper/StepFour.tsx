import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { trapRenovatieConfig } from '@/lib/servicesConfig';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: (step?: number) => void;
  formData: {
    totalCost?: number;
    selectedService?: string;
    selectedCloseStairs?: number;
    closeStairTotalSteps?: number;
    TapijtType?: string;
    AfwerkingType?: string;
  };
  updateFormData: (data: any) => void;
}

// Define schema with validation
const schema = z.object({
  TapijtType: z.string().min(1, 'Selecteer een tapijt type'),
  AfwerkingType: z.string().min(1, 'Selecteer een afwerking type'),
});

const StepFour: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const TapijtTypeOptions: Option[] = [
    { value: 'Tapijt', label: 'Tapijt', imageUrl: '/images/TrapranovatieTraploperStepFour/tapijt.webp' },
    { value: 'JobaTapijt', label: 'Jabo', imageUrl: '/images/TrapranovatieTraploperStepFour/jabo.webp' },
    { value: 'Sisal', label: 'Sisal', imageUrl: '/images/TrapranovatieTraploperStepFour/sisal.webp' },
    { value: 'Wol', label: 'Wol', imageUrl: '/images/TrapranovatieTraploperStepFour/wol.webp' },
    { value: 'Synthetisch', label: 'Synthetisch', imageUrl: '/images/TrapranovatieTraploperStepFour/synthetisch.webp' },
  ];

  const AfwerkingTypeOptions: Option[] = [
    { value: 'Gefestonneerd (standaard)', label: 'Gefestonneerd (standaard)' },
    { value: 'Enkel gebandeerd (+€10,-per trede)', label: 'Enkel gebandeerd (+€10,-per trede)' },
    { value: 'Dubbel gebandeerd (+€15,-per trede)', label: 'Dubbel gebandeerd (+€15,-per trede)' },
  ];

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      TapijtType: formData.TapijtType || '',
      AfwerkingType: formData.AfwerkingType || '',
    },
    mode: 'onChange',
  });

  const { handleSubmit, watch, formState } = form;
  const { errors, isValid } = formState;

  // Watch selected values
  const selectedTapijtType = watch(
    'TapijtType'
  ) as keyof (typeof trapRenovatieConfig)['Bekleden met traploper']['pricing']['closedStairs'];
  const selectedAfwerkingType = watch(
    'AfwerkingType'
  ) as keyof (typeof trapRenovatieConfig)['Bekleden met traploper']['pricing']['additionalOptions'];

  // Extract pricing from `trapRenovatieConfig`
  const pricing = trapRenovatieConfig['Bekleden met traploper'].pricing;
  const closedStairsPricing = pricing.closedStairs || {};
  const additionalOptionsPricing = pricing.additionalOptions || {};

  // Convert values to numbers
  const numberOfStairs = Number(formData.selectedCloseStairs) || 1; // Default to 1 if not provided
  const numberOfSteps = Number(formData.closeStairTotalSteps) || 1; // Default to 1 if not provided

  // Validate selections before accessing pricing data
  const tapijtPrice = selectedTapijtType in closedStairsPricing ? Number(closedStairsPricing[selectedTapijtType]) : 0;
  const afwerkingPrice =
    selectedAfwerkingType in additionalOptionsPricing ? Number(additionalOptionsPricing[selectedAfwerkingType]) : 0;

  // Calculate total cost based on number of stairs and steps
  const calculatedTotalCost = (tapijtPrice + afwerkingPrice) * numberOfStairs * numberOfSteps;

  // Local state for displaying total
  const [TotalCost, setTotalCost] = useState<number>(formData.totalCost || 0);

  // Sync formData and update total cost dynamically
  useEffect(() => {
    setTotalCost(calculatedTotalCost);

    updateFormData({
      TapijtType: selectedTapijtType,
      AfwerkingType: selectedAfwerkingType,
      totalCost: calculatedTotalCost,
    });
  }, [selectedTapijtType, selectedAfwerkingType, numberOfStairs, numberOfSteps]);

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
              <div className="w-[40%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Tapijt Type Selection */}
          <div className="flex flex-col mb-1">
            <SingleSelectDropdown
              data={TapijtTypeOptions}
              name="TapijtType"
              label="Type tapijt"
              placeholder="Maak een keuze"
            />
            {errors.TapijtType && <span className="text-red-500 text-sm">{errors.TapijtType.message}</span>}
          </div>

          {/* Afwerking Type Selection */}
          <div className="flex flex-col">
            <SingleSelectDropdown
              data={AfwerkingTypeOptions}
              name="AfwerkingType"
              label="Type afwerking"
              placeholder="Maak een keuze"
            />
            {errors.AfwerkingType && <span className="text-red-500 text-sm">{errors.AfwerkingType.message}</span>}
          </div>

          {/* Total Price Display */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
            <span className="font-semibold text-lg text-green-700">€ {TotalCost.toFixed(2)}</span>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col space-y-2 mt-auto">
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

export default StepFour;
