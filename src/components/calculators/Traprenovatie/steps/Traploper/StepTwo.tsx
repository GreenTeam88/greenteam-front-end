import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import SingleSelectDropdown from '../../../Getters/SingleSelectDropdown';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: {
    selectedCloseStairs?: string;
    selectedCloseStairSteps?: string;
  };
  updateFormData: (data: any) => void;
}

const schema = z
  .object({
    selectedCloseStairs: z.string().nonempty('Please select at least one option for close stairs'),
    selectedCloseStairSteps: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.selectedCloseStairs === '0 (geen dichte trappen)') {
        // 0 means second field can be empty => valid
        return true;
      }
      // If not 0, user must pick a value for selectedCloseStairSteps
      return data.selectedCloseStairSteps !== undefined && data.selectedCloseStairSteps.trim() !== '';
    },
    {
      message: 'Select how many steps you have in your close stairs',
      path: ['selectedCloseStairSteps'],
    }
  );

const StepTwo: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const CloseStairs = [
    '0 (geen dichte trappen)',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15+',
  ];

  const CloseStairSteps = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30+',
  ];

  const CloseStairsCountOptions: Option[] = CloseStairs.map((data) => ({
    value: data,
    label: data,
  }));

  const CloseStairsStepsCountOption: Option[] = CloseStairSteps.map((data) => ({
    value: data,
    label: data,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedCloseStairs: formData.selectedCloseStairs || '',
      selectedCloseStairSteps: formData.selectedCloseStairSteps || '',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  // Watch inputs
  const selectedCloseStairs = useWatch({ control, name: 'selectedCloseStairs' }) || '';
  const selectedCloseStairSteps = useWatch({ control, name: 'selectedCloseStairSteps' }) || '';

  // Update formData when inputs change
  useEffect(() => {
    const totalSteps =
      selectedCloseStairs !== '0 (geen dichte trappen)' && selectedCloseStairSteps !== ''
        ? parseInt(selectedCloseStairSteps, 10) || 0
        : 0;

    updateFormData({
      ...formData,
      selectedCloseStairs,
      selectedCloseStairSteps,
      closeStairTotalSteps: totalSteps, // Adding total steps to formData for close stairs
    });
  }, [selectedCloseStairs, selectedCloseStairSteps]);

  const onSubmit = () => {
    onNext();
  };

  // Button is disabled if form is invalid
  const isButtonDisabled = !isValid;

  return (
    <FormProvider {...form}>
      <form className="w-[391px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] h-full shadow-md">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Een aantal vragen over de trappen
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[20%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <SingleSelectDropdown
              data={CloseStairsCountOptions}
              name="selectedCloseStairs"
              label="Aantal dichte trap(pen)"
              placeholder="Maak één of meerdere keuzes"
              alertLabelText="*(open trap(en) niet mogelijk)"
            />
            {errors.selectedCloseStairs && (
              <p className="text-red-600 text-sm">{errors.selectedCloseStairs.message as string}</p>
            )}
          </div>
          {selectedCloseStairs !== '0 (geen dichte trappen)' && (
            <div className="flex flex-col gap-[11px]">
              <SingleSelectDropdown
                data={CloseStairsStepsCountOption}
                name="selectedCloseStairSteps"
                label="Aantal trede(s) in de dichte trap(pen)"
                placeholder="Maak een keuze"
                disabled={selectedCloseStairs === '0 (geen dichte trappen)'}
              />
              {errors.selectedCloseStairSteps && (
                <p className="text-red-600 text-sm">{errors.selectedCloseStairSteps.message as string}</p>
              )}
            </div>
          )}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center text-center items-center">
              <span className="font-semibold text-lg text-green-700">Berekening volgt in stap 3...</span>
            </div>
            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
              type="button"
              disabled={isButtonDisabled}
              onClick={handleSubmit(onSubmit)}
            >
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepTwo;
