'use client';

import { usePathname } from 'next/navigation';
import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';

import DynamicStepRenderer from '@/components/calculators/dynamic/DynamicStepRenderer';
import { getCalculatorBySlug } from '@/lib/calculatorApi';
import {
  selectCurrentStep,
  selectIsFirstStep,
  selectIsLastStep,
  selectTotalSteps,
  useDynamicCalculator,
} from '@/store/dynamic-calculator';

// Lazy load the hardcoded final steps
const StepFive = lazy(() => import('@/components/calculators/common/steps/StepFive'));
const ContactInfoStep = lazy(() => import('@/components/calculators/common/steps/ContactInfoStep'));
const UploadStep = lazy(() => import('@/components/calculators/common/steps/UploadStep'));
const CommentStep = lazy(() => import('@/components/calculators/common/steps/CommentStep'));
const FinalStep = lazy(() => import('@/components/calculators/common/steps/FinalStep'));

// Loading component
const StepLoader = () => (
  <div className="w-[386px] h-[400px] flex items-center justify-center bg-white rounded-lg shadow-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700"></div>
  </div>
);

// Error component
const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="w-[386px] p-6 bg-white rounded-lg shadow-lg">
    <div className="text-red-500 text-center">
      <p className="font-semibold">Er is een fout opgetreden</p>
      <p className="text-sm mt-2">{message}</p>
    </div>
  </div>
);

// Phases of the calculator flow
type Phase = 'dynamic' | 'planning' | 'contact' | 'upload' | 'comment' | 'final';

interface DynamicMultiStepFormProps {
  calculatorSlug: string;
}

