'use client';

import React, { useState } from 'react';

import CommentStep from './CommentStep';
import ContactInfoStep from './ContactInfoStep';
import FinalStep from './FinalStep';
import StepFive from './StepFive';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThreePart1 from './StepThreePart1';
import StepThreePart2 from './StepThreePart2';
import StepTwo from './StepTwo';
import UploadStep from './UploadStep';

const MultiStepForm = () => {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Centralized state for all form data
  const [formData, setFormData] = useState({});

  // History stack for navigation
  const [history, setHistory] = useState<number[]>([]);

  // Function to update the centralized state with new data from each step
  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  // Function to handle final form submission
  const handleFinalSubmit = () => {
    console.log('Final Form Data:', formData); // Log the entire form data object
  };

  // Function to proceed to the next step
  const goToNextStep = (nextStep?: number) => {
    if (nextStep) {
      setHistory((prev) => [...prev, currentStep]); // Save current step to history
      setCurrentStep(nextStep); // Navigate to specified step
    } else {
      setHistory((prev) => [...prev, currentStep]);
      setCurrentStep((prev) => Math.min(prev + 1, 10)); // Navigate to next step
    }
  };

  // Function to go back to the previous step
  const goToPreviousStep = () => {
    if (history.length > 0) {
      const previousStep = history[history.length - 1]; // Get the last step in the history
      setHistory((prev) => prev.slice(0, -1)); // Remove the last step from history
      setCurrentStep(previousStep); // Navigate to the previous step
    }
  };

  const onUploadClick = (fieldName: string) => {
    setHistory((prev) => [...prev, currentStep]); // Save current step to history
    setFormData((prev) => ({
      ...prev,
      uploadField: fieldName, // Save which field the upload corresponds to
    }));
    setCurrentStep(7); // Navigate to the UploadStep
  };

  // Function to render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={goToNextStep} formData={formData} updateFormData={updateFormData} />;
      case 2:
        return (
          <StepTwo
            onNext={goToNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={goToPreviousStep}
          />
        );
      case 3:
        return (
          <StepThreePart1
            onNext={() => goToNextStep(4)} // Navigate to StepThreePart2
            onUploadClick={onUploadClick} // Pass the handler here
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={goToPreviousStep}
          />
        );
      case 4: // New step ID for StepThreePart2
        return (
          <StepThreePart2
            onNext={() => goToNextStep(5)}
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={goToPreviousStep}
          />
        );
      case 5:
        return (
          <StepFour
            onNext={goToNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={goToPreviousStep}
          />
        );
      case 6:
        return (
          <StepFive
            onNext={() => goToNextStep(9)} // Navigate directly to ContactInfoStep
            onUploadClick={() => goToNextStep(7)} // Navigate to UploadStep
            onCommentClick={() => goToNextStep(8)} // Navigate to CommentStep
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={goToPreviousStep}
          />
        );
      case 7:
        return (
          <UploadStep
            onPrevious={goToPreviousStep}
            onUpload={(data) => {
              updateFormData({ uploadData: data });
              goToPreviousStep(); // Return to the previous step after upload
            }}
          />
        );
      case 8:
        return (
          <CommentStep
            onPrevious={goToPreviousStep}
            onComment={(data) => {
              updateFormData({ commentData: data });
              goToPreviousStep(); // Return to the previous step after comment
            }}
          />
        );
      case 9:
        return (
          <ContactInfoStep
            onNext={goToNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={handleFinalSubmit}
            onPrevious={goToPreviousStep}
          />
        );
      case 10:
        return <FinalStep />;
      default:
        return <StepOne onNext={goToNextStep} formData={formData} updateFormData={updateFormData} />;
    }
  };

  return <div className="multi-step-form">{renderStep()}</div>;
};

export default MultiStepForm;
