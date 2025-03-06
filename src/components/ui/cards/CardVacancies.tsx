import React from "react";
import Image from "next/image";
import vacanciesArrow from "../../../../public/Images/vacancies-arow.svg";
import Link from "next/link";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import DOMPurify from "dompurify";

interface Item {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
}

const CardVacancies = ({ item }: { item: Item }) => {
  const locale = useLocale();
  return (
    <div className="p-6 bg-[#FFFFFF] card-vacancies-img rounded-[25px] sm:rounded-lg h-[280px] md:h-[328px] flex flex-col justify-between">
      <div className="mb-5 sm:mb-9">
        <Link
          href={`/${locale}/vacancies/${item.uuid}`}
          className="flex items-center gap-[5px] mb-2 sm:mb-4"
        >
          <h3 className="font-medium text-lg sm:text-2xl text-black max-w-[250px] line-clamp-1">
            {getTitle(item, locale)}
          </h3>
          <Image
            src={vacanciesArrow}
            alt="vacancies-img"
            width={24}
            height={24}
          />
        </Link>
        <span
          className="font-normal text-xs sm:text-base text-black line-clamp-6"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              String(item ? getDescription(item, locale) : "")
            ),
          }}
        />
      </div>
      <Link
        href={`/${locale}/vacancies/${item.uuid}`}
        className="py-[10.5px] sm:py-[13px] w-full max-w-[158px] flex items-center justify-center rounded-lg border border-[#F37325] font-normal text-sm sm:text-base text-[#F37325]"
      >
        Ariza topshirish
      </Link>
    </div>
  );
};

export default CardVacancies;
