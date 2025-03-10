import { useGetComponyQuery } from "@/context/api/Compony";
import { useTranslations } from "next-intl";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactFooter = () => {
  const t = useTranslations("contact.contact-footer");
  const { data } = useGetComponyQuery({});

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 bg-white rounded-lg p-[30px]">
      <div>
        <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-sm md:text-base">
          <div>
            <FiPhone />
          </div>
          {t("phone")}
        </h3>
        <div>
          <a
            href={`tel:${data?.phone}`}
            className="text-sm lg:text-lg font-normal text-[#000]"
          >
            {data?.phone}
          </a>
        </div>
      </div>
      <div>
        <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-sm lg:text-base">
          <div>
            <GrLocation />
          </div>
          {t("location")}
        </h3>
        <div>
          <p className="lg:text-lg text-sm font-normal text-[#000] max-w-[220px] line-clamp-2">
            {data?.address_uz}
          </p>
        </div>
      </div>
      <div>
        <h3 className="flex items-center gap-[6px] text-[#9F9F9F] text-sm lg:text-base">
          <div>
            <MdOutlineMailOutline />
          </div>
          {t("email")}
        </h3>
        <div>
          <a
            href={`mailto:${data?.email}`}
            className="text-sm lg:text-lg font-normal text-[#000] max-w-[220px] line-clamp-1"
          >
            {data?.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
