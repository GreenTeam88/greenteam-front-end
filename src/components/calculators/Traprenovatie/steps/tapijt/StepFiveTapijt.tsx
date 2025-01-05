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

    // Possibly storing cost from previous steps (including StepFourTapijt)
    totalCost?: number;
    stepFourTapijtPrice?: number;

    // We'll store stepFiveTapijtPrice here
    stepFiveTapijtPrice?: number;

    //RemeberSteps
    Ondertapijt?: string;
    ZijkantenTapijt?: string;
  };
  updateFormData: (data: any) => void;
}

/**
 * For tapijt after StepFourTapijt:
 * - If user chooses ondertapijt => 10 * (openStairs+closeStairs) if "Ja"
 * - If user chooses ookDeZijkanten => 20 * (openStairs+closeStairs) if "Ja"
 */
const schema = z
  .object({
    openStairsCount: z.number().default(0),
    closeStairsCount: z.number().default(0),

    ondertapijtService: z.string().optional(),
    deZijkantenService: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // If user has any stairs, we require them to pick "Ja"/"Nee" for these:
    const totalSteps = data.openStairsCount + data.closeStairsCount;
    if (totalSteps > 0) {
      if (!data.ondertapijtService) {
        ctx.addIssue({
          code: 'custom',
          path: ['ondertapijtService'],
          message: 'Wilt u ondertapijt kiezen bij tapijt?',
        });
      }
      if (!data.deZijkantenService) {
        ctx.addIssue({
          code: 'custom',
          path: ['deZijkantenService'],
          message: 'Wilt u ook de zijkanten bekleden?',
        });
      }
    }
  });

const StepFiveTapijt: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const openStairsCount = formData.openStairTotalSteps || 0;
  const closeStairsCount = formData.closeStairTotalSteps || 0;

  // Pricing for "Bekleden met tapijt"
  // additionalOptions: { ondertapijt:10, ookDeZijkanten:20, ...}
  const tapijtPricing = trapRenovatieConfig['Bekleden met tapijt']?.pricing || {};
  const additionalOptions = tapijtPricing.additionalOptions || {};

  const ondertapijtOptions: Option[] = ['Ja', 'Nee'].map((val) => ({ value: val, label: val }));
  const deZijkantenOptions: Option[] = ['Ja', 'Nee'].map((val) => ({ value: val, label: val }));

  // Setup
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      openStairsCount,
      closeStairsCount,
      ondertapijtService: '',
      deZijkantenService: '',
    },
    mode: 'onChange',
  });
  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch fields
  const watchOndertapijt = useWatch({ control, name: 'ondertapijtService' }) || '';
  const watchZijkanten = useWatch({ control, name: 'deZijkantenService' }) || '';

  // We'll track the cost from StepFiveTapijt
  const [displayTotal, setDisplayTotal] = useState<number>(formData.totalCost || 0);

  useEffect(() => {
    // old total from StepFourTapijt or earlier
    const oldTotal = formData.totalCost || 0;
    const oldStepCost = formData.stepFiveTapijtPrice || 0;

    let stepCost = 0;
    const totalStairs = openStairsCount + closeStairsCount;

    // If "Ja" => + 10 * totalStairs
    if (watchOndertapijt === 'Ja') {
      const ondertapijtCost = additionalOptions.ondertapijt || 0; // default=10
      stepCost += ondertapijtCost * totalStairs;
    }

    // If "Ja" => + 20 * totalStairs
    if (watchZijkanten === 'Ja') {
      const zijkantenCost = additionalOptions.ookDeZijkanten || 0; // default=20
      stepCost += zijkantenCost * totalStairs;
    }

    const newTotal = oldTotal + stepCost - oldStepCost;

    setDisplayTotal(newTotal);

    updateFormData({
      ...formData,
      stepFiveTapijtPrice: stepCost,
      Ondertapijt: watchOndertapijt,
      ZijkantenTapijt: watchZijkanten,
      totalCost: newTotal,
    });
  }, [watchOndertapijt, watchZijkanten, openStairsCount, closeStairsCount]);

  const isButtonDisabled = !isValid;

  const onSubmit = () => {
    onNext();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
        className="w-[386px] rounded-[4px] relative lg:px-0 z-10 flex flex-col shadow-lg"
      >
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
              Een aantal vragen over de trappen
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[30%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Ondertapijt */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={ondertapijtOptions}
              name="ondertapijtService"
              label="Wilt u ook ondertapijt bij uw tapijt?"
              placeholder="Maak een keuze"
            />
            {errors.ondertapijtService && (
              <p className="text-red-600 text-sm">{errors.ondertapijtService.message as string}</p>
            )}
          </div>

          {/* De zijkanten */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={deZijkantenOptions}
              name="deZijkantenService"
              label="Wilt u ook de zijkanten bekleden?"
              placeholder="Maak een keuze"
            />
            {errors.deZijkantenService && (
              <p className="text-red-600 text-sm">{errors.deZijkantenService.message as string}</p>
            )}
          </div>

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

export default StepFiveTapijt;
