export type Option = {
  value: string;
  label: string;
  imageUrl?: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
};

export interface FormData {
  category: string;
  service: string;
  squareMeters: number;
}
