import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Option[];
  placeholder?: string;
  name?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  className,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <div className="relative w-full">
        <select
          className={`w-full appearance-none bg-[#F7F7F7] font-normal text-base text-[#080808] placeholder:text-[#9F9F9F] rounded-lg outline-none py-[18px] px-[20px] cursor-pointer ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
          {...props}
        >
          <option disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#F7F7F7] text-[#080808] cursor-pointer"
            >
              {option.label}
            </option>
          ))}
        </select>
        {/* O'ng tomondagi arrow icon */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-[#9F9F9F]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Select;
