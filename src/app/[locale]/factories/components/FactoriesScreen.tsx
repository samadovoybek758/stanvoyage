"use client";
import AllHero from "@/components/shared/AllHero";
import factoriesImg from "../../../../../public/Images/factories-hero.jpg";
import { useGetFactoriesQuery } from "@/context/api/Factories";
import { useLocale, useTranslations } from "next-intl";
import FactoriesItemLoader from "@/components/ui/itemLoader/FactoriesItemLoader";
import { baseUrl } from "../../../../../public/static/Index";
import Image from "next/image";
import { getDescription, getTitle } from "@/hook/getLanguage";
import DOMPurify from "dompurify";

interface Factory {
  uuid: string;
  image: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
  phone: string;
  email: string;
}
const FactoriesScreen = () => {
  const { data, isFetching, isLoading } = useGetFactoriesQuery({});
  const t = useTranslations("factories");
  const local = useLocale();
  return (
    <>
      <AllHero image={factoriesImg} title={t("title")} />
      <div className="container">
        <div className="mb-[120px]">
          <div className="grid grid-cols-1 gap-20 sm:gap-[120px]">
            {isFetching || isLoading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <FactoriesItemLoader key={index} />
                ))
              : data?.length > 0 &&
                data?.map((item: Factory) => (
                  <div
                    className="p-4 md:p-[30px] bg-white flex-col flex rounded-lg"
                    key={item?.uuid}
                  >
                    <div className="h-[315px]  sm:h-[400px] overflow-hidden  rounded-lg mb-4 sm:mb-6">
                      <Image
                        width={548}
                        height={315}
                        quality={90}
                        alt="factory picture"
                        src={baseUrl + item.image}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col justify-between flex-1">
                      <div className=" flex  items-start flex-col flex-1">
                        <h1 className="text-[#080808] text-xl sm:text-[24px] font-semibold mb-2 md:text-[28px]">
                          {getTitle(item, local)}
                        </h1>
                        <div
                          className="text-[#080808] text-base sm:text-lg mb-5 flex-1"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              String(item ? getDescription(item, local) : "")
                            ),
                          }}
                        />
                      </div>

                      <div className="flex gap-3 justify-between pt-4 items-center border-t-2">
                        <a
                          href={`tel:${item.phone}`}
                          className="max-w-[160px]  text-[#080808] line-clamp-1 text-sm sm:text-base font-normal"
                        >
                          {item.phone}
                        </a>

                        <a
                          href={`mailto:${item.email}`}
                          className="max-w-[258px]  text-[#080808] line-clamp-1 text-sm sm:text-base font-normal"
                        >
                          {item.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FactoriesScreen;
