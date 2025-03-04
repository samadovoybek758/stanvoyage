import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classNames from "classnames";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  className?: string;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  label,
  error,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <PhoneInput
        country={"uz"}
        value={value}
        onChange={onChange}
        containerClass={classNames("w-full", className)}
        placeholder="Telefon raqamingizni kiriting"
        inputClass={classNames(
          "!w-full !bg-[#F7F7F7] !font-normal !text-base placeholder:!text-[#9F9F9F] !rounded-lg !outline-none !py-[18px] !px-[20px] !text-[#080808]"
        )}
        buttonClass="bg-gray-200 rounded-lg"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default CustomPhoneInput;
