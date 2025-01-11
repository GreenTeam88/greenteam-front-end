import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { trapRenovatieConfig } from '@/lib/servicesConfig';
import { Option } from '@/types';
import SingleSelectDropdown from '../../Getters/SingleSelectDropdown';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: {
    selectedService?: string;
    // from StepTwo
    selectedOpenStairs?: string;
    openStairTotalSteps?: number;
    // from StepThree
    selectedCloseStairs?: string;
    closeStairTotalSteps?: number;
    //StepCostSetup
    stepFourPrice?: number;
    // Total cost
    totalCost?: number;

    //Remeber Old Selection :
    OpenStairsService?: string;
    CloseStairService?: string;
    Stootborden?: string;
  };
  updateFormData: (data: any) => void;
}

/**
 * Instead of passing openStairsCount/closeStairsCount via context,
 * we store them as hidden fields in the schema. That lets us do
 * conditional validation in superRefine without using ctx.options.context.
 */
const schema = z
  .object({
    openStairsCount: z.number(),
    closeStairsCount: z.number(),

    openStairsService: z.string().optional(),
    selectedCloseStairType: z.string().optional(),
    stootborden: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { openStairsCount, closeStairsCount } = data;

    // If user has openStairs > 0 => must choose "Bovenkant" or "Rondom"
    if (openStairsCount > 0 && !data.openStairsService) {
      ctx.addIssue({
        code: 'custom',
        path: ['openStairsService'],
        message: 'Kies een optie voor de open trap (Bovenkant of Rondom).',
      });
    }

    // If user has closeStairs > 0 => must choose "Overzettreden" or "Met profiel"
    if (closeStairsCount > 0 && !data.selectedCloseStairType) {
      ctx.addIssue({
        code: 'custom',
        path: ['selectedCloseStairType'],
        message: 'Kies een optie voor de dichte trap (Overzettreden of Met profiel).',
      });
    }

    // If user has closeStairs > 0 => must choose "Ja" or "Nee" for stootborden
    if (closeStairsCount > 0 && !data.stootborden) {
      ctx.addIssue({
        code: 'custom',
        path: ['stootborden'],
        message: 'Geef aan of stootborden ook bekleed moeten worden.',
      });
    }
  });

