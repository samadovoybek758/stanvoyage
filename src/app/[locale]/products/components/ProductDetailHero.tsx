"use client";
import React from "react";
import Image from "next/image";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import DOMPurify from "dompurify";
import { baseUrl } from "../../../../../public/static/Index";

interface CategoryDetailItem {
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
  image: string;
}
function ProductDetailHero({ data }: { data: CategoryDetailItem }) {
  const locale = useLocale();
  const item = data as unknown as CategoryDetailItem;
  console.log(item);
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] mt-[136px] ">
      <div className="container">
        <div className="flex gap-4 lg:flex-row flex-col">
          <div className="md:py-10 md:pb-[30px] md:pl-10 flex-1 bg-white rounded-lg pt-6 pl-[20px] pb-[20px] pr-[22px]">
            <h2 className="text-[#080808] text-xl  sm:text-[28px] mb-6 max-w-[452px] font-brigends-expanded">
              {item ? getTitle(item, locale) : ""}
            </h2>
            <div
              className="text-sm sm:text-lg text-[#080808] font-normal"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(item ? getDescription(item, locale) : "")
                ),
              }}
            />
          </div>

          <div className="flex-1 md:py-[53px] md:px-[46.5px] p-5 bg-white rounded-lg h-[360px] md:h-[500px] ">
            <Image
              width={515}
              height={412}
              alt="product Image"
              src={baseUrl + item?.image}
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailHero;
