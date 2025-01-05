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
import InputGetter from '../../Getters/InputGetter';

// Helper: parse something like "15+" or "0 (geen dichte trappen)" into a number
function parseStairsCount(value?: string): number {
  if (!value) return 0;
  const numeric = parseInt(value, 10);
  return isNaN(numeric) ? 0 : numeric;
}

interface StepProps {
  onPrevious: () => void;
  onNext: (step?: number) => void;
  onUploadClick: (field: string) => void; // For uploading photos
  formData: {
    // from previous steps
    stepFourPrice?: number; // Price from StepFour
    stepFourHoutPrice?: number;
    totalCost: number; // Running total
    selectedService?: string;

    // from StepTwo / StepThree
    selectedCloseStairs?: string; // e.g. "1", "2", "0 (geen dichte trappen)"

    // Additional data
    currentBekleding?: string;
    stepLightingCost?: number;
    [key: string]: any;

    //Remember Old Selection
    LightingType?: string;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({
  lightingType: z.string().nonempty('Kies een verlichtingsoptie.'),
  currentBekleding: z.string().optional(),
});

const StepLighting: React.FC<StepProps> = ({ onPrevious, onNext, onUploadClick, formData, updateFormData }) => {
  // The user’s possible choices for lighting
  const lightingOptions: Option[] = [
    { value: 'Nee, geen verlichting', label: 'Nee, geen verlichting' },
    {
      value: 'Ja, om de trede',
      label: 'Ja, om de trede',
      imageUrl: '/images/parketrenovatieSvgs/LightingSvgs/om-de-trede.svg',
    },
    {
      value: 'Ja, elke trede',
      label: 'Ja, elke trede',
      imageUrl: '/images/parketrenovatieSvgs/LightingSvgs/elke-trede.svg',
    },
    {
      value: 'Ja, dynamisch (geleidelijk verlicht)',
      label: 'Ja, dynamisch (geleidelijk verlicht)',
      imageUrl: '/images/parketrenovatieSvgs/LightingSvgs/dynamisch.svg',
    },
  ];

  // React Hook Form Setup
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      lightingType: '',
      currentBekleding: '',
    },
    mode: 'onChange',
  });

  const { handleSubmit, watch, formState } = form;
  const { errors, isValid } = formState;

  // We watch these fields so we can dynamically update cost + formData
  const watchLightingType = watch('lightingType');
  const watchCurrentBekleding = watch('currentBekleding');

  // We'll keep a local state for the displayed total
  const [displayTotal, setDisplayTotal] = useState<number>(formData.totalCost || 0);

  // Price Calculation
  useEffect(() => {
    // 1. Base cost from StepFour
    // const baseCost = formData.stepFourPrice || formData.stepFourHoutPrice || 0;

    // 2. Lookup the trapRenovatie pricing for the selected service
    const serviceName = formData.selectedService || '';
    const trapConfig = trapRenovatieConfig[serviceName]?.pricing || {};

    // 3. Get lighting prices from additionalOptions
    const lightingPrices = trapConfig.additionalOptions || {};

    // 4. Only multiply by closeStairs
    const closeCount = parseStairsCount(formData.selectedCloseStairs);

    // 5. Determine cost for lighting
    let newStepLightingCost = 0;
    switch (watchLightingType) {
      case 'Nee, geen verlichting':
        newStepLightingCost = 0;
        break;
      case 'Ja, om de trede':
        newStepLightingCost = (lightingPrices.verlichtingStatic || 0) * closeCount;
        break;
      case 'Ja, elke trede':
        newStepLightingCost = (lightingPrices.verlichtingElkeTrede || 0) * closeCount;
        break;
      case 'Ja, dynamisch (geleidelijk verlicht)':
        newStepLightingCost = (lightingPrices.verlichtingDynamic || 0) * closeCount;
        break;
    }

    // Update totalCost by subtracting old stepLightingCost and adding newStepLightingCost
    const oldStepLightingCost = formData.stepLightingCost || 0;
    const oldTotal = formData.totalCost || 0;
    const newTotal = oldTotal - oldStepLightingCost + newStepLightingCost;

    // // 6. new total cost
    // const newTotal = baseCost + cost;
    setDisplayTotal(newTotal);

    // 7. Save to formData
    updateFormData({
      ...formData,
      currentBekleding: watchCurrentBekleding,
      LightingType: watchLightingType,
      stepLightingCost: newStepLightingCost, // store the computed lighting cost
      totalCost: newTotal, // updated total
    });
  }, [
    watchLightingType,
    watchCurrentBekleding,
    formData.selectedCloseStairs, // if user changes # of close stairs, recalc
  ]);

  const onSubmitForm = () => {
    onNext();
  };

  const isButtonDisabled = !isValid;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmitForm)();
        }}
        className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

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
              Niet verplicht, wel handig om te weten
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[60%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Lighting Dropdown */}
          <div className="flex flex-col mb-1">
            <SingleSelectDropdown
              data={lightingOptions}
              name="lightingType"
              label="Dichte trap(en): Wilt u ook verlichting toevoegen?"
              placeholder="Maak een keuze"
            />
            {errors.lightingType && (
              <p className="text-red-600 text-sm mt-1">{errors.lightingType.message as string}</p>
            )}
          </div>

          {/* Current Bekleding Input */}
          <div className="flex flex-col">
            <InputGetter
              form={form}
              name="currentBekleding"
              label="Wat is de huidige bekleding?"
              placeholder="Voer uw huidige bekleding in"
              type="text"
            />
          </div>

          {/* Photo Upload Link */}
          <div className="flex flex-col w-44">
            <label
              className="text-xs cursor-pointer"
              onClick={() => {
                // store current form data
                updateFormData({
                  ...formData,
                  currentBekleding: watchCurrentBekleding,
                });
                onUploadClick('CurrentBekleding');
              }}
            >
              <span className="font-bold text-green-700 hover:text-green-900 hover:underline transition-all duration-200">
                Foto uploaden
              </span>
              <span className="text-gray-400 font-sans"> (Niet verplicht)</span>
            </label>
          </div>

          {/* Price + Next */}
          <div className="flex flex-col space-y-2 mt-auto">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{displayTotal.toFixed(2)}</span>
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

export default StepLighting;
