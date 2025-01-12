import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import InputGetter from '@/components/calculators/Getters/InputGetter';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { vloerenLeggenSubServices } from '@/lib/servicesConfig';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  onUploadClick: (field: string) => void;
  formData: {
    selectedService?: string;
    subService?: string;
    SquareMeteer?: string; // Unique name for square meters input in Step 3
    stepCosts: Record<string, number>;
    totalCost?: number;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({
  subService: z.string().nonempty({ message: 'Please select a sub-service' }),
  SquareMeteer: z.string().regex(/^\d+$/, { message: 'Enter a valid number' }).optional(),
});

const StepThree: React.FC<StepProps> = ({ onPrevious, onNext, onUploadClick, formData, updateFormData }) => {
  const selectedService = formData.selectedService || '';

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      subService: formData.subService || '',
      SquareMeteer: formData.SquareMeteer || '',
    },
    mode: 'onChange',
  });

  const { control } = form;

  // Watch inputs
  const selectedSubService = useWatch({ control, name: 'subService' });
  const SquareMeteer = useWatch({ control, name: 'SquareMeteer' });

  // Generate sub-service options dynamically
  const subServiceOptions: Option[] = React.useMemo(() => {
    const subServices = vloerenLeggenSubServices[selectedService] || {};
    return Object.entries(subServices).map(([subService, price]) => ({
      value: subService,
      label: `${subService} - €${price.toFixed(2)}`,
    }));
  }, [selectedService]);

  // Calculate the cost for this step
  const calculateStepCost = () => {
    if (!selectedSubService) return 0; // No cost until sub-service is selected

    const subServicePrice = vloerenLeggenSubServices[selectedService]?.[selectedSubService] || 0;
    const area = parseInt(SquareMeteer || '0', 10);
    return area * subServicePrice;
  };

  // Update formData dynamically when inputs change
  useEffect(() => {
    const currentStepCost = calculateStepCost();

    updateFormData({
      ...formData,
      subService: selectedSubService,
      SquareMeteer,
      stepCosts: {
        ...formData.stepCosts,
        step3: currentStepCost, // Update cost for Step 3
      },
      totalCost: Object.values<number>({
        ...formData.stepCosts,
        step3: currentStepCost, // Ensure Step 3 cost is included
      }).reduce((acc, cost) => acc + cost, 0),
    });
  }, [selectedSubService, SquareMeteer]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      const currentStepCost = calculateStepCost();

      updateFormData({
        ...formData,
        ...data,
        stepCosts: {
          ...formData.stepCosts,
          step3: currentStepCost, // Update Step 3 cost in stepCosts
        },
        totalCost: Object.values({
          ...formData.stepCosts,
          step3: currentStepCost, // Ensure the latest Step 3 cost is included
        }).reduce((acc, cost) => acc + cost, 0),
      });

      onNext();
    })();
  };

  const isButtonDisabled = !selectedSubService || !(SquareMeteer && /^[0-9]+$/.test(SquareMeteer));

  return (
    <FormProvider {...form}>
      <form className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg">
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
              Niet verplicht, wel handig om te weten
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[45%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Sub-Service Dropdown */}
          <div className="flex flex-col">
            <SingleSelectDropdown
              data={subServiceOptions}
              name="subService"
              label="Wat voor soort vloer?"
              placeholder="Maak een keuze"
            />
          </div>

          {/* Upload Button */}
          <div className="flex flex-col w-44">
            <label
              className="text-xs cursor-pointer"
              onClick={() => {
                updateFormData(form.getValues());
                onUploadClick('FloorPhotos');
              }}
            >
              <span className="font-bold text-green-700 hover:text-green-900 hover:underline transition-all duration-200">
                Foto uploaden
              </span>
              <span className="text-gray-400 font-sans"> (Niet verplicht)</span>
            </label>
          </div>

          {/* Square Meters Input */}
          <div className="flex flex-col gap-[11px]">
            <InputGetter
              form={form}
              name="SquareMeteer"
              label="Aantal m2"
              placeholder="Voer het aantal m2 in"
              type="text"
            />
          </div>

          {/* Total Price Display */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center text-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{(formData.totalCost || 0).toFixed(2)}</span>
            </div>
            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
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

export default StepThree;
