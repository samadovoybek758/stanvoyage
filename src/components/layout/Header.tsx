"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoSvg from "../../../public/Images/white-max-logo.svg";
import logoPng from '../../../public/Images/logo (2).png'
import { navigations } from "../../../public/static/Index";
import { useLocale, useTranslations } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";
import LanguageDropdown from "../ui/LanguagesDropdown";
import search from "../../../public/Images/search.svg";
import OrderModal from "../ui/OrderModal";
import MenuDropdown from "../ui/MenuDropdown";
import Search from "../ui/Search";
import { openModal } from "@/context/slice/OpenOrderModal";
import { useDispatch } from "react-redux";
const Header = () => {
  const t = useTranslations("header");
  const segment = useSelectedLayoutSegment();
  const homePage = segment === null ? "/" : "";
  const locale = useLocale();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const open = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(openModal({ x: e.clientX, y: e.clientY }));
  };



  const [logo, setLogo] = useState(logoSvg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogo(logoPng); // md dan kichik bo'lsa, kichik logoni qo'yamiz
      } else {
        setLogo(logoSvg); // Katta ekranda default logoni qo'yamiz
      }
    };

    handleResize(); // Sahifa yuklanganda tekshiramiz
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container relative">
        <nav className="flex items-center justify-between bg-[#F37325] px-3 py-[14px] rounded-xl">
          <div className="max-w-[127px] max-h-[34px]">
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
          <ul className="hidden xl:flex items-center gap-[20px]">
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
            <li>
              <button
                onClick={open}
                className={`text-base sm:text-xl lg:text-2xl xl:text-base font-normal text-[#000] xl:text-[#fff] relative transition-all duration-300 ease-in-out `}
              >
                {t("order")}
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              {/* Search tugmasi */}
              <button onClick={() => setIsSearchOpen(true)}>
                <Image
                  src={search}
                  alt="search"
                  width={24}
                  height={24}
                  className="w-6 h-6 cursor-pointer"
                />
              </button>

              {/* Overlay va Search */}
              <Search
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
              />
            </div>
            <div className="hidden xl:block">
              <LanguageDropdown />
            </div>
            <Link
              className="hidden xl:block text-[#F37325] py-[12.5px] px-[25px] font-semibold text-sm hover:bg-[#ececec] transition-all duration-300 bg-[#fff] rounded-lg"
              href={`/${locale}/contact`}
            >
              {t("contact")}
            </Link>
            <div className="block xl:hidden">
              <MenuDropdown />
            </div>
            <OrderModal />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
