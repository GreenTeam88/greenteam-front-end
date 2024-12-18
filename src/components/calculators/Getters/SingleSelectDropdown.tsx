'use client';

import { useFormContext } from 'react-hook-form';

import CustomSingleSelect from '@/components/custom/CustomSingleSelect';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
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

interface SingleSelectDropdownProps {
  data: Option[];
  name: string;
  label: string;
  placeholder?: string;
  buttonClassName?: string;
  placeholderTextClassName?: string;
  menuItemsClassName?: string;
  menuClassName?: string;
  onChange?: (value: string) => void;
  disabled?: boolean; // Add this prop
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
  disabled = false,
}: SingleSelectDropdownProps) {
  const form = useFormContext();
  if (!form || !form.control) {
    throw new Error('SingleSelectDropdown must be used within a FormProvider.');
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col gap-y-1">
          <FormLabel className="font-normal text-textBlack80 text-sm">
            {label}
            <span className="text-red-500">*</span>
          </FormLabel>

          <FormControl>
            <div
              className={`
                relative rounded-lg border
                ${fieldState.error ? 'border-red-500 !important' : 'border-borderGray'}
              `}
            >
              <CustomSingleSelect
                buttonClassName={
                  buttonClassName ??
                  'm-0 w-full text-sm text-textBlack font-[400] border-none rounded-lg py-3 px-5 h-auto'
                }
                placeholderTextClassName={placeholderTextClassName ?? 'm-0'}
                menuItemsClassName={menuItemsClassName ?? 'text-sm'}
                menuClassName={menuClassName ?? 'w-[300px] bg-white'}
                placeholder={placeholder}
                options={data}
                selectedValue={field.value}
                onChange={(value: string) => {
                  field.onChange(value);
                  if (onChange) {
                    onChange(value);
                  }
                }}
                disabled={disabled} // Pass it here
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
