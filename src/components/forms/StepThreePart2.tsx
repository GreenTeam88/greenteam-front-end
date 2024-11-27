import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';
import CreateButton from '../custom/CreateButton';
import InputGetter from './Getters/InputGetter';
import MultiSelectDropdown from './MultiSelectDropdown';
import SingleSelectDropdown from './SingleSelectDropdown';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const schema = z.object({
  additionalSurfaces: z.array(z.string()).min(1, { message: 'Please select at least one surface' }).optional(),
  numberOfTraptredesOpstapjes: z.string().optional(),
  numberOfDrempelsDorpels: z.string().optional(),
  tableArea: z.string().optional(),
  vensterbankenMeters: z.string().optional(),
  plankenMeters: z.string().optional(),
});

const UNIT_PRICES: Record<string, number> = {
  Traptredes: 50,
  Opstapjes: 50,
  Drempels: 25,
  Dorpels: 25,
  Vensterbanken: 45,
  'Planken/Plateaus': 45,
  'Salontafels/Eettafels': 50,
};

const StepThreePart2: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const surfaceTypes = [
    'Traptredes',
    'Opstapjes',
    'Drempels',
    'Dorpels',
    'Vensterbanken',
    'Planken/Plateaus',
    'Salontafels/Eettafels',
  ];

  const numberOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  const surfaces: Option[] = numberOptions.map((surface) => ({ value: surface, label: surface }));
  const surfaceTypeOptions: Option[] = surfaceTypes.map((surface) => ({
    value: surface,
    label: `${surface} - €${UNIT_PRICES[surface]}${
      surface === 'Salontafels/Eettafels'
        ? ' per m²'
        : surface === 'Vensterbanken' || surface === 'Planken/Plateaus'
          ? ' per m'
          : ''
    }`,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const watchSurfaces = form.watch('additionalSurfaces') || [];
  const watchVensterbankenMeters = parseFloat(form.watch('vensterbankenMeters') || '0');
  const watchPlankenMeters = parseFloat(form.watch('plankenMeters') || '0');
  const watchTableArea = parseFloat(form.watch('tableArea') || '0');
  const watchNumberOfTraptredesOpstapjes = parseFloat(form.watch('numberOfTraptredesOpstapjes') || '0');
  const watchNumberOfDrempelsDorpels = parseFloat(form.watch('numberOfDrempelsDorpels') || '0');

  const existingTotal = parseFloat(formData.totalCost) || 0; // Existing total from formData
  const [additionalCost, setAdditionalCost] = useState<number>(0);

  useEffect(() => {
    let updatedCost = 0;

    if (watchSurfaces.includes('Vensterbanken')) {
      updatedCost += watchVensterbankenMeters * UNIT_PRICES['Vensterbanken'];
    }
    if (watchSurfaces.includes('Planken/Plateaus')) {
      updatedCost += watchPlankenMeters * UNIT_PRICES['Planken/Plateaus'];
    }
    if (watchSurfaces.includes('Salontafels/Eettafels')) {
      updatedCost += watchTableArea * UNIT_PRICES['Salontafels/Eettafels'];
    }
    if (watchSurfaces.includes('Traptredes') || watchSurfaces.includes('Opstapjes')) {
      updatedCost += watchNumberOfTraptredesOpstapjes * UNIT_PRICES['Traptredes'];
    }
    if (watchSurfaces.includes('Drempels') || watchSurfaces.includes('Dorpels')) {
      updatedCost += watchNumberOfDrempelsDorpels * UNIT_PRICES['Drempels'];
    }

    setAdditionalCost(updatedCost);
  }, [
    watchSurfaces,
    watchVensterbankenMeters,
    watchPlankenMeters,
    watchTableArea,
    watchNumberOfTraptredesOpstapjes,
    watchNumberOfDrempelsDorpels,
  ]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      const finalTotal = existingTotal + additionalCost; // Add additional cost to existing total
      updateFormData({ ...data, totalCost: finalTotal });
      onNext();
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
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-[7px] py-[22px]">
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
              <div className="w-[60%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <MultiSelectDropdown
              data={surfaceTypeOptions}
              name="additionalSurfaces"
              label="Zijn er nog andere oppervlaktes?"
              placeholder="Kies er een"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            {watchSurfaces.includes('Traptredes') || watchSurfaces.includes('Opstapjes') ? (
              <SingleSelectDropdown
                data={surfaces}
                name="numberOfTraptredesOpstapjes"
                label="Traptrede(s)/opstapje(s)"
                placeholder="Kies er een"
              />
            ) : null}

            {watchSurfaces.includes('Drempels') || watchSurfaces.includes('Dorpels') ? (
              <SingleSelectDropdown
                data={surfaces}
                name="numberOfDrempelsDorpels"
                label="Drempel(s)/dorpel(s)"
                placeholder="Kies er een"
              />
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            {watchSurfaces.includes('Vensterbanken') ? (
              <InputGetter
                form={form}
                name="vensterbankenMeters"
                label="Vensterbank(en)"
                placeholder="Aantal meter(s)"
                type="text"
              />
            ) : null}

            {watchSurfaces.includes('Planken/Plateaus') ? (
              <InputGetter
                form={form}
                name="plankenMeters"
                label="Plank(en)/Plateau(s)"
                placeholder="Aantal meter(s)"
                type="text"
              />
            ) : null}
          </div>

          {watchSurfaces.includes('Salontafels/Eettafels') ? (
            <InputGetter
              form={form}
              name="tableArea"
              label="Salontafel(s)/Eettafel(s)"
              placeholder="Vul hier het aantal m2 in"
              type="text"
            />
          ) : null}

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">
                €{(existingTotal + additionalCost).toFixed(2)}
              </span>
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

export default StepThreePart2;
