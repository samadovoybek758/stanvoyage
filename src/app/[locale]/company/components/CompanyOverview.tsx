"use client";

import React from "react";
import Image from "next/image";
import icon from "../../../../../public/Images/company-icon.svg";
import { useGetComponyQuery } from "@/context/api/Compony";
import { getDescription, getTitle } from "@/hook/getLanguage";
import Loading from "@/components/ui/Loading";
import { useLocale } from "next-intl";
import DOMPurify from "dompurify";
import { baseUrl } from "../../../../../public/static/Index";
import ImageLoading from "@/components/ui/ImageLoading";
function CompanyOverview() {
  const { data: item, isLoading, isFetching } = useGetComponyQuery({});
  console.log(item);

  const locale = useLocale();
  return (
    <section className="mb-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex-1 pt-6 pl-5 pr-3 pb-5 md:py-10 md:pl-10 md:pr-7 bg-white rounded-lg ">
            <Image
              width={64}
              height={64}
              alt="icon"
              src={icon}
              className="mb-[50px] md:mb-[60px]"
            />

            <h2 className="font-normal text-[24px] sm:text-[32px] leading-[44.8px] text-[#080808] font-brigends-expanded mb-3">
              {isLoading || isFetching ? (
                <Loading className="w-full h-10" />
              ) : item ? (
                getTitle(item, locale)
              ) : (
                ""
              )}
            </h2>

            <div
              className="text-[#080808] font-normal text-sm sm:text-lg mb-8"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(item ? getDescription(item, locale) : "")
                ),
              }}
            />
          </div>
          <div className="flex-1 bg-white rounded-lg px-5 py-5 md:px-7 md:py-10 lg:px-12 lg:py-[80px] overflow-hidden min-h-[360px] md:min-h-[512px]">
            {isLoading || isFetching ? (
              <ImageLoading className="w-full h-full object-cover rounded-lg" />
            ) : (
              <Image
                width={480}
                height={512}
                alt={item?.title_uz}
                src={`${baseUrl}${item?.image}`}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;