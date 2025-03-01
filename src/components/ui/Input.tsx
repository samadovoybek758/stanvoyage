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
        className={`w-full bg-[#F7F7F7] font-normal text-base placeholder:text-[#9F9F9F] rounded-xl outline-none py-[18px] px-[20px] text-[#080808] ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;
