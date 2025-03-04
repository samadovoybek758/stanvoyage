"use client";
import { useGetComponyQuery } from "@/context/api/Compony";
import Image from "next/image";
import companyIcon from "../../../../../public/Images/company-icon.svg";
import Button from "@/components/ui/Button";
import DOMPurify from "dompurify";
import { getDescriptionShort, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import { baseUrl } from "../../../../../public/static/Index";
import ImageLoading from "@/components/ui/ImageLoading";
import Loading from "@/components/ui/Loading";

const CompanyOverview = () => {
  const { data: item, isLoading, isFetching } = useGetComponyQuery({});
  const locale = useLocale();
  const cleanDescription = (htmlString: string) => {
    const parts = htmlString.split("<br><br>");
    return parts[0];
  };

  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="flex items-center gap-x-10 company-overview-bg pl-10 py-10 pr-[70px] rounded-lg bg-white">
          <div className="flex-1">
            <Image
              src={companyIcon}
              alt="company-icon"
              width={100}
              height={100}
              className="w-16 h-16 mb-24"
            />
            <div className="max-w-[384px]">
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
          <div className="h-[456px] w-[640px] overflow-hidden rounded-lg">
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
