'use client';

import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import DynamicRenderQuestion from '@/components/calculators/dynamic/DynamicRenderQuestion';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { calculatePrice, FormStep, getVisibleQuestions, Question } from '@/lib/calculatorApi';
import { useDynamicCalculator } from '@/store/dynamic-calculator';

interface DynamicStepRendererProps {
  step: FormStep;
  stepIndex: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  onFilesChange?: (files: File[]) => void;
}

// Build Zod schema dynamically based on questions
function buildValidationSchema(questions: Question[]) {
  const schemaShape: Record<string, z.ZodTypeAny> = {};

  questions.forEach((question) => {
    let fieldSchema: z.ZodTypeAny;

    switch (question.type) {
      case 'SELECT':
        fieldSchema = z.string();
        if (question.required) {
          fieldSchema = z.string().min(1, 'Dit veld is verplicht');
        }
        break;

      case 'CHECKBOX':
        fieldSchema = z.array(z.string());
        if (question.required) {
          fieldSchema = z.array(z.string()).min(1, 'Selecteer minimaal een optie');
        }
        break;

      case 'NUMBER':
        fieldSchema = z.string();
        if (question.required) {
          fieldSchema = z.string().min(1, 'Dit veld is verplicht');
        }
        // Add min/max validation if specified
        if (question.minValue !== null || question.maxValue !== null) {
          fieldSchema = fieldSchema.refine(
            (val) => {
              if (!val) return true;
              const num = parseFloat(val);
              if (isNaN(num)) return false;
              if (question.minValue !== null && num < question.minValue) return false;
              if (question.maxValue !== null && num > question.maxValue) return false;
              return true;
            },
            {
              message: `Waarde moet ${question.minValue !== null ? `minimaal ${question.minValue}` : ''}${question.minValue !== null && question.maxValue !== null ? ' en ' : ''}${question.maxValue !== null ? `maximaal ${question.maxValue}` : ''} zijn`,
            }
          );
        }
        break;

      case 'TEXT':
        fieldSchema = z.string();
        if (question.required) {
          fieldSchema = z.string().min(1, 'Dit veld is verplicht');
        }
        break;

      case 'TEXT_ONLY':
        fieldSchema = z.string();
        if (question.required) {
          fieldSchema = z.string().min(1, 'Dit veld is verplicht');
        }
        fieldSchema = fieldSchema.refine((val) => !val || /^[a-zA-ZÀ-ÿ\s'-]+$/.test(val), {
          message: 'Alleen letters zijn toegestaan (geen cijfers)',
        });
        break;

      case 'FILE_UPLOAD':
        if (question.required) {
          fieldSchema = z.any().refine(
            (val) => {
              // Check if files exist and array is not empty
              if (Array.isArray(val) && val.length > 0) return true;
              // Also check for File objects
              if (val instanceof File) return true;
              return false;
            },
            { message: 'Upload minimaal één bestand' }
          );
        } else {
          fieldSchema = z.any();
        }
        break;

      default:
        fieldSchema = z.string().optional();
    }

    schemaShape[question.id] = fieldSchema;
  });

  return z.object(schemaShape);
}

// Get empty default values for form fields (no preselection)
function getEmptyDefaults(questions: Question[]) {
  const defaults: Record<string, string | number | string[]> = {};
  questions.forEach((question) => {
    defaults[question.id] = question.type === 'CHECKBOX' ? [] : '';
  });
  return defaults;
}

