import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;       
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button: React.FC<ButtonProps> = ({
  text = "",
  onClick = () => {},
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`text-[#FFFFFF] py-5 font-semibold text-lg bg-[#F37325] rounded-lg ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
