"use client";
import { useGetComponyQuery } from "@/context/api/Compony";
import Image from "next/image";
import companyIcon from "../../../../../public/Images/company-icon.svg";
import Button from "@/components/ui/Button";
import DOMPurify from "dompurify";
import { getDescriptionShort, getTitle } from "@/hook/getLanguage";
import { useLocale, useTranslations } from "next-intl";
import { baseUrl } from "../../../../../public/static/Index";
import ImageLoading from "@/components/ui/ImageLoading";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/navigation";

const CompanyOverview = () => {
  const { data: item, isLoading, isFetching } = useGetComponyQuery({});
  const navigation = useRouter();
  const t = useTranslations("about");
  const locale = useLocale();
  const cleanDescription = (htmlString: string) => {
    const parts = htmlString.split("<br><br>");
    return parts[0];
  };

  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="flex md:flex-row  flex-col md:items-center items-start gap-10 py-6 px-4 company-overview-bg sm:pl-10 sm:py-10 lg:pr-[70px] rounded-lg bg-white">
          <div className="flex-1">
            <Image
              src={companyIcon}
              alt="company-icon"
              width={100}
              height={100}
              className="w-16 h-16 mb-[50px] sm:mb-24"
            />
            <div className="max-w-[384px]">
              <h2 className="font-normal text-[24px] sm:text-[32px] leading-[44.8px] text-[#080808] font-brigends-expanded mb-5">
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
                className="text-[#080808] font-normal text-sm sm:text-lg mb-8"
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
                  className="sm:px-11  px-[42px] rounded-[95px] sm:rounded-lg"
                  type="button"
                  text={t("button")}
                  onClick={() => navigation.push(`/${locale}/company`)}
                />
              </div>
            </div>
          </div>
          <div className="sm:max-h-[456px] sm:max-w-[640px] max-w-[600px] max-h-[400px] overflow-hidden rounded-lg">
            {isLoading || isFetching ? (
              <ImageLoading />
            ) : (
              <Image
                src={`${baseUrl}${item?.image}`}
                width={640}
                height={456}
                quality={100}
                alt=""
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
