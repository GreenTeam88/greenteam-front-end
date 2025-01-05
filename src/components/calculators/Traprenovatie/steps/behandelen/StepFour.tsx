import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { trapRenovatieConfig } from '@/lib/servicesConfig';
import { Option } from '@/types'; // Must have disabled?: boolean
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
    stepFourPriceBehandelen?: number; // partial cost for StepFour

    // Remember user selections
    RondomBehandelenService?: string; // open stairs (rondom or bovenkant)
    OverzettredeBehandelenService?: string; // closed stairs (overzettrede or met profiel)
    stootbordenBehandelenService?: string; // stootborden => 'Ja'|'Nee'
  };
  updateFormData: (data: any) => void;
}

/**
 * Zod schema:
 * - If openStairsCount > 0 => must pick "RondomBehandelenService"
 * - If closeStairsCount > 0 => must pick "OverzettredeBehandelenService" and "stootbordenBehandelenService"
 */
const schema = z
  .object({
    openStairsCount: z.number().nonnegative().default(0),
    closeStairsCount: z.number().nonnegative().default(0),

    RondomBehandelenService: z.string().optional(),
    OverzettredeBehandelenService: z.string().optional(),
    stootbordenBehandelenService: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { openStairsCount, closeStairsCount } = data;

    // If user has open stairs => must pick "RondomBehandelenService"
    if (openStairsCount > 0 && !data.RondomBehandelenService) {
      ctx.addIssue({
        code: 'custom',
        path: ['RondomBehandelenService'],
        message: 'Wilt u rondom bekleden bij de open trap?',
      });
    }

    // If user has close stairs => must pick "OverzettredeBehandelenService"
    if (closeStairsCount > 0 && !data.OverzettredeBehandelenService) {
      ctx.addIssue({
        code: 'custom',
        path: ['OverzettredeBehandelenService'],
        message: 'Wilt u Overzettrede of met profiel bekleden?',
      });
    }

    // If user has close stairs => must pick "stootbordenBehandelenService"
    if (closeStairsCount > 0 && !data.stootbordenBehandelenService) {
      ctx.addIssue({
        code: 'custom',
        path: ['stootbordenBehandelenService'],
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
      disabled: false,
    },
    {
      value: 'Met profiel (niet mogelijk)',
      label: 'Met profiel (niet mogelijk)',
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
      RondomBehandelenService: '',
      OverzettredeBehandelenService: '',
      stootbordenBehandelenService: '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch relevant fields
  const watchRondomService = useWatch({ control, name: 'RondomBehandelenService' }) || '';
  const watchOverzettredeService = useWatch({ control, name: 'OverzettredeBehandelenService' }) || '';
  const watchStootbordenService = useWatch({ control, name: 'stootbordenBehandelenService' }) || '';

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
    const oldPartialCost = formData.stepFourPriceBehandelen || 0;
    const oldTotal = formData.totalCost || 0;

    // 3) new total = oldTotal - oldPartialCost + new partial
    const newTotal = oldTotal - oldPartialCost + stepCost;

    setDisplayStepFour(newTotal);

    // 4) Only update formData if there's an actual change
    const hasCostChanged = stepCost !== oldPartialCost || newTotal !== oldTotal;
    const hasFieldsChanged =
      watchRondomService !== formData.RondomBehandelenService ||
      watchOverzettredeService !== formData.OverzettredeBehandelenService ||
      watchStootbordenService !== formData.stootbordenBehandelenService;

    if (hasCostChanged || hasFieldsChanged) {
      // This ensures we do NOT update if nothing changed,
      // preventing an infinite render loop
      updateFormData({
        ...formData,
        stepFourPriceBehandelen: stepCost,
        RondomBehandelenService: watchRondomService,
        OverzettredeBehandelenService: watchOverzettredeService,
        stootbordenBehandelenService: watchStootbordenService,
        totalCost: newTotal,
      });
    }
    // intentionally omitting `formData` and `updateFormData` from dependencies
  }, [
    watchRondomService,
    watchOverzettredeService,
    watchStootbordenService,
    openStairsCount,
    closeStairsCount,
    trapConfig,
  ]);

  const onSubmit = () => {
    onNext();
  };

  const isButtonDisabled = !isValid;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
        className="w-[386px] rounded-[4px] relative lg:px-0 z-10 flex flex-col shadow-lg"
      >
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
                name="RondomBehandelenService"
                label="Open trap(en): Wilt u rondom bekleden?"
                placeholder="Maak een keuze"
              />
              {errors.RondomBehandelenService && (
                <p className="text-red-600 text-sm">{errors.RondomBehandelenService.message as string}</p>
              )}
            </div>
          )}

          {/* If user has close stairs => choose Overzettrede + stootborden */}
          {closeStairsCount > 0 && (
            <>
              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={OverzettredeOptions}
                  name="OverzettredeBehandelenService"
                  label="Dichte trap(pen): Wilt u met profiel?"
                  placeholder="Maak een keuze"
                />
                {errors.OverzettredeBehandelenService && (
                  <p className="text-red-600 text-sm">{errors.OverzettredeBehandelenService.message as string}</p>
                )}
              </div>

              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={stootbordenOptions}
                  name="stootbordenBehandelenService"
                  label="Dichte trap(pen): Wilt u de stootborden ook bekleden?"
                  placeholder="Maak een keuze"
                />
                {errors.stootbordenBehandelenService && (
                  <p className="text-red-600 text-sm">{errors.stootbordenBehandelenService.message as string}</p>
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

export default StepFour;
