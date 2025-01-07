'use client';

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useState } from 'react';

import { BodyText } from './typography';

type PrimaryInputProps = {
  labelText?: string;
  required?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type PrimaryTextAreaProps = {
  labelText?: string;
  required?: boolean;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const SelectInput: React.FC<{
  placeHolder: string;
  values: string[];
  label?: string;
  required?: boolean;
  value: string;
  setValue: (val: string) => void;
}> = ({ placeHolder, value, required, label, values, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeInput = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    window.addEventListener('click', closeInput);
    return () => {
      window.removeEventListener('click', closeInput);
    };
  }, []);
  return (
    <div className="flex w-full flex-col gap-[11px]">
      {label && (
        <label className="bodyText">
          {label}
          {required && <span className="text-secondaryDefault">*</span>}
        </label>
      )}
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="flex  flex-col relative"
      >
        <div
          onClick={() => {
            setIsOpen((val) => !val);
          }}
          className="px-[20px] w-full flex justify-between cursor-pointer  border-black20 border rounded-lg  py-[12px] "
        >
          <BodyText> {value || placeHolder} </BodyText>
          <img src="/icons/dropDown.svg" />
        </div>
        {isOpen && (
          <div className="absolute w-[90%]  rounded-lg shadow-xl left-1/2 -translate-x-1/2 h-fit bg-white px-2 border z-30 top-14">
            {values.map((val) => (
              <div
                key={val}
                onClick={() => {
                  closeInput();
                  setValue(val);
                }}
                className="w-full cursor-pointer hover:bg-gray-50 py-2"
              >
                {val}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const PrimaryInput = forwardRef<HTMLInputElement, PrimaryInputProps>(
  ({ value, error, labelText, ...props }, ref) => {
    return (
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-[5px] w-full relative">
        <div className="flex w-full items-center justify-between">
          {' '}
          {labelText && (
            <label className="bodyText">
              {labelText}
              {props['aria-required'] && <span className="text-secondaryDefault">*</span>}
            </label>
          )}
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>

        <input
          ref={ref}
          className="px-[20px] w-full border-black20 border border-opacity-20 rounded-lg py-[12px]"
          value={value}
          {...props}
        />
      </div>
    );
  }
);

export const PrimaryTextArea = forwardRef<HTMLTextAreaElement, PrimaryTextAreaProps>(
  ({ value, labelText, error, ...props }, ref) => {
    return (
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-[11px] w-full relative">
        <div className="flex justify-between">
          {labelText && (
            <label className="bodyText">
              {labelText}
              {props['aria-required'] && <span className="text-secondaryDefault">*</span>}
            </label>
          )}
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
        <textarea
          ref={ref}
          className="px-[20px] w-full border-black20 border-opacity-20 border rounded-lg py-[12px]"
          value={value}
          {...props}
        />
      </div>
    );
  }
);

PrimaryInput.displayName = 'PrimaryInput';
PrimaryTextArea.displayName = 'PrimaryTextArea';
