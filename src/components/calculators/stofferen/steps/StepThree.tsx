import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import MultiSelectDropdown from '@/components/calculators/Getters/MultiSelectDropdown';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  onUploadClick: (field: string) => void; // For uploading photos
  formData: {
    selectedSurfaces?: string[];
    additionalSurfaceType?: string;
    stepCosts: Record<string, number>;
    totalCost?: number;
    isOnRequest?: boolean;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({
  selectedSurfaces: z.array(z.string()).nonempty({ message: 'Selecteer minimaal één oppervlak' }),
  additionalSurfaceType: z.string().nonempty({ message: 'Maak een keuze voor andere oppervlaktes' }),
});

// Example pricing configuration for surfaces
const SURFACE_COSTS: Record<string, number> = {
  Traptredes: 50,
  Entrée: 30,
  Opstapjes: 20,
  Overloop: 40,
};

const StepThree: React.FC<StepProps> = ({ onPrevious, onNext, onUploadClick, formData, updateFormData }) => {
  const surfaceCategories = ['Traptredes', 'Entrée', 'Opstapjes', 'Overloop'];
  const additionalSurfaceOptions = [
    'Beton',
    'Geegaliseerd',
    'Grind',
    'Hout',
    'Limresten',
    'Laminaat',
    'Parket',
    'Pvc',
    'Tapijt',
    'Tegels',
    'Overig',
  ];

  const surfaceCategoryOptions: Option[] = surfaceCategories.map((category) => ({
    value: category,
    label: `${category} - €${SURFACE_COSTS[category] || 0}`,
  }));

  const additionalSurfaceTypeOptions: Option[] = additionalSurfaceOptions.map((option) => ({
    value: option,
    label: option,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedSurfaces: formData.selectedSurfaces || [],
      additionalSurfaceType: formData.additionalSurfaceType || '',
    },
    mode: 'onChange',
  });

  const { control } = form;

  // Watch selected inputs
  const selectedSurfaces = useWatch({ control, name: 'selectedSurfaces', defaultValue: [] });
  const additionalSurfaceType = useWatch({ control, name: 'additionalSurfaceType', defaultValue: '' });

  // Calculate the step cost dynamically
  const calculateStepCost = () => {
    const surfaceCost = selectedSurfaces.reduce((totalCost, surface) => {
      return totalCost + (SURFACE_COSTS[surface] || 0);
    }, 0);

    const additionalCost = SURFACE_COSTS[additionalSurfaceType] || 0;
    return surfaceCost + additionalCost;
  };

  // Update formData dynamically when inputs change
  useEffect(() => {
    const step3Cost = calculateStepCost();
    const previousTotal = Number(formData.totalCost) || 0; // Accumulate previous steps

    updateFormData({
      ...formData,
      selectedSurfaces,
      additionalSurfaceType,
      stepCosts: {
        ...formData.stepCosts,
        step3: step3Cost, // Add step3 cost dynamically
      },
      totalCost: previousTotal - (formData.stepCosts?.step3 || 0) + step3Cost, // Adjust total cost
    });
  }, [selectedSurfaces, additionalSurfaceType]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      const step3Cost = calculateStepCost();
      const previousTotal = Number(formData.totalCost) || 0;

      updateFormData({
        ...formData,
        ...data,
        stepCosts: {
          ...formData.stepCosts,
          step3: step3Cost,
        },
        totalCost: previousTotal - (formData.stepCosts?.step3 || 0) + step3Cost,
      });

      onNext();
    })();
  };

  const isButtonDisabled = !selectedSurfaces.length || !additionalSurfaceType;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px] h-[400px] flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-md">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Een aantal vragen over de ruimte(s)
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[45%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Surface Categories Multi-Select */}
          <div className="flex flex-col">
            <MultiSelectDropdown
              data={surfaceCategoryOptions}
              name="selectedSurfaces"
              label="Wat zijn de geselecteerde oppervlakten?"
              placeholder="Selecteer oppervlakten"
            />
          </div>

          {/* Upload Button */}
          <div className="flex flex-col">
            <label
              className="text-xs cursor-pointer"
              onClick={() => {
                updateFormData(form.getValues());
                onUploadClick('damagePhotos');
              }}
            >
              <span className="font-bold text-green-700 hover:text-green-900 hover:underline transition-all duration-200">
                Foto uploaden
              </span>
              <span className="text-gray-400 font-sans"> (Niet verplicht)</span>
            </label>
          </div>

          {/* Additional Surface Type Single-Select */}
          <div className="flex flex-col">
            <SingleSelectDropdown
              data={additionalSurfaceTypeOptions}
              name="additionalSurfaceType"
              label="Zijn er nog andere oppervlaktes?"
              placeholder="Maak een keuze"
            />
          </div>

          {/* Total Price Display */}
          <div className="flex flex-col space-y-2">
            {formData.isOnRequest ? (
              <div className="flex justify-center items-center h-full">
                <span className="font-semibold text-lg text-green-700">Berekening volgt na aanvraag</span>
              </div>
            ) : (
              <div className="flex justify-between items-center text-center">
                <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
                <span className="font-semibold text-lg text-green-700">€{(formData.totalCost || 0).toFixed(2)}</span>
              </div>
            )}

            <CreateButton
              className={`w-full ${isButtonDisabled ? 'bg-gray-500' : 'bg-primaryDefault border'}`}
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

export default StepThree;
