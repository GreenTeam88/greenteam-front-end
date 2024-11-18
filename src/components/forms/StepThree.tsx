import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import MultiSelectDropdown from './MultiSelectDropdown';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepProps {
  onNext: () => void;
  formData: any; // Centralized form data passed down
  updateFormData: (data: any) => void; // Function to update the centralized state
}

const schema = z.object({
  damageRepairsNeeded: z.string().nonempty({ message: 'Please select an option' }),
  additionalSurfaces: z.array(z.string()).min(1, 'Select at least one surface if applicable').optional(),
});

const StepThree: React.FC<StepProps> = ({ onNext, formData, updateFormData }) => {
  const categories = ['Ja', 'Nee'];
  const oppervlaktes = [
    'Traptredes',
    'Opstapjes',
    'Drempels',
    'Dorpels',
    'Vensterbanken',
    'Planken/Plateaus',
    'Slaontafels/ettafels', // Please check this item, seems like a typo
  ];

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const oppervlaktesO: Option[] = oppervlaktes.map((oppervlakte) => ({
    value: oppervlakte,
    label: oppervlakte,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData, // Initialize form with formData
    mode: 'onChange',
  });

  const watchYesNo = form.watch('damageRepairsNeeded'); // Watch the value of the first dropdown

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData(data); // Update central state with new data
      onNext(); // Move to the next step
    })();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit}
        className="w-[386px] h-[430px] flex rounded-[4px] relative lg:px-0 z-10 flex-col shadow-lg"
      >
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel jouw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-[25px] py-[22px]">
          <div className="flex flex-row items-center justify-between">
            <span className="text-gray-400 font-sans text-sm">Waar kunnen we je mee helpen?</span>
            <div className="w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[55%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <SingleSelectDropdown
              data={categoryOptions}
              name="damageRepairsNeeded"
              label="Zijn er beschadigingen of reparaties nodig?"
              placeholder="Kies er een"
            />

            {/* Conditionally render additional UI elements if "Ja" is selected */}
            {watchYesNo === 'Ja' && (
              <div className="flex flex-col mt-3">
                <label className="text-xs">
                  <span className="font-bold text-green-700">Foto uploaden</span>
                  <span className="text-gray-400 font-sans"> (Niet verplicht)</span>
                </label>
              </div>
            )}
          </div>

          <div className="flex flex-col ">
            <MultiSelectDropdown
              data={oppervlaktesO}
              name="additionalSurfaces"
              label="Zijn er nog andere oppervlaktes?"
              placeholder="Kies er een"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€0,00</span>
            </div>
            <CreateButton className="bg-primaryDefault w-full" type="submit">
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepThree;
