import React from "react";

interface TextareaProps {
  label?: string;
  error?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  name,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  ...props
}) => {
  console.log(error);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full bg-[#F7F7F7] font-normal text-base placeholder:text-[#9F9F9F] rounded-lg outline-none py-[18px] px-[20px] text-[#080808] max-h-[116px] min-h-[116px] resize-none border ${
          error ? "border-[#F37325]" : "border-transparent"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-[#F37325] text-sm">{error}</span>}
    </div>
  );
};

export default Textarea;
