import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import MultiSelectDropdown from '../../Getters/MultiSelectDropdown';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  onUploadClick: (field: string) => void; // For uploading photos
  formData: any;
  updateFormData: (data: any) => void;
}

const StepThree: React.FC<StepProps> = ({ onPrevious, onNext, onUploadClick, formData, updateFormData }) => {
  const damageRepairOptions = ['Ja', 'Nee']; // Options for damage repair
  const surfaceTypes = [
    'Traptredes',
    'Opstapjes',
    'Drempels',
    'Dorpels',
    'Vensterbanken',
    'Planken / Plateaus',
    'Salontafels / Eettafels',
  ]; // Types of surfaces

  const damageRepairDropdownOptions: Option[] = damageRepairOptions.map((option) => ({
    value: option,
    label: option === 'Ja' ? 'Ja (Let op: Berekening volgt na aanvraag)' : option,
  }));

  const surfaceTypeDropdownOptions: Option[] = surfaceTypes.map((surface) => ({
    value: surface,
    label: surface,
  }));

  const [isDamageRepairNeeded, setIsDamageRepairNeeded] = useState<boolean>(formData.damageRepairRequired === 'Ja');

  // Dynamic schema to make 'additionalSurfaces' required only if 'damageRepairRequired' is 'Ja'
  const schema = z.object({
    damageRepairRequired: z.string().nonempty({ message: 'Please select an option' }),
    additionalSurfaces: isDamageRepairNeeded
      ? z.array(z.string()).nonempty({ message: 'Please select one or more surfaces' })
      : z.array(z.string()).optional(),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const watchDamageRepairRequired = form.watch('damageRepairRequired');

  useEffect(() => {
    // Update the "isDamageRepairNeeded" state based on "damageRepairRequired"
    setIsDamageRepairNeeded(watchDamageRepairRequired === 'Ja');
  }, [watchDamageRepairRequired]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData({
        ...data,
        damageRepairRequired: data.damageRepairRequired,
        additionalSurfaces: data.additionalSurfaces || [],
      });
      onNext(); // Move to the next step
    })();
  };

  const damageRepairRequired = form.watch('damageRepairRequired');
  const additionalSurfaces = form.watch('additionalSurfaces');
  const isButtonDisabled = !damageRepairRequired || (damageRepairRequired === 'Ja' && !additionalSurfaces?.length);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel uw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px] shadow-md">
          <div className="flex flex-row items-center justify-between">
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-green-700 transition-all"
              onClick={onPrevious}
            >
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Een aantal vragen over de ruimte(s)
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[45%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          {/* Damage Repair Required Dropdown */}
          <div className="flex flex-col">
            <SingleSelectDropdown
              data={damageRepairDropdownOptions}
              name="damageRepairRequired"
              label="Zijn er beschadigingen of reparaties nodig?"
              placeholder="Maak een keuze"
            />
          </div>

          {/* Additional Surfaces (Shown if Damage Repair is Required) */}
          {watchDamageRepairRequired === 'Ja' && (
            <>
              <div className="flex flex-col w-44">
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
                <MultiSelectDropdown
                  data={surfaceTypeDropdownOptions}
                  name="additionalSurfaces"
                  label="Zijn er nog andere oppervlaktes?"
                  placeholder="Maak één of meerdere keuzes"
                />
              </div>
            </>
          )}

          {/* Total Price Display */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center items-center h-full">
              <span className="font-semibold text-lg text-green-700">Berekening volgt na aanvraag</span>
            </div>

            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
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

export default StepThree;
