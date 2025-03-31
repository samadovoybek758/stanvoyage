"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";
import { navigations } from "../../../public/static/Index";
import LanguageDropdown from "./LanguagesDropdown";
import Link from "next/link";


const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("header");
  const locale = useLocale();
  const segment = useSelectedLayoutSegment();
  const homePage = segment === null ? "/" : "";
  const toggleMenu = () => setIsOpen(!isOpen);
  

  // Tashqariga bosganda yopish
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="transition text-2xl flex items-center justify-center relative z-[99]"
      >
        {isOpen ? (
          <X size={24} className="text-black" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 140, damping: 20 }}
        className={`fixed right-0 top-0 w-3/4 ssm:w-2/3 sm:w-1/2 md:w-[416px] h-screen bg-white shadow-xl border z-50 pt-[28px] lg:pt-[38px] pb-[40px] pl-[30px]`}
      >
        <div className="flex flex-col justify-between h-full">
          <ul className=" flex flex-col gap-2.5 sm:gap-[16px] md:gap-[26px]">
            {navigations?.map((item) => (
              <li key={item.name} className="relative">
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`text-base sm:text-xl lg:text-2xl font-normal relative transition-all duration-300 ease-in-out
                     ${
                       homePage === item.href || "/" + segment === item.href
                         ? "text-[#F37325]"
                         : "text-[#000]"
                     }
                      `}
                  href={`/${locale}${item.href}`}
                >
                  {t(item.name)}
                </Link>
              </li>
            ))}
           
          </ul>
          <div className="flex items-start flex-col gap-5">
            <div className="">
              <LanguageDropdown />
            </div>
            <Link
              onClick={() => setIsOpen(false)}
              className=" text-[#fff] py-[12.5px] px-[25px] font-semibold text-sm bg-[#F37325] rounded-lg"
              href={`/${locale}/contact`}
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuDropdown;
