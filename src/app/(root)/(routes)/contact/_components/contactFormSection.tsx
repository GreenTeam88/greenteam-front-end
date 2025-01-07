'use client';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'sonner';

import { PrimaryBtn, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { PrimaryInput, PrimaryTextArea } from '@/components/theme/inputs';
import { BodyText, BodyTextSemibold, H1, LinkTypography } from '@/components/theme/typography';
import { appConfig } from '@/config';
import { cn } from '@/lib/tailwind';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-[40px] pr-[22px]">
      <div className="flex flex-col ">
        <H1 className="text-primaryDefault">Wij staan voor u klaar </H1>
        <BodyText className="max-w-[383px]">
          Heb je vragen of wil je meer informatie? Neem gerust contact met ons op, we helpen je graag verder!
        </BodyText>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex gap-[22px]  items-center">
          <img src="/icons/envelope.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>{appConfig.email}</BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href={`mailto:${appConfig.email}`}
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Email verzenden
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px]  items-center">
          <img src="/icons/phone.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>{appConfig.phoneNumber}</BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href={`tel:${appConfig.phoneNumber}`}
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Bellen
            </LinkTypography>
          </div>
        </div>
        <div className="flex items-center  gap-[22px]">
          <img src="/icons/locationIcon.svg" />
          <div className="flex items-center gap-[11px]">
            <BodyTextSemibold>
              Rivium Boulevard 2 (HQ)
              <br />
              2909 LK, Capelle aan den IJssel
            </BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href="https://maps.app.goo.gl/wSKHyT9dW8tugEVk6"
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Op de kaart bekijken
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px] ">
          <img src="/icons/clock.svg" className="h-fit" />
          <div className="flex flex-col">
            {appConfig.openingTimes.map((openingTime) => (
              <div className="flex" key={openingTime.day}>
                <BodyTextSemibold className="w-[120px]">{openingTime.day} :</BodyTextSemibold>
                <BodyText className="w-[120px]">{openingTime.time}</BodyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TopSection = () => {
  return (
    <div className="flex w-full gap-[11px] flex-col lg:flex-row items-center justify-center">
      <BodyText className="text-center lg:text-start">
        Misschien is je vraag al beantwoord in onze veelgestelde vragen.
      </BodyText>
      <SecondaryOutlinedBtnLink href="/veelgestelde-vragen">Veelgestelde vragen</SecondaryOutlinedBtnLink>
    </div>
  );
};

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: { firstName: '', lastName: '', email: '', phone: '', message: '' },
  });
  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/emails/phone`, data);
      console.log('response', response);
    },
    onSuccess() {
      toast.success('Bedankt! Je bericht is verzonden!');
    },
    onError() {
      toast.error('er is iets misgegaan! Probeer het opnieuw');
    },
    onSettled() {
      clearErrors();
      reset();
    },
  });
  return (
    <form
      onSubmit={handleSubmit((formData) => mutate(formData))}
      className="flex flex-col bg-white border border-black20 border-opacity-20 rounded-lg p-[22px] gap-[32px] max-w-full lg:w-[488px] "
    >
      {/* the succuss message  */}
      <div className={cn('w-full  items-center justify-center py-2 hidden', { flex: isSuccess && !isError })}>
        <BodyText className="text-green-500">Bedankt! Je bericht is verzonden! </BodyText>
      </div>
      {/* the error message  */}
      <div className={cn('w-full  items-center justify-center py-2 hidden', { flex: isError })}>
        <BodyText className="text-red-500">Er is iets misgegaan! Probeer het opnieuw </BodyText>
      </div>

      <PrimaryInput
        error={errors.firstName?.message}
        {...register('firstName', {
          required: 'First name is required',
          minLength: {
            value: 2,
            message: 'First name is too small',
          },
          pattern: {
            value: /^[a-zA-Z\s]+$/,
            message: 'First name cannot contain numbers or symbols',
          },
        })}
        labelText="Voornaam"
        placeholder="Voornaam"
      />

      <PrimaryInput
        error={errors.lastName?.message}
        {...register('lastName', {
          required: 'Last name is required',
          minLength: {
            value: 2,
            message: 'Last name is too small',
          },
          pattern: {
            value: /^[a-zA-Z\s]+$/,
            message: 'Last name cannot contain numbers or symbols',
          },
        })}
        labelText="Achternaam"
        placeholder="Achternaam"
      />

      <PrimaryInput
        error={errors.email?.message}
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address',
          },
        })}
        labelText="E-mailadres"
        placeholder="E-mailadres"
      />

      <PrimaryInput
        error={errors.phone?.message}
        type="number"
        {...register('phone', {
          required: 'Phone number is required',
          pattern: {
            value: /^\+?[\d\s\-]{7,15}$/,
            message: 'Please enter a valid phone number',
          },
        })}
        labelText="Telefoonnummer"
        placeholder="Telefoonnummer"
      />

      <PrimaryTextArea
        {...register('message', {
          required: 'Message is required',
          minLength: {
            value: 3,
            message: 'Message is too short',
          },
        })}
        labelText="Opmerking"
        placeholder="Opmerking"
      />

      <PrimaryBtn type="submit" isLoading={isLoading} className="w-full">
        Verzenden
      </PrimaryBtn>
    </form>
  );
};

export const ContactFormSection = () => {
  return (
    <div className="flex flex-col py-4 lg:py-10 px-5 gap-20">
      <TopSection />
      <div className="flex gap-12 w-full flex-col lg:flex-row justify-between max-w-[1400px]">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
