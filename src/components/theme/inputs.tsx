'use client';

import { HTMLAttributes, useEffect, useState } from 'react';

import { BodyText } from './typography';

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

export const PrimaryInput: React.FC<
  {
    label?: string;
    value: string | number;
    setValue: (val: string) => void;
  } & HTMLAttributes<HTMLInputElement>
> = ({ value, setValue, label, ...props }) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-[11px] w-full relative">
      {label && (
        <label className="bodyText">
          {label}
          {props['aria-required'] && <span className="text-secondaryDefault">*</span>}
        </label>
      )}
      <input
        className="px-[20px]  w-full border-black20 border rounded-lg  py-[12px] "
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...props}
      ></input>
    </div>
  );
};