const StepFour: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  // For showing/hiding the dropdowns
  const openStairsCount = formData.openStairTotalSteps || 0;
  const closeStairsCount = formData.closeStairTotalSteps || 0;

  // Dropdown options
  const openStairsServices = ['Bovenkant', 'Rondom'];

  const openStairsServicesOptions: Option[] = openStairsServices.map((opt) => ({
    value: opt,
    label: opt,
  }));

  const closeStairsServices = [
    {
      value: 'Overzettreden',
      label: 'Overzettreden',
      imageUrl: '/images/parketrenovatieSvgs/MetProfile__Overzettreden/Overzettreden.svg',
    },
    {
      value: 'Met profiel',
      label: 'Met profiel',
      imageUrl: '/images/parketrenovatieSvgs/MetProfile__Overzettreden/Met-profiel.svg',
    },
  ];

  // ['Overzettreden', 'Met profiel'];
  const closeStairsServicesOptions: Option[] = closeStairsServices.map((opt) => ({
    value: opt.value,
    label: opt.label,
    imageUrl: opt.imageUrl,
  }));

  const stootbordenOptions = ['Ja', 'Nee'];
  const stootbordenServiceOptions: Option[] = stootbordenOptions.map((opt) => ({
    value: opt,
    label: opt,
  }));

  // Setup form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      /** Hidden fields for validation */
      openStairsCount,
      closeStairsCount,

      openStairsService: '',
      selectedCloseStairType: '',
      stootborden: '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch the form fields
  const watchOpenStairsService = useWatch({ control, name: 'openStairsService' }) || '';
  const watchCloseStairType = useWatch({ control, name: 'selectedCloseStairType' }) || '';
  const watchStootborden = useWatch({ control, name: 'stootborden' }) || '';

  const [stepFourPrice, setStepFourPrice] = useState<number>(0);

  // Price Calculation
  useEffect(() => {
    const serviceName = formData.selectedService || '';
    const trapConfig = trapRenovatieConfig[serviceName]?.pricing || {};

    let newStepFourPrice = 0;

    // 1. Open Stairs
    if (openStairsCount > 0 && watchOpenStairsService) {
      // "Bovenkant" => "Alleen boven kant"
      // "Rondom" => "Rondom"
      const openChoice = watchOpenStairsService === 'Bovenkant' ? 'Alleen boven kant' : 'Rondom';
      const openPrice = trapConfig.openStairs?.[openChoice] ?? 0;
      newStepFourPrice += openPrice * openStairsCount;
    }

    // 2. Close Stairs
    if (closeStairsCount > 0 && watchCloseStairType) {
      // "Overzettreden" => "Overzettrede"
      // "Met profiel"   => "Met profiel"
      const closedChoice = watchCloseStairType === 'Overzettreden' ? 'Overzettrede' : 'Met profiel';
      const closedPrice = trapConfig.closedStairs?.[closedChoice] ?? 0;
      newStepFourPrice += closedPrice * closeStairsCount;

      // Stootborden
      if (watchStootborden === 'Ja') {
        const stootPrice = trapConfig.additionalOptions?.stootborden ?? 0;
        newStepFourPrice += stootPrice * closeStairsCount;
      }
    }

    // Calculate new totalCost by removing old stepFourPrice and adding newStepFourPrice
    const oldStepFourPrice = formData.stepFourPrice || 0;
    const oldTotal = formData.totalCost || 0;
    const newTotal = oldTotal - oldStepFourPrice + newStepFourPrice;

    setStepFourPrice(Math.abs(newTotal));

    // Update formData with the newly computed price
    updateFormData({
      ...formData,
      OpenStairsService: watchOpenStairsService,
      CloseStairService: watchCloseStairType,
      Stootborden: watchStootborden,
      stepFourPrice: newStepFourPrice, // step4-specific
      totalCost: newTotal, // optional: update or accumulate
    });
  }, [
    watchOpenStairsService,
    watchCloseStairType,
    watchStootborden,
    openStairsCount,
    closeStairsCount,
    formData.selectedService,
  ]);

  // Button disabled if form is invalid
  const isButtonDisabled = !isValid;

  const onSubmit = () => {
    onNext();
  };

  return (
    <FormProvider {...form}>
      <form className="w-[386px] rounded-[4px] relative lg:px-0 z-10 flex flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

        {/* Removed h-full so the container can auto-resize */}
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
              Een aantal vragen over de trappen
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[50%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Open Stairs Fields */}
          {openStairsCount > 0 && (
            <div className="flex flex-col gap-[11px]">
              <SingleSelectDropdown
                data={openStairsServicesOptions}
                name="openStairsService"
                label="Open trap(en): Bovenkant of rondom bekleden?"
                placeholder="Maak een keuze"
              />
              {errors.openStairsService && (
                <p className="text-red-600 text-sm">{errors.openStairsService.message as string}</p>
              )}
            </div>
          )}

          {/* Close Stairs Fields */}
          {closeStairsCount > 0 && (
            <>
              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={closeStairsServicesOptions}
                  name="selectedCloseStairType"
                  label="Dichte trap(en): Wilt u overzet trede(s) of met profiel?"
                  placeholder="Maak een keuze"
                />
                {errors.selectedCloseStairType && (
                  <p className="text-red-600 text-sm">{errors.selectedCloseStairType.message as string}</p>
                )}
              </div>

              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={stootbordenServiceOptions}
                  name="stootborden"
                  label="Dichte trap(pen): Wilt u de stootborden ook bekleden?"
                  placeholder="Maak een keuze"
                />
                {errors.stootborden && <p className="text-red-600 text-sm">{errors.stootborden.message as string}</p>}
              </div>
            </>
          )}

          {/* Price + Next */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€ {stepFourPrice.toFixed(2)}</span>
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

export default StepFour;
