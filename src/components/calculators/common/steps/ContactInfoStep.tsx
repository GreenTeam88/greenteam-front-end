import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, X } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import InputGetter from '@/components/calculators/Getters/InputGetter';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';

interface ContactInfoStepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: any; // Centralized form data
  updateFormData: (data: any) => void; // Function to update the centralized state
  onSubmit: (updatedform: any) => void; // Final submission handler
}

// Define the schema using Zod
const schema = z.object({
  Email: z.string().email({ message: 'Invalid email address' }).nonempty({ message: 'Email is required' }),
  PhoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .nonempty({ message: 'Phone number is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
  Postcode: z.string().nonempty({ message: 'Postcode is required' }),
  streetAndHouseNumber: z.string().nonempty({ message: 'Street and house number are required' }),
  city: z.string().nonempty({ message: 'City is required' }),
});

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({
  onPrevious,
  onNext,
  formData,
  updateFormData,
  onSubmit,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); // State for button disable/enable

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData, // Initialize form with existing data
    mode: 'onChange', // Watch input fields on change
  });

  // Create preview URLs for uploaded files
  const uploadedFiles: File[] = formData.files || [];
  const filePreviewUrls = useMemo(() => {
    return uploadedFiles.map((file: File) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
  }, [uploadedFiles]);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      filePreviewUrls.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [filePreviewUrls]);

  // Handle removing an uploaded file
  const handleRemoveFile = (index: number) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    updateFormData({ ...formData, files: updatedFiles });
  };

  // Watch only the required fields individually
  const watchEmail = form.watch('Email');
  const watchPhoneNumber = form.watch('PhoneNumber');
  const watchLastName = form.watch('lastName');
  const watchPostcode = form.watch('Postcode');
  const watchStreetAndHouseNumber = form.watch('streetAndHouseNumber');
  const watchCity = form.watch('city');

  // Effect to check if all required fields are filled
  useEffect(() => {
    // Check if all required fields are filled
    const allFieldsValid =
      watchEmail && watchPhoneNumber && watchLastName && watchPostcode && watchStreetAndHouseNumber && watchCity;

    setIsButtonDisabled(!allFieldsValid); // Disable button if any required field is missing
  }, [watchEmail, watchPhoneNumber, watchLastName, watchPostcode, watchStreetAndHouseNumber, watchCity]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    form.handleSubmit((data) => {
      // Merge current form data with contact info
      const updatedFormData = { ...formData, ...data, isFinalSubmission: true };

      // Persist the updated form data in state
      updateFormData(updatedFormData);

      // Call the final submission handler with the updated data
      onSubmit(updatedFormData); // Pass the updated data explicitly

      // Navigate to the next step
      onNext();
    })();
  };

  const totalCost = typeof formData.totalCost === 'number' ? formData.totalCost : 0; // Ensure totalCost is a number

  return (
    <FormProvider {...form}>
      <form className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col ">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-lg">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">Contactinformatie</span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[100%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Uploaded Images Preview */}
          {uploadedFiles.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-600 font-medium">Geüploade foto&apos;s ({uploadedFiles.length})</span>
              <div className="flex flex-wrap gap-2">
                {filePreviewUrls.map((preview, index) => (
                  <div key={index} className="relative group">
                    <div className="w-16 h-16 rounded-md overflow-hidden border border-gray-200">
                      <img
                        src={preview.url}
                        alt={preview.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <InputGetter form={form} name="Email" label="E-mailadres" placeholder="Vul hier in" type="email" />
          <InputGetter form={form} name="PhoneNumber" label="Telefoonnummer" placeholder="Vul hier in" type="text" />
          <div className={'grid grid-cols-2 gap-x-6 gap-y-2'}>
            <InputGetter form={form} name="lastName" label="Achternaam" placeholder="Vul hier in" type="text" />
            <InputGetter form={form} name="Postcode" label="Postcode" placeholder="Vul hier in" type="text" />
            <InputGetter
              form={form}
              name="streetAndHouseNumber"
              label="Straat / Huisnummer"
              placeholder="Vul hier in"
              type="text"
            />
            <InputGetter form={form} name="city" label="Woonplaats" placeholder="Vul hier in" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            {formData.isOnRequest ? (
              <div className="flex justify-center items-center h-full">
                <span className="font-semibold text-lg text-green-700">Berekening volgt na aanvraag</span>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center text-center">
                  <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
                  <span className="font-semibold text-lg text-green-700">€{totalCost.toFixed(2)}</span>
                </div>
              </>
            )}
            <CreateButton
              className={`w-full ${isButtonDisabled ? 'bg-gray-500' : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'}`}
              type="button"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactInfoStep;
