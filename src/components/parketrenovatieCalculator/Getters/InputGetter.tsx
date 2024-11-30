'use client';

import CustomInput from '@/components/custom/CustomInput';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';

interface InputGetterProps {
  form: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  inputClassName?: string;
}

export default function InputGetter({
  form,
  name,
  label,
  placeholder = '',
  type = 'text',
  inputClassName = '',
}: InputGetterProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col gap-y-2">
          {/* Label */}
          <FormLabel className="font-normal text-textBlack80 text-sm">
            {label}
            <span className="text-red-500">*</span>
          </FormLabel>

          {/* Input Field with Error Styling */}
          <FormControl>
            <CustomInput
              value={field.value ?? ''}
              onChange={(value) => {
                form.setValue(name, value);
              }}
              className={`!m-0 !ring-transparent !outline-transparent h-auto py-3 px-5 rounded-lg text-sm text-textBlack ${
                fieldState.error
                  ? 'border-red-500 shadow-[0_0_8px_rgba(255,0,0,0.1)]' // Red "shine" effect
                  : 'border border-borderGray' // Default gray border
              } ${inputClassName}`}
              type={type}
              placeholder={placeholder}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
