import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import categoryConfig from '@/lib/categoryConfig';
import { servicesConfig, trapRenovatieConfig } from '@/lib/servicesConfig';
import { Option } from '@/types';

interface StepOneProps {
  onNext: () => void; // Called when user does normal flow
  onSkip: () => void; // Called if skip scenario (e.g. "Ben ik nog niet over uit")
  formData: any;
  updateFormData: (data: any) => void;
}

// Zod schema for StepOne
const schema = z.object({
  selectedCategory: z.string().nonempty('Please select a category'),
  selectedService: z.string().nonempty('Select at least one service'),
});

const skipServices = ['Ben ik nog niet over uit', 'Ik wil graag advies'];

function buildSteps(category: string, service: string): string[] {
  // If skip => StepOne -> StepFive -> ContactInfoStep -> FinalStep
  if (skipServices.includes(service)) {
    return ['StepOne', 'StepFive', 'ContactInfoStep', 'FinalStep'];
  }

  // If Traprenovatie
  if (category === 'Traprenovatie') {
    const cfg = trapRenovatieConfig[service];
    if (cfg?.applicableSteps?.length) {
      return ['StepOne', ...cfg.applicableSteps, 'StepFive', 'ContactInfoStep', 'FinalStep'];
    } else {
      // fallback
      return categoryConfig['Traprenovatie'].steps;
    }
  }

  // Other categories
  // If you want skip to apply in any category, you already handled it above.
  // So here we just do normal steps
  return categoryConfig[category]?.steps || [];
}

const StepOne: React.FC<StepOneProps> = ({ onNext, onSkip, formData, updateFormData }) => {
  // Get all categories from your servicesConfig
  const categories = Object.keys(servicesConfig);

  // Build <option> array for category dropdown
  const categoryOptions: Option[] = categories.map((cat) => ({
    value: cat,
    label: cat,
  }));

  // Set up react-hook-form
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedCategory: formData.selectedCategory || '',
      selectedService: formData.selectedService || '',
    },
  });
  const { handleSubmit, setValue, control } = form;

  // Real-time watchers
  const selectedCategory = useWatch({ control, name: 'selectedCategory' }) || '';
  const selectedService = useWatch({ control, name: 'selectedService' }) || '';

  // Build service dropdown
  const serviceOptions: Option[] = useMemo(() => {
    if (!selectedCategory) return [];
    const services = servicesConfig[selectedCategory] || {};

    return Object.entries(services).map(([svcName, price]) => {
      let label;
      if (selectedCategory === 'Vloeren leggen' || selectedCategory === 'Traprenovatie') {
        label = svcName;
      } else if (price === 0.0) {
        label = `${svcName} - Gratis`;
      } else if (price === null) {
        label = `${svcName} - Op aanvraag`;
      } else {
        label = `${svcName} - €${price.toFixed(2)}`;
      }
      return { value: svcName, label };
    });
  }, [selectedCategory]);

  // Disable service if no category
  const isServiceDisabled = !selectedCategory;

  // Auto-select first service if category changes
  useEffect(() => {
    if (selectedCategory) {
      const services = servicesConfig[selectedCategory] || {};
      const firstSvc = Object.keys(services)[0] || '';
      setValue('selectedService', firstSvc);
    } else {
      setValue('selectedService', '');
    }
  }, [selectedCategory, setValue]);

  // isOnRequest logic
  const isOnRequest = useMemo(() => {
    if (!selectedCategory || !selectedService) return false;
    const price = servicesConfig[selectedCategory]?.[selectedService];
    return selectedCategory !== 'Vloeren leggen' && selectedCategory !== 'Traprenovatie' && price === null;
  }, [selectedCategory, selectedService]);

  // Re-build steps in real-time
  useEffect(() => {
    if (!selectedCategory) {
      // No category => default to StepOne only
      updateFormData({
        ...formData,
        selectedCategory: '',
        selectedService: '',
        customSteps: ['StepOne'],
      });
      return;
    }

    // We have a category => build full steps
    const finalSteps = buildSteps(selectedCategory, selectedService);

    // For price
    const basePrice = servicesConfig[selectedCategory]?.[selectedService] || 0;

    updateFormData({
      ...formData,
      selectedCategory,
      selectedService,
      selectedServicePrice: basePrice,
      totalCost: isOnRequest ? null : basePrice,
      isOnRequest,
      customSteps: finalSteps,
    });
  }, [selectedCategory, selectedService]);

  // When user clicks "Volgende"
  const onSubmit = handleSubmit(() => {
    // If skip
    if (skipServices.includes(selectedService)) {
      // console.log('Skip service selected:', selectedService);
      onSkip();
    } else {
      // console.log('Regular service selected:', selectedService);
      onNext();
    }
  });

  // Old UI design
  const isButtonDisabled = !selectedCategory || !selectedService;

  return (
    <FormProvider {...form}>
      <form className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <HeadlineSemibold>Snel uw prijs berekenen!</HeadlineSemibold>
        </div>

        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
          {/* Title row */}
          <div className="flex flex-row items-center justify-between">
            <span className="text-gray-400 font-sans text-sm">Waar kunnen we u mee helpen?</span>
            {(selectedCategory || selectedService) && (
              <div className="w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
                <div className="w-[15%] h-full bg-green-700 rounded-full"></div>
              </div>
            )}
          </div>

          {/* Category dropdown */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={categoryOptions}
              name="selectedCategory"
              label="Categorie"
              placeholder="Kies er een"
              alertLabelText="*"
            />
          </div>

          {/* Service dropdown */}
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={serviceOptions}
              name="selectedService"
              label="Wat wilt u gedaan hebben?"
              placeholder="Kies er een"
              disabled={isServiceDisabled}
            />
          </div>

          {/* Price or on request */}
          <div className="flex flex-col space-y-2">
            {isOnRequest ? (
              <div className="flex justify-center items-center h-full">
                <span className="font-semibold text-lg text-green-700">Berekening volgt na aanvraag</span>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
                <span className="font-semibold text-lg text-green-700">€ 0.00</span>
              </div>
            )}

            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
              type="button"
              disabled={isButtonDisabled}
              onClick={onSubmit}
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
