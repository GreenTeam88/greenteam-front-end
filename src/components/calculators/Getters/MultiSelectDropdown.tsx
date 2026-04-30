import { useFormContext } from 'react-hook-form';

import ShadcnCustomMultiSelect from '@/components/custom/ShadcnCustomMultiSelect';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import InfoTooltip from '@/components/ui/info-tooltip';
import { Option } from '@/types';

interface MultiSelectDropdownProps {
  data: Option[];
  name: string;
  label: string;
  tooltip?: string;
  placeholder?: string;
  exclusiveOption?: string; // Exclusive option like "Nee"
  buttonClassName?: string;
  placeholderTextClassName?: string;
  menuItemsClassName?: string;
  menuClassName?: string;
}

export default function MultiSelectDropdown({
  data,
  name,
  label,
  tooltip,
  placeholder = 'Choose an option(s)',
  exclusiveOption,
  buttonClassName,
  placeholderTextClassName,
  menuItemsClassName,
  menuClassName,
}: MultiSelectDropdownProps) {
  const form = useFormContext();
  if (!form || !form.control) {
    throw new Error('MultiSelectDropdown must be used within a FormProvider.');
  }

  const selectedValues = form.watch(name) || [];

  const handleChange = (value: string[]) => {
    const setValueOptions = { shouldValidate: true, shouldDirty: true, shouldTouch: true };

    if (exclusiveOption) {
      const includesExclusive = value.includes(exclusiveOption);
      const otherSelected = value.filter((v) => v !== exclusiveOption);

      if (includesExclusive && otherSelected.length > 0) {
        // Both exclusive and others selected
        if (selectedValues.includes(exclusiveOption)) {
          // Previously had exclusive option only, now adding others -> remove exclusive, keep others
          form.setValue(name, otherSelected, setValueOptions);
        } else {
          // Previously had others only, now adding exclusive -> keep only the exclusive option
          form.setValue(name, [exclusiveOption], setValueOptions);
        }
      } else if (includesExclusive) {
        // Only exclusive selected
        form.setValue(name, [exclusiveOption], setValueOptions);
      } else if (selectedValues.includes(exclusiveOption)) {
        // Exclusive was previously selected, now user selected others -> remove exclusive
        form.setValue(name, otherSelected, setValueOptions);
      } else {
        // Normal update
        form.setValue(name, value, setValueOptions);
      }
    } else {
      // no exclusive option
      form.setValue(name, value, setValueOptions);
    }
  };

  const isOptionDisabled = () => {
    // Always return false, no visual disabling
    return false;
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col gap-y-1">
          <FormLabel className="font-normal text-textBlack80 text-sm inline-flex items-center gap-1">
            <span>{label}</span>
            {tooltip && <InfoTooltip text={tooltip} />}
            <span className="text-red-500">*</span>
          </FormLabel>

          <FormControl>
            <div
              className={`relative rounded-lg border
                ${fieldState.error ? 'border-red-500 !important' : 'border-borderGray'}
              `}
            >
              <ShadcnCustomMultiSelect
                buttonClassName={
                  buttonClassName ??
                  '!m-0 w-full text-sm text-textBlack font-[400] border-none rounded-lg py-3 px-5 h-auto'
                }
                placeholderTextClassName={placeholderTextClassName ?? 'm-0'}
                menuItemsClassName={menuItemsClassName ?? 'text-sm'}
                menuClassName={menuClassName ?? 'w-[300px] bg-white'}
                placeholder={placeholder}
                options={data.map((option) => ({
                  ...option,
                  disabled: isOptionDisabled(),
                }))}
                selectedValues={field.value}
                onChange={handleChange}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
