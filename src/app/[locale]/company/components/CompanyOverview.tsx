"use client";
import React from "react";
import Image from "next/image";
import { useGetComponyQuery } from "@/context/api/CompanyApi";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import DOMPurify from "dompurify";
import { baseUrl } from "../../../../../public/static/Index";
import ImageLoading from "@/components/ui/ImageLoading";
import Loading from "@/components/ui/Loading";
import { useParams } from "next/navigation";


function CompanyOverview() {
  const { data: item } = useGetComponyQuery({});
  const params = useParams()
  console.log(params);
  
  const locale = useLocale();

  if (!item) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <section className="mb-[100px] mt-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[53px]">
          <div className="flex-1">
            <h1 className="mb-4 text-2xl sm:text-[36px] font-medium">
              {item? getTitle(item, locale) : <Loading/>}
            </h1>
            <p
              className="text-sm sm:text-lg mb-5 line-clamp-10"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(item? getDescription(item, locale) : "")),
              }}
            />
          </div>

          <div className="flex-1">
            {item.image ? (
              <Image
                width={560}
                height={450}
                alt="choosing image"
                src={baseUrl + item.image}
                className="w-full h-full rounded-[20px] object-cover"
              />
            ):(
              <ImageLoading className="h-[500px]"/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
