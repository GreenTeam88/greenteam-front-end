import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import InputGetter from '@/components/calculators/Getters/InputGetter';
import MultiSelectDropdown from '@/components/calculators/Getters/MultiSelectDropdown';
import SingleSelectDropdown from '@/components/calculators/Getters/SingleSelectDropdown';
import CreateButton from '@/components/custom/CreateButton';
import { HeadlineSemibold } from '@/components/theme/typography';
import { Option } from '@/types';

interface StepProps {
  onPrevious: () => void;
  onNext: () => void;
  formData: {
    stepCosts: { [key: string]: number };
    totalCost: number;
    [key: string]: any;
  };
  updateFormData: (data: any) => void;
}

const schema = z.object({
  additionalSurfaces: z.array(z.string()).min(1, { message: 'Please select at least one surface' }).optional(),
  numberOfSteps: z.string().optional(),
  numberOfBumps: z.string().optional(),
  tableArea: z
    .string()
    .regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid number for table area' })
    .optional(),
  windowsSillsMeters: z
    .string()
    .regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid number for vensterbanken meters' })
    .optional(),
  planksMeters: z
    .string()
    .regex(/^\d+(\.\d+)?$/, { message: 'Please enter a valid number for planken meters' })
    .optional(),
});

const UNIT_PRICES: Record<string, number> = {
  Traptredes: 50,
  Opstapjes: 50,
  Drempels: 25,
  Dorpels: 25,
  Vensterbanken: 45,
  'Planken/Plateaus': 50,
  'Salontafels/Eettafels': 50,
};

