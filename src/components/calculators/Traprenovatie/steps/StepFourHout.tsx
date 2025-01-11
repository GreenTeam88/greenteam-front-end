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
    stepFourHoutPrice?: number;

    totalCost?: number;

    //Rember Step options
    OpenStairsServiceHout?: string;
    OverzettredeHout?: string;
    AntiSlipHout?: string;
    StootbordenHout?: string;
  };
  updateFormData: (data: any) => void;
}

/**
 * Hout logic:
 * - openStairs: "Bovenkant" => "Alleen boven kant"(200), "Rondom"(350)
 * - closedStairs Overzettrede => 275 if "Ja"
 * - stootborden => 55 if "Ja"
 * - anti-slip => 12.5 for both open+close stairs count if "Ja"
 */
const schema = z
  .object({
    openStairsCount: z.number(),
    closeStairsCount: z.number(),

    openStairsService: z.string().optional(),
    HoutOverzettrede: z.string().optional(),
    AntiSlipstripService: z.string().optional(),
    stootborden: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { openStairsCount, closeStairsCount } = data;

    if (openStairsCount > 0 && !data.openStairsService) {
      ctx.addIssue({
        code: 'custom',
        path: ['openStairsService'],
        message: 'Kies een optie voor de open trap (Bovenkant of Rondom).',
      });
    }

    if (closeStairsCount > 0 && !data.HoutOverzettrede) {
      ctx.addIssue({
        code: 'custom',
        path: ['HoutOverzettrede'],
        message: 'Wilt u Overzettrede bekleden?',
      });
    }

    if (closeStairsCount > 0 && !data.stootborden) {
      ctx.addIssue({
        code: 'custom',
        path: ['stootborden'],
        message: 'Geef aan of stootborden ook bekleed moeten worden.',
      });
    }
  });

const StepFourHout: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  // Stairs
  const openStairsCount = formData.openStairTotalSteps || 0;
  const closeStairsCount = formData.closeStairTotalSteps || 0;

  // Options
  const openStairsServicesOptions: Option[] = ['Bovenkant', 'Rondom'].map((opt) => ({
    value: opt,
    label: opt,
  }));

  const OverzettredeOptions: Option[] = ['Ja', 'Nee'].map((opt) => ({ value: opt, label: opt }));
  const antiSlipOptions: Option[] = ['Ja', 'Nee'].map((opt) => ({ value: opt, label: opt }));
  const stootbordenOptions: Option[] = ['Ja', 'Nee'].map((opt) => ({ value: opt, label: opt }));

  // Setup form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      openStairsCount,
      closeStairsCount,
      openStairsService: '',
      HoutOverzettrede: '',
      AntiSlipstripService: '',
      stootborden: '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch fields
  const watchOpenStairsService = useWatch({ control, name: 'openStairsService' }) || '';
  const watchHoutOverzettrede = useWatch({ control, name: 'HoutOverzettrede' }) || '';
  const watchAntiSlip = useWatch({ control, name: 'AntiSlipstripService' }) || '';
  const watchStootborden = useWatch({ control, name: 'stootborden' }) || '';

  const [stepFourHoutPrice, setStepFourHoutPrice] = useState<number>(0);

  useEffect(() => {
    const houtConfig = trapRenovatieConfig['Bekleden met hout']?.pricing || {};

    let newStepFourHoutPrice = 0;

    // 1) Open Stairs
    if (openStairsCount > 0 && watchOpenStairsService) {
      const openChoice = watchOpenStairsService === 'Bovenkant' ? 'Alleen boven kant' : 'Rondom';
      const openPrice = houtConfig.openStairs?.[openChoice] ?? 0;
      newStepFourHoutPrice += openPrice * openStairsCount;
    }

    // 2) Closed Stairs Overzettrede
    if (closeStairsCount > 0 && watchHoutOverzettrede === 'Ja') {
      const closedPrice = houtConfig.closedStairs?.['Overzettrede'] ?? 0;
      newStepFourHoutPrice += closedPrice * closeStairsCount;
    }

    // 3) Stootborden
    if (closeStairsCount > 0 && watchStootborden === 'Ja') {
      const stootPrice = houtConfig.additionalOptions?.stootborden ?? 0;
      newStepFourHoutPrice += stootPrice * closeStairsCount;
    }

    // 4) Anti-slip => open+close
    if (watchAntiSlip === 'Ja') {
      const slipPrice = houtConfig.additionalOptions?.antislipstrips ?? 0;
      const totalStairs = openStairsCount + closeStairsCount;
      newStepFourHoutPrice += slipPrice * totalStairs;
    }

    // Calculate new totalCost by subtracting old stepFourHoutPrice and adding newStepFourHoutPrice
    const oldStepFourHoutPrice = formData.stepFourHoutPrice || 0;
    const oldTotal = formData.totalCost || 0;
    const newTotal = oldTotal - oldStepFourHoutPrice + newStepFourHoutPrice;

    setStepFourHoutPrice(newTotal);

    // // We accumulate onto existing total
    // const oldTotal = formData.totalCost || 0;
    // const newTotal = oldTotal + total;

    updateFormData({
      ...formData,
      stepFourHoutPrice: newStepFourHoutPrice,
      OpenStairsServiceHout: watchOpenStairsService,
      OverzettredeHout: watchHoutOverzettrede,
      AntiSlipHout: watchAntiSlip,
      StootbordenHout: watchStootborden,
      totalCost: newTotal,
    });
  }, [
    watchOpenStairsService,
    watchHoutOverzettrede,
    watchAntiSlip,
    watchStootborden,
    openStairsCount,
    closeStairsCount,
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
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
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

          {/* If openStairsCount>0 => let them pick "Bovenkant"/"Rondom" */}
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

          {/* If closeStairsCount>0 => Overzettrede + stootborden + antiSlip */}
          {closeStairsCount > 0 && (
            <>
              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={OverzettredeOptions}
                  name="HoutOverzettrede"
                  label="Dichte trap(pen): Wilt u Overzettrede bekleden?"
                  placeholder="Maak een keuze"
                />
                <SingleSelectDropdown
                  data={antiSlipOptions}
                  name="AntiSlipstripService"
                  label="Wilt u een anti-slipstrip(s)?"
                  placeholder="Maak een keuze"
                />
                {errors.HoutOverzettrede && (
                  <p className="text-red-600 text-sm">{errors.HoutOverzettrede.message as string}</p>
                )}
              </div>

              <div className="flex flex-col gap-[11px]">
                <SingleSelectDropdown
                  data={stootbordenOptions}
                  name="stootborden"
                  label="Dichte trap(pen): Wilt u de stootborden ook bekleden?"
                  placeholder="Maak een keuze"
                />
                {errors.stootborden && <p className="text-red-600 text-sm">{errors.stootborden.message as string}</p>}
              </div>
            </>
          )}

          {/* Price + Next */}
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€ {stepFourHoutPrice.toFixed(2)}</span>
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

export default StepFourHout;
