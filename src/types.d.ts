export type Option = {
  value: string;
  label: string;
  imageUrl?: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  isExclusive?: boolean;
  tooltip?: string;
};

export interface FormData {
  category: string;
  service: string;
  squareMeters: number;
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}