export default function DynamicMultiStepForm({ calculatorSlug }: DynamicMultiStepFormProps) {
  const {
    calculator,
    isLoading,
    error,
    currentStepIndex,
    answers,
    priceBreakdown,
    setCalculator,
    setLoading,
    setError,
    goToNextStep,
    goToPreviousStep,
    reset,
  } = useDynamicCalculator();

  const pathname = usePathname();

  // Current phase in the flow
  const [currentPhase, setCurrentPhase] = useState<Phase>('dynamic');

  // Form data for hardcoded steps
  const [formData, setFormData] = useState<any>({
    stepCosts: {},
    totalCost: 0,
    files: [],
  });

  // Track uploaded files
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Get derived state
  const currentStep = selectCurrentStep(useDynamicCalculator.getState());
  const totalSteps = selectTotalSteps(useDynamicCalculator.getState());
  const isFirstStep = selectIsFirstStep(useDynamicCalculator.getState());
  const isLastDynamicStep = selectIsLastStep(useDynamicCalculator.getState());

  // Fetch calculator on mount
  useEffect(() => {
    const fetchCalculator = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCalculatorBySlug(calculatorSlug);
        if (data) {
          setCalculator(data);
        } else {
          setError('Calculator niet gevonden');
        }
      } catch (err) {
        setError('Kon calculator niet laden');
      } finally {
        setLoading(false);
      }
    };

    fetchCalculator();

    // Cleanup on unmount
    return () => {
      reset();
    };
  }, [calculatorSlug]);

  // Update formData when price changes
  useEffect(() => {
    if (priceBreakdown) {
      setFormData((prev: any) => ({
        ...prev,
        totalCost: priceBreakdown.total,
        isOnRequest: priceBreakdown.total === 0,
      }));
    }
  }, [priceBreakdown]);

  // Handle navigation for dynamic steps
  const handleDynamicNext = useCallback(() => {
    if (isLastDynamicStep) {
      // Move to planning phase
      setCurrentPhase('planning');
    } else {
      goToNextStep();
    }
  }, [isLastDynamicStep, goToNextStep]);

  const handleDynamicPrevious = useCallback(() => {
    goToPreviousStep();
  }, [goToPreviousStep]);

  // Handle navigation for hardcoded steps
  const handlePlanningNext = useCallback(() => {
    setCurrentPhase('contact');
  }, []);

  const handlePlanningPrevious = useCallback(() => {
    setCurrentPhase('dynamic');
  }, []);

  const handleContactNext = useCallback(() => {
    setCurrentPhase('final');
  }, []);

  const handleContactPrevious = useCallback(() => {
    setCurrentPhase('planning');
  }, []);

  const handleUploadClick = useCallback(() => {
    setCurrentPhase('upload');
  }, []);

  const handleCommentClick = useCallback(() => {
    setCurrentPhase('comment');
  }, []);

  const handleBackFromUpload = useCallback(() => {
    setCurrentPhase('planning');
  }, []);

  const handleBackFromComment = useCallback(() => {
    setCurrentPhase('planning');
  }, []);

  const handleComment = useCallback((data: FieldValues) => {
    setFormData((prev: any) => ({
      ...prev,
      details: data.details,
    }));
  }, []);

  const updateFormData = useCallback((data: any) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
  }, []);

  const handleFilesChange = useCallback((files: File[]) => {
    setUploadedFiles(files);
    setFormData((prev: any) => ({
      ...prev,
      files,
    }));
  }, []);

  // Final submission handler
  const handleFinalSubmit = useCallback(
    async (updatedFormData: any) => {
      try {
        // Combine dynamic answers with hardcoded form data
        const submissionData = {
          calculatorId: calculator?.id,
          calculatorName: calculator?.name,
          answers,
          priceBreakdown,
          ...updatedFormData,
        };

        // Create FormData for file upload
        const formDataObj = new FormData();
        Object.entries(submissionData).forEach(([key, value]) => {
          if (key !== 'files' && value !== undefined && value !== null) {
            if (typeof value === 'object') {
              formDataObj.append(key, JSON.stringify(value));
            } else {
              formDataObj.append(key, String(value));
            }
          }
        });

        // Append files
        uploadedFiles.forEach((file) => {
          formDataObj.append('files', file);
        });

        // Trigger GTM event
        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: 'form_submit',
            formData: formDataObj,
          });
        }

        // Send to email API
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/emails/calculator`, {
          method: 'POST',
          body: formDataObj,
        });

        if (response.ok) {
          alert('Form submitted successfully!');
          window.location.href = `/bedankt?page=${pathname}`;
        } else {
          console.error('Failed to submit form:', response.statusText);
          alert('Error submitting form. Please try again.');
        }
      } catch (err) {
        console.error('Submission error:', err);
        alert('A network error occurred. Please check your connection and try again.');
      }
    },
    [calculator, answers, priceBreakdown, uploadedFiles, pathname]
  );

  // Render loading state
  if (isLoading) {
    return <StepLoader />;
  }

  // Render error state
  if (error) {
    return <ErrorDisplay message={error} />;
  }

  // No calculator found
  if (!calculator) {
    return <ErrorDisplay message="Calculator niet gevonden" />;
  }

  // Render based on current phase
  return (
    <Suspense fallback={<StepLoader />}>
      {currentPhase === 'dynamic' && currentStep && (
        <DynamicStepRenderer
          step={currentStep}
          stepIndex={currentStepIndex}
          totalSteps={totalSteps + 2} // +2 for planning and contact steps
          onNext={handleDynamicNext}
          onPrevious={handleDynamicPrevious}
          isFirstStep={isFirstStep}
          isLastStep={false} // Never the last step in the full flow
          onFilesChange={handleFilesChange}
        />
      )}

      {currentPhase === 'planning' && (
        <StepFive
          onPrevious={handlePlanningPrevious}
          onNext={handlePlanningNext}
          onUploadClick={handleUploadClick}
          onCommentClick={handleCommentClick}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}

      {currentPhase === 'contact' && (
        <ContactInfoStep
          onPrevious={handleContactPrevious}
          onNext={handleContactNext}
          formData={formData}
          updateFormData={updateFormData}
          onSubmit={handleFinalSubmit}
        />
      )}

      {currentPhase === 'upload' && (
        <UploadStep onPrevious={handleBackFromUpload} formData={formData} updateFormData={updateFormData} />
      )}

      {currentPhase === 'comment' && <CommentStep onPrevious={handleBackFromComment} onComment={handleComment} />}

      {currentPhase === 'final' && <FinalStep />}
    </Suspense>
  );
}
