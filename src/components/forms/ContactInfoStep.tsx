import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import CreateButton from '../custom/CreateButton';
import InputGetter from './Getters/InputGetter';

interface ContactInfoStepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: any; // Centralized form data
  updateFormData: (data: any) => void; // Function to update the centralized state
  onSubmit: () => void; // Final submission handler
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
      updateFormData(data); // Update centralized state with this step's data
      onSubmit(); // Handle the final submission
      onNext(); // Navigate to the Thank You step
    })();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[490px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs bereken!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-4 py-[22px]">
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
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{formData.totalCost?.toFixed(2) || '0,00'}</span>
            </div>
            <CreateButton
              className={`w-full ${isButtonDisabled ? 'bg-gray-500' : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'}`}
              type="submit"
              disabled={isButtonDisabled}
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
