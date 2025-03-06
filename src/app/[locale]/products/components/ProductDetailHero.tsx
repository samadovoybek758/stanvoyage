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
    <section className="my-[120px]">
      <div className="container">
        <div className="flex gap-4 md:flex-row flex-col">
          <div className="md:py-10 md:pb-[30px] md:pl-10 flex-1 bg-white rounded-lg pt-6 pl-[20px] pb-[20px] pr-[22px]">
            <h2 className="text-[#080808] text-[28px] mb-6 max-w-[452px] font-brigends-expanded">
              {item ? getTitle(item, locale) : ""}
            </h2>
            <div
              className="text-lg text-[#080808] font-normal"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(item ? getDescription(item, locale) : "")
                ),
              }}
            />
          </div>

          <div className="flex-1 py-[53px] px-[46.5px] bg-white rounded-lg h-[520px] ">
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
