import SectionTitle from "@/components/shared/SectionTitle";
import { useGetGoalsQuery } from "@/context/api/Goals";
import { useTranslations } from "next-intl";
import React from "react";

function CompanyMission() {
  const { data } = useGetGoalsQuery({});
  console.log(data);
  const t = useTranslations("mission-and-values");
  return (
    <section className="container">
      <div className="mb-[120px]">
        <SectionTitle title={t("title")} className="max-w-[312px]" />

        {/* <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2 items-center justify-center ">
          {data.length > 0 &&
            data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-[30px]"
              >
                <h3 className="text-[#080808] font-semibold text-[28px] leading-[39.2px] mb-[95px] max-w-[174px]">
                  {item.title}
                </h3>
                <p className="line-clamp-4 md:text-lg text-sm text-[#080808]  mb-[10px] ">
                  {item.content1}
                </p>
                <p className="line-clamp-4 md:text-lg text-sm text-[#080808] border-t-2  mb-[10px] pt-[10px]">
                  {item.content2}
                </p>
                <p className="line-clamp-4 md:text-lg text-sm text-[#080808] border-t-2  mb-[10px] pt-[10px]">
                  {item.content3}
                </p>
                <p className="line-clamp-4 md:text-lg text-sm text-[#080808]  border-t-2 mb-[10px] pt-[10px]">
                  {item.content4}
                </p>
              </div>
            ))}
        </div> */}
      </div>
    </section>
  );
}

export default CompanyMission;
