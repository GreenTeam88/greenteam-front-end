import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { HeadlineSemibold } from '@/components/theme/typography';
import CreateButton from '../custom/CreateButton';
import UploadGetter from './Getters/UploadGetter';

interface UploadStepProps {
  onPrevious: () => void; // Prop to handle navigation to the previous step
  onUpload: (data: FieldValues) => void; // Function to handle file upload action
}

const UploadStep: React.FC<UploadStepProps> = ({ onPrevious, onUpload }) => {
  const form = useForm<FieldValues>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Trigger upload logic and move back to the previous step
    const formData = form.getValues();
    onUpload(formData);
    onPrevious();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[430px] flex flex-col rounded-[4px] relative lg:px-0 z-10 shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel jouw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full flex-1 rounded-b-[8px] flex flex-col px-[22px] gap-[33px] py-[22px]">
          <div
            className="flex flex-row items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
            onClick={onPrevious}
          >
            <ChevronLeft />
            <span className="text-gray-700 font-sans text-sm">Terug</span>
          </div>
          <div className="flex flex-col gap-[11px] flex-1 overflow-y-auto max-h-[300px]">
            <UploadGetter form={form} />
          </div>
          <CreateButton className="bg-primaryDefault w-full mt-auto" type="submit">
            Uploaden
          </CreateButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default UploadStep;
