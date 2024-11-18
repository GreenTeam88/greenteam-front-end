'use client';

import CustomInput from '@/components/custom/CustomInput';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

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
      render={({ field }) => (
        <FormItem className={'flex flex-col gap-y-[0.875rem]'}>
          <FormLabel className={'font-normal text-textBlack80 text-sm'}>
            {label}
            <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <CustomInput
              value={field.value ?? ''}
              onChange={(value) => {
                form.setValue(name, value);
              }}
              className={`!m-0 !ring-transparent !outline-transparent h-auto border py-3 px-5 rounded-lg border-borderGray text-sm text-textBlack ${inputClassName}`}
              type={type}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
