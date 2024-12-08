'use client';

import React, { Suspense, useEffect, useState } from 'react';

import categoryConfig from '@/lib/categoryConfig';

interface MultiStepFormProps {
  category: string; // Initial category
}

const stepComponents: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  StepOne: React.lazy(() => import('./steps/StepOne')),
  UploadStep: React.lazy(() => import('./steps/UploadStep')),
  CommentStep: React.lazy(() => import('./steps/CommentStep')),
  ContactInfoStep: React.lazy(() => import('./steps/ContactInfoStep')),
  FinalStep: React.lazy(() => import('./steps/FinalStep')),
  parketRenovatieStepTwo: React.lazy(() => import('../parketRenovatie/steps/StepTwo')),
  parketRenovatieStepThreePart1: React.lazy(() => import('../parketRenovatie/steps/StepThreePart1')),
  parketRenovatieStepThreePart2: React.lazy(() => import('../parketRenovatie/steps/StepThreePart2')),
  parketRenovatieStepFour: React.lazy(() => import('../parketRenovatie/steps/StepFour')),
  StepFive: React.lazy(() => import('./steps/StepFive')),
  stofferenStepTwo: React.lazy(() => import('../stofferen/steps/StepTwo')),
  stofferenStepThree: React.lazy(() => import('../stofferen/steps/StepThree')),
  stofferenStepFour: React.lazy(() => import('../stofferen/steps/StepFour')),
  overigStepTwo: React.lazy(() => import('../over/steps/steptwo')),
  overigStepThree: React.lazy(() => import('../over/steps/stepthree')),
  vloerenLeggenStepTwo: React.lazy(() => import('../vloerenLeggen/steps/StepTwo')),
  vloerenLeggenStepThree: React.lazy(() => import('../vloerenLeggen/steps/Stepthree')),
  vloerenLeggenStepFour: React.lazy(() => import('../vloerenLeggen/steps/StepFour')),
};

const MultiStepForm: React.FC<MultiStepFormProps> = ({ category }) => {
  const [currentCategory, setCurrentCategory] = useState<string>(category);
  const [steps, setSteps] = useState<string[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [history, setHistory] = useState<number[]>([]);
  const [optionalStep, setOptionalStep] = useState<string | null>(null);

  useEffect(() => {
    const categorySteps = categoryConfig[currentCategory]?.steps || [];
    setSteps(categorySteps);
    setCurrentStepIndex(0);
    setOptionalStep(null); // Reset optional step on category change
  }, [currentCategory]);

  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const goToNextStep = () => {
    setHistory((prev) => [...prev, currentStepIndex]);
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
    setOptionalStep(null); // Clear optional step navigation
  };

  const goToPreviousStep = () => {
    if (optionalStep) {
      setOptionalStep(null); // Exit optional step
    } else if (history.length > 0) {
      const previousStepIndex = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentStepIndex(previousStepIndex);
    }
  };
  const handleFinalSubmit = () => {
    console.log('Final Form Data:', formData); // Log the entire form data object
  };

  const goToOptionalStep = (stepName: string) => {
    setOptionalStep(stepName); // Navigate to optional step
  };

  const renderStep = () => {
    const stepName = optionalStep || steps[currentStepIndex];
    const StepComponent = stepComponents[stepName];

    if (!StepComponent) {
      return (
        <div className="w-[386px] h-[430px] flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6">
          <div className="animate-bounce rounded-full h-16 w-16 bg-green-500 mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-lg">!</span>
          </div>
          <p className="text-green-700 font-semibold text-lg text-center mb-4">
            Deze stap is onder onderhoud door Yahya Elmokhtari.
          </p>
          <button
            onClick={() => setCurrentCategory('parketRenovatie')}
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
          >
            Ga naar Parket Renovatie
          </button>
        </div>
      );
    }

    return (
      <Suspense
        fallback={
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
          onUploadClick={() => goToOptionalStep('UploadStep')} // Handle optional navigation
          onCommentClick={() => goToOptionalStep('CommentStep')} // Handle optional navigation
          onSkip={() => goToOptionalStep('StepFive')}
          formData={formData}
          updateFormData={updateFormData}
          onCategoryChange={(newCategory: string) => setCurrentCategory(newCategory)} // Pass the callback here
          onSubmit={stepName === 'ContactInfoStep' ? handleFinalSubmit : undefined}
        />
      </Suspense>
    );
  };

  return <div className="multi-step-form">{renderStep()}</div>;
};

export default MultiStepForm;
