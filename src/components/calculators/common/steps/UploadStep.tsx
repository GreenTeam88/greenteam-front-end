import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import UploadGetter from '@/components/calculators/Getters/UploadGetter';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';

interface UploadStepProps {
  onPrevious: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const UploadStep: React.FC<UploadStepProps> = ({ onPrevious, formData, updateFormData }) => {
  const form = useForm<FieldValues>();
  const [files, setFiles] = React.useState<File[]>(formData.files || []);

  // Update formData when files change
  useEffect(() => {
    if (formData.files !== files) {
      updateFormData({
        ...formData,
        files, // Update formData with the latest files
      });
      // console.log('Updated formData with files:', files);
    }
  }, [files, updateFormData]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formDataObject = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'files') {
        formDataObject.append(key, value as string);
      }
    });

    // Append all files under the 'files' key in formDataObject
    files.forEach((file) => {
      formDataObject.append('files', file);
    });

    // Log the merged FormData for verification
    // console.log('Merged FormData ');
    // for (const [key, value] of formDataObject.entries()) {
    //   console.log(`${key}:`, value);
    // }

    updateFormData({
      ...formDataObject,
    });
    // console.log('updated formdata', formData);

    onPrevious(); // Navigate to the previous step
  };
  return (
    <FormProvider {...form}>
      <form className="w-[386px] flex flex-col rounded-[4px] relative lg:px-0 z-10 shadow-lg">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full flex-1 rounded-b-[8px] flex flex-col px-[22px] gap-[33px] py-[22px] shadow-md">
          <div
            className="flex flex-row items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
            onClick={onPrevious}
          >
            <ChevronLeft />
            <span className="text-gray-700 font-sans text-sm">Terug</span>
          </div>

          <div className="flex flex-col gap-[11px] flex-1 overflow-y-auto max-h-[300px]">
            <UploadGetter
              form={form}
              onFilesChange={(uploadedFiles) => setFiles(uploadedFiles)} // Update files state
            />
          </div>
          <CreateButton
            className="bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300 w-full mt-auto"
            type="button"
            onClick={handleSubmit}
          >
            Uploaden
          </CreateButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default UploadStep;
