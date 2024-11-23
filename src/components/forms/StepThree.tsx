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
  formData: any; // Centralized form data passed down
  updateFormData: (data: any) => void; // Function to update the centralized state
}

// Pricing constants
const UNIT_PRICES: { [key: string]: number } = {
  Traptredes: 50,
  Opstapjes: 50,
  Drempels: 25,
  Dorpels: 25,
  Vensterbanken: 0,
  'Planken/Plateaus': 0,
  'Salontafels/Eettafels': 50, // Per m²
};

const schema = z
  .object({
    damageRepairsNeeded: z.string().nonempty({ message: 'Please select an option' }),
    additionalSurfaces: z.array(z.string()).min(1, { message: 'Please select at least one surface' }).optional(),
    numberOfTraptredesOpstapjes: z.string().optional(),
    numberOfDrempelsDorpels: z.string().optional(),
    tableArea: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Validation for Traptredes/Opstapjes
    if (data.additionalSurfaces?.includes('Traptredes') || data.additionalSurfaces?.includes('Opstapjes')) {
      if (!data.numberOfTraptredesOpstapjes || !/^\d+$/.test(data.numberOfTraptredesOpstapjes)) {
        ctx.addIssue({
          code: 'custom',
          path: ['numberOfTraptredesOpstapjes'],
          message: 'Please enter a valid number for Traptredes/Opstapjes',
        });
      }
    }

    // Validation for Drempels/Dorpels
    if (data.additionalSurfaces?.includes('Drempels') || data.additionalSurfaces?.includes('Dorpels')) {
      if (!data.numberOfDrempelsDorpels || !/^\d+$/.test(data.numberOfDrempelsDorpels)) {
        ctx.addIssue({
          code: 'custom',
          path: ['numberOfDrempelsDorpels'],
          message: 'Please enter a valid number for Drempels/Dorpels',
        });
      }
    }

    // Validation for Salontafels/Eettafels
    if (data.additionalSurfaces?.includes('Salontafels/Eettafels')) {
      if (!data.tableArea || !/^\d+(\.\d+)?$/.test(data.tableArea)) {
        ctx.addIssue({
          code: 'custom',
          path: ['tableArea'],
          message: 'Please enter a valid area for Salontafels/Eettafels',
        });
      }
    }
  });

