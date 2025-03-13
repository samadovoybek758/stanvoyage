import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { getDescription, getTitle } from "@/hook/getLanguage";
import DOMPurify from "dompurify";
import { useGetOurMissionQuery } from "@/context/api/Goals";
import SectionTitle from "@/components/shared/SectionTitle";
import Loading from "@/components/ui/Loading";

function Mission() {
  const locale = useLocale();
  const t = useTranslations("mission-and-values");
  const { data, isLoading, isFetching } = useGetOurMissionQuery({});

  interface TypeData {
    created_at: string;
    description_en: string;
    description_ru: string;
    description_uz: string;
    order: number;
    title_en: string;
    title_ru: string;
    title_uz: string;
    updated_at: string;
    uuid: string;
  }

  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container ">
        <SectionTitle title={t("title")} className="max-w-[312px]" />

        <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2">
          {data?.length > 0 &&
            data?.map((item: TypeData, index: number) => (
              <div
                key={index}
                className="md:pt-[30px] w-full   md:pb-9  lg:pr-[84px] lg:pl-[30px] py-5 pl-4 pr-[18px]  bg-white rounded-lg"
              >
                <h1 className="text-[#080808] text-xl md:text-[28px] mb-[20px] md:mb-[50px] xl:mb-[95px] w-full font-semibold md:max-w-[190px]">
                  {isLoading || isFetching ? (
                    <>
                      <Loading className="w-full h-10" />
                    </>
                  ) : item ? (
                    getTitle(item, locale)
                  ) : (
                    ""
                  )}
                </h1>
                <div
                  className="text-[#080808] font-normal text-sm sm:text-lg mb-8  md:line-clamp-[10] xl:line-clamp-[13]"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      String(item ? getDescription(item, locale) : "")
                    ),
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
