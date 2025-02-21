import React from "react";

interface SectionTitleProps {
  title: string;
  buttonName?: string;
  onClick?: () => void;
  className?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  buttonName = "",
  onClick,
  className,
}) => {
  return (
    <div className={`mb-5 flex items-center justify-between ${className}`}>
      <h2 className="font-normal text-4xl">{title}</h2>
      {buttonName ? (
        <button
          className="py-[8.5px] px-7 border border-black font-normal text-base text-black"
          onClick={onClick}
        >
          {buttonName}
        </button>
      ) : null}
    </div>
  );
};

export default SectionTitle;
