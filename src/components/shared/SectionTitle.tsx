import React, { useEffect } from "react";
// import arrowRight from "../../../public/Images/section-title-arrow.svg";
import Link from "next/link";
import { useLocale } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div
      className={`mb-3 md:mb-4 lg:mb-6 flex items-center justify-between ${className}`}
    >
      <h2
        className={`font-normal text-xl xssm:text-[22px] xssm:leading-[28px] ssm:text-2xl md:text-3xl lg:text-4xl ${local==='ru' ? 'font-brigends-unbounded ': "font-brigends-expanded"}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {title}
      </h2>
      {buttonName ? (
        <Link
          href={`/${local}/${href}`}
          className="font-medium text-sm ssm:text-base md:text-lg hover:text-[#F37325] transition-all duration-300 text-black flex items-center gap-[6px]"
          onClick={onClick}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {buttonName}
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_238_3249)">
              <path
                d="M4.5 5V9.5C4.5 10.0967 4.73705 10.669 5.15901 11.091C5.58097 11.5129 6.15326 11.75 6.75 11.75H14.25M14.25 11.75L11.25 8.75M14.25 11.75L11.25 14.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_238_3249">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      ) : null}
    </div>
  );
};

export default SectionTitle;
