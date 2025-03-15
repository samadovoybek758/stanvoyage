import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <input
        className={`w-full bg-[#F7F7F7] font-normal text-base placeholder:text-[#9F9F9F] rounded-lg outline-none py-[14.5px] sm:py-[18px] px-[20px] text-[#080808] border  ${
          error ? "border-[#F37325]" : "border-transparent"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-[#F37325] text-sm">{error}</span>}
    </div>
  );
};

export default Input;
