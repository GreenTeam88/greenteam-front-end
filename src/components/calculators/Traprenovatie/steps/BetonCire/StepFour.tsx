import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { trapRenovatieConfig } from '@/lib/servicesConfig';
import { Option } from '@/types'; // <-- Must have disabled?: boolean
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
    stepFourPriceBetonCire?: number; // partial cost for StepFour

    // Remember user selections
    RondomBetonCireService?: string;
    OverzettredeBetonCireService?: string;
    stootbordenBetonCireService?: string;
  };
  updateFormData: (data: any) => void;
}

/**
 * Zod schema:
 * - If openStairsCount > 0 => must pick "RondomService".
 * - If closeStairsCount > 0 => must pick "OverzettredeService" and "stootbordenService".
 */
const schema = z
  .object({
    openStairsCount: z.number().nonnegative().default(0),
    closeStairsCount: z.number().nonnegative().default(0),

    RondomBetonCireService: z.string().optional(),
    OverzettredeBetonCireService: z.string().optional(),
    stootbordenBetonCireService: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { openStairsCount, closeStairsCount } = data;

    // If user has open stairs => must pick "RondomService"
    if (openStairsCount > 0 && !data.RondomBetonCireService) {
      ctx.addIssue({
        code: 'custom',
        path: ['RondomBetonCireService'],
        message: 'Wilt u rondom bekleden bij de open trap?',
      });
    }

    // If user has close stairs => must pick "OverzettredeService"
    if (closeStairsCount > 0 && !data.OverzettredeBetonCireService) {
      ctx.addIssue({
        code: 'custom',
        path: ['OverzettredeBetonCireService'],
        message: 'Wilt u Overzettrede of met profiel bekleden?',
      });
    }

    // If user has close stairs => must pick "stootbordenService"
    if (closeStairsCount > 0 && !data.stootbordenBetonCireService) {
      ctx.addIssue({
        code: 'custom',
        path: ['stootbordenBetonCireService'],
        message: 'Geef aan of stootborden ook bekleed moeten worden.',
      });
    }
  });

const StepFour: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  // Pull counts for open + close stairs
  const openStairsCount = formData.openStairTotalSteps || 0;
  const closeStairsCount = formData.closeStairTotalSteps || 0;

  // Pricing config for the selected service
  const serviceName = formData.selectedService || '';
  const trapConfig = trapRenovatieConfig[serviceName]?.pricing || {};

  // Define your dropdown options
  const RondomOptions: Option[] = [
    { value: 'Rondom', label: 'Rondom', disabled: false },
    { value: 'Bovenkant (niet mogelijk)', label: 'Bovenkant (niet mogelijk)', disabled: true },
  ];

  const OverzettredeOptions: Option[] = [
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

  const stootbordenOptions: Option[] = [
    { value: 'Ja', label: 'Ja', disabled: false },
    { value: 'Nee', label: 'Nee', disabled: false },
  ];

  // Set up form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      openStairsCount,
      closeStairsCount,
      RondomBetonCireService: '',
      OverzettredeBetonCireService: '',
      stootbordenBetonCireService: '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch relevant fields
  const watchRondomService = useWatch({ control, name: 'RondomBetonCireService' }) || '';
  const watchOverzettredeService = useWatch({ control, name: 'OverzettredeBetonCireService' }) || '';
  const watchStootbordenService = useWatch({ control, name: 'stootbordenBetonCireService' }) || '';

  // Local state for updated total
  const [displayStepFour, setDisplayStepFour] = useState<number>(formData.totalCost || 0);

  useEffect(() => {
    // 1) Compute the new partial cost for StepFour
    let stepCost = 0;

    // If openStairsCount>0 & user picks "Rondom"
    if (openStairsCount > 0 && watchRondomService === 'Rondom') {
      const costRondom = trapConfig.openStairs?.Rondom ?? 0;
      stepCost += costRondom * openStairsCount;
    }

    // If closeStairsCount>0 & user picks "Overzettrede"
    if (closeStairsCount > 0 && watchOverzettredeService === 'Overzettrede') {
      const costClosed = trapConfig.closedStairs?.Overzettrede ?? 0;
      stepCost += costClosed * closeStairsCount;
    }

    // If user picks stootborden => "Ja"
    if (closeStairsCount > 0 && watchStootbordenService === 'Ja') {
      const costStoot = trapConfig.additionalOptions?.stootborden ?? 0;
      stepCost += costStoot * closeStairsCount;
    }

    // 2) old partial cost, old total
    const oldPartialCost = formData.stepFourPriceBetonCire || 0;
    const oldTotal = formData.totalCost || 0;

    // 3) new total = oldTotal - oldPartialCost + new partial
    const newTotal = oldTotal - oldPartialCost + stepCost;

    setDisplayStepFour(newTotal);

    // 4) Only update formData if there's an actual change
    const hasCostChanged = stepCost !== oldPartialCost || newTotal !== oldTotal;
    const hasFieldsChanged =
      watchRondomService !== formData.RondomBetonCireService ||
      watchOverzettredeService !== formData.OverzettredeBetonCireService ||
      watchStootbordenService !== formData.stootbordenBetonCireService;

    if (hasCostChanged || hasFieldsChanged) {
      // This ensures we do NOT update if nothing changed,
      // preventing an infinite render loop
      updateFormData({
        ...formData,
        stepFourPriceBetonCire: stepCost,
        RondomBetonCireService: watchRondomService,
        OverzettredeBetonCireService: watchOverzettredeService,
        stootbordenBetonCireService: watchStootbordenService,
        totalCost: newTotal,
      });
    }
  }, [
    watchRondomService,
    watchOverzettredeService,
    watchStootbordenService,
    openStairsCount,
    closeStairsCount,
    trapConfig,
    // Remove formData from the dependencies to avoid repeated triggers
    // also remove updateFormData to prevent new reference triggers
  ]);

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
            <HeadlineSemibold>Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

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
              Een aantal vragen over de trappen
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[50%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* If user has open stairs => choose "Rondom" */}
          {openStairsCount > 0 && (
            <div className="flex flex-col gap-[11px]">
              <SingleSelectDropdown
                data={RondomOptions}
                name="RondomBetonCireService"
                label="Open trap(en): Wilt u rondom bekleden?"
                placeholder="Maak een keuze"
              />
              {errors.RondomBetonCireService && (
                <p className="text-red-600 text-sm">{errors.RondomBetonCireService.message as string}</p>
              )}
            </div>
          )}

          {/* If user has close stairs => choose OverzettredeService + stootborden */}
          {closeStairsCount > 0 && (
            <>
              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={OverzettredeOptions}
                  name="OverzettredeBetonCireService"
                  label="Dichte trap(pen): Wilt u met profiel?"
                  placeholder="Maak een keuze"
                />
                {errors.OverzettredeBetonCireService && (
                  <p className="text-red-600 text-sm">{errors.OverzettredeBetonCireService.message as string}</p>
                )}
              </div>

              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={stootbordenOptions}
                  name="stootbordenBetonCireService"
                  label="Dichte trap(pen): Wilt u de stootborden ook bekleden?"
                  placeholder="Maak een keuze"
                />
                {errors.stootbordenBetonCireService && (
                  <p className="text-red-600 text-sm">{errors.stootbordenBetonCireService.message as string}</p>
                )}
              </div>
            </>
          )}

          {/* Price + Next */}
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€ {displayStepFour.toFixed(2)}</span>
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
