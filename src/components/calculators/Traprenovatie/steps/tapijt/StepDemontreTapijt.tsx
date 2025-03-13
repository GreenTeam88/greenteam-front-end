import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import InputGetter from '@/components/calculators/Getters/InputGetter';
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
    openStairTotalSteps?: number; // from StepTwo
    closeStairTotalSteps?: number; // from StepThree
    totalCost?: number; // accumulated so far

    // We'll store step cost here
    stepDemontreTapijtPrice?: number;

    // RememberSteps
    currentUpholstery?: string;
    DemontageTapijt?: string;
  };
  updateFormData: (data: any) => void;
}

// Zod schema
// 1) user can only type letters/spaces in "currentUpholstery"
// 2) demontage is optional -> "Ja" or "Nee"
const schema = z
  .object({
    openStairsCount: z.number().default(0),
    closeStairsCount: z.number().default(0),

    // We'll store the typed text in currentUpholstery
    currentUpholstery: z
      .string()
      .regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/, 'Gebruik alleen letters/spaties')
      .optional(),

    demontageService: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const totalSteps = data.openStairsCount + data.closeStairsCount;

    // If user has stairs, they must pick a demontageService value if you want that required:
    if (totalSteps > 0 && !data.demontageService) {
      ctx.addIssue({
        code: 'custom',
        path: ['demontageService'],
        message: 'Wilt u de oude bekleding laten demonteren?',
      });
    }
  });

const StepDemontreTapijt: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  // We'll read how many open/close stairs
  const openStairsCount = formData.openStairTotalSteps || 0;
  const closeStairsCount = formData.closeStairTotalSteps || 0;
  const totalStairs = openStairsCount + closeStairsCount;

  // Pricing from trapRenovatieConfig (tapijt => additionalOptions.demontage = 15.0)
  const tapijtConfig = trapRenovatieConfig['Bekleden met tapijt']?.pricing || {};
  const additionalOptions = tapijtConfig.additionalOptions || {};

  const demontageCost = additionalOptions.demontage || 0; // typically 15

  // We'll define the dropdown for "Demontage: Ja/Nee"
  const demontageOptions: Option[] = ['Ja', 'Nee'].map((val) => ({ value: val, label: val }));

  // Setup react-hook-form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      openStairsCount,
      closeStairsCount,
      currentUpholstery: '',
      demontageService: '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch fields
  const watchDemontage = useWatch({ control, name: 'demontageService' }) || '';
  const watchUpholstery = useWatch({ control, name: 'currentUpholstery' }) || '';

  // We'll keep a local state for the displayed total
  const [displayTotal, setDisplayTotal] = useState<number>(formData.totalCost || 0);

  // Price Calculation
  useEffect(() => {
    // old total from previous steps
    const oldStepCost = formData.stepDemontreTapijtPrice || 0;
    const oldTotal = formData.totalCost || 0;

    // If user picks "Ja", cost = demontageCost * totalStairs
    let stepCost = 0;
    if (watchDemontage === 'Ja') {
      stepCost += demontageCost * totalStairs;
    }

    // new total = old + stepCost
    const newTotal = oldTotal + stepCost - oldStepCost;
    setDisplayTotal(newTotal);

    // Update formData with partial cost + new total
    updateFormData({
      ...formData,
      currentUpholstery: watchUpholstery,
      stepDemontreTapijtPrice: stepCost,
      DemontageTapijt: watchDemontage,
      totalCost: newTotal,
    });
  }, [watchDemontage, watchUpholstery, openStairsCount, closeStairsCount]);

  const isButtonDisabled = !isValid;

  const onSubmit = () => {
    onNext();
  };

  return (
    <FormProvider {...form}>
      <form className="w-[386px] rounded-[4px] relative lg:px-0 z-10 flex flex-col shadow-lg">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px]">
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
              <div className="w-[85%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Current Upholstery (only letters/spaces) */}
          <div className="flex flex-col gap-[11px]">
            <InputGetter
              form={form}
              name="currentUpholstery"
              label="Wat is de huidige bekleding?"
              placeholder="Voer uw huidige bekleding in"
              type="text"
            />
            {errors.currentUpholstery && (
              <p className="text-red-600 text-sm">{errors.currentUpholstery.message as string}</p>
            )}
          </div>

          {/* Demontage Yes/No */}
          {totalStairs > 0 && (
            <div className="flex flex-col gap-[11px]">
              <SingleSelectDropdown
                data={demontageOptions}
                name="demontageService"
                label="Wilt u de oude bekleding laten demonteren?"
                placeholder="Maak een keuze"
              />
              {errors.demontageService && (
                <p className="text-red-600 text-sm">{errors.demontageService.message as string}</p>
              )}
            </div>
          )}

          {/* Price + Next */}
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              {/* We show the new total (old + stepCost) */}
              <span className="font-semibold text-lg text-green-700">€ {displayTotal.toFixed(2)}</span>
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

export default StepDemontreTapijt;
