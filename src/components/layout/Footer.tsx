"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { footerNavigations } from "../../../public/static/Index";
import instagram from "../../../public/Images/instagram.svg";
import facebook from "../../../public/Images/facebook.svg";
import youtube from "../../../public/Images/youtube.svg";
import Image from "next/image";
import logoSvg from "../../../public/Images/stanvoyage/footerLogo.svg";
import logoPng from "../../../public/Images/stanvoyage/footerLogo.png";
// import { useGetCompanyPhoneQuery } from "@/context/api/CompanyPhoneApi";
import { useGetSocialsQuery } from "@/context/api/Socials";
import { LiaTelegram } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
// import { useGetCompanyEmailQuery } from "@/context/api/CompanyEmailApi";
import ContactFooter from "../shared/ContactFooter";
import call from '../../../public/Images/stanvoyage/call.svg'
import email from '../../../public/Images/stanvoyage/email.svg'
import { useGetCompanyInfoQuery } from "@/context/api/CompanyInfoApi";
const Footer = () => {
  const t = useTranslations("footer");
  const { data: info } = useGetCompanyInfoQuery({})
  const { data: socials } = useGetSocialsQuery({});
  const locale = useLocale();
  const phones: string[] = [];
  const emails: string[] = [];

  
 console.log("df",info);
 


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
    <footer className="mb-4 footer px-4 w-full pt-[55px] md:pt-[239px]  bgi relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-[#F0F0F0]/50 before:to-[#F0F0F0]/100 before:-z-10" id="footer ">
      <div className="max-w-[1190px] mx-auto ">

      
          <div className="w-full flex justify-center mb-[70px] text-center max-h-[56px] md:hidden ">
            <Link href={`/${locale}`} className="max-w-[210px]">
              <Image src={logo} alt="logo" quality={100} className="" />
            </Link>
          </div>


          <div className="mb-10">
            <ContactFooter />
          </div>
         

        
           
         <div className="flex gap-10 justify-between flex-col md:flex-row">


<div className="flex items-start flex-col justify-between flex-1 gap-[30px] md:gap-[71px]">
  <div className=" max-w-[210px] max-h-[56px] md:block hidden">
    <Link href={`/${locale}`}>
      <Image src={logo} alt="logo" quality={100} className="" />
    </Link>
  </div>

  <div className="grid gap-5 w-full ">
    <div className="flex gap-2 items-center">
      <Image
        width={24}
        height={24}
        alt="call"
        src={call}
      />
      <div className="flex flex-col items-start">
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


    <div className="flex gap-2 items-center">
      <Image
        width={24}
        height={24}
        alt="call"
        src={email}
      />
      <div className="flex flex-col items-start">
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


<div className="flex ssm:flex-row flex-col gap-10 items-start flex-1 justify-between">

  <ul className="grid grid-cols-2 ssm:grid-cols-1 gap-[18px]">
    {footerNavigations.map((item) => (
      <li key={item.name}>
        <Link
          className="font-normal text-base text-[#000000]"
          href={`/${locale}/${item.href}`}
        >
          {t(item.name)}
        </Link>
      </li>
    ))}
  </ul>


  <ul className="grid grid-cols-2 ssm:grid-cols-1 gap-[18px]">
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
