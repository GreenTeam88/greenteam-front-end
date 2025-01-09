'use client';

import { usePathname } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

import { BodyText } from '@/components/theme/typography';

interface MultiStepFormProps {
  category: string;
}
interface FormData {
  selectedService?: string;
  selectedCategory?: string;
  // The final steps array built in StepOne
  customSteps?: string[];
  [key: string]: any;
}

const stepComponents: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  StepOne: React.lazy(() => import('./steps/StepOne')),
  UploadStep: React.lazy(() => import('./steps/UploadStep')),
  CommentStep: React.lazy(() => import('./steps/CommentStep')),
  ContactInfoStep: React.lazy(() => import('./steps/ContactInfoStep')),
  FinalStep: React.lazy(() => import('./steps/FinalStep')),

  // Parketrenovatie
  parketRenovatieStepTwo: React.lazy(() => import('../parketRenovatie/steps/StepTwo')),
  parketRenovatieStepThreePart1: React.lazy(() => import('../parketRenovatie/steps/StepThreePart1')),
  parketRenovatieStepThreePart2: React.lazy(() => import('../parketRenovatie/steps/StepThreePart2')),
  parketRenovatieStepFour: React.lazy(() => import('../parketRenovatie/steps/StepFour')),

  StepFive: React.lazy(() => import('./steps/StepFive')),

  // Stofferen
  stofferenStepTwo: React.lazy(() => import('../stofferen/steps/StepTwo')),
  stofferenStepThree: React.lazy(() => import('../stofferen/steps/StepThree')),

  // Overig
  overigStepTwo: React.lazy(() => import('../over/steps/steptwo')),
  overigStepThree: React.lazy(() => import('../over/steps/stepthree')),

  // Vloeren Leggen
  vloerenLeggenStepTwo: React.lazy(() => import('../vloerenLeggen/steps/StepTwo')),
  vloerenLeggenStepThree: React.lazy(() => import('../vloerenLeggen/steps/Stepthree')),
  vloerenLeggenStepFour: React.lazy(() => import('../vloerenLeggen/steps/StepFour')),

  // Traprenovatie
  trapRenovatieStepTwo: React.lazy(() => import('../Traprenovatie/steps/StepTwo')),
  trapRenovatieStepThree: React.lazy(() => import('../Traprenovatie/steps/StepThree')),
  trapRenovatieStepFour: React.lazy(() => import('../Traprenovatie/steps/StepFour')),
  trapRenovatieStepLighting: React.lazy(() => import('../Traprenovatie/steps/StepLighting')),
  trapRenovatieStepOverlopen: React.lazy(() => import('../Traprenovatie/steps/StepOverlopen')),
  trapRenovatieStepFourHout: React.lazy(() => import('../Traprenovatie/steps/StepFourHout')),

  //TraprenovatieTapijt
  trapRenovatieStepFourTapijt: React.lazy(() => import('../Traprenovatie/steps/tapijt/StepFourTapijt')),
  trapRenovatieStepFiveTapijt: React.lazy(() => import('../Traprenovatie/steps/tapijt/StepFiveTapijt')),
  trapRenovatieSteapDemontreTapijit: React.lazy(() => import('../Traprenovatie/steps/tapijt/StepDemontreTapijt')),

  // Linoleum
  trapRenovatieStepFourLinoleum: React.lazy(() => import('../Traprenovatie/steps/Linoleum/StepFour')),
  trapRenovatieStepFiveLinoleum: React.lazy(() => import('../Traprenovatie/steps/Linoleum/StepFive')),
  // behendelen
  trapRenovatieStepFourBehendelen: React.lazy(() => import('../Traprenovatie/steps/behandelen/StepFour')),
  trapRenovatieStepFiveBehendelen: React.lazy(() => import('../Traprenovatie/steps/behandelen/StepFive')),
  // schilderen
  trapRenovatieStepFourSchilderen: React.lazy(() => import('../Traprenovatie/steps/schilderen/StepFour')),
  trapRenovatieStepFiveSchilderen: React.lazy(() => import('../Traprenovatie/steps/schilderen/StepFive')),
  //BetonCire
  trapRenovatieStepFourBetonCire: React.lazy(() => import('../Traprenovatie/steps/BetonCire/StepFour')),
  trapRenovatieStepFiveBetonCire: React.lazy(() => import('../Traprenovatie/steps/BetonCire/StepFive')),
};

