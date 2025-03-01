"use client";
import { useGetComponyQuery } from "@/context/api/Compony";
import Image from "next/image";
import companyIcon from "../../../../../public/Images/company-icon.svg";
import Button from "@/components/ui/Button";
import DOMPurify from "dompurify";
import { getDescriptionShort, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import { baseUrl } from "../../../../../public/static/Index";

const CompanyOverview = () => {
  const { data: item } = useGetComponyQuery({});
  const locale = useLocale();
  const cleanDescription = (htmlString: string) => {
    const parts = htmlString.split("<br><br>");
    return parts[0];
  };

  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="flex items-center gap-x-10 company-overview-bg p-10 rounded-[30px] bg-white">
          <div className="flex-1">
            <Image
              src={companyIcon}
              alt="company-icon"
              width={100}
              height={100}
              className="w-16 h-16"
            />
            <div className="max-w-[384px]">
              <h2 className="font-normal text-[32px] leading-[44.8px] text-[#080808] font-brigends-expanded mb-5">
                {item ? getTitle(item, locale) : ""}
              </h2>
              <div
                className="text-[#080808] font-normal text-lg mb-8"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    cleanDescription(
                      String(item ? getDescriptionShort(item, locale) : "")
                    )
                  ),
                }}
              />
              <div>
                <Button
                  className="px-11"
                  type="button"
                  text="Batafsil ma’lumot"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="h-[456px] w-[640px] overflow-hidden rounded-[160px]">
            <Image
              src={`${baseUrl}${item?.image}`}
              width={640}
              height={456}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
