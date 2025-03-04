import Image from "next/image";
import React from "react";
import { baseUrl } from "../../../../public/static/Index";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import DOMPurify from "dompurify";

interface Factory {
  uuid: string;
  image: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
  phone: string;
  email: string;
}

const CardFactories = ({ item }: { item: Factory }) => {
  const local = useLocale();
  return (
    <div className="p-[20px] md:p-[30px] bg-white rounded-lg min-h-[602px]">
      <div className="h-[280px] sm:h-[315px] overflow-hidden  rounded-lg mb-6">
        <Image
          width={548}
          height={315}
          quality={90}
          alt="factory picture"
          src={baseUrl + item.image}
          className="object-cover w-full h-full"
        />
      </div>

      <div>
        <div className="border-b-2 mb-5 flex items-start flex-col">
          <h1 className="text-[#080808] text-[24px] font-semibold mb-2 md:text-[28px] ">
            {getTitle(item, local)}
          </h1>
          <p
            className="text-[#080808] text-lg mb-5 line-clamp-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                String(item ? getDescription(item, local) : "")
              ),
            }}
          />
        </div>

        <div className="flex justify-between items-center">
          <a
            href={`tel:${item.phone}`}
            className="max-w-[152px]  text-[#080808] line-clamp-1 text-base font-normal"
          >
            {item.phone}
          </a>

          <a
            href={`mailto:${item.email}`}
            className="max-w-[158px]  text-[#080808] line-clamp-1 text-base font-normal"
          >
            {item.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardFactories;
