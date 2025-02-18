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
    ondertapijt?: string;
    loperFormaat?: string;
  };
  updateFormData: (data: any) => void;
}

// Define schema with validation
const schema = z.object({
  ondertapijt: z.string().min(1, 'Maak een keuze'),
  loperFormaat: z.string().min(1, 'Maak een keuze'),
});

const StepFive: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const ondertapijtOptions: Option[] = [
    { value: 'Ja', label: 'Ja' },
    { value: 'Nee', label: 'Nee' },
  ];

  const loperFormaatOptions: Option[] = [
    { value: 'ExtraWidth70cm', label: '70cm breed (standaard)' },
    { value: 'ExtraWidth80cm', label: '80cm breed' },
    { value: 'ExtraWidth90cm', label: '90cm breed' },
    { value: 'ExtraWidth100cm', label: '100cm breed' },
  ];

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      ondertapijt: formData.ondertapijt || '',
      loperFormaat: formData.loperFormaat || '',
    },
    mode: 'onChange',
  });

  const { handleSubmit, watch, formState } = form;
  const { errors, isValid } = formState;

  // Watch selected values
  const selectedOndertapijt = watch('ondertapijt');
  const selectedLoperFormaat = watch('loperFormaat');

  // Extract pricing from `trapRenovatieConfig`
  const pricing = trapRenovatieConfig['Bekleden met traploper'].pricing;
  const additionalOptionsPricing = pricing.additionalOptions || {};
  const extraServicesPricing = pricing.extraServices || {};

  // Convert values to numbers
  const numberOfStairs = Number(formData.selectedCloseStairs) || 1; // Default to 1 if not provided
  const numberOfSteps = Number(formData.closeStairTotalSteps) || 1; // Default to 1 if not provided

  // Retrieve base total cost first
  const baseTotalCost = formData.totalCost ?? 0;

  // Apply ondertapijt price only when "Ja" is selected
  const ondertapijtPrice = selectedOndertapijt === 'Ja' ? additionalOptionsPricing.ondertapijt ?? 0 : 0;

  // Ensure loperFormaat selection exists before accessing pricing
  // Ensure loperFormaat selection exists before accessing pricing
  const loperFormaatPrice = extraServicesPricing[selectedLoperFormaat as keyof typeof extraServicesPricing] ?? 0;

  // Calculate extra cost
  const extraCost = (ondertapijtPrice + loperFormaatPrice) * numberOfStairs * numberOfSteps;

  // Final total = existing cost + additional cost
  const calculatedTotalCost = baseTotalCost + extraCost;

  // Local state for displaying total
  const [TotalCost, setTotalCost] = useState<number>(baseTotalCost);

  // Sync formData and update total cost dynamically
  useEffect(() => {
    setTotalCost(calculatedTotalCost);

    updateFormData({
      ondertapijt: selectedOndertapijt,
      loperFormaat: selectedLoperFormaat,
      totalCost: calculatedTotalCost,
    });
  }, [selectedOndertapijt, selectedLoperFormaat, numberOfStairs, numberOfSteps]);

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
              <div className="w-[50%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Ondertapijt Selection */}
          <div className="flex flex-col mb-1">
            <SingleSelectDropdown
              data={ondertapijtOptions}
              name="ondertapijt"
              label="Wilt u ook ondertapijt?"
              placeholder="Maak een keuze"
            />
            {errors.ondertapijt && <span className="text-red-500 text-sm">{errors.ondertapijt.message}</span>}
          </div>

          {/* Loper Formaat Selection */}
          <div className="flex flex-col">
            <SingleSelectDropdown
              data={loperFormaatOptions}
              name="loperFormaat"
              label="Welk formaat loper?"
              placeholder="Maak een keuze"
            />
            {errors.loperFormaat && <span className="text-red-500 text-sm">{errors.loperFormaat.message}</span>}
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

export default StepFive;