const StepThree: React.FC<StepProps> = ({ onPrevious, onNext, formData, updateFormData }) => {
  const categories = ['Ja', 'Nee'];
  const numberOfSurfacesOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  const surfaceTypes = [
    'Traptredes',
    'Opstapjes',
    'Drempels',
    'Dorpels',
    'Vensterbanken',
    'Planken/Plateaus',
    'Salontafels/Eettafels',
  ];

  const surfaces: Option[] = numberOfSurfacesOptions.map((surface) => ({
    value: surface,
    label: surface,
  }));

  const categoryOptions: Option[] = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const surfaceTypeOptions: Option[] = surfaceTypes.map((surface) => ({
    value: surface,
    label: `${surface} - €${UNIT_PRICES[surface]}${surface === 'Salontafels/Eettafels' ? ' per m²' : ''}`,
  }));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData, // Initialize form with formData
    mode: 'onChange',
  });

  const [totalPrice, setTotalPrice] = useState<number>(parseFloat(formData.totalCost) || 0); // Ensure initial value is numeric

  const watchYesNo = form.watch('damageRepairsNeeded'); // Watch the value of the first dropdown
  const watchSurfaces = form.watch('additionalSurfaces') || [];
  const watchNumberOfTraptredesOpstapjes = parseInt(form.watch('numberOfTraptredesOpstapjes') || '0', 10);
  const watchNumberOfDrempelsDorpels = parseInt(form.watch('numberOfDrempelsDorpels') || '0', 10);
  const watchTableArea = parseFloat(form.watch('tableArea') || '0');

  const calculateStepThreeTotal = () => {
    let stepThreeCost = 0;

    // Use UNIT_PRICES for cost calculation
    watchSurfaces.forEach((surface: string) => {
      if (surface === 'Salontafels/Eettafels') {
        // Calculate cost for Salontafels/Eettafels based on area
        stepThreeCost += watchTableArea * (UNIT_PRICES[surface] || 0);
      }
    });

    // Calculate combined cost for Traptredes/Opstapjes
    if (watchSurfaces.includes('Traptredes') || watchSurfaces.includes('Opstapjes')) {
      stepThreeCost += watchNumberOfTraptredesOpstapjes * UNIT_PRICES['Traptredes'];
    }

    // Calculate combined cost for Drempels/Dorpels
    if (watchSurfaces.includes('Drempels') || watchSurfaces.includes('Dorpels')) {
      stepThreeCost += watchNumberOfDrempelsDorpels * UNIT_PRICES['Drempels'];
    }

    return stepThreeCost;
  };

  // Recalculate the total price dynamically
  useEffect(() => {
    const stepThreeCost = calculateStepThreeTotal();
    const newTotalPrice = parseFloat(formData.totalCost) + (watchYesNo === 'Ja' ? stepThreeCost : 0);
    setTotalPrice(newTotalPrice);
  }, [
    formData.totalCost,
    watchYesNo,
    watchSurfaces,
    watchNumberOfTraptredesOpstapjes,
    watchNumberOfDrempelsDorpels,
    watchTableArea,
  ]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit((data) => {
      const stepThreeCost = calculateStepThreeTotal();
      const finalTotal = parseFloat(formData.totalCost) + (watchYesNo === 'Ja' ? stepThreeCost : 0);

      updateFormData({
        ...data,
        stepThreeCost,
        totalCost: finalTotal,
      });

      onNext();
    })();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="w-[386px] h-[430px] flex rounded-[4px] relative lg:px-0 z-10 flex-col ">
        <div className="bg-primaryDefault rounded-t-[8px] flex items-center justify-center text-white py-[22px] w-full">
          <div className="text-center">
            <HeadlineSemibold className="w-full">Snel jouw prijs berekenen!</HeadlineSemibold>
          </div>
        </div>
        <div className="bg-white w-full rounded-b-[8px] flex flex-col px-[22px] gap-y-3 py-[22px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-[5px] cursor-pointer" onClick={onPrevious}>
              <ChevronLeft />
            </div>
            <span className="flex-1 text-gray-400 font-sans text-sm whitespace-nowrap">
              Waar kunnen we je mee helpen?
            </span>
            <div className="flex w-[25%] h-[6px] bg-gray-300 rounded-full ml-4">
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
          </div>

          {watchYesNo === 'Ja' && (
            <>
              <div className="flex flex-col">
                <label className="text-xs">
                  <span className="font-bold text-green-700 hover:text-green-900 hover:underline cursor-pointer transition-all duration-200">
                    Foto uploaden
                  </span>
                  <span className="text-gray-400 font-sans"> (Niet verplicht)</span>
                </label>
              </div>

              <div className="flex flex-col">
                <MultiSelectDropdown
                  data={surfaceTypeOptions}
                  name="additionalSurfaces"
                  label="Zijn er nog andere oppervlaktes?"
                  placeholder="Kies er een"
                />
              </div>

              <div className={'grid grid-cols-2 gap-x-6 gap-y-2'}>
                {watchSurfaces.includes('Traptredes') || watchSurfaces.includes('Opstapjes') ? (
                  <div className="flex flex-col">
                    <SingleSelectDropdown
                      data={surfaces}
                      name="numberOfTraptredesOpstapjes"
                      label="Aantal traptredes/opstapjes?"
                      placeholder="Kies er een"
                    />
                  </div>
                ) : null}

                {watchSurfaces.includes('Drempels') || watchSurfaces.includes('Dorpels') ? (
                  <div className="flex flex-col">
                    <SingleSelectDropdown
                      data={surfaces}
                      name="numberOfDrempelsDorpels"
                      label="Aantal drempels/dorpels?"
                      placeholder="Kies er een"
                    />
                  </div>
                ) : null}
              </div>

              {watchSurfaces.includes('Salontafels/Eettafels') ? (
                <div className="flex flex-col">
                  <InputGetter
                    form={form}
                    name="tableArea"
                    label="Tafeloppervlakte in m² (voor Salontafel/Eettafel):"
                    placeholder="Vul hier in"
                    type="text"
                  />
                </div>
              ) : null}
            </>
          )}

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-green-700">Totaal incl. btw.</span>
              <span className="font-semibold text-lg text-green-700">€{totalPrice.toFixed(2)}</span>
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
