'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname } from 'next/navigation';
import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import DynamicStepRenderer from '@/components/calculators/dynamic/DynamicStepRenderer';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { getAllCalculators, getCalculatorBySlug, Calculator } from '@/lib/calculatorApi';
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

// Zod schema for category selection
const categorySchema = z.object({
  selectedCategory: z.string().min(1, 'Selecteer een categorie'),
});

// Category Selection Step Component - Matches old StepOne design
interface CategorySelectionStepProps {
  categories: Array<{ name: string; slug: string; description: string | null }>;
  onSelect: (slug: string) => void;
  isLoading: boolean;
}

const CategorySelectionStep: React.FC<CategorySelectionStepProps> = ({ categories, onSelect, isLoading }) => {
  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      selectedCategory: '',
    },
  });

  const selectedCategory = form.watch('selectedCategory');
  const isButtonDisabled = !selectedCategory;

  const handleNext = () => {
    if (selectedCategory) {
      onSelect(selectedCategory);
    }
  };

  if (isLoading) {
    return <StepLoader />;
  }

  // Build options for dropdown
  const categoryOptions = categories.map((cat) => ({
    value: cat.slug,
    label: cat.name,
  }));

  return (
    <FormProvider {...form}>
      <form className="w-[386px] flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <HeadlineSemibold>Snel uw prijs berekenen!</HeadlineSemibold>
        </div>

        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
          {/* Title row */}
          <div className="flex flex-row items-center justify-between">
            <span className="text-gray-400 font-sans text-sm">Waar kunnen we u mee helpen?</span>
            {selectedCategory && (
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

          {categories.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              <p>Geen categorieën beschikbaar</p>
            </div>
          )}

          {/* Price section */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€ 0.00</span>
            </div>

            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
              type="button"
              disabled={isButtonDisabled}
              onClick={handleNext}
            >
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

// Phases of the calculator flow
type Phase = 'category' | 'dynamic' | 'planning' | 'contact' | 'upload' | 'comment' | 'final';

interface DynamicMultiStepFormProps {
  calculatorSlug?: string; // Optional - if not provided, shows category selection
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

  // Available calculators for category selection
  const [availableCalculators, setAvailableCalculators] = useState<
    Array<{ name: string; slug: string; description: string | null }>
  >([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(calculatorSlug || null);

  // Current phase in the flow - start with 'category' if no slug provided
  const [currentPhase, setCurrentPhase] = useState<Phase>(calculatorSlug ? 'dynamic' : 'category');

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

  // Fetch categories from API
  const fetchCategories = useCallback(async () => {
    setCategoriesLoading(true);
    try {
      const calculators = await getAllCalculators();
      setAvailableCalculators(
        calculators.map((c: Calculator) => ({
          name: c.name,
          slug: c.slug,
          description: c.description,
        }))
      );
    } catch (err) {
      console.error('Failed to fetch calculators:', err);
    } finally {
      setCategoriesLoading(false);
    }
  }, []);

  // Fall back to category selection when slug is not found or fails to load
  const fallbackToCategorySelection = useCallback(() => {
    setSelectedSlug(null);
    setCurrentPhase('category');
    setError(null);
    fetchCategories();
  }, [fetchCategories, setError]);

  // Fetch all calculators for category selection (only if no slug provided)
  useEffect(() => {
    if (!calculatorSlug) {
      fetchCategories();
    }
  }, [calculatorSlug, fetchCategories]);

  // Fetch specific calculator when slug is available
  useEffect(() => {
    const slugToFetch = calculatorSlug || selectedSlug;
    if (!slugToFetch) return;

    const fetchCalculator = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCalculatorBySlug(slugToFetch);
        if (data) {
          setCalculator(data);
        } else {
          // Calculator not found for this slug — fall back to category selection
          fallbackToCategorySelection();
        }
      } catch (err) {
        // Failed to load — fall back to category selection
        fallbackToCategorySelection();
      } finally {
        setLoading(false);
      }
    };

    fetchCalculator();

    // Cleanup on unmount
    return () => {
      reset();
    };
  }, [calculatorSlug, selectedSlug, reset, setCalculator, setError, setLoading, fallbackToCategorySelection]);

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

  // Handle category selection
  const handleCategorySelect = useCallback((slug: string) => {
    setSelectedSlug(slug);
    setCurrentPhase('dynamic');
  }, []);

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
    if (isFirstStep && !calculatorSlug) {
      // Go back to category selection if we started there
      setCurrentPhase('category');
      setSelectedSlug(null);
      reset();
    } else {
      goToPreviousStep();
    }
  }, [isFirstStep, calculatorSlug, goToPreviousStep, reset]);

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

  // Helper function to get readable answer for a question
  const getReadableAnswer = useCallback(
    (questionId: string, answer: string | number): string => {
      if (!calculator) return String(answer);

      // Find the question in all steps
      for (const step of calculator.steps) {
        const question = step.questions.find((q) => q.id === questionId);
        if (question) {
          // For SELECT/CHECKBOX, find the option label
          if (question.type === 'SELECT' || question.type === 'CHECKBOX') {
            // Handle JSON array for checkbox
            if (typeof answer === 'string' && answer.startsWith('[')) {
              try {
                const selectedValues = JSON.parse(answer);
                const labels = selectedValues
                  .map((val: string) => {
                    const option = question.options.find((o) => o.value === val);
                    return option?.label || val;
                  })
                  .join(', ');
                return labels;
              } catch {
                return String(answer);
              }
            }
            // Single select
            const option = question.options.find((o) => o.value === answer);
            return option?.label || String(answer);
          }
          // For NUMBER with unit
          if (question.type === 'NUMBER' && question.unit) {
            return `${answer} ${question.unit}`;
          }
          return String(answer);
        }
      }
      return String(answer);
    },
    [calculator]
  );

  // Build structured answers with question labels
  const buildStructuredAnswers = useCallback((): Array<{ question: string; answer: string; step: string }> => {
    if (!calculator) return [];

    const structuredAnswers: Array<{ question: string; answer: string; step: string }> = [];

    for (const step of calculator.steps) {
      const stepDescription = step.description || `Stap ${step.order + 1}`;

      for (const question of step.questions) {
        const answer = answers[question.id];
        if (answer !== undefined && answer !== null && answer !== '') {
          structuredAnswers.push({
            step: stepDescription,
            question: question.question,
            answer: getReadableAnswer(question.id, answer),
          });
        }
      }
    }

    return structuredAnswers;
  }, [calculator, answers, getReadableAnswer]);

  // Build HTML email template
  const buildEmailHtml = useCallback(
    (
      structuredAnswers: Array<{ question: string; answer: string; step: string }>,
      formData: any,
      priceDetails: any
    ): string => {
      // Group answers by step
      const groupedByStep = structuredAnswers.reduce(
        (acc: Record<string, Array<{ question: string; answer: string }>>, item) => {
          if (!acc[item.step]) {
            acc[item.step] = [];
          }
          acc[item.step].push({ question: item.question, answer: item.answer });
          return acc;
        },
        {}
      );

      // Build step sections HTML
      const stepSectionsHtml = Object.entries(groupedByStep)
        .map(
          ([stepName, questions], index) => `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px; ${index > 0 ? 'border-top: 1px solid #e0e0e0; padding-top: 15px;' : ''}">
            <tr>
              <td style="background: #2D5A27; color: #fff; padding: 10px 15px; border-radius: 6px 6px 0 0; font-weight: bold; font-size: 14px;">
                📌 ${stepName}
              </td>
            </tr>
            <tr>
              <td style="background: #fff; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 6px 6px; padding: 15px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  ${(questions as Array<{ question: string; answer: string }>)
                    .map(
                      (q) => `
                    <tr>
                      <td style="padding: 8px 0; color: #666; font-size: 13px; width: 45%; vertical-align: top;">${q.question}:</td>
                      <td style="padding: 8px 0; color: #333; font-weight: 600; font-size: 13px;">${q.answer}</td>
                    </tr>
                  `
                    )
                    .join('')}
                </table>
              </td>
            </tr>
          </table>
        `
        )
        .join('');

      // Build price breakdown HTML
      let priceRowsHtml = `
        <tr>
          <td style="padding: 8px 0; color: #666;">Basisprijs:</td>
          <td style="padding: 8px 0; text-align: right;">€${priceDetails.basePrice.toFixed(2)}</td>
        </tr>`;

      if (priceDetails.multipliers.length > 0) {
        priceDetails.multipliers.forEach((m: { label: string; factor: number }) => {
          priceRowsHtml += `
            <tr>
              <td style="padding: 8px 0; color: #666;">${m.label}:</td>
              <td style="padding: 8px 0; text-align: right;">×${m.factor}</td>
            </tr>`;
        });
      }

      if (priceDetails.additions.length > 0) {
        priceDetails.additions.forEach((a: { label: string; amount: number }) => {
          priceRowsHtml += `
            <tr>
              <td style="padding: 8px 0; color: #666;">${a.label}:</td>
              <td style="padding: 8px 0; text-align: right;">+€${a.amount.toFixed(2)}</td>
            </tr>`;
        });
      }

      const isOnRequest = priceDetails.total === 0;
      const calculatorName = calculator?.name || 'Calculator';
      const comment = formData.comment || '';

      return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuwe Offerteaanvraag - ${calculatorName}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2D5A27 0%, #4a7c44 100%); color: #ffffff; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Nieuwe Offerteaanvraag</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">${calculatorName}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background: #ffffff; padding: 0;">

              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding: 25px; border-bottom: 1px solid #eee;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; color: #2D5A27; font-size: 16px;">👤 Contactgegevens</h3>
                    <table width="100%" style="font-size: 14px;">
                      <tr>
                        <td style="padding: 6px 0; color: #666; width: 140px;">Naam:</td>
                        <td style="padding: 6px 0; font-weight: 500;">${formData.lastName || '-'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #666;">Email:</td>
                        <td style="padding: 6px 0;"><a href="mailto:${formData.Email}" style="color: #2D5A27; text-decoration: none;">${formData.Email || '-'}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #666;">Telefoon:</td>
                        <td style="padding: 6px 0;"><a href="tel:${formData.PhoneNumber}" style="color: #2D5A27; text-decoration: none;">${formData.PhoneNumber || '-'}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #666;">Adres:</td>
                        <td style="padding: 6px 0;">${formData.streetAndHouseNumber || '-'}, ${formData.Postcode || ''} ${formData.city || ''}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Planning -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding: 25px; border-bottom: 1px solid #eee;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; color: #2D5A27; font-size: 16px;">📅 Planning</h3>
                    <table width="100%" style="font-size: 14px;">
                      <tr>
                        <td style="padding: 6px 0; color: #666; width: 140px;">Gewenste termijn:</td>
                        <td style="padding: 6px 0; font-weight: 500;">${formData.desiredTimeframe || '-'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #666;">Vervolgstap:</td>
                        <td style="padding: 6px 0; font-weight: 500;">${formData.nextStep || '-'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Calculator Answers -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding: 25px; border-bottom: 1px solid #eee;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; color: #2D5A27; font-size: 16px;">📝 Calculator Antwoorden</h3>
                    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
                      ${stepSectionsHtml}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Price -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding: 25px;${
                comment ? ' border-bottom: 1px solid #eee;' : ''
              }">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; color: #2D5A27; font-size: 16px;">💰 Prijsberekening</h3>
                    ${
                      isOnRequest
                        ? `
                      <div style="background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; padding: 15px; text-align: center;">
                        <span style="font-size: 16px; color: #856404;">⚠️ Prijs op aanvraag</span>
                      </div>
                    `
                        : `
                      <div style="background: #f9f9f9; border-radius: 8px; padding: 15px;">
                        <table width="100%" style="font-size: 14px;">
                          ${priceRowsHtml}
                          <tr>
                            <td colspan="2" style="padding-top: 10px; border-top: 2px solid #2D5A27;">
                              <table width="100%">
                                <tr>
                                  <td style="font-size: 18px; font-weight: bold; color: #2D5A27; padding-top: 10px;">Totaal incl. BTW:</td>
                                  <td style="font-size: 18px; font-weight: bold; color: #2D5A27; text-align: right; padding-top: 10px;">€${priceDetails.total.toFixed(2)}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                    `
                    }
                  </td>
                </tr>
              </table>

              ${
                comment
                  ? `
              <!-- Comments -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding: 25px;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; color: #2D5A27; font-size: 16px;">💬 Opmerkingen</h3>
                    <div style="background: #f9f9f9; border-radius: 8px; padding: 15px; font-size: 14px; color: #333;">
                      ${comment}
                    </div>
                  </td>
                </tr>
              </table>
              `
                  : ''
              }

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: #f9f9f9; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #999; font-size: 12px;">Deze email is automatisch gegenereerd door de GreenTeam Calculator</p>
              <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">© ${new Date().getFullYear()} GreenTeam</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
    },
    [calculator]
  );

  // Final submission handler - sends HTML + files to backend
  const handleFinalSubmit = useCallback(
    async (updatedFormData: any) => {
      try {
        // Build structured answers with readable labels
        const structuredAnswers = buildStructuredAnswers();

        // Format price breakdown
        const priceDetails = {
          basePrice: priceBreakdown?.basePrice || 0,
          multipliers: priceBreakdown?.multipliers || [],
          additions: priceBreakdown?.additions || [],
          total: priceBreakdown?.total || 0,
        };

        // Merge form data
        const mergedFormData = {
          ...updatedFormData,
          comment: updatedFormData.details || updatedFormData.comment || '',
        };

        // Build HTML email
        const emailHtml = buildEmailHtml(structuredAnswers, mergedFormData, priceDetails);

        // Create FormData
        const formDataObj = new FormData();

        // Send HTML email body
        formDataObj.append('emailHtml', emailHtml);

        // Append files
        uploadedFiles.forEach((file) => {
          formDataObj.append('files', file);
        });

        // Trigger GTM event
        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: 'form_submit',
            calculatorName: calculator?.name,
            totalPrice: priceDetails.total,
          });
        }

        // Send to email API
        const response = await fetch('https://api.greenteam.nl/api/v1/emails/calculator', {
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
    [calculator, priceBreakdown, uploadedFiles, pathname, buildStructuredAnswers, buildEmailHtml]
  );

  // Render category selection phase
  if (currentPhase === 'category') {
    return (
      <CategorySelectionStep
        categories={availableCalculators}
        onSelect={handleCategorySelect}
        isLoading={categoriesLoading}
      />
    );
  }

  // Render loading state (for calculator loading)
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
          isFirstStep={isFirstStep && !!calculatorSlug} // Only truly first if slug was provided
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
