import { create } from 'zustand';

import { Calculator, FormStep, PriceBreakdown } from '@/lib/calculatorApi';

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

export const useDynamicCalculator = create<DynamicCalculatorState>((set, get) => ({
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
      const { calculator, currentStepIndex, stepHistory } = state;
      if (!calculator) return state;

      const totalSteps = calculator.steps.length;
      if (currentStepIndex < totalSteps - 1) {
        return {
          currentStepIndex: currentStepIndex + 1,
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
  return state.currentStepIndex === 0;
};

export const selectIsLastStep = (state: DynamicCalculatorState): boolean => {
  if (!state.calculator) return false;
  return state.currentStepIndex === state.calculator.steps.length - 1;
};
