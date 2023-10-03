import React from 'react';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const Input = ({
  label,
  id,
  type = 'text',
  placeholder = '',
  required,
}: InputProps) => {
  return (
    <div className="pt-4 mb-5">
      <label
        htmlFor={id}
        className="mb-3 block text-xl font-semibold text-[#07074D]"
      >
        {label}
        {required ? (
          <span className="inline-block ml-1 text-base text-rose-400">*</span>
        ) : null}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-rose-400 focus:shadow-md"
      />
    </div>
  );
};

export default Input;
