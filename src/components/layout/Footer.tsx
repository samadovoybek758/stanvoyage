"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { footerNavigations } from "../../../public/static/Index";
import instagram from "../../../public/Images/instagram.svg";
import facebook from "../../../public/Images/facebook.svg";
import youtube from "../../../public/Images/youtube.svg";
import Image from "next/image";
import logo from "../../../public/Images/max-logo.svg";
import { useGetComponyQuery } from "@/context/api/Compony";
import { useGetCompanyPhoneQuery } from "@/context/api/CompanyPhoneApi";
import { useGetSocialsQuery } from "@/context/api/Socials";
import { LiaTelegram } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
  const t = useTranslations("footer");

  const { data: companyData } = useGetComponyQuery({});
  const { data: companyPhoneData } = useGetCompanyPhoneQuery({});
  const { data: socials } = useGetSocialsQuery({});
  console.log(socials);

  const phones: number[] = [];
  const emails: string[] = [];

  if (companyPhoneData) {
    for (const key in companyPhoneData) {
      if (companyPhoneData[key] && key.includes("phone")) {
        phones.push(companyPhoneData[key] as number);
      }
    }
  }

  if (companyData) {
    for (const key in companyData) {
      if (companyData[key] && key.includes("phone")) {
        phones.push(companyData[key] as number);
      }
      if (companyData[key] && key.includes("email")) {
        emails.push(companyData[key] as string);
      }
    }
  }

  return (
    <footer className="mb-4">
      <div className="container">
        <div className="bg-[#FFFFFF] p-[30px] rounded-lg grid grid-cols-1 gap-10 lg:grid-cols-[1fr_304px]">
          <div className="flex items-start flex-col justify-between gap-[30px] md:gap-[71px] ">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                quality={100}
                className="w-[180px]  sm:w-[210px]"
              />
            </Link>
            <div className="grid grid-cols-1 ssm:grid-cols-2 gap-5 w-full md:grid-cols-[1fr_1fr_1fr]">
              <div>
                <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
                  {t("phone")}
                </h3>
                <div>
                  {phones.length > 0 &&
                    phones.map((item, index) => (
                      <a
                        href={`tel:${item}`}
                        key={index}
                        className="text-base font-normal text-[#000]"
                      >
                        {item}
                      </a>
                    ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
                  {t("location")}
                </h3>
                <div>
                  <p className="text-base font-normal text-[#000] max-w-full line-clamp-2">
                    {companyData?.address_uz}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
                  {t("email")}
                </h3>
                <div>
                  {emails.length > 0 &&
                    emails.map((item, index) => (
                      <a
                        href={`mailto:${item}`}
                        key={index}
                        className="text-base font-normal text-[#000] max-w-[180px] line-clamp-1"
                      >
                        {item}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between">
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
              {socials?.instagram ? (
                <li>
                  <a
                    href={socials?.instagram}
                    target="_blank"
                    className="text-[#000000] text-base font-normal flex items-center gap-2"
                  >
                    <div>
                      <Image
                        width={16}
                        height={16}
                        quality={100}
                        src={instagram}
                        alt={socials?.instagram}
                      />
                    </div>
                    <span>Instagram</span>
                  </a>
                </li>
              ) : null}
              {socials?.telegram ? (
                <li>
                  <a
                    href={socials?.telegram}
                    target="_blank"
                    className="text-[#000000] text-base font-normal flex items-center gap-2"
                  >
                    <div>
                      <LiaTelegram />
                    </div>
                    <span>Telegram</span>
                  </a>
                </li>
              ) : null}
              {socials?.facebook ? (
                <li>
                  <a
                    href={socials?.facebook}
                    target="_blank"
                    className="text-[#000000] text-base font-normal flex items-center gap-2"
                  >
                    <div>
                      <Image
                        width={16}
                        height={16}
                        quality={100}
                        src={facebook}
                        alt={socials?.facebook}
                      />
                    </div>
                    <span>Facebook</span>
                  </a>
                </li>
              ) : null}
              {socials?.youtube ? (
                <li>
                  <a
                    href={socials?.youtube}
                    target="_blank"
                    className="text-[#000000] text-base font-normal flex items-center gap-2"
                  >
                    <div>
                      <Image
                        width={16}
                        height={16}
                        quality={100}
                        src={youtube}
                        alt={socials?.youtube}
                      />
                    </div>
                    <span>Youtube</span>
                  </a>
                </li>
              ) : null}
              {socials?.linkedin ? (
                <li>
                  <a
                    href={socials?.linkedin}
                    target="_blank"
                    className="text-[#000000] text-base font-normal flex items-center gap-2"
                  >
                    <div>
                      <SlSocialLinkedin />
                    </div>
                    <span>Linkedin</span>
                  </a>
                </li>
              ) : null}
              {socials?.whatsapp ? (
                <li>
                  <a
                    href={socials?.whatsapp}
                    target="_blank"
                    className="text-[#000000] text-base font-normal flex items-center gap-2"
                  >
                    <div>
                      <MdWhatsapp />
                    </div>
                    <span>Whatsapp</span>
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
