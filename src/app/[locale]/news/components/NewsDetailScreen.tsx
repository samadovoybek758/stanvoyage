"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useGetNewsByIdQuery } from "@/context/api/News";
import { useParams, useRouter } from "next/navigation";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale, useTranslations } from "next-intl";
import DOMPurify from "dompurify";
import { baseUrl } from "../../../../../public/static/Index";
import arrowLeft from "../../../../../public/Images/vacancies-left-arow.svg";
import ShareButton from "@/components/shared/ShareButton";
import NewSectionList from "@/components/shared/NewSectionList";
import ImageLoading from "@/components/ui/ImageLoading";
import Loading from "@/components/ui/Loading";

interface NewsDetailItem {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
  image: string;
  images: string[];
  date: string;
}
function NewsDetail() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetNewsByIdQuery(id as string);
  const item = data as unknown as NewsDetailItem;
  const locale = useLocale();
  const imagesArray = Array.isArray(item?.images) ? item?.images : [];
  const itemImages = [...imagesArray, ...(item?.image ? [item.image] : [])];
  const router = useRouter();
  const t = useTranslations("news");
  return (
    <>
      <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]  mt-24 md:mt-28 lg:mt-[137px]">
        <div className="container">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 mb-4 text-[#000] font-normal"
            >
              <Image src={arrowLeft} alt="arrow-left" width={24} height={24} />
              {t("back")}
            </button>
            <div className=" md:px-8 md:py-8 rounded-lg  bg-white px-4 py-4 mb-[30px]">
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className=""
                loop={true}
              >
                {itemImages.length > 0 &&
                  itemImages.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-[320px] w-full md:h-[500px]">
                        {isLoading || isFetching ? (
                          <ImageLoading className="w-full h-full" />
                        ) : (
                          <Image
                            width={1200}
                            height={600}
                            alt="img"
                            src={baseUrl + item}
                            className="object-cover rounded-lg w-full h-full"
                          />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <h1 className="mb-5 text-[#080808] text-lg sm:text-[28px] font-brigends-expanded max-w-[700px]">
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
            </h1>

            <div className="mb-[30px] flex gap-11 items-center">
              <span className="text-base sm:text-[18px]">
                {item ? item.date : ""}
              </span>
              <ShareButton productId={id as string} />
            </div>

            <div
              className="text-[#080808] font-normal text-base sm:text-lg mb-8"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(item ? getDescription(item, locale) : "")
                ),
              }}
            />
          </div>
        </div>
      </section>
      <NewSectionList />
    </>
  );
}
export default NewsDetail;
