"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoSvg from "../../../public/Images/stanvoyage/Logo.svg";
import logoPng from '../../../public/Images/stanvoyage/Logo.png'
import { navigations } from "../../../public/static/Index";
import { useLocale, useTranslations } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";
import LanguageDropdown from "../ui/LanguagesDropdown";
import MenuDropdown from "../ui/MenuDropdown";
const Header = () => {
  const t = useTranslations("header");
  const segment = useSelectedLayoutSegment();
  const homePage = segment === null ? "/" : "";
  const locale = useLocale();
  



  const [logo, setLogo] = useState(logoSvg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogo(logoPng); 
      } else {
        setLogo(logoSvg);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container relative">
        <nav className="flex items-center justify-between backdrop-blur-md bg-black/20  px-[30px] py-[14px] rounded-xl">
          <div className="max-w-[95px] max-h-[47px]">
            <Link href={`/${locale}`}>
              <Image
                src={logo}
                quality={100}
                alt="logo"
                width={0}
                height={0}
              />
            </Link>
          </div>
          <ul className="hidden xl:flex items-center gap-[40px]">
            {navigations?.map((item) => (
              <li key={item.name} className="relative">
                <Link
                  className={`text-base font-normal text-[#fff] relative transition-all duration-300 ease-in-out
                     ${
                       homePage === item.href || "/" + segment === item.href
                         ? "before:content-[''] before:absolute  before:top-[32px] before:left-1/2 before:-translate-x-1/2 before:w-[6px] before:h-[6px] before:bg-[#fff] before:rounded-full before:transition-all before:duration-300 before:ease-in-out"
                         : "before:content-[''] before:absolute  before:top-[32px] before:left-1/2 before:-translate-x-1/2 before:w-[0px] before:h-[6px] before:bg-[#fff] before:rounded-full before:transition-all before:duration-300 before:ease-in-out"
                     }
                      `}
                  href={`/${locale}${item.href}`}
                >
                  {t(item.name)}
                </Link>
              </li>
            ))}
           
          </ul>
          <div className="flex items-center gap-5">
           
            <div className="hidden xl:block">
              <LanguageDropdown />
            </div>
          
            <div className="block xl:hidden">
              <MenuDropdown />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
