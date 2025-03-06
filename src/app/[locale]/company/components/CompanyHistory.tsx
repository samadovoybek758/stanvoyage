"use client";

import React from "react";
import Image from "next/image";
import icon from "../../../../../public/Images/CompanyHistoryIcon.svg";
import historyImg from "../../../../../public/Images/hero.jpg";
import { useLocale } from "next-intl";
import { getDescription, getTitle } from "@/hook/getLanguage";
import Loading from "@/components/ui/Loading";
import DOMPurify from "dompurify";
import { useGetHistoryQuery } from "@/context/api/History";

function CompanyHistory() {
  const { data: item, isLoading, isFetching } = useGetHistoryQuery({});
  const locale = useLocale();

  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-4 flex flex-col-reverse">
          <div className="flex-1 bg-white rounded-lg p-16 overflow-hidden">
            <Image
              width={480}
              height={512}
              alt="History"
              src={historyImg}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 p-10 bg-white rounded-lg ">
            <Image
              width={64}
              height={64}
              alt="icon"
              src={icon}
              className="mb-[30px] md:mb-[60px]"
            />

            <h2 className="font-normal text-[32px] leading-[44.8px] text-[#080808] font-brigends-expanded mb-5">
              {isLoading || isFetching ? (
                <>
                  <Loading className="w-full h-10" />
                  <Loading className="w-full h-10" />
                </>
              ) : item ? (
                getTitle(item, locale)
              ) : (
                ""
              )}
            </h2>

            <div
              className="text-[#080808] font-normal text-lg mb-8"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(item ? getDescription(item, locale) : "")
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyHistory;
