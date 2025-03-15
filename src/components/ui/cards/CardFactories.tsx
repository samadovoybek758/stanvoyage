import Image from "next/image";
import React from "react";
import { baseUrl } from "../../../../public/static/Index";
import { getContent, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import DOMPurify from "dompurify";

interface Factory {
  uuid: string;
  image: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  content_ru: string;
  content_en: string;
  content_uz: string;
  phone: string;
  email: string;
}

const CardFactories = ({ item }: { item: Factory }) => {
  const local = useLocale();
  return (
    <div className="p-4 md:p-[30px] bg-white flex-col flex rounded-lg min-h-[500px] md:min-h-[600px] lg:min-h-[637px]">
      <div className="h-[300px]  md:h-[400px] overflow-hidden  rounded-lg mb-4 sm:mb-6">
        <Image
          width={548}
          height={315}
          quality={90}
          alt="factory picture"
          src={baseUrl + item.image}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className=" flex  items-start flex-col flex-1">
          <h1 className="text-[#080808] text-xl sm:text-[24px] font-semibold mb-2 md:text-[28px] line-clamp-1">
            {getTitle(item, local)}
          </h1>
          <p
            className="text-[#080808] text-base sm:text-lg mb-5 line-clamp-3 lg:line-clamp-5 flex-1"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                String(item ? getContent(item, local) : "")
              ),
            }}
          />
        </div>

        <div className="flex gap-3 justify-between pt-4 items-center border-t-2">
          <a
            href={`tel:${item.phone}`}
            className="max-w-[160px]  text-[#080808] line-clamp-1 text-sm sm:text-base font-normal"
          >
            {item.phone}
          </a>

          <a
            href={`mailto:${item.email}`}
            className="max-w-[258px]  text-[#080808] line-clamp-1 text-sm sm:text-base font-normal"
          >
            {item.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardFactories;
