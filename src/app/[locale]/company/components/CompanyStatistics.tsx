import React from "react";
import Image from "next/image";
import { useGetStatisticsQuery } from "@/context/api/Statistics";
import { getAmount, getTitle, getType } from "@/hook/getLanguage";
import { useLocale, useTranslations } from "next-intl";
import { baseUrl } from "../../../../../public/static/Index";
import SectionTitle from "@/components/shared/SectionTitle";
import ImageLoading from "@/components/ui/ImageLoading";
import Loading from "@/components/ui/Loading";

function CompanyStatistics() {
  const { data, isLoading, isFetching } = useGetStatisticsQuery({});
  const t = useTranslations("statistics");
  const locale = useLocale();

  interface TypeData {
    amount_en: string;
    amount_ru: string;
    amount_uz: string;
    created_at: string;
    image: string;
    order: number;
    title_en: string;
    title_ru: string;
    title_uz: string;
    type_en: string;
    type_ru: string;
    type_uz: string;
    updated_at: string;
    uuid: string;
  }

  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container">
        <SectionTitle title={t("title")} className="max-w-[312px]" />

        <div className="grid grid-cols-1 xssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.length > 0 &&
            data?.map((item: TypeData, index: number) => (
              <div key={index} className=" bg-white rounded-lg overflow-hidden">
                <div className="mt-[-200px] ml-[-146.48px] md:mt-[-140px]  rotate-45 ">
                  {isLoading || isFetching ? (
                    <ImageLoading className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Image
                      width={400}
                      height={320}
                      alt="statistics image"
                      src={`${baseUrl}${item?.image}`}
                      quality={100}
                      className="md:mb-[50px] mb-[100px] w-[400px] h-[320px] rounded-lg"
                    />
                  )}
                </div>
                <div className="p-4 sm:p-[30px] mt-[38px] ">
                  <p className="xssm:text-[13px] text-base sm:text-xl mb-2">
                    {isLoading || isFetching ? (
                      <>
                        <Loading className="w-full h-10" />
                      </>
                    ) : item ? (
                      getTitle(item, locale)
                    ) : (
                      ""
                    )}
                  </p>
                  <span className="text-[#9F9F9F] text-[20px] xssm:text-[15px] sm:text-[32px]">
                    {" "}
                    {isLoading || isFetching ? (
                      <>
                        <Loading className="w-full h-10" />
                      </>
                    ) : item ? (
                      getType(item, locale)
                    ) : (
                      ""
                    )}
                    :
                    <span className="text-[#F37325]">
                      {isLoading || isFetching ? (
                        <>
                          <Loading className="w-full h-10" />
                        </>
                      ) : item ? (
                        getAmount(item, locale)
                      ) : (
                        ""
                      )}
                    </span>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyStatistics;
