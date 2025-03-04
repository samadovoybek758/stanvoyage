"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/Images/white-max-logo.svg";
import { navigations } from "../../../public/static/Index";
import { useLocale, useTranslations } from "next-intl";
// import { useSelectedLayoutSegment } from "next/navigation";
import LanguageDropdown from "../ui/LanguagesDropdown";
import search from "../../../public/Images/search.svg";
import OrderModal from "../ui/OrderModal";
const Header = () => {
  const t = useTranslations("header");
  // const segment = useSelectedLayoutSegment();
  // const homePage = segment === null ? "/" : "";
  const locale = useLocale();

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container">
        <nav className="flex items-center justify-between bg-[#F37325] px-3 py-[14px] rounded-lg">
          <div>
            <Link href="/">
              <Image
                src={logo}
                quality={100}
                alt="logo"
                width={127}
                height={34}
              />
            </Link>
          </div>
          <ul className="flex items-center gap-[26px]">
            {navigations?.map((item) => (
              <li key={item.name} className="relative">
                <Link
                  className={`text-base font-normal text-[#fff] relative transition-all duration-300 ease-in-out
                      `}
                  href={`/${locale}${item.href}`}
                >
                  {t(item.name)}
                </Link>
              </li>
            ))}
            <OrderModal />
          </ul>
          <div className="flex items-center gap-5">
            <Image
              src={search}
              alt="search"
              width={24}
              height={24}
              className="w-6 h-6 cursor-pointer"
            />
            <LanguageDropdown />
            <Link
              className="text-[#F37325] py-[12.5px] px-[25px] font-semibold text-sm bg-[#fff] rounded-lg"
              href={`/${locale}/contact`}
            >
              {t("contact")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
{
  /* <Link
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
                </Link> */
}
