import Image from "next/image";
import React from "react";
import arrowRight from "../../../public/Images/section-title-arrow.svg";
import Link from "next/link";
import { useLocale } from "next-intl";
interface SectionTitleProps {
  title: string;
  buttonName?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  buttonName = "",
  onClick,
  className,
  href = "",
}) => {
  const local = useLocale();
  return (
    <div className={`mb-6 flex items-center justify-between ${className}`}>
      <h2 className="font-normal text-4xl font-brigends-expanded">{title}</h2>
      {buttonName ? (
        <Link
          href={`${local}/${href}`}
          className=" font-medium text-lg text-black flex items-center gap-[6px]"
          onClick={onClick}
        >
          {buttonName}
          <Image src={arrowRight} alt="arrow-right" width={24} height={24} />
        </Link>
      ) : null}
    </div>
  );
};

export default SectionTitle;
