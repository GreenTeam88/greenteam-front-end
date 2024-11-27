import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepProps {
  onPrevious: () => void;
  onNext: (step?: number) => void;
  onUploadClick: (field: string) => void; // For uploading photos
  formData: any;
  updateFormData: (data: any) => void;
}

const schema = z.object({
  damageRepairsNeeded: z.string().nonempty({ message: 'Please select an option' }),
  numberOfRepairs: z.string().optional(),
});

const StepThreePart1: React.FC<StepProps> = ({ onPrevious, onNext, onUploadClick, formData, updateFormData }) => {
  const categories = ['Ja', 'Nee'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const numberOptions: Option[] = numbers.map((number) => ({
    value: number,
    label: number,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const watchYesNo = form.watch('damageRepairsNeeded');

  // Ensure totalPrice is always a number
  const [totalPrice, setTotalPrice] = useState<number>(Number(formData.totalCost) || 0);

  // Update totalPrice whenever formData.totalCost changes
  useEffect(() => {
    setTotalPrice(Number(formData.totalCost) || 0);
  }, [formData.totalCost]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData(data);
      onNext(); // Move to StepThreePart2
    })();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px] h-[430px] flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel jouw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px]">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Waar kunnen we je mee helpen?
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[45%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <SingleSelectDropdown
              data={categoryOptions}
              name="damageRepairsNeeded"
              label="Zijn er beschadigingen of reparaties nodig?"
              placeholder="Kies er een"
            />
          </div>

          {watchYesNo === 'Ja' && (
            <>
              <div className="flex flex-col">
                <label
                  className="text-xs cursor-pointer"
                  onClick={() => {
                    updateFormData(form.getValues());
                    onUploadClick('damagePhotos');
                  }}
                >
                  <span className="font-bold text-green-700 hover:text-green-900 hover:underline transition-all duration-200">
                    Foto uploaden
                  </span>
                  <span className="text-gray-400 font-sans"> (Niet verplicht)</span>
                </label>
              </div>

              <div className="flex flex-col">
                <SingleSelectDropdown
                  data={numberOptions}
                  name="numberOfRepairs"
                  label="Aantal beschadigingen of reparaties"
                  placeholder="Selecteer een aantal"
                />
              </div>
            </>
          )}

          {/* Total Price Display */}

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center ">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{totalPrice.toFixed(2)}</span>
            </div>
            <CreateButton className="bg-primaryDefault w-full " type="submit">
              Volgende
            </CreateButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StepThreePart1;
