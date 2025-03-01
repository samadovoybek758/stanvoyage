import React from "react";
import Image from "next/image";
import vacanciesArrow from "../../../../public/Images/vacancies-arow.svg";
import Link from "next/link";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";

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
    <div className="p-6 bg-[#FFFFFF] card-vacancies-img rounded-[25px] h-[328px] flex flex-col justify-between">
      <div className="mb-9">
        <Link href="/vacancies" className="flex items-center gap-[5px] mb-4">
          <h3 className="font-medium text-2xl text-black max-w-[250px] line-clamp-1">
            {getTitle(item, locale)}
          </h3>
          <Image
            src={vacanciesArrow}
            alt="vacancies-img"
            width={24}
            height={24}
          />
        </Link>
        <span className="font-normal text-base text-black line-clamp-6">
          {getDescription(item, locale)}
        </span>
      </div>
      <button className="py-[13px] w-full max-w-[158px] rounded-[95px] border border-[#F37325] font-normal text-base text-[#F37325]">
        Ariza topshirish
      </button>
    </div>
  );
};

export default CardVacancies;
