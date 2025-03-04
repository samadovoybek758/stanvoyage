import { useTranslations } from "next-intl";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactFooter = () => {
  const t = useTranslations("contact.contact-footer");
  return (
    <div className="grid grid-cols-3 gap-5 bg-white rounded-lg p-[30px]">
      <div>
        <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
          <div>
            <FiPhone />
          </div>
          {t("phone")}
        </h3>
        <div>
          <p className="text-lg font-normal text-[#000]">+998 (71) 231 86 01</p>
        </div>
      </div>
      <div>
        <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
          <div>
            <GrLocation />
          </div>
          {t("location")}
        </h3>
        <div>
          <p className="text-lg font-normal text-[#000] max-w-[220px] line-clamp-2">
            {"Toshkent shahridagi, Amir Temur ko'chasi, 45-uy."}
          </p>
        </div>
      </div>
      <div>
        <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-base">
          <div>
            <MdOutlineMailOutline />
          </div>
          {t("email")}
        </h3>
        <div>
          <p className="text-lg font-normal text-[#000] max-w-[220px] line-clamp-1">
            info@samo.uz
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