const StepThreePart2: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const surfaceTypes = [
    { value: 'Nee', label: 'Nee' },
    { value: 'Traptredes', label: 'Traptredes', imageUrl: '/images/parketrenovatieSepThee/part2/Traptredes.webp' },
    { value: 'Opstapjes', label: 'Opstapjes', imageUrl: '/images/parketrenovatieSepThee/part2/Opstapjes.webp' },
    { value: 'Drempels', label: 'Drempels', imageUrl: '/images/parketrenovatieSepThee/part2/Drempels.webp' },
    { value: 'Dorpels', label: 'Dorpels', imageUrl: '/images/parketrenovatieSepThee/part2/Dorpels.webp' },
    {
      value: 'Vensterbanken',
      label: 'Vensterbanken',
      imageUrl: '/images/parketrenovatieSepThee/part2/Vensterbanken.webp',
    },
    {
      value: 'Planken/Plateaus',
      label: 'Planken/Plateaus',
      imageUrl: '/images/parketrenovatieSepThee/part2/Planken - Plateaus.webp',
    },
    {
      value: 'Salontafels/Eettafels',
      label: 'Salontafels/Eettafels',
      imageUrl: '/images/parketrenovatieSepThee/part2/Salontafels - Eettafels.webp',
    },
  ];

  const numberOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  const surfaces: Option[] = numberOptions.map((surface) => ({ value: surface, label: surface }));

  const surfaceTypeOptions: Option[] = surfaceTypes.map((surface) => ({
    value: surface.value,
    label:
      surface.value === 'Nee'
        ? surface.label
        : `${surface.label} - €${UNIT_PRICES[surface.value]}${
            surface.value === 'Salontafels/Eettafels'
              ? ' per m²'
              : surface.value === 'Vensterbanken' || surface.value === 'Planken/Plateaus'
                ? ' per m'
                : ''
          }`,
    imageUrl: surface.imageUrl,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData, // Use saved form data as default
    mode: 'onChange',
  });

  const watchSurfaces = useWatch({ control: form.control, name: 'additionalSurfaces' }) || [];
  const watchVensterbankenMeters = parseFloat(form.watch('windowsSillsMeters') || '0');
  const watchPlankenMeters = parseFloat(form.watch('planksMeters') || '0');
  const watchTableArea = parseFloat(form.watch('tableArea') || '0');
  const watchNumberOfTraptredesOpstapjes = parseFloat(form.watch('numberOfSteps') || '0');
  const watchNumberOfDrempelsDorpels = parseFloat(form.watch('numberOfBumps') || '0');

  // Calculate step cost using memoization
  const stepCost = useMemo(() => {
    let cost = 0;

    if (watchSurfaces.includes('Vensterbanken')) cost += watchVensterbankenMeters * UNIT_PRICES['Vensterbanken'];
    if (watchSurfaces.includes('Planken/Plateaus')) cost += watchPlankenMeters * UNIT_PRICES['Planken/Plateaus'];
    if (watchSurfaces.includes('Salontafels/Eettafels')) cost += watchTableArea * UNIT_PRICES['Salontafels/Eettafels'];
    if (watchSurfaces.includes('Traptredes') || watchSurfaces.includes('Opstapjes')) {
      cost += watchNumberOfTraptredesOpstapjes * UNIT_PRICES['Traptredes'];
    }
    if (watchSurfaces.includes('Drempels') || watchSurfaces.includes('Dorpels')) {
      cost += watchNumberOfDrempelsDorpels * UNIT_PRICES['Drempels'];
    }

    return cost;
  }, [
    watchSurfaces,
    watchVensterbankenMeters,
    watchPlankenMeters,
    watchTableArea,
    watchNumberOfTraptredesOpstapjes,
    watchNumberOfDrempelsDorpels,
  ]);

  // Update formData when stepCost changes
  useEffect(() => {
    const updatedStepCosts = {
      ...formData.stepCosts,
      step3Part2: stepCost,
    };

    updateFormData({
      ...formData,
      stepCosts: updatedStepCosts,
      totalCost: Object.values(updatedStepCosts).reduce((acc: number, cost: number) => acc + cost, 0),
    });
  }, [stepCost]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      updateFormData({
        ...formData,
        ...data,
        stepCosts: {
          ...formData.stepCosts,
          step3Part2: stepCost,
        },
      });

      onNext();
    })();
  };

  const isButtonDisabled =
    !watchSurfaces.length ||
    (watchSurfaces.includes('Nee') && !watchSurfaces.length) ||
    ((watchSurfaces.includes('Traptredes') || watchSurfaces.includes('Opstapjes')) &&
      !watchNumberOfTraptredesOpstapjes) ||
    ((watchSurfaces.includes('Drempels') || watchSurfaces.includes('Dorpels')) && !watchNumberOfDrempelsDorpels) ||
    (watchSurfaces.includes('Vensterbanken') && !watchVensterbankenMeters) ||
    (watchSurfaces.includes('Planken/Plateaus') && !watchPlankenMeters) ||
    (watchSurfaces.includes('Salontafels/Eettafels') && !watchTableArea);

  return (
    <FormProvider {...form}>
      <form className="w-[386px]  flex rounded-[4px] relative lg:px-0 z-10 flex-col">
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
              Waar kunnen we u mee helpen?
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
              <div className="w-[55%] h-full bg-green-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <MultiSelectDropdown
              data={surfaceTypeOptions}
              name="additionalSurfaces"
              label="Zijn er nog andere oppervlaktes?(1/2)"
              placeholder="Kies er een"
              exclusiveOption="Nee"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            {(watchSurfaces.includes('Traptredes') || watchSurfaces.includes('Opstapjes')) && (
              <SingleSelectDropdown
                data={surfaces}
                name="numberOfSteps"
                label="Traptrede(s)/opstapje(s)"
                placeholder="Kies er een"
              />
            )}
            {(watchSurfaces.includes('Drempels') || watchSurfaces.includes('Dorpels')) && (
              <SingleSelectDropdown
                data={surfaces}
                name="numberOfBumps"
                label="Drempel(s)/dorpel(s)"
                placeholder="Kies er een"
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            {watchSurfaces.includes('Vensterbanken') && (
              <InputGetter
                form={form}
                name="windowsSillsMeters"
                label="Vensterbank(en)"
                placeholder="Aantal meter(s)"
                type="text"
              />
            )}
            {watchSurfaces.includes('Planken/Plateaus') && (
              <InputGetter
                form={form}
                name="planksMeters"
                label="Plank(en)/Plateau(s)"
                placeholder="Aantal meter(s)"
                type="text"
              />
            )}
          </div>

          {watchSurfaces.includes('Salontafels/Eettafels') && (
            <InputGetter
              form={form}
              name="tableArea"
              label="Salontafel(s)/Eettafel(s)"
              placeholder="Vul hier het aantal m2 in"
              type="text"
            />
          )}

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{formData.totalCost?.toFixed(2)}</span>
            </div>
            <CreateButton
              className={`w-full ${
                isButtonDisabled
                  ? 'bg-gray-500'
                  : 'bg-primaryDefault border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300'
              }`}
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

export default StepThreePart2;

//adding a comment to push
