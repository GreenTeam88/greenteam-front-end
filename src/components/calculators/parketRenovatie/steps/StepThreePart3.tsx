import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import InputGetter from '@/components/calculators/Getters/InputGetter';
import MultiSelectDropdown from '@/components/calculators/Getters/MultiSelectDropdown';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: {
    stepCosts: { [key: string]: number };
    totalCost: number;
    [key: string]: any;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({});

// Prices per selected service
const UNIT_PRICES: Record<string, number> = {
  'Bovenkant convectorput schuren': 50,
  'Achter convectorput schuren': 50,
  'Schuren witte vloer (tijd + materiaal)': 250,
};

// Service options
const surfaceTypes: Option[] = [
  { value: 'Nee', label: 'Nee', imageUrl: '/images/lage-plinten.svg' },
  {
    value: 'Bovenkant convectorput schuren',
    label: 'Bovenkant convectorput schuren',
    imageUrl: '/images/lage-plinten.svg',
  },
  {
    value: 'Achter convectorput schuren',
    label: 'Achter convectorput schuren',
    imageUrl: '/images/lage-plinten.svg',
  },
  {
    value: 'Schuren witte vloer (tijd + materiaal)',
    label: 'Schuren witte vloer (tijd + materiaal)',
    imageUrl: '/images/lage-plinten.svg',
  },
];

// Number options for input selection
const numberOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
const numberSelectionOptions: Option[] = numberOptions.map((n) => ({ value: n, label: n }));

const StepThreePart3: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  // Watch selected options
  const watchSurfaces = useWatch({ control: form.control, name: 'selectedSurfaces' }) || [];
  const watchConvectorSchurenCount = parseFloat(form.watch('convectorSchurenCount') || '0');
  const watchAchterConvectorCount = parseFloat(form.watch('achterConvectorCount') || '0');
  const watchWitteVloerArea = parseFloat(form.watch('witteVloerArea') || '0');

  // Compute cost dynamically
  const stepCost = useMemo(() => {
    let cost = 0;

    // If "Nee" is selected, reset cost
    if (watchSurfaces.includes('Nee')) return 0;

    watchSurfaces.forEach((surface: string) => {
      if (surface in UNIT_PRICES) {
        if (surface === 'Schuren witte vloer (tijd + materiaal)') {
          cost += watchWitteVloerArea * UNIT_PRICES[surface];
        } else if (surface === 'Bovenkant convectorput schuren') {
          cost += watchConvectorSchurenCount * UNIT_PRICES[surface];
        } else if (surface === 'Achter convectorput schuren') {
          cost += watchAchterConvectorCount * UNIT_PRICES[surface];
        }
      }
    });

    return cost;
  }, [watchSurfaces, watchWitteVloerArea, watchConvectorSchurenCount, watchAchterConvectorCount]);

  // Update formData when stepCost changes
  useEffect(() => {
    const updatedStepCosts = {
      ...formData.stepCosts,
      step3Part3: stepCost, // Only update this step's cost
    };

    updateFormData({
      ...formData,
      stepCosts: updatedStepCosts,
      totalCost:
        formData.totalCost -
        (formData.stepCosts?.step3Part3 || 0) + // Remove previous step3Part3 value
        stepCost, // Add new step3Part3 value
    });
  }, [stepCost]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData({
        ...formData,
        ...data,
        stepCosts: {
          ...formData.stepCosts,
          step3Part3: stepCost,
        },
      });

      onNext();
    })();
  };

  // Allow "Nee" selection to continue
  const isButtonDisabled = watchSurfaces.length === 0;

  return (
    <FormProvider {...form}>
      <form className="w-[386px] flex rounded-[4px] relative lg:px-0 z-10 flex-col">
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
              Waar kunnen we u mee helpen?
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[55%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Select Service Type */}
          <div className="flex flex-col">
            <MultiSelectDropdown
              data={surfaceTypes}
              name="selectedSurfaces2"
              label="Welke extra schuurwerken?"
              placeholder="Maak een keuze"
              exclusiveOption="Nee"
            />
          </div>

          {/* Inputs for selected services */}
          {watchSurfaces.includes('Schuren witte vloer (tijd + materiaal)') && (
            <InputGetter
              form={form}
              name="witteVloerArea"
              label="Oppervlakte in m²"
              placeholder="Aantal m²"
              type="text"
            />
          )}

          {watchSurfaces.includes('Bovenkant convectorput schuren') && (
            <SingleSelectDropdown
              data={numberSelectionOptions}
              name="convectorSchurenCount"
              label="Aantal keer schuren"
              placeholder="Kies een aantal"
            />
          )}

          {watchSurfaces.includes('Achter convectorput schuren') && (
            <SingleSelectDropdown
              data={numberSelectionOptions}
              name="achterConvectorCount"
              label="Aantal keer schuren"
              placeholder="Kies een aantal"
            />
          )}

          {/* Total Price Display */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
            <span className="font-semibold text-lg text-green-700">€{formData.totalCost?.toFixed(2)}</span>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col space-y-2 mt-auto">
            <CreateButton
              className="w-full bg-primaryDefault"
              type="button"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepThreePart3;
