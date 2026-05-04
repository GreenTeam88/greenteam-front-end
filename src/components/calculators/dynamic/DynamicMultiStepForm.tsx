'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import AnotherServiceStep from '@/components/calculators/dynamic/AnotherServiceStep';
import DynamicStepRenderer from '@/components/calculators/dynamic/DynamicStepRenderer';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Calculator, getAllCalculators, getCalculatorBySlug } from '@/lib/calculatorApi';
import {
  selectCurrentStep,
  selectIsFirstStep,
  selectIsLastStep,
  selectTotalSteps,
  useDynamicCalculator,
} from '@/store/dynamic-calculator';
import { CompletedService, selectCartTotal, useServiceCart } from '@/store/service-cart';

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
  // Optional back handler for the mid-flow inline picker. Initial entry omits it
  // so no chevron renders on the very first screen.
  onPrevious?: () => void;
}

const CategorySelectionStep: React.FC<CategorySelectionStepProps> = ({
  categories,
  onSelect,
  isLoading,
  onPrevious,
}) => {
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
            {onPrevious && (
              <div
                className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
                onClick={onPrevious}
              >
                <ChevronLeft />
              </div>
            )}
            <span className="flex-1 text-gray-400 font-sans text-sm">Waar kunnen we u mee helpen?</span>
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
type Phase =
  | 'category'
  | 'dynamic'
  | 'another-service'
  | 'category-picker'
  | 'planning'
  | 'contact'
  | 'upload'
  | 'comment'
  | 'final';

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

  // Service-cart store: holds previously committed services. The currently active
  // calculator (in useDynamicCalculator) is NOT in the cart until the user clicks
  // "yes" on the another-service question; on "no" it stays active and shows up
  // alongside the cart on the planning step / email.
  const cartServices = useServiceCart((state) => state.services);
  const addService = useServiceCart((state) => state.addService);
  const clearCart = useServiceCart((state) => state.clearCart);
  const cartTotal = useServiceCart(selectCartTotal);

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

  // Get derived state reactively (must use hook, NOT getState() which is a stale snapshot)
  const currentStep = useDynamicCalculator(selectCurrentStep);
  const totalSteps = useDynamicCalculator(selectTotalSteps);
  const isFirstStep = useDynamicCalculator(selectIsFirstStep);
  const isLastDynamicStep = useDynamicCalculator(selectIsLastStep);

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
  // Track the previous slug to only reset when it actually changes
  const slugToFetch = calculatorSlug || selectedSlug;
  const prevSlugRef = React.useRef<string | null>(null);

  useEffect(() => {
    if (!slugToFetch) return;

    // Only reset when the slug actually changes, not on every effect run
    if (prevSlugRef.current !== slugToFetch) {
      prevSlugRef.current = slugToFetch;
      reset();
    }

    const fetchCalculator = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCalculatorBySlug(slugToFetch);
        if (data) {
          setCalculator(data);
        } else {
          fallbackToCategorySelection();
        }
      } catch (err) {
        fallbackToCategorySelection();
      } finally {
        setLoading(false);
      }
    };

    fetchCalculator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugToFetch]);

  // Clear the cart whenever the embed mounts fresh. The cart should only persist
  // within a single user session of the calculator widget; navigating to a new
  // calculator URL is a new session.
  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update formData when price changes. Total = active service total + cart total
  // so the planning step / running totals reflect the whole quote.
  useEffect(() => {
    const activeTotal = priceBreakdown?.total ?? 0;
    const grandTotal = activeTotal + cartTotal;
    setFormData((prev: any) => ({
      ...prev,
      totalCost: grandTotal,
      isOnRequest: grandTotal === 0,
    }));
  }, [priceBreakdown, cartTotal]);

  // Handle category selection (initial entry, no slug provided)
  const handleCategorySelect = useCallback((slug: string) => {
    setSelectedSlug(slug);
    setCurrentPhase('dynamic');
  }, []);

  // Handle inline category-picker selection (mid-flow, when adding a second+ service)
  const handleCategoryPickerSelect = useCallback((slug: string) => {
    setSelectedSlug(slug);
    setCurrentPhase('dynamic');
  }, []);

  // Back from the inline category-picker returns to the another-service question.
  // The cart entry that was just pushed on "yes" stays in the cart — if the user
  // changes their mind they can switch to "no" and proceed to planning.
  const handleCategoryPickerPrevious = useCallback(() => {
    setCurrentPhase('another-service');
  }, []);

  // Handle navigation for dynamic steps. End-of-dynamic now leads to the "another service?"
  // question instead of jumping straight to planning.
  const handleDynamicNext = useCallback(() => {
    if (isLastDynamicStep) {
      setCurrentPhase('another-service');
    } else {
      goToNextStep();
    }
  }, [isLastDynamicStep, goToNextStep]);

  const handleDynamicPrevious = useCallback(() => {
    // First service via category-selector (no slug, empty cart): back returns to the
    // initial category screen so the user can re-pick. For all other "first step"
    // cases — slug-entry, or any subsequent service after the cart has entries —
    // back is hidden by the renderer (we pass isFirstStep=true to it below).
    if (isFirstStep && !calculatorSlug && cartServices.length === 0) {
      setCurrentPhase('category');
      setSelectedSlug(null);
      reset();
    } else {
      goToPreviousStep();
    }
  }, [isFirstStep, calculatorSlug, cartServices.length, goToPreviousStep, reset]);

  // Another-service question handlers
  const handleAnotherServiceYes = useCallback(() => {
    // Commit the active service to the cart only if there is one currently loaded
    // (re-visiting the question from category-picker has active=null, no double-push).
    if (calculator) {
      const completed: CompletedService = {
        calculator,
        answers: { ...answers },
        priceBreakdown,
      };
      addService(completed);
      reset();
    }
    // Clear the slug-watch ref so re-picking the SAME slug as the previous service
    // still triggers a refetch (otherwise the prevSlug equality check would skip it).
    prevSlugRef.current = null;
    setSelectedSlug(null);
    if (availableCalculators.length === 0) {
      fetchCategories();
    }
    setCurrentPhase('category-picker');
  }, [calculator, answers, priceBreakdown, addService, reset, availableCalculators.length, fetchCategories]);

  const handleAnotherServiceNo = useCallback(() => {
    // Active service stays loaded and is treated as the last (uncommitted) service
    // alongside cartServices for total / planning / email.
    setCurrentPhase('planning');
  }, []);

  const handleAnotherServicePrevious = useCallback(() => {
    // Only meaningful when an active service is loaded — go back to its last dynamic step.
    setCurrentPhase('dynamic');
  }, []);

  // Handle navigation for hardcoded steps
  const handlePlanningNext = useCallback(() => {
    setCurrentPhase('contact');
  }, []);

  // Back from planning goes to the another-service question (NOT directly to a dynamic
  // step), which preserves the "completed services are locked" rule from option B —
  // only the active service's last step is reachable from the another-service screen.
  const handlePlanningPrevious = useCallback(() => {
    setCurrentPhase('another-service');
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

  // Helper to convert a stored answer into a human-readable string. Parameterized
  // on the calculator so it works for any service (cart entries + active service).
  const getReadableAnswer = useCallback(
    (calc: Calculator | null, questionId: string, answer: string | number): string => {
      if (!calc) return String(answer);

      for (const step of calc.steps) {
        const question = step.questions.find((q) => q.id === questionId);
        if (question) {
          if (question.type === 'SELECT' || question.type === 'CHECKBOX') {
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
            const option = question.options.find((o) => o.value === answer);
            return option?.label || String(answer);
          }
          if (question.type === 'NUMBER' && question.unit) {
            return `${answer} ${question.unit}`;
          }
          return String(answer);
        }
      }
      return String(answer);
    },
    []
  );

  // Build structured answers with question labels for a given calculator + answers pair.
  const buildStructuredAnswers = useCallback(
    (
      calc: Calculator | null,
      calcAnswers: Record<string, string | number>
    ): Array<{ question: string; answer: string; step: string }> => {
      if (!calc) return [];

      const structuredAnswers: Array<{ question: string; answer: string; step: string }> = [];

      for (const step of calc.steps) {
        const stepDescription = step.description || `Stap ${step.order + 1}`;

        for (const question of step.questions) {
          const answer = calcAnswers[question.id];
          if (answer !== undefined && answer !== null && answer !== '') {
            structuredAnswers.push({
              step: stepDescription,
              question: question.question,
              answer: getReadableAnswer(calc, question.id, answer),
            });
          }
        }
      }

      return structuredAnswers;
    },
    [getReadableAnswer]
  );

  // Build HTML email template. Renders one block per service (cart entries +
  // optionally the active service), each with its own per-step Q&A and price
  // breakdown, followed by a grand total at the bottom.
  const buildEmailHtml = useCallback(
    (
      services: Array<{
        calculatorName: string;
        structured: Array<{ question: string; answer: string; step: string }>;
        priceBreakdown: {
          basePrice: number;
          multipliers: Array<{ label: string; factor: number }>;
          additions: Array<{ label: string; amount: number }>;
          total: number;
        } | null;
      }>,
      formData: any
    ): string => {
      // Helper: render the per-step Q&A grid for a single service
      const renderStepSections = (structured: Array<{ question: string; answer: string; step: string }>) => {
        const groupedByStep = structured.reduce(
          (acc: Record<string, Array<{ question: string; answer: string }>>, item) => {
            if (!acc[item.step]) acc[item.step] = [];
            acc[item.step].push({ question: item.question, answer: item.answer });
            return acc;
          },
          {}
        );

        return Object.entries(groupedByStep)
          .map(
            ([stepName, questions], index) => `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 12px; ${index > 0 ? 'border-top: 1px solid #e0e0e0; padding-top: 12px;' : ''}">
              <tr>
                <td style="background: #2D5A27; color: #fff; padding: 8px 12px; border-radius: 6px 6px 0 0; font-weight: bold; font-size: 13px;">
                  📌 ${stepName}
                </td>
              </tr>
              <tr>
                <td style="background: #fff; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 6px 6px; padding: 12px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${(questions as Array<{ question: string; answer: string }>)
                      .map(
                        (q) => `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 13px; width: 45%; vertical-align: top;">${q.question}:</td>
                        <td style="padding: 6px 0; color: #333; font-weight: 600; font-size: 13px;">${q.answer}</td>
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
      };

      // Helper: render the price breakdown block for a single service
      const renderPriceBlock = (
        breakdown: {
          basePrice: number;
          multipliers: Array<{ label: string; factor: number }>;
          additions: Array<{ label: string; amount: number }>;
          total: number;
        } | null,
        labelTotal: string = 'Subtotaal'
      ) => {
        if (!breakdown) {
          return `
            <div style="background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; padding: 12px; text-align: center; margin-top: 8px;">
              <span style="font-size: 14px; color: #856404;">⚠️ Prijs op aanvraag</span>
            </div>`;
        }
        let rowsHtml = `
          <tr>
            <td style="padding: 6px 0; color: #666;">Basisprijs:</td>
            <td style="padding: 6px 0; text-align: right;">€${breakdown.basePrice.toFixed(2)}</td>
          </tr>`;
        breakdown.multipliers.forEach((m) => {
          rowsHtml += `
            <tr>
              <td style="padding: 6px 0; color: #666;">${m.label}:</td>
              <td style="padding: 6px 0; text-align: right;">×${m.factor}</td>
            </tr>`;
        });
        breakdown.additions.forEach((a) => {
          rowsHtml += `
            <tr>
              <td style="padding: 6px 0; color: #666;">${a.label}:</td>
              <td style="padding: 6px 0; text-align: right;">+€${a.amount.toFixed(2)}</td>
            </tr>`;
        });
        return `
          <div style="background: #f9f9f9; border-radius: 8px; padding: 12px; margin-top: 8px;">
            <table width="100%" style="font-size: 13px;">
              ${rowsHtml}
              <tr>
                <td colspan="2" style="padding-top: 6px; border-top: 1px solid #ccc;">
                  <table width="100%">
                    <tr>
                      <td style="font-size: 14px; font-weight: bold; color: #2D5A27; padding-top: 6px;">${labelTotal}:</td>
                      <td style="font-size: 14px; font-weight: bold; color: #2D5A27; text-align: right; padding-top: 6px;">€${breakdown.total.toFixed(2)}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>`;
      };

      // Build per-service blocks
      const serviceBlocksHtml = services
        .map(
          (svc, idx) => `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
            <tr>
              <td style="background: linear-gradient(135deg, #2D5A27 0%, #4a7c44 100%); color: #fff; padding: 12px 15px; border-radius: 8px 8px 0 0; font-weight: bold; font-size: 15px;">
                Dienst ${idx + 1}: ${svc.calculatorName}
              </td>
            </tr>
            <tr>
              <td style="background: #fff; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px; padding: 15px;">
                ${renderStepSections(svc.structured)}
                ${renderPriceBlock(svc.priceBreakdown, 'Subtotaal')}
              </td>
            </tr>
          </table>
        `
        )
        .join('');

      const grandTotal = services.reduce((sum, s) => sum + (s.priceBreakdown?.total ?? 0), 0);
      const isOnRequest = grandTotal === 0;

      // Title shows first service name (or "Meerdere diensten" for 2+).
      const title =
        services.length === 0
          ? 'Calculator'
          : services.length === 1
            ? services[0].calculatorName
            : `Meerdere diensten (${services.length})`;
      const calculatorName = title;
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

              <!-- Per-service blocks: each contains its own answers + price breakdown -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding: 25px; border-bottom: 1px solid #eee;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; color: #2D5A27; font-size: 16px;">📝 Diensten &amp; Antwoorden</h3>
                    ${serviceBlocksHtml}
                  </td>
                </tr>
              </table>

              <!-- Grand Total -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding: 25px;${
                comment ? ' border-bottom: 1px solid #eee;' : ''
              }">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; color: #2D5A27; font-size: 16px;">💰 Totaalprijs</h3>
                    ${
                      isOnRequest
                        ? `
                      <div style="background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; padding: 15px; text-align: center;">
                        <span style="font-size: 16px; color: #856404;">⚠️ Prijs op aanvraag</span>
                      </div>
                    `
                        : `
                      <div style="background: #f9f9f9; border-radius: 8px; padding: 15px;">
                        <table width="100%">
                          <tr>
                            <td style="font-size: 18px; font-weight: bold; color: #2D5A27;">Totaal incl. BTW (${services.length} dienst${services.length === 1 ? '' : 'en'}):</td>
                            <td style="font-size: 18px; font-weight: bold; color: #2D5A27; text-align: right;">€${grandTotal.toFixed(2)}</td>
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
        // Gather all services: previously committed (cart) + active service if loaded
        const allServices = [
          ...cartServices.map((s) => ({
            calculatorName: s.calculator.name,
            structured: buildStructuredAnswers(s.calculator, s.answers),
            priceBreakdown: s.priceBreakdown
              ? {
                  basePrice: s.priceBreakdown.basePrice,
                  multipliers: s.priceBreakdown.multipliers,
                  additions: s.priceBreakdown.additions,
                  total: s.priceBreakdown.total,
                }
              : null,
          })),
          ...(calculator
            ? [
                {
                  calculatorName: calculator.name,
                  structured: buildStructuredAnswers(calculator, answers),
                  priceBreakdown: priceBreakdown
                    ? {
                        basePrice: priceBreakdown.basePrice,
                        multipliers: priceBreakdown.multipliers,
                        additions: priceBreakdown.additions,
                        total: priceBreakdown.total,
                      }
                    : null,
                },
              ]
            : []),
        ];

        const grandTotal = allServices.reduce((sum, s) => sum + (s.priceBreakdown?.total ?? 0), 0);

        const mergedFormData = {
          ...updatedFormData,
          comment: updatedFormData.details || updatedFormData.comment || '',
        };

        const emailHtml = buildEmailHtml(allServices, mergedFormData);

        const formDataObj = new FormData();
        formDataObj.append('emailHtml', emailHtml);

        uploadedFiles.forEach((file) => {
          formDataObj.append('files', file);
        });

        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: 'form_submit',
            calculatorName: allServices.map((s) => s.calculatorName).join(' + '),
            servicesCount: allServices.length,
            totalPrice: grandTotal,
          });
        }

        const response = await fetch('https://api.greenteam.nl/api/v1/emails/calculator', {
          method: 'POST',
          body: formDataObj,
        });

        if (response.ok) {
          clearCart();
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
    [
      calculator,
      answers,
      priceBreakdown,
      cartServices,
      uploadedFiles,
      pathname,
      buildStructuredAnswers,
      buildEmailHtml,
      clearCart,
    ]
  );

  // Build the combined services list for display on the planning step:
  // committed cart services + the active service if one is loaded.
  const planningServices = useMemo(
    () => [
      ...cartServices.map((s) => ({ name: s.calculator.name, total: s.priceBreakdown?.total ?? 0 })),
      ...(calculator ? [{ name: calculator.name, total: priceBreakdown?.total ?? 0 }] : []),
    ],
    [cartServices, calculator, priceBreakdown]
  );

  // Hide the back chevron on the dynamic step's first step when going back has no
  // meaningful target: slug-entry (no category screen behind us) OR there are
  // already-committed services in the cart (option B locks them).
  const dynamicIsFirstStep = isFirstStep && (!!calculatorSlug || cartServices.length > 0);

  // Initial category screen (entry without slug)
  if (currentPhase === 'category') {
    return (
      <CategorySelectionStep
        categories={availableCalculators}
        onSelect={handleCategorySelect}
        isLoading={categoriesLoading}
      />
    );
  }

  // Inline category picker (mid-flow, after the user said "yes" to another service)
  if (currentPhase === 'category-picker') {
    return (
      <CategorySelectionStep
        categories={availableCalculators}
        onSelect={handleCategoryPickerSelect}
        isLoading={categoriesLoading}
        onPrevious={handleCategoryPickerPrevious}
      />
    );
  }

  // Loading state (for calculator fetch)
  if (isLoading) {
    return <StepLoader />;
  }

  // Error state
  if (error) {
    return <ErrorDisplay message={error} />;
  }

  // The "another service?" question can render with calculator=null (when the user
  // backtracks here from the category-picker), so it must come before the
  // calculator-not-found check.
  if (currentPhase === 'another-service') {
    return (
      <AnotherServiceStep
        activeServiceTotal={priceBreakdown?.total ?? 0}
        hasActiveService={!!calculator}
        onYes={handleAnotherServiceYes}
        onNo={handleAnotherServiceNo}
        onPrevious={handleAnotherServicePrevious}
        canGoBack={!!calculator}
      />
    );
  }

  // 'dynamic' is the only phase that strictly requires an active calculator
  // (you can't ask questions without one). Planning / contact / upload / comment /
  // final all work fine in cart-only mode (active=null after a back-and-forth) —
  // the cart still has data from previously committed services.
  if (currentPhase === 'dynamic' && !calculator) {
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
          isFirstStep={dynamicIsFirstStep}
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
          services={planningServices}
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