export default function DynamicStepRenderer({
  step,
  stepIndex,
  totalSteps,
  onNext,
  onPrevious,
  isFirstStep,
  isLastStep,
  onFilesChange,
}: DynamicStepRendererProps) {
  const { calculator, answers, setAnswer, setPriceBreakdown } = useDynamicCalculator();

  // Register ALL questions in the form with empty defaults (so React Hook Form tracks them)
  const allStepQuestions = step.questions;
  const defaultValues = useMemo(() => getEmptyDefaults(allStepQuestions), [allStepQuestions]);

  const form = useForm({
    defaultValues,
    mode: 'onChange',
  });

  const { control } = form;

  // Watch all form values - must be after useForm
  const watchedValues = useWatch({ control });

  // Get visible questions using both store answers and current form values for reactivity
  const visibleQuestions = useMemo(() => {
    const currentAnswers = { ...answers };
    if (watchedValues) {
      Object.entries(watchedValues).forEach(([key, value]) => {
        if (value !== undefined) {
          if (Array.isArray(value)) {
            currentAnswers[key] = JSON.stringify(value);
          } else {
            currentAnswers[key] = value as string | number;
          }
        }
      });
    }
    return getVisibleQuestions(step, currentAnswers);
  }, [step, answers, watchedValues]);

  // Build validation schema from VISIBLE questions only (not all) to prevent
  // hidden conditional required fields from blocking form submission
  const schema = useMemo(() => buildValidationSchema(visibleQuestions), [visibleQuestions]);

  // Update the resolver dynamically when visible questions change
  useEffect(() => {
    form.clearErrors();
  }, [schema, form]);

  // Update store when form values change
  useEffect(() => {
    if (!watchedValues) return;

    Object.entries(watchedValues).forEach(([key, value]) => {
      if (value !== undefined) {
        // For checkbox/multi-select, store as JSON string
        if (Array.isArray(value)) {
          const jsonValue = JSON.stringify(value);
          if (jsonValue !== answers[key]) {
            setAnswer(key, jsonValue);
          }
        } else if (value !== answers[key]) {
          setAnswer(key, value as string | number);
        }
      }
    });

    // Recalculate price using all answers (store + current form values)
    if (calculator) {
      const updatedAnswers = { ...answers };
      Object.entries(watchedValues).forEach(([key, value]) => {
        if (value !== undefined) {
          if (Array.isArray(value)) {
            updatedAnswers[key] = JSON.stringify(value);
          } else {
            updatedAnswers[key] = value as string | number;
          }
        }
      });
      const priceBreakdown = calculatePrice(calculator, updatedAnswers);
      setPriceBreakdown(priceBreakdown);
    }
  }, [watchedValues, calculator, answers]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Validate only visible questions' fields against the current schema
    const formValues = form.getValues();
    const result = schema.safeParse(formValues);
    if (result.success) {
      onNext();
    } else {
      // Set errors on the form for visible fields that failed
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as string;
        if (fieldName) {
          form.setError(fieldName, { type: 'manual', message: err.message });
        }
      });
    }
  };

  // Check if all required visible fields are filled
  const isButtonDisabled = useMemo(() => {
    return visibleQuestions.some((q) => {
      if (!q.required) return false;
      const value = watchedValues?.[q.id];
      if (value === undefined || value === null || value === '') return true;
      if (Array.isArray(value) && value.length === 0) return true;
      return false;
    });
  }, [watchedValues, visibleQuestions]);

  // Calculate progress percentage
  const progressPercent = Math.round(((stepIndex + 1) / totalSteps) * 100);

  // Get current price from store
  const { priceBreakdown } = useDynamicCalculator();
  const currentTotal = priceBreakdown?.total || 0;

  return (
    <FormProvider {...form}>
      <form className="w-[386px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg">
        {/* Header */}
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
          {/* Navigation and Progress */}
          <div className="flex flex-row items-center justify-between">
            {!isFirstStep && (
              <div
                className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
                onClick={onPrevious}
              >
                <ChevronLeft />
              </div>
            )}
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              {step.description || `Stap ${stepIndex + 1} van ${totalSteps}`}
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div
                className="h-full bg-green-700 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Questions */}
          <div className="flex flex-col gap-[11px]">
            {visibleQuestions.map((question) => (
              <DynamicRenderQuestion key={question.id} question={question} onFilesChange={onFilesChange} />
            ))}
          </div>

          {/* Footer with Price and Button */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">
                {currentTotal > 0 ? `€${currentTotal.toFixed(2)}` : '€0.00'}
              </span>
            </div>
            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
              type="button"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              {isLastStep ? 'Versturen' : 'Volgende'}
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
