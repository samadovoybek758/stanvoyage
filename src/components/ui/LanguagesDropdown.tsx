"use client";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
const languageList = [
  { code: "ru", name: "RU" },
  { code: "en", name: "EN" },
  { code: "fr", name: "FR" },
  { code: "es", name: "ES" },
  { code: "de", name: "DE" },
];
const LanguageDropdown = () => {
  const flag = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [dropdown, setDropdown] = useState<boolean>(false);

  useEffect(() => {
    const closeDropdown = () => setDropdown(false);

    if (dropdown) {
      window.addEventListener("click", closeDropdown);
    }

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, [dropdown]);

  const handleChangeLanguage = (code: string) => {
    const newPath = `/${code}${pathname.replace(/^\/(ru|en|fr|es|de)/, "")}`;
    router.push(newPath);
  };

  return (
    <div className="w-full flex justify-end relative">
      <button
        className="flex items-center flex-row gap-2 rounded-lg transition-all hover:text-primary mb-0.1 text-[#000] xl:text-[#fff] "
        onClick={(e) => {
          setDropdown((p) => !p);
          e.stopPropagation();
        }}
      >
        <span className="font-normal text-base">
          {flag === "ru" ? "RU" : flag === "en" ? "EN" : flag === "fr" ? "FR" : flag === "es" ? "ES" : "DE"}
        </span>
        <div>
          <MdKeyboardArrowDown />
        </div>
      </button>
      <div
        className={`absolute sm:right-0 top-6 z-[9999] w-[50px] transition-all duration-300 transform ${
          dropdown
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul
          className="origin-top-right divide-y divide-gray-100 rounded-lg border bg-white border-whiteLight shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          onClick={(e) => e.stopPropagation()}
        >
          {languageList.map((item) =>
            flag === item.code ? null : (
              <li key={item.code} className="p-2">
                <button
                  type="button"
                  className={`flex items-center w-full rounded-lg gap-2 ${
                    item.code === flag ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={item.code === flag}
                  onClick={() => handleChangeLanguage(item.code)}
                >
                  <span className="text-black font-normal text-base">
                    {item.name}
                  </span>
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