const MultiStepForm: React.FC<MultiStepFormProps> = ({ category }) => {
  const pathname = usePathname();
  const skipServices = ['Ben ik nog niet over uit', 'Ik wil graag advies'];
  const [currentCategory, setCurrentCategory] = useState<string>(category);
  const [formData, setFormData] = useState<FormData>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [optionalStep, setOptionalStep] = useState<string | null>(null);
  const [lastVisitedStep, setLastVisitedStep] = useState<number>(currentStepIndex);
  const steps = formData.customSteps && formData.customSteps.length > 0 ? formData.customSteps : ['StepOne'];
  // If StepOne changes category
  useEffect(() => {
    if (formData.selectedCategory && formData.selectedCategory !== currentCategory) {
      setCurrentCategory(formData.selectedCategory);
    }
  }, [formData.selectedCategory, currentCategory]);

  // The steps come from StepOne => formData.customSteps

  // Utility
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const goToNextStep = () => {
    if (optionalStep && optionalStep !== 'StepFive') {
      setOptionalStep(null);
    } else {
      setHistory((prev) => [...prev, currentStepIndex]);
      setCurrentStepIndex((prev) => {
        const nextIndex = Math.min(prev + 1, steps.length - 1);
        // console.log('Updated currentStepIndex:', nextIndex); // Log the updated index
        return nextIndex;
      });
      setOptionalStep(null);
    }
  };

  const goToSkipStep = () => {
    const stepFiveIndex = steps.findIndex((step) => step === 'StepFive');
    if (stepFiveIndex !== -1) {
      setCurrentStepIndex(stepFiveIndex); // Set to StepFive index
      setHistory((prev) => [...prev, stepFiveIndex]); // Save StepFive in history
      // console.log('Navigating to StepFive, index:', stepFiveIndex);
    } else {
      console.error('StepFive not found in steps array');
    }
  };
  console.log('pathname', pathname);
  const goToPreviousStep = () => {
    if (optionalStep) {
      // Exit optional step and return to the last visited step
      setOptionalStep(null);
      setCurrentStepIndex(lastVisitedStep);
      // console.log('Returning to last visited step:', lastVisitedStep);
    } else if (steps[currentStepIndex] === 'StepFive') {
      // If on StepFive, check for skip mode
      if (formData.selectedService && skipServices.includes(formData.selectedService)) {
        // In skip mode, go back to StepOne
        setCurrentStepIndex(0); // StepOne is always index 0
        // console.log('Returning to StepOne (skip mode)');
      } else {
        // In regular mode, go to the previous step in history
        if (history.length > 0) {
          const prevIndex = history[history.length - 1];
          setHistory((old) => old.slice(0, -1));
          setCurrentStepIndex(prevIndex);
          // console.log('Navigating back to:', steps[prevIndex], 'at index:', prevIndex);
        } else {
          // console.log('No history available, staying on StepFive');
        }
      }
    } else if (history.length > 0) {
      // General case: navigate to the previous step
      const prevIndex = history[history.length - 1];
      setHistory((old) => old.slice(0, -1));
      setCurrentStepIndex(prevIndex);
      // console.log('Navigating back to:', steps[prevIndex], 'at index:', prevIndex);
    } else {
      // Default fallback: go to StepOne
      setCurrentStepIndex(0);
      // console.log('Navigating back to StepOne (default)');
    }
  };

  const goToOptionalStep = (stepName: string) => {
    // Save the current step index before navigating to the optional step
    setLastVisitedStep(currentStepIndex);

    // Navigate to the optional step
    setOptionalStep(stepName);
  };

  const handleFinalSubmit = async (finalData: any) => {
    // console.log('Final Form Data:', finalData);

    if (!finalData.isFinalSubmission) {
      console.error('Submission blocked: isFinalSubmission flag is missing or false.');
      return;
    }

    // Fields required for the special services
    const specialServiceFields = [
      'selectedCategory',
      'selectedService',
      'desiredTimeframe',
      'nextStep',
      'lastName',
      'Email',
      'PhoneNumber',
      'Postcode',
      'city',
      'streetAndHouseNumber',
      'comment',
      'files',
    ];

    // Fields required for parketRenovatie
    const parketRenovatieFields = [
      'selectedCategory',
      'selectedService',
      'selectedServicePrice',
      'squareMeters',
      'ParketrenovatieselectedFloors',
      'damageRepairsNeeded',
      'numberOfRepairs',
      'additionalSurfaces',
      'numberOfSteps',
      'numberOfBumps',
      'tableArea',
      'windowsSillsMeters',
      'planksMeters',
      'newBaseboardsNeeded',
      'numberOfMetersBaseboard',
      'totalCost',
      'comment',
      'desiredTimeframe',
      'nextStep',
      'Email',
      'PhoneNumber',
      'Postcode',
      'city',
      'lastName',
      'streetAndHouseNumber',
      'files',
    ];

    const VloerenleggenFields = [
      'selectedCategory',
      'selectedService',
      'selectedFloors',
      'existingFloorType',
      'subService',
      'SquareMeteer',
      'newBaseboardsNeeded',
      'BaseboardsMeters',
      'totalCost',
      'comment',
      'desiredTimeframe',
      'nextStep',
      'Email',
      'PhoneNumber',
      'Postcode',
      'city',
      'lastName',
      'streetAndHouseNumber',
      'files',
    ];

    const OverigFields = [
      'selectedCategory',
      'selectedService',
      'selectedFloors',
      'squareMeters',
      'damageRepairRequired',
      'additionalSurfaces',
      'desiredTimeframe',
      'nextStep',
      'lastName',
      'Email',
      'PhoneNumber',
      'Postcode',
      'city',
      'streetAndHouseNumber',
      'comment',
      'totalCost',
      'files',
    ];

    const StofferenFields = [
      'selectedCategory',
      'selectedService',
      'selectedFloors',
      'stoffSquareMeters',
      'CurrentSurfaces',
      'additionalSurfaceType',
      'desiredTimeframe',
      'nextStep',
      'lastName',
      'Email',
      'PhoneNumber',
      'Postcode',
      'city',
      'streetAndHouseNumber',
      'comment',
      'totalCost',
      'files',
    ];

    const trapRenovatieFieldMapping: { [key: string]: string[] } = {
      'Bekleden met PVC': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'OpenStairsService',
        'CloseStairService',
        'Stootborden',
        'LightingType',
        'currentBekleding',
        'overloopSelection',
        'entreeSelection',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',

        'totalCost',
        'comment',
        'files',
      ],
      'Bekleden met laminaat': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'OpenStairsService',
        'CloseStairService',
        'Stootborden',
        'LightingType',
        'currentBekleding',
        'overloopSelection',
        'entreeSelection',
        'entreeSelection',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',
        'totalCost',
        'comment',
        'files',
      ],
      'Bekleden met hout': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'OpenStairsServiceHout',
        'OverzettredeHout',
        'AntiSlipHout',
        'StootbordenHout',
        'LightingType',
        'currentBekleding',
        'overloopSelection',
        'entreeSelection',
        'entreeSelection',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',
        'totalCost',
        'comment',
        'files',
      ],
      'Bekleden met tapijt': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'RondomTapijt',
        'stootbordenTapijt',
        'OverzettredeTapijt',
        'Ondertapijt',
        'ZijkantenTapijt',
        'overloopSelection',
        'entreeSelection',
        'currentUpholstery',
        'DemontageTapijt',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',
        'totalCost',
        'comment',
        'files',
      ],
      'Bekleden met linoleum': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'RondomLinoleumService',
        'MetprofielLinoleumService',
        'stootbordenService',
        'zijkantenLinoleumService',
        'DemontageLinoleumService',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',
        'totalCost',
        'comment',
        'files',
      ],
      'Schuren en behandelen': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'RondomBehandelenService',
        'OverzettredeBehandelenService',
        'stootbordenBehandelenService',
        'zijkantenBehandelenService',
        'DemontageBehandelenService',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',
        'totalCost',
        'comment',
        'files',
      ],
      'Schuren en schilderen': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'RondomSchilderenService',
        'OverzettredeSchilderenService',
        'stootbordenSchilderenService',
        'zijkantenSchilderenService',
        'DemontageSchilderenService',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',
        'totalCost',
        'comment',
        'files',
      ],
      'Beton Ciré': [
        'selectedCategory',
        'selectedService',
        'selectedOpenStairs',
        'selectedOpenStairSteps',
        'selectedCloseStairs',
        'selectedCloseStairSteps',
        'RondomBetonCireService',
        'OverzettredeBetonCireService',
        'stootbordenBetonCireService',
        'zijkantenBetonCireService',
        'DemontageBetonCireService',
        'desiredTimeframe',
        'nextStep',
        'lastName',
        'Email',
        'PhoneNumber',
        'Postcode',
        'city',
        'streetAndHouseNumber',
        'totalCost',
        'comment',
        'files',
      ],
    };

    // Define category-specific field mappings
    const categoryFieldMapping: { [key: string]: { [key: string]: string[] } | string[] } = {
      Parketrenovatie: parketRenovatieFields,
      Overig: OverigFields,
      'Vloeren leggen': VloerenleggenFields,
      Stofferen: StofferenFields,
      Traprenovatie: trapRenovatieFieldMapping,
    };
    const pathname = usePathname();
    const { selectedCategory, selectedService } = finalData;
    let requiredFields: string[] = [];

    // Handle special services
    if (['Ben ik nog niet over uit', 'Ik wil graag advies'].includes(selectedService)) {
      requiredFields = specialServiceFields;
    } else if (selectedCategory === 'Traprenovatie' && typeof categoryFieldMapping[selectedCategory] === 'object') {
      // Ensure trapRenovatie mapping is treated as an object
      const trapRenovatieMapping = categoryFieldMapping[selectedCategory] as {
        [key: string]: string[];
      };
      requiredFields = trapRenovatieMapping[selectedService] || trapRenovatieMapping.default || [];
    } else {
      requiredFields = categoryFieldMapping[selectedCategory] as string[];
    }

    // Create a new FormData object with only the required fields
    const customFormData = new FormData();
    requiredFields.forEach((field) => {
      const value = finalData[field];

      // Skip empty values
      if (value === undefined || value === null || value === '') {
        console.warn(`Skipping empty field: ${field}`);
        return;
      }

      // Handle files separately
      if (field === 'files' && Array.isArray(value) && value.length > 0) {
        value.forEach((file: File) => {
          customFormData.append('files', file);
        });
      } else if (field !== 'files') {
        customFormData.append(field, value as string);
      }
    });

    // Log customFormData for verification
    // console.log('Custom FormData before sending:');
    // customFormData.forEach((value, key) => {
    //   console.log(`${key}:`, value);
    // });

    // Trigger GTM event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submit',
      formData: customFormData, // Send the final form data to GTM
    });
    console.log('GTM event triggered with form data:', customFormData);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: 'POST',
        body: customFormData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        alert('Form submitted successfully!');
        // // Redirect to /bedankt
        // window.location.href = '/bedankt';
        // Redirect to bedankt with current path
        window.location.href = `/bedankt?page=${pathname}`;
      } else {
        console.error('Failed to submit form:', response.statusText);
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('A network error occurred. Please check your connection and try again.');
    }
  };

  const stepName = optionalStep || steps[currentStepIndex];
  const StepComponent = stepComponents[stepName];

  // if we are on the thank you page , we want to display the thank you UI
  if (pathname === '/bedankt')
    return (
      <form className="w-[386px] bg-white flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          Snel uw prijs berekenen!
        </div>
        <div className="flex flex-col gap-2 min-h-[379px] justify-center items-center">
          <h3 className="text-[22px] text-primaryDefault items-center font-semibold">Bedankt!</h3>
          <div className="flex flex-col gap-4 max-w-[248px] items-center">
            <BodyText className="text-center">
              We hebben uw aanvraag ontvangen en nemen binnen 6 uur tijdens onze reguliere werktijden contact met u op!
            </BodyText>
            <BodyText className="text-center">Met vriendelijke groet, GreenTeam</BodyText>
          </div>
        </div>
      </form>
    );
  if (!StepComponent) {
    // same fallback as old snippet
    return (
      <div className="w-[386px] h-[430px] flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="animate-bounce rounded-full h-16 w-16 bg-green-300 mb-4 flex items-center justify-center">
          <span className="text-white font-bold text-lg">!</span>
        </div>
        <p className="text-green-700 font-semibold text-lg text-center mb-4">Deze stap is onder onderhoud.</p>
        <button
          onClick={() => setCurrentCategory('Parketrenovatie')}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
        >
          Ga naar Parket Renovatie
        </button>
      </div>
    );
  }

  return (
    <div className="multi-step-form">
      <Suspense
        fallback={
          // old loading fallback
          <div className="w-[386px] h-[430px] flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6">
            <div className="animate-pulse w-full mb-4 h-10 bg-gray-300 rounded"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primaryDefault border-opacity-50 mb-4"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-10 bg-gray-300 rounded"></div>
          </div>
        }
      >
        <StepComponent
          onNext={goToNextStep}
          onPrevious={goToPreviousStep}
          onUploadClick={() => goToOptionalStep('UploadStep')}
          onCommentClick={() => goToOptionalStep('CommentStep')}
          onSkip={goToSkipStep}
          formData={formData}
          updateFormData={updateFormData}
          onSubmit={stepName === 'ContactInfoStep' ? handleFinalSubmit : undefined}
          onComment={(data: { details: string }) => {
            updateFormData({ comment: data.details }); // Save only the raw comment text
            goToPreviousStep();
          }}
        />
      </Suspense>
    </div>
  );
};

export default MultiStepForm;
