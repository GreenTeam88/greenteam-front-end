import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { servicesConfig } from '@/lib/servicesConfig';
import { Option } from '@/types';

interface StepOneProps {
  onNext: (nextStep?: number) => void;
  formData: any;
  updateFormData: (data: any) => void;
  onCategoryChange: (category: string) => void; // Callback to notify MultiStepForm
  onSkip: () => void;
}

const schema = z.object({
  selectedCategory: z.string().nonempty({ message: 'Please select a category' }),
  selectedService: z.string().nonempty({ message: 'Select at least one service' }),
});

const StepOne: React.FC<StepOneProps> = ({ onNext, formData, updateFormData, onCategoryChange, onSkip }) => {
  const categories = Object.keys(servicesConfig);

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedCategory: formData.selectedCategory || '',
      selectedService: formData.selectedService || '',
    },
  });

  const selectedCategory = form.watch('selectedCategory');
  const selectedService = form.watch('selectedService');
  const [totalCost, setTotalCost] = useState<number>(formData.totalCost || 0);

  // Dynamic services based on selected category
  const serviceOptions: Option[] = useMemo(() => {
    if (!selectedCategory) return [];
    const services = servicesConfig[selectedCategory] || {};

    return Object.entries(services).map(([service, price]) => {
      let label;

      if (selectedCategory === 'Vloeren leggen') {
        // For vloerenLeggen, only display the service name without price
        label = service;
      } else if (price === 0.0) {
        label = `${service} - Gratis`;
      } else if (price === null) {
        label = `${service} - Op aanvraag`;
      } else {
        label = `${service} - €${price.toFixed(2)}`;
      }

      return {
        value: service,
        label,
      };
    });
  }, [selectedCategory]);

  // Dynamic watch for "isOnRequest" services
  const isOnRequest = useMemo(() => {
    return selectedCategory !== 'Vloeren leggen' && servicesConfig[selectedCategory]?.[selectedService] === null;
  }, [selectedCategory, selectedService]);

  // Update total cost whenever selectedCategory or selectedService changes
  useEffect(() => {
    const price = servicesConfig[selectedCategory]?.[selectedService] || 0;
    if (!isOnRequest) {
      setTotalCost(price);
    }
  }, [selectedCategory, selectedService, isOnRequest]);

  // Notify MultiStepForm when the category changes
  useEffect(() => {
    if (selectedCategory) {
      onCategoryChange(selectedCategory); // Notify parent
    }
  }, [selectedCategory, onCategoryChange]);

  const handleSubmit = form.handleSubmit((data) => {
    const selectedServicePrice = servicesConfig[selectedCategory]?.[data.selectedService] || 0;

    updateFormData({
      ...formData,
      ...data,
      isOnRequest,
      selectedService: data.selectedService,
      selectedServicePrice,
      totalCost: isOnRequest ? null : selectedServicePrice,
    });

    if (data.selectedService === 'Ben ik nog niet over uit' || data.selectedService === 'Ik wil graag advies') {
      onSkip(); // Navigate directly to StepFive
    } else {
      onNext(); // Proceed normally
    }
  });

  const isButtonDisabled = !selectedCategory || !selectedService;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[430px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <HeadlineSemibold>Snel uw prijs berekenen!</HeadlineSemibold>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-[25px] py-[22px]">
          <div className="flex flex-row items-center justify-between">
            <span className="text-gray-400 font-sans text-sm">Waar kunnen we u mee helpen?</span>
            {(selectedCategory || selectedService) && (
              <div className="w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
                <div className="w-[15%] h-full bg-green-700 rounded-full"></div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="selectedCategory"
              label="Categorie"
              placeholder="Kies er een"
            />
          </div>
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={serviceOptions}
              name="selectedService"
              label="Wat wilt u gedaan hebben?"
              placeholder="Kies er een"
            />
          </div>
          <div className="flex flex-col space-y-2">
            {isOnRequest ? (
              <div className="flex justify-center items-center h-full">
                <span className="font-semibold text-lg text-green-700">Berekening volgt na aanvraag</span>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
                <span className="font-semibold text-lg text-green-700">€{totalCost.toFixed(2)}</span>
              </div>
            )}

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

export default StepOne;
