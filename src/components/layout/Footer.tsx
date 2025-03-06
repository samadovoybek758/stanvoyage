import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { footerNavigations } from "../../../public/static/Index";
import instagram from "../../../public/Images/instagram.svg";
import facebook from "../../../public/Images/facebook.svg";
import youtube from "../../../public/Images/youtube.svg";
import Image from "next/image";
import logo from "../../../public/Images/max-logo.svg";
const socialMedia = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/samo/",
    icon: instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/samo/",
    icon: facebook,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/samo",
    icon: youtube,
  },
];
const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="mb-4">
      <div className="container">
        <div className="bg-[#FFFFFF] p-[30px] rounded-lg grid grid-cols-[1fr_auto]">
          <div className="flex items-start flex-col justify-between gap-[71px] ">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={210}
                quality={100}
                height={56}
              />
            </Link>
            <div className="grid grid-cols-3 gap-5 w-full">
              <div>
                <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
                  {t("phone")}
                </h3>
                <div>
                  <p className="text-base font-normal text-[#000]">
                    +998 (71) 231 86 01
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
                  {t("location")}
                </h3>
                <div>
                  <p className="text-base font-normal text-[#000] max-w-[180px] line-clamp-2">
                    {"Toshkent shahridagi, Amir Temur ko'chasi, 45-uy."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
                  {t("email")}
                </h3>
                <div>
                  <p className="text-base font-normal text-[#000] max-w-[180px] line-clamp-1">
                    info@samo.uz
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between w-full max-w-[385px]">
            <ul className="flex flex-col gap-[18px]">
              {footerNavigations.map((item) => (
                <li key={item.name}>
                  <Link
                    className="font-normal text-base text-[#000000]"
                    href={item.href}
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-[18px]">
              {socialMedia.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    className="text-[#000000] text-base font-normal flex items-center gap-2"
                  >
                    <div>
                      <Image
                        width={16}
                        height={16}
                        quality={100}
                        src={item.icon}
                        alt={item.name}
                      />
                    </div>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
