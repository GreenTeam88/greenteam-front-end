// src/lib/stepResolver.ts
import categoryConfig from './categoryConfig';
import { trapRenovatieConfig } from './servicesConfig';

export const getStepsForCategory = (category: string, selectedService?: string): string[] => {
  if (category === 'Traprenovatie') {
    // Handle Traprenovatie logic
    if (selectedService && trapRenovatieConfig[selectedService]) {
      const applicableSteps = trapRenovatieConfig[selectedService]?.applicableSteps || [];
      return ['StepOne', ...applicableSteps, 'ContactInfoStep', 'FinalStep'];
    }

    // Default fallback for Traprenovatie
    return ['StepOne', 'trapRenovatieStepTwo', 'trapRenovatieStepThree', 'ContactInfoStep', 'FinalStep'];
  }

  // Default logic for other categories
  return categoryConfig[category]?.steps || [];
};
