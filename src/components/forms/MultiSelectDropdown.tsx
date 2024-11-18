'use client';

import { useFormContext } from 'react-hook-form'; // FieldValues,

import ShadcnCustomMultiSelect from '@/components/custom/ShadcnCustomMultiSelect';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Option } from '@/types';

interface MultiSelectDropdownProps {
  data: Option[];
  name: string;
  label: string;
  placeholder?: string;
  buttonClassName?: string;
  placeholderTextClassName?: string;
  menuItemsClassName?: string;
  menuClassName?: string;
}

export default function MultiSelectDropdown({
  data,
  name,
  label,
  placeholder = 'Choose an option(s)',
  buttonClassName,
  placeholderTextClassName,
  menuItemsClassName,
  menuClassName,
}: MultiSelectDropdownProps) {
  const form = useFormContext();
  if (!form || !form.control) {
    throw new Error('MultiSelectDropdown must be used within a FormProvider.');
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={'flex flex-col gap-y-[0.875rem]'}>
          <FormLabel className={'font-normal text-textBlack80 text-sm'}>
            {label}
            <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <ShadcnCustomMultiSelect
              buttonClassName={
                buttonClassName ||
                '!m-0 w-full text-sm text-textBlack font-[400] border-borderGray rounded-lg py-3 px-5 h-auto'
              }
              placeholderTextClassName={placeholderTextClassName || '!m-0 '}
              menuItemsClassName={menuItemsClassName || 'text-sm'}
              menuClassName={menuClassName || 'w-[300px] bg-white'}
              placeholder={placeholder}
              options={data}
              selectedValues={field.value}
              onChange={(value: string[]) => {
                field.onChange(value);
                form.setValue(name, value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
