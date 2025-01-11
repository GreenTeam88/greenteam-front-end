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
    // from StepTwo
    selectedOpenStairs?: string;
    openStairTotalSteps?: number;
    // from StepThree
    selectedCloseStairs?: string;
    closeStairTotalSteps?: number;

    // Possibly storing cost from prior steps
    totalCost?: number;

    // We'll store partial cost for this step
    stepFourTapijtPrice?: number;

    // Remember old selections
    RondomTapijt?: string;
    stootbordenTapijt?: string;
    OverzettredeTapijt?: string;
  };
  updateFormData: (data: any) => void;
}

/**
 * Validation schema:
 * - If openStairsCount > 0 => must choose "RondomService".
 * - If closeStairsCount > 0 => must choose "StootbordenClose" and "Overzettrede" (if you want Overzettrede to be required).
 */
const schema = z
  .object({
    openStairsCount: z.number().default(0),
    closeStairsCount: z.number().default(0),

    RondomService: z.string().optional(),
    StootbordenClose: z.string().optional(),
    Overzettrede: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { openStairsCount, closeStairsCount } = data;

    // If user has open stairs => must pick RondomService
    if (openStairsCount > 0 && !data.RondomService) {
      ctx.addIssue({
        code: 'custom',
        path: ['RondomService'],
        message: 'Wilt u rondom bekleden bij de open trap?',
      });
    }

    // If user has close stairs => must pick StootbordenClose
    if (closeStairsCount > 0 && !data.StootbordenClose) {
      ctx.addIssue({
        code: 'custom',
        path: ['StootbordenClose'],
        message: 'Wilt u de stootborden bekleden bij de dichte trap?',
      });
    }

    // If user has close stairs => must pick Overzettrede
    if (closeStairsCount > 0 && !data.Overzettrede) {
      ctx.addIssue({
        code: 'custom',
        path: ['Overzettrede'],
        message: 'Wilt u Overzettrede of Met profiel bekleden?',
      });
    }
  });

const StepFourTapijt: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const openStairsCount = formData.openStairTotalSteps || 0;
  const closeStairsCount = formData.closeStairTotalSteps || 0;

  // Pricing for "Bekleden met tapijt"
  const tapijtConfig = trapRenovatieConfig['Bekleden met tapijt']?.pricing || {};

  // Options for open stairs
  const rondomOptions: Option[] = [
    { value: 'Rondom', label: 'Rondom', disabled: false },
    { value: 'Bovenkant (niet mogelijk)', label: 'Bovenkant (niet mogelijk)', disabled: true },
  ];

  // Options for stootborden
  const stootbordenOptions: Option[] = [
    { value: 'Ja', label: 'Ja', disabled: false },
    { value: 'Nee', label: 'Nee', disabled: false },
  ];

  // Options for Overzettrede vs Met profiel
  const overzettredeOptions: Option[] = [
    {
      value: 'Overzettrede',
      label: 'Overzettrede',
      imageUrl: '/images/parketrenovatieSvgs/MetProfile__Overzettreden/Overzettreden.svg',
      disabled: false,
    },
    {
      value: 'Met profiel (niet mogelijk)',
      label: 'Met profiel (niet mogelijk)',
      imageUrl: '/images/parketrenovatieSvgs/MetProfile__Overzettreden/Met-profiel.svg',
      disabled: true,
    },
  ];

  // Setup form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      openStairsCount,
      closeStairsCount,
      RondomService: '',
      StootbordenClose: '',
      Overzettrede: '',
    },
    mode: 'onChange',
  });
  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch fields
  const watchRondom = useWatch({ control, name: 'RondomService' }) || '';
  const watchStootbordenClose = useWatch({ control, name: 'StootbordenClose' }) || '';
  const watchOverzettrede = useWatch({ control, name: 'Overzettrede' }) || '';

  // Keep the final displayed total in local state
  const [displayTotal, setDisplayTotal] = useState<number>(formData.totalCost || 0);

  useEffect(() => {
    // Calculate the step cost for StepFourTapijt
    let stepCost = 0;

    // 1) Open stairs => "Rondom"
    if (openStairsCount > 0 && watchRondom === 'Rondom') {
      const costRondom = tapijtConfig.openStairs?.Rondom || 0; // e.g. 70
      stepCost += costRondom * openStairsCount;
    }

    // 2) Close stairs => stootborden "Ja"
    if (closeStairsCount > 0 && watchStootbordenClose === 'Ja') {
      const costStootborden = tapijtConfig.additionalOptions?.stootborden || 0; // e.g. 10
      stepCost += costStootborden * closeStairsCount;
    }

    // 3) Close stairs => Overzettrede
    if (closeStairsCount > 0 && watchOverzettrede === 'Overzettrede') {
      const costOverzettrede = tapijtConfig.closedStairs?.Overzettrede || 0; // e.g. 60
      stepCost += costOverzettrede * closeStairsCount;
    }

    // old StepCost from formData
    const oldStepCost = formData.stepFourTapijtPrice || 0;
    // old total from previous steps
    const oldTotal = formData.totalCost || 0;

    // new total => old total + stepCost - oldStepCost
    const newTotal = oldTotal + stepCost - oldStepCost;
    setDisplayTotal(newTotal);

    // Update formData with new partial cost + user selections
    updateFormData({
      ...formData,
      stepFourTapijtPrice: stepCost,
      RondomTapijt: watchRondom,
      stootbordenTapijt: watchStootbordenClose,
      OverzettredeTapijt: watchOverzettrede,
      totalCost: newTotal,
    });
  }, [
    watchRondom,
    watchStootbordenClose,
    watchOverzettrede,
    openStairsCount,
    closeStairsCount,
    tapijtConfig,
    formData.stepFourTapijtPrice,
    formData.totalCost,
  ]);

  const onSubmit = () => {
    onNext();
  };

  const isButtonDisabled = !isValid;

  return (
    <FormProvider {...form}>
      <form className="w-[386px] rounded-[4px] relative lg:px-0 z-10 flex flex-col ">
        {/* Header */}
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold>Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
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
              <div className="w-[30%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* If user has open stairs => choose "Rondom" or "Bovenkant (niet mogelijk)" */}
          {openStairsCount > 0 && (
            <div className="flex flex-col gap-[11px]">
              <SingleSelectDropdown
                data={rondomOptions}
                name="RondomService"
                label="Open trap(en): Wilt u de bovenkant of rondom bekleden?"
                placeholder="Maak een keuze"
              />
              {errors.RondomService && <p className="text-red-600 text-sm">{errors.RondomService.message as string}</p>}
            </div>
          )}

          {/* If user has close stairs => pick stootborden + Overzettrede */}
          {closeStairsCount > 0 && (
            <div>
              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={stootbordenOptions}
                  name="StootbordenClose"
                  label="Dichte trap(pen): Wilt u de stootborden ook bekleden?"
                  placeholder="Maak een keuze"
                />
                {errors.StootbordenClose && (
                  <p className="text-red-600 text-sm">{errors.StootbordenClose.message as string}</p>
                )}
              </div>
              <div className="flex flex-col gap-[11px] mt-2">
                <SingleSelectDropdown
                  data={overzettredeOptions}
                  name="Overzettrede"
                  label="Dichte trap(pen): Wilt u Overzettrede of Met profiel bekleden?"
                  placeholder="Maak een keuze"
                />
                {errors.Overzettrede && <p className="text-red-600 text-sm">{errors.Overzettrede.message as string}</p>}
              </div>
            </div>
          )}

          {/* Price + Next */}
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€ {Math.abs(displayTotal).toFixed(2)}</span>
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

export default StepFourTapijt;
