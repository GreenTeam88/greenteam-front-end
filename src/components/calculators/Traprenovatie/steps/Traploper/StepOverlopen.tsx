import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { trapRenovatieConfig } from '@/lib/servicesConfig';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: {
    selectedService?: string;
    totalCost?: number; // Running total from previous steps
    stepOverloopCost?: number; // Partial cost for overloop & entree
    [key: string]: any; // Additional data

    //Remember Old Data
    overloopSelection?: string;
    entreeSelection?: string;
  };
  updateFormData: (data: any) => void;
}

/** Utility: parse "Nee,..." => 0 or "Ja, 4m² in totaal" => 4  */
function parseSquareMeters(value: string): number {
  if (value.startsWith('Nee')) return 0;
  // Look for any digits in the string (e.g., "4" in "Ja, 4m² in totaal").
  const match = value.match(/\d+/);
  if (!match) return 0;

  return parseInt(match[0], 10) || 0;
}

const schema = z.object({
  overloopSelection: z.string().nonempty({ message: 'Maak een keuze voor overloop.' }),
  entreeSelection: z.string().nonempty({ message: 'Maak een keuze voor entree.' }),
});

const StepOverlopen: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  // Overloop Options
  const OverlopenSquareMetre = [
    'Nee, geen overlopen bekleden',
    'Ja, 1m² in totaal',
    'Ja, 2m² in totaal',
    'Ja, 3m² in totaal',
    'Ja, 4m² in totaal',
    'Ja, 5m² in totaal',
    'Ja, 6m² in totaal',
    'Ja, 7m² in totaal',
    'Ja, 8m² in totaal',
    'Ja, 9m² in totaal',
    'Ja, 10m² in totaal',
    'Ja, 11m² in totaal',
    'Ja, 12m² in totaal',
    'Ja, 13m² in totaal',
    'Ja, 14m² in totaal',
    'Ja, 15m² in totaal',
    'Ja, 16m² in totaal',
    'Ja, 17m² in totaal',
    'Ja, 18m² in totaal',
    'Ja, 19m² in totaal',
    'Ja, 20m² in totaal',
    'Ja, 21m² in totaal',
    'Ja, 22m² in totaal',
    'Ja, 23m² in totaal',
    'Ja, 24m² in totaal',
    'Ja, 25m² in totaal',
    'Ja, 26m² in totaal',
    'Ja, 27m² in totaal',
    'Ja, 28m² in totaal',
    'Ja, 29m² in totaal',
    'Ja, 30m²+ in totaal',
  ];

  // Entree Options
  const EntreeSquareMetre = [
    'Nee, geen entreé bekleden',
    'Ja, 1m² in totaal',
    'Ja, 2m² in totaal',
    'Ja, 3m² in totaal',
    'Ja, 4m² in totaal',
    'Ja, 5m² in totaal',
    'Ja, 6m² in totaal',
    'Ja, 7m² in totaal',
    'Ja, 8m² in totaal',
    'Ja, 9m² in totaal',
    'Ja, 10m² in totaal',
    'Ja, 11m² in totaal',
    'Ja, 12m² in totaal',
    'Ja, 13m² in totaal',
    'Ja, 14m² in totaal',
    'Ja, 15m² in totaal',
    'Ja, 16m² in totaal',
    'Ja, 17m² in totaal',
    'Ja, 18m² in totaal',
    'Ja, 19m² in totaal',
    'Ja, 20m² in totaal',
    'Ja, 21m² in totaal',
    'Ja, 22m² in totaal',
    'Ja, 23m² in totaal',
    'Ja, 24m² in totaal',
    'Ja, 25m² in totaal',
    'Ja, 26m² in totaal',
    'Ja, 27m² in totaal',
    'Ja, 28m² in totaal',
    'Ja, 29m² in totaal',
    'Ja, 30m²+ in totaal',
  ];

  const overloopOptions: Option[] = OverlopenSquareMetre.map((option) => ({
    value: option,
    label: option,
  }));

  const entreeOptions: Option[] = EntreeSquareMetre.map((option) => ({
    value: option,
    label: option,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      overloopSelection: formData.overloopSelection || '',
      entreeSelection: formData.entreeSelection || '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch the user’s choices
  const watchOverloop = useWatch({ control, name: 'overloopSelection' }) || '';
  const watchEntree = useWatch({ control, name: 'entreeSelection' }) || '';

  // For dynamically showing updated total in the UI
  const [displayTotal, setDisplayTotal] = useState<number>(formData.totalCost || 0);

  // On changes, recalc cost
  useEffect(() => {
    const oldStepCost = formData.stepOverloopCost || 0;
    const oldTotal = formData.totalCost || 0;

    // parse user picks
    const overloopSq = parseSquareMeters(watchOverloop);
    const entreeSq = parseSquareMeters(watchEntree);

    // get trap config for extraServices
    const serviceName = formData.selectedService || '';
    const trapConfig = trapRenovatieConfig[serviceName]?.pricing || {};
    const extra = trapConfig.extraServices || {};

    // multiply by price
    const costOverloop = (extra.overloop || 0) * overloopSq;
    const costEntree = (extra.entree || 0) * entreeSq;

    const newStepCost = costOverloop + costEntree;
    // new total = old total - old partial + new partial
    const newTotal = oldTotal - oldStepCost + newStepCost;

    setDisplayTotal(newTotal);

    // save to formData
    updateFormData({
      ...formData,
      stepOverloopCost: newStepCost,
      totalCost: newTotal,
      overloopSelection: watchOverloop,
      entreeSelection: watchEntree,
    });
  }, [watchOverloop, watchEntree]);

  const onSubmit = () => {
    onNext();
  };

  const isButtonDisabled = !isValid;

  return (
    <FormProvider {...form}>
      <form className="w-[386px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg">
        {/* Header */}
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] h-full shadow-md">
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
              <div className="w-[80%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Overloop Dropdown */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={overloopOptions}
              name="overloopSelection"
              label="Wilt u ook overlopen bekleden?"
              placeholder="Maak een keuze"
            />
            {errors.overloopSelection && (
              <p className="text-red-600 text-sm">{errors.overloopSelection.message as string}</p>
            )}
          </div>

          {/* Entree Dropdown */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={entreeOptions}
              name="entreeSelection"
              label="Wilt u ook entree bekleden?"
              placeholder="Maak een keuze"
            />
            {errors.entreeSelection && (
              <p className="text-red-600 text-sm">{errors.entreeSelection.message as string}</p>
            )}
          </div>

          {/* Price + Next */}
          <div className="flex flex-col space-y-2 mt-auto">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
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

export default StepOverlopen;
