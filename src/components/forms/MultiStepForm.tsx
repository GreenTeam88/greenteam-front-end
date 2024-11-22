'use client';

import React, { useState } from 'react';

import CommentStep from './CommentStep';
import ContactInfoStep from './ContactInfoStep';
import FinalStep from './FinalStep';
import StepFive from './StepFive';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import UploadStep from './UploadStep';

const MultiStepForm = () => {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Centralized state for all form data
  const [formData, setFormData] = useState({});

  // Function to update the centralized state with new data from each step
  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  // Function to handle final form submission
  const handleFinalSubmit = () => {
    console.log('Final Form Data:', formData); // Log the entire form data object
  };

  // Function to proceed to the next step
  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 9)); // Ensure it doesn't go beyond step 9
  };

  // Function to navigate directly to the contact info step
  const goToContactInfoStep = () => {
    setCurrentStep(8);
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
            onPrevious={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <StepThree
            onNext={goToNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={() => setCurrentStep(2)}
          />
        );
      case 4:
        return (
          <StepFour
            onNext={goToNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={() => setCurrentStep(3)}
          />
        );
      case 5:
        return (
          <StepFive
            onNext={goToContactInfoStep} // Navigate directly to ContactInfoStep
            onUploadClick={() => setCurrentStep(6)} // Optional: Navigate to UploadStep
            onCommentClick={() => setCurrentStep(7)} // Optional: Navigate to CommentStep
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={() => setCurrentStep(4)}
          />
        );
      case 6:
        return (
          <UploadStep
            onPrevious={() => setCurrentStep(5)}
            onUpload={(data) => {
              updateFormData({ uploadData: data });
              setCurrentStep(5); // Return to Step 5 after upload
            }}
          />
        );
      case 7:
        return (
          <CommentStep
            onPrevious={() => setCurrentStep(5)}
            onComment={(data) => {
              updateFormData({ commentData: data });
              setCurrentStep(5); // Return to Step 5 after comment
            }}
          />
        );
      case 8:
        return (
          <ContactInfoStep
            onNext={goToNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={handleFinalSubmit}
            onPrevious={() => setCurrentStep(5)} // Handle final form submission
          />
        );
      case 9:
        return <FinalStep />;
      default:
        return <StepOne onNext={goToNextStep} formData={formData} updateFormData={updateFormData} />;
    }
  };

  return <div className="multi-step-form">{renderStep()}</div>;
};

export default MultiStepForm;
