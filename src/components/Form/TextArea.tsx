import React from 'react';

interface TextAreaProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  required?: boolean;
}

const TextArea = ({
  label,
  id,
  placeholder = '',
  rows = 6,
  maxLength = 200,
  required,
}: TextAreaProps) => {
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
      <textarea
        rows={rows}
        maxLength={maxLength}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-rose-400 focus:shadow-md resize-none"
      />
    </div>
  );
};

export default TextArea;
