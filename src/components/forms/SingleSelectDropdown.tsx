'use client';

import { useFormContext } from 'react-hook-form';

import CustomSingleSelect from '@/components/custom/CustomSingleSelect';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Option } from '@/types';

interface SingleSelectDropdownProps {
  data: Option[];
  name: string;
  label: string;
  placeholder?: string;
  buttonClassName?: string;
  placeholderTextClassName?: string;
  menuItemsClassName?: string;
  menuClassName?: string;
  onChange?: (value: string) => void; // Optional callback for parent updates
}

export default function SingleSelectDropdown({
  data,
  name,
  label,
  placeholder = 'Choose an option',
  buttonClassName,
  placeholderTextClassName,
  menuItemsClassName,
  menuClassName,
  onChange,
}: SingleSelectDropdownProps) {
  const form = useFormContext();
  if (!form || !form.control) {
    throw new Error('SingleSelectDropdown must be used within a FormProvider.');
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
            <CustomSingleSelect
              buttonClassName={
                buttonClassName ||
                '!m-0 w-full text-sm text-textBlack font-[400] border-borderGray rounded-lg py-3 px-5 h-auto'
              }
              placeholderTextClassName={placeholderTextClassName || '!m-0 '}
              menuItemsClassName={menuItemsClassName || 'text-sm'}
              menuClassName={menuClassName || 'w-[300px] bg-white'}
              placeholder={placeholder}
              options={data}
              selectedValue={field.value} // Value is managed by react-hook-form
              onChange={(value: string) => {
                field.onChange(value); // Update react-hook-form's state
                if (onChange) {
                  onChange(value); // Call parent callback if provided
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
