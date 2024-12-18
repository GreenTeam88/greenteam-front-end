export type Option = {
  value: string;
  label: string;
  imageUrl?: string; // Add imageUrl to represent each option
  icon?: React.ComponentType<{ className?: string }>; // Keep this if you still want icons
};

export interface FormData {
  category: string;
  service: string;
  squareMeters: number;
  // Define other fields as needed based on your steps
}
