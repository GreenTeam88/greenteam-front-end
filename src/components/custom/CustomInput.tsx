import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface CustomInputProps {
  name?: string;
  type: string;
  placeholder: string;
  className?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  required?: boolean;
  min?: number;
  max?: number;
}

export default function CustomInput({
  type,
  placeholder,
  className,
  value,
  onChange,
  name,
  required,
  min,
  max,
}: CustomInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    let newValue: string | number = event.target.value;

    // For number inputs, enforce min/max
    if (type === 'number' && newValue !== '') {
      const numValue = parseFloat(newValue);
      if (!isNaN(numValue)) {
        if (min !== undefined && numValue < min) {
          newValue = String(min);
        }
        if (max !== undefined && numValue > max) {
          newValue = String(max);
        }
      }
    }

    onChange(newValue);
  };

  return (
    <Input
      name={name}
      value={value}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      className={cn(className)}
      required={required}
      min={min}
      max={max}
    />
  );
}
