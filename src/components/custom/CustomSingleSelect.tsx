'use client';

import SingleSelectFormField from '@/components/ui/single-select';
import { cn } from '@/lib/utils';
import { Option } from '@/types';

interface CustomSingleSelectProps {
  options: Option[];
  placeholder?: string;
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  buttonClassName?: string;
  menuClassName?: string;
  menuItemsClassName?: string;
  placeholderTextClassName?: string;
}

export default function CustomSingleSelect({
  options,
  placeholder = 'Select an option',
  selectedValue,
  onChange,
  buttonClassName,
  menuClassName,
  menuItemsClassName,
  placeholderTextClassName,
}: CustomSingleSelectProps) {
  return (
    <SingleSelectFormField
      variant={'inverted'}
      btnClassName={cn(buttonClassName)}
      menuClassName={cn(menuClassName)}
      menuListItemsClassName={cn(menuItemsClassName)}
      placeholderClassName={cn(placeholderTextClassName)}
      onValueChange={onChange}
      options={options}
      placeholder={placeholder}
      defaultValue={selectedValue}
    />
  );
}
