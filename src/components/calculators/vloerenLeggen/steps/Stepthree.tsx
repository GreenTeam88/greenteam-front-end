import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { vloerenLeggenSubServices } from '@/lib/servicesConfig';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  onUploadClick: (field: string) => void; // For uploading photos
  formData: any;
  updateFormData: (data: any) => void;
}

const StepThree: React.FC<StepProps> = ({ onPrevious, onNext, onUploadClick, formData, updateFormData }) => {
  const floorTypes = ['Beton', 'Hout', 'Laminaat', 'PVC', 'Grind', 'Tegels', 'Lijmresten', 'Tapijt'];
  const floorTypeOptions: Option[] = floorTypes.map((floorType) => ({
    value: floorType,
    label: floorType,
  }));

  const selectedService = formData.selectedService; // Retrieve the service chosen in Step One
  const squareMeters = formData.squareMeters || 0; // Square meters retrieved from Step Two
  const previousTotal = Number(formData.totalCost) || 0; // Retrieve the total cost from previous steps

  const [finalTotalPrice, setFinalTotalPrice] = useState<number>(previousTotal); // Accumulated total

  // Zod schema for form validation
  const schema = z.object({
    subService: z.string().nonempty({ message: 'Please select a sub-service' }),
    existingFloorType: z.string().nonempty({ message: 'Please select the existing floor type' }),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  // Watch selected sub-service
  const selectedSubService = useWatch({ control: form.control, name: 'subService' });

  // Get sub-services dynamically based on the selected service
  const subServiceOptions: Option[] = useMemo(() => {
    const subServices = vloerenLeggenSubServices[selectedService] || {};
    return Object.entries(subServices).map(([subService, price]) => ({
      value: subService,
      label: `${subService} - €${price.toFixed(2)}`,
    }));
  }, [selectedService]);

  // Recalculate the total price dynamically
  useEffect(() => {
    const subServicePrice = vloerenLeggenSubServices[selectedService]?.[selectedSubService] || 0;
    const currentStepTotal = squareMeters * subServicePrice; // Multiply square meters by the selected sub-service price
    setFinalTotalPrice(previousTotal + currentStepTotal); // Update accumulated total dynamically
  }, [selectedSubService, selectedService, squareMeters, previousTotal]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      const subServicePrice = vloerenLeggenSubServices[selectedService]?.[data.subService] || 0; // Get price of selected sub-service
      const currentStepTotal = squareMeters * subServicePrice; // Calculate current step total cost

      updateFormData({
        ...formData,
        ...data, // Save sub-service and existing floor type
        subServicePrice,
        totalCost: previousTotal + currentStepTotal, // Update the accumulated total cost
      });

      onNext();
    })();
  };

  const isButtonDisabled = !selectedSubService || !form.watch('existingFloorType');

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[400px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen! vloren</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] h-full">
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
              label="Welke sub-service wilt u?"
              placeholder="Kies een sub-service"
            />
          </div>

          {/* Upload Button */}
          <div className="flex flex-col">
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

          {/* Existing Floor Type Dropdown */}
          <div className="flex flex-col">
            <SingleSelectDropdown
              data={floorTypeOptions}
              name="existingFloorType"
              label="Wat is de huidige ondergrond?"
              placeholder="Selecteer een type vloer"
            />
          </div>

          {/* Total Price Display */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center text-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{finalTotalPrice.toFixed(2)}</span>
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

export default StepThree;
