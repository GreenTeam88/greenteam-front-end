'use client';

import MultiSelectFormField from '@/components/ui/multi-select';
import { cn } from '@/lib/utils';
import { Option } from '@/types';

interface CustomMultiSelectProps {
  options: Option[];
  placeholder?: string;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  buttonClassName?: string;
  menuClassName?: string;
  menuItemsClassName?: string;
  placeholderTextClassName?: string;
}

export default function CustomMultiSelect({
  options,
  placeholder = 'Select options',
  selectedValues,
  onChange,
  buttonClassName,
  menuClassName,
  menuItemsClassName,
  placeholderTextClassName,
}: CustomMultiSelectProps) {
  return (
    <MultiSelectFormField
      variant={'inverted'}
      animation={0}
      btnClassName={cn(buttonClassName)}
      menuClassName={cn(menuClassName)}
      menuListItemsClassName={cn(menuItemsClassName)}
      placeholderClassName={cn(placeholderTextClassName)}
      value={selectedValues}
      onValueChange={(values) => onChange(values)}
      options={options}
      placeholder={placeholder}
    />
  );
}
