import React from "react";

interface SmallSectionTitleProps {
  title: string;
  className?: string;
}
const SmallSectionTitle = ({ title, className }: SmallSectionTitleProps) => {
  return (
    <>
      <h2
        className={`font-normal text-xl xssm:text-[22px] xssm:leading-[28px] ssm:text-[28px] ssm:leading-[39.2px] ${className} font-brigends-expanded`}
      >
        {title}
      </h2>
    </>
  );
};

export default SmallSectionTitle;
