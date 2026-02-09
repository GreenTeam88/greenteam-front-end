import { create } from 'zustand';

import { Calculator, FormStep, getVisibleQuestions, PriceBreakdown } from '@/lib/calculatorApi';

export interface DynamicCalculatorState {
  // Calculator data from API
  calculator: Calculator | null;
  isLoading: boolean;
  error: string | null;

  // Form state
  currentStepIndex: number;
  answers: Record<string, string | number>;
  priceBreakdown: PriceBreakdown | null;

  // Navigation history for back button
  stepHistory: number[];

  // Actions
  setCalculator: (calculator: Calculator | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setAnswer: (questionId: string, value: string | number) => void;
  setAnswers: (answers: Record<string, string | number>) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (stepIndex: number) => void;
  setPriceBreakdown: (priceBreakdown: PriceBreakdown | null) => void;
  reset: () => void;
}

const initialState = {
  calculator: null,
  isLoading: false,
  error: null,
  currentStepIndex: 0,
  answers: {},
  priceBreakdown: null,
  stepHistory: [],
};

export const useDynamicCalculator = create<DynamicCalculatorState>((set) => ({
  ...initialState,

  setCalculator: (calculator) => set({ calculator, currentStepIndex: 0, answers: {}, stepHistory: [] }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),

  setAnswer: (questionId, value) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: value },
    })),

  setAnswers: (answers) => set({ answers }),

  goToNextStep: () =>
    set((state) => {
      const { calculator, currentStepIndex, stepHistory, answers } = state;
      if (!calculator) return state;

      const totalSteps = calculator.steps.length;
      // Find next step that has visible questions (skip empty steps)
      let nextIndex = currentStepIndex + 1;
      while (nextIndex < totalSteps) {
        if (getVisibleQuestions(calculator.steps[nextIndex], answers).length > 0) {
          break;
        }
        nextIndex++;
      }

      if (nextIndex < totalSteps) {
        return {
          currentStepIndex: nextIndex,
          stepHistory: [...stepHistory, currentStepIndex],
        };
      }
      return state;
    }),

  goToPreviousStep: () =>
    set((state) => {
      const { stepHistory } = state;
      if (stepHistory.length > 0) {
        const previousStep = stepHistory[stepHistory.length - 1];
        return {
          currentStepIndex: previousStep,
          stepHistory: stepHistory.slice(0, -1),
        };
      }
      return state;
    }),

  goToStep: (stepIndex) =>
    set((state) => ({
      currentStepIndex: stepIndex,
      stepHistory: [...state.stepHistory, state.currentStepIndex],
    })),

  setPriceBreakdown: (priceBreakdown) => set({ priceBreakdown }),

  reset: () => set(initialState),
}));

// Selectors for common derived state
export const selectCurrentStep = (state: DynamicCalculatorState): FormStep | null => {
  if (!state.calculator) return null;
  return state.calculator.steps[state.currentStepIndex] || null;
};

export const selectTotalSteps = (state: DynamicCalculatorState): number => {
  return state.calculator?.steps.length || 0;
};

export const selectIsFirstStep = (state: DynamicCalculatorState): boolean => {
  return state.stepHistory.length === 0;
};

export const selectIsLastStep = (state: DynamicCalculatorState): boolean => {
  if (!state.calculator) return false;
  const { calculator, currentStepIndex, answers } = state;
  for (let i = currentStepIndex + 1; i < calculator.steps.length; i++) {
    if (getVisibleQuestions(calculator.steps[i], answers).length > 0) {
      return false;
    }
  }
  return true;
};
