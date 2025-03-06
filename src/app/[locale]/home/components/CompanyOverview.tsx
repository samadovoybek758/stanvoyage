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
    <section className="mb-[80px] md:mb-28 lg:mb-[120px]">
      <div className="container">
        <div className="flex items-center gap-x-10 lg:flex-row flex-col gap-5 md:gap-10 company-overview-bg xl:pl-10 xl:py-10 p-5 sm:p-8  xl:pr-[70px] rounded-lg bg-white">
          <div className="flex-1 w-full">
            <Image
              src={companyIcon}
              alt="company-icon"
              width={100}
              height={100}
              className="w-16 h-16 xl:mb-24 mb-10"
            />
            <div className="max-w-full lg:max-w-[384px]">
              <h2 className="font-normal text-2xl md:text-[32px] md:leading-[44.8px] text-[#080808] font-brigends-expanded mb-3 md:mb-5">
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
                className="text-[#080808] font-normal text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8"
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
                  className="xl:px-11 px-8 "
                  type="button"
                  text={t("button")}
                  onClick={() => navigation.push(`/${locale}/company`)}
                />
              </div>
            </div>
          </div>
          <div className="flex-1  xl:h-[456px] w-full lg:w-[640px] overflow-hidden rounded-lg">
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
