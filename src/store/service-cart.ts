import { create } from 'zustand';

import { Calculator, PriceBreakdown } from '@/lib/calculatorApi';

export interface CompletedService {
  // Snapshot at the moment the user committed this service. Storing the full Calculator
  // (not just the slug) makes the email + planning rendering self-contained: question
  // labels, option labels, units, etc. are all available even if the catalog later changes.
  calculator: Calculator;
  answers: Record<string, string | number>;
  priceBreakdown: PriceBreakdown | null;
}

interface ServiceCartState {
  services: CompletedService[];
  addService: (service: CompletedService) => void;
  clearCart: () => void;
}

export const useServiceCart = create<ServiceCartState>((set) => ({
  services: [],
  addService: (service) =>
    set((state) => ({
      services: [...state.services, service],
    })),
  clearCart: () => set({ services: [] }),
}));

export const selectCartTotal = (state: ServiceCartState): number =>
  state.services.reduce((sum, s) => sum + (s.priceBreakdown?.total ?? 0), 0);

export const selectCartCount = (state: ServiceCartState): number => state.services.length;
