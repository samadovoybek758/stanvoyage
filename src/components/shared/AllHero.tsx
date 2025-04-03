"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

const AllHero = ({
  image,
  title,
  page,
  mbDefault = true,
  className,
}: {
  image: StaticImageData | string;  // 🟢 Rasm URL ham qabul qilinadi
  title: string;
  page: string;
  mbDefault?: boolean;
  className?: string
}) => {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <div
      className={`h-[400px]  md:h-[353px] rounded-bl-[50px] rounded-br-[50px] overflow-hidden lg:h-[353px] w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/60 before:z-10 ${
        mbDefault ? "mb-20 md:mb-28 lg:mb-[120px]" : ""
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={typeof image === "string" ? image : image.src}  // ✅ Statik rasm yoki URL farqlanadi
          alt="hero"
          fill
          quality={100}
          className="object-cover"
          objectPosition={`top ${className}`}
        />
      </div>
      <div className="w-full h-full gap-[14px] items-center flex-col flex justify-center relative z-20 px-[15px]">
        <h1
          className={`font-normal text-white text-2xl text-center md:text-4xl lg:text-[50px] lg:leading-[60px] unbo`}
        >
          {title}
        </h1>
        <div className="text-white text-base">
          <Link href="/">
            <span>{t("home")} </span>
          </Link>
          <span>/</span>
          <Link href={`/${locale}/${page.toLowerCase()}`}>
            <span>{title}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllHero;
