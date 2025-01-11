import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { trapRenovatieConfig } from '@/lib/servicesConfig';
import { Option } from '@/types';
import SingleSelectDropdown from '../../../Getters/SingleSelectDropdown';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: {
    selectedService?: string;
    selectedOpenStairs?: string;
    openStairTotalSteps?: number;
    selectedCloseStairs?: string;
    closeStairTotalSteps?: number;

    // Possibly storing cost from prior steps
    stepFivePriceLinoleum?: number;
    totalCost?: number;

    // Remember user’s input
    zijkantenLinoleumService?: string;
    DemontageLinoleumService?: string;
  };
  updateFormData: (data: any) => void;
}

// Zod schema
const schema = z
  .object({
    openStairsCount: z.number().nonnegative(),
    closeStairsCount: z.number().nonnegative(),

    zijkantenLinoleumService: z.string().optional(),
    DemontageLinoleumService: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { closeStairsCount } = data;

    // If user has closeStairs > 0 => must choose "Ja" or "Nee" for zijkantenLinoleumService
    if (closeStairsCount > 0 && !data.zijkantenLinoleumService) {
      ctx.addIssue({
        code: 'custom',
        path: ['zijkantenLinoleumService'],
        message: 'Geef aan of de zijkanten ook bekleed moeten worden.',
      });
    }

    // If user has closeStairs > 0 => must choose "Ja" or "Nee" for DemontageLinoleumService
    if (closeStairsCount > 0 && !data.DemontageLinoleumService) {
      ctx.addIssue({
        code: 'custom',
        path: ['DemontageLinoleumService'],
        message: 'Wilt u dat wij ook demontage uitvoeren?',
      });
    }
  });

const StepFive: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  // Stairs
  const openStairsCount = formData.openStairTotalSteps || 0;
  const closeStairsCount = formData.closeStairTotalSteps || 0;

  // Dropdown options
  const zijkantenOptions: Option[] = ['Ja', 'Nee'].map((opt) => ({
    value: opt,
    label: opt,
  }));

  const demontageOptions: Option[] = ['Ja', 'Nee'].map((opt) => ({
    value: opt,
    label: opt,
  }));

  // Setup form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      openStairsCount,
      closeStairsCount,
      // Must match the schema field names:
      zijkantenLinoleumService: '',
      DemontageLinoleumService: '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch fields
  const watchZijkantenService = useWatch({ control, name: 'zijkantenLinoleumService' }) || '';
  const watchDemontageService = useWatch({ control, name: 'DemontageLinoleumService' }) || '';

  const [displayStepFive, setStepFivePrice] = useState<number>(formData.totalCost || 0);

  // Price calculation effect
  useEffect(() => {
    const serviceName = formData.selectedService || '';
    const trapConfig = trapRenovatieConfig[serviceName]?.pricing || {};

    let newStepFivePrice = 0;

    // 1) Zijkanten
    if ((openStairsCount > 0 || closeStairsCount > 0) && watchZijkantenService === 'Ja') {
      const zijkantenPrice = trapConfig.additionalOptions?.ookDeZijkanten ?? 0;
      newStepFivePrice += zijkantenPrice * (openStairsCount + closeStairsCount);
    }

    // 2) Demontage
    if ((openStairsCount > 0 || closeStairsCount > 0) && watchDemontageService === 'Ja') {
      const demontagePrice = trapConfig.additionalOptions?.demontage ?? 0;
      newStepFivePrice += demontagePrice * (openStairsCount + closeStairsCount);
    }

    // old partial cost
    const oldStepFiveCost = formData.stepFivePriceLinoleum || 0;
    const oldTotal = formData.totalCost || 0;

    // new total
    const newTotal = oldTotal - oldStepFiveCost + newStepFivePrice;
    setStepFivePrice(newTotal);

    // Only update if there's a difference
    if (newStepFivePrice !== oldStepFiveCost) {
      updateFormData({
        ...formData,
        stepFivePriceLinoleum: newStepFivePrice,
        zijkantenLinoleumService: watchZijkantenService,
        DemontageLinoleumService: watchDemontageService,
        totalCost: newTotal,
      });
    }
  }, [watchZijkantenService, watchDemontageService, openStairsCount, closeStairsCount, formData.selectedService]);

  const onSubmit = () => {
    onNext();
  };

  const isButtonDisabled = !isValid;

  return (
    <FormProvider {...form}>
      <form className="w-[386px] rounded-[4px] relative lg:px-0 z-10 flex flex-col shadow-lg">
        {/* Header */}
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen! </HeadlineSemibold>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] py-[22px] gap-y-3 shadow-md">
          {/* Navigation */}
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
              <div className="w-[55%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Zijkanten */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={zijkantenOptions}
              name="zijkantenLinoleumService"
              label="Wilt u ook dat wij de zijkanten bekleden?"
              placeholder="Maak een keuze"
            />
            {/* Must reference errors.zijkantenLinoleumService */}
            {errors.zijkantenLinoleumService && (
              <p className="text-red-600 text-sm">{errors.zijkantenLinoleumService.message as string}</p>
            )}
          </div>

          {/* Demontage */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={demontageOptions}
              name="DemontageLinoleumService"
              label="Wilt u dat wij ook demontage uitvoeren?"
              placeholder="Maak een keuze"
            />
            {/* Must reference errors.DemontageLinoleumService */}
            {errors.DemontageLinoleumService && (
              <p className="text-red-600 text-sm">{errors.DemontageLinoleumService.message as string}</p>
            )}
          </div>

          {/* Price + Next */}
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€ {displayStepFive.toFixed(2)}</span>
            </div>

            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
              type="button"
              disabled={isButtonDisabled}
              onClick={handleSubmit(onSubmit)}
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
