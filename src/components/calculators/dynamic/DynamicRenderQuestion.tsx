'use client';

import { useFormContext } from 'react-hook-form';

import InputGetter from '@/components/calculators/Getters/InputGetter';
import MultiSelectDropdown from '@/components/calculators/Getters/MultiSelectDropdown';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import UploadGetter from '@/components/calculators/Getters/UploadGetter';
import { CustomTextarea } from '@/components/custom/CustomTextarea';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import InfoTooltip from '@/components/ui/info-tooltip';
import { Question, StepOption } from '@/lib/calculatorApi';
import { Option } from '@/types';

interface DynamicRenderQuestionProps {
  question: Question;
  onFilesChange?: (files: File[]) => void;
}

// Convert API StepOption to frontend Option format
function mapOptionsToFrontend(options: StepOption[]): Option[] {
  return options.map((opt) => ({
    value: opt.value,
    label: opt.label,
    imageUrl: opt.imageUrl || undefined,
    isExclusive: opt.isExclusive,
    tooltip: opt.hasTooltip && opt.tooltip ? opt.tooltip : undefined,
  }));
}

// Pull a question-level tooltip only when the admin has explicitly enabled it
function questionTooltip(question: Question): string | undefined {
  return question.hasTooltip && question.tooltip ? question.tooltip : undefined;
}

// Find exclusive option value from options list
function findExclusiveOption(options: StepOption[]): string | undefined {
  const exclusive = options.find((opt) => opt.isExclusive);
  return exclusive?.value;
}

export default function DynamicRenderQuestion({ question, onFilesChange }: DynamicRenderQuestionProps) {
  const form = useFormContext();

  if (!form || !form.control) {
    throw new Error('DynamicRenderQuestion must be used within a FormProvider.');
  }

  const options = mapOptionsToFrontend(question.options);

  const tooltip = questionTooltip(question);

  switch (question.type) {
    case 'SELECT':
      return (
        <SingleSelectDropdown
          name={question.id}
          label={question.question}
          tooltip={tooltip}
          placeholder={question.placeholder || 'Selecteer een optie'}
          data={options}
          alertLabelText={question.required ? '*' : ''}
        />
      );

    case 'CHECKBOX': {
      const exclusiveOption = findExclusiveOption(question.options);
      return (
        <MultiSelectDropdown
          name={question.id}
          label={question.question}
          tooltip={tooltip}
          placeholder={question.placeholder || 'Selecteer opties'}
          data={options}
          exclusiveOption={exclusiveOption}
        />
      );
    }

    case 'NUMBER':
      return (
        <InputGetter
          form={form}
          name={question.id}
          label={`${question.question}${question.unit ? ` (${question.unit})` : ''}`}
          tooltip={tooltip}
          placeholder={question.placeholder || (question.unit ? `Voer ${question.unit} in` : 'Voer een getal in')}
          type="number"
          min={question.minValue ?? 0}
          max={question.maxValue ?? undefined}
        />
      );

    case 'TEXT':
      return (
        <InputGetter
          form={form}
          name={question.id}
          label={question.question}
          tooltip={tooltip}
          placeholder={question.placeholder || 'Voer tekst in'}
          type="text"
        />
      );

    case 'TEXT_ONLY':
      return (
        <InputGetter
          form={form}
          name={question.id}
          label={question.question}
          tooltip={tooltip}
          placeholder={question.placeholder || 'Voer tekst in (alleen letters)'}
          type="text"
        />
      );

    case 'FILE_UPLOAD':
      return (
        <UploadGetter
          form={form}
          name={question.id}
          label={question.question}
          tooltip={tooltip}
          required={question.required}
          onFilesChange={onFilesChange || (() => {})}
        />
      );

    default:
      // Fallback for unknown types - render as text input
      return (
        <FormField
          control={form.control}
          name={question.id}
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-y-2">
              <FormLabel className="font-normal text-textBlack80 text-sm inline-flex items-center gap-1">
                <span>{question.question}</span>
                {tooltip && <InfoTooltip text={tooltip} />}
                {question.required && <span className="text-red-500">*</span>}
              </FormLabel>
              <FormControl>
                <CustomTextarea
                  value={field.value || ''}
                  setValue={(value: string) => form.setValue(question.id, value)}
                  className={`!m-0 !ring-transparent !outline-transparent h-auto py-3 px-5 rounded-lg text-sm text-textBlack ${
                    fieldState.error ? 'border-red-500' : 'border border-borderGray'
                  }`}
                  placeholder={question.placeholder || 'Voer uw antwoord in'}
                />
              </FormControl>
            </FormItem>
          )}
        />
      );
  }
}
