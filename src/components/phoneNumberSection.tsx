'use client';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'sonner';

import { SmallSecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyTextSemibold, LinkTypography } from '@/components/theme/typography';
import { appConfig } from '@/config';

const userMessages = {
  phoneNumberSubmited: 'Wij hebben uw telefoonnummer ontvangen, we nemen binnenkort contact met u op',
  phoneNumberError: 'Er is een fout opgetreden! Probeer het later opnieuw.',
};
export const PhoneNumberSection = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<{ phoneNumber: number }>();
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ phoneNumber }: { phoneNumber: number }) => {
      const apiResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/emails/phone`, {
        phone: phoneNumber,
      });
      console.log('api response', apiResponse);
    },
    onSuccess: () => {
      toast.success(userMessages.phoneNumberSubmited);
    },
    onError: () => {
      toast.error(userMessages.phoneNumberError);
    },
    onSettled: () => {
      reset();
    },
  });
  return (
    <div className="pb-6 pt-16 px-7 gap-5 flex flex-col  lg:px-0">
      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="flex flex-col lg:flex-row gap-[27px] p-5 items-center rounded-[10px] bg-lightGray border border-black20 border-opacity-20 "
      >
        <BodyTextSemibold className="text-center lg:text-start">
          Liever teruggebeld worden? Laat uw telefoonnummer achter.{' '}
        </BodyTextSemibold>
        <div className="flex flex-col gap-1">
          {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
          <input
            {...register('phoneNumber', {
              required: true,
              pattern: {
                value: /^(\+?\d{1,3}[- ]?)?(\(?\d{1,4}\)?[- ]?)?\d{1,4}([- ]?\d{1,4}){1,3}$/,
                message: 'Please enter a valid phone number',
              },
            })}
            className="bg-white border-black20 border-opacity-20 px-[20px] py-[12px] rounded-[8px]"
            placeholder="Telefoonnummer"
          />
        </div>
        <SmallSecondaryOutlinedBtn isLoading={isLoading}>Verzenden</SmallSecondaryOutlinedBtn>
      </form>
      <div className="flex w-full flex-col lg:flex-row  lg:items-center justify-center gap-[34px]">
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row   lg:items-center">
          <div className="flex items-center gap-3">
            <img src="/icons/email.png" />
            <LinkTypography className="pr-3 border-r border-r-black20 border-opacity-20 text-[13px]">
              {appConfig.email}
            </LinkTypography>
            <LinkTypography
              href={`mailto:${appConfig.email}`}
              className="fond-semibold text-[13px] hover:text-secondaryDefault"
            >
              E-mailen
            </LinkTypography>
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/phone.svg" />
            <LinkTypography
              href={`tel:${appConfig.phoneNumber}`}
              className="pr-3 border-r border-r-black20 border-opacity-20 text-[13px]"
            >
              {appConfig.phoneNumber}
            </LinkTypography>
            <LinkTypography
              href={`tel:${appConfig.phoneNumber}`}
              className="fond-semibold text-[13px] hover:text-secondaryDefault"
            >
              Bellen
            </LinkTypography>
          </div>
        </div>
      </div>
    </div>
  );
};
