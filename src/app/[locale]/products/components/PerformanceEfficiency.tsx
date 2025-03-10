import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale, useTranslations } from "next-intl";
import { useGetPerformancesQuery } from "@/context/api/PerformancesApi";
import { useParams } from "next/navigation";
import { getContent } from "@/hook/getLanguage";
import { baseUrl } from "../../../../../public/static/Index";
interface dataType {
  uuid: string;
  image: string;
  content_ru: string;
  content_en: string;
  content_uz: string;
}
function PerformanceEfficiency() {
  const { id } = useParams();
  const { data } = useGetPerformancesQuery({ id });
  const t = useTranslations("performance-efficiency");
  const locale = useLocale();
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container">
        <SectionTitle title={t("title")} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data?.length > 0 &&
            data?.map((item: dataType) => (
              <div
                key={item.uuid}
                className="pt-[30px] pl-4 pb-4 pr-[22px] rounded-lg bg-white"
              >
                <Image
                  width={50}
                  height={50}
                  src={baseUrl + item.image}
                  alt="icon"
                  className="mb-[60px]"
                />

                <p className="text-[#080808] text-lg line-clamp-4">
                  {getContent(item, locale)}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PerformanceEfficiency;
