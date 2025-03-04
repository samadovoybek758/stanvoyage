"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import left from "../../../../../public/Images/gallary-left.svg";
import right from "../../../../../public/Images/gallary-right.svg";
import Image from "next/image";
import { useGetGaleryQuery } from "@/context/api/Galery";
import { baseUrl } from "../../../../../public/static/Index";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslations } from "next-intl";

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { data } = useGetGaleryQuery({});

  // Swiper navigatsiya tugmalarini yuklagandan keyin ulash
  useEffect(() => {
    if (typeof document !== "undefined") {
      const nextButton = document.querySelector(".next") as HTMLElement;
      const prevButton = document.querySelector(".prev") as HTMLElement;

      if (nextButton && prevButton) {
        nextButton.addEventListener("click", () => mainSwiper?.slideNext());
        prevButton.addEventListener("click", () => mainSwiper?.slidePrev());
      }
    }
  }, []);

  let mainSwiper: SwiperType | null = null;
  const t = useTranslations("gallery");
  return (
    <section className="container">
      <div className="mb-32 gallery h-[828px] mx-auto py-7">
        <SectionTitle title={t("title")} />
        {/* **Swiper Asosiy Karusel** */}
        <Swiper
          onSwiper={(swiper) => (mainSwiper = swiper)}
          loop={true}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {data?.length > 0 &&
            data.map((item: { uuid: string; file: string }) => (
              <SwiperSlide key={item?.uuid}>
                <div className="h-[580px] w-full overflow-hidden">
                  <Image
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    src={`${baseUrl}/${item?.file}`}
                    alt={"gallery image"}
                    width={1232}
                    height={580}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* **Navigatsiya tugmalari** */}
        <div className="mt-5 relative">
          <button className="next w-[56px] h-[56px] cursor-pointer bg-[#E1E1E1] rounded-lg flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Image width={24} height={24} alt="icon right" src={right} />
          </button>

          {/* **Swiper Thumbnails (kichik rasmchalar)** */}
          <div className="overflow-hidden px-[86px] flex justify-center items-center">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {data?.length > 0 &&
                data.map(
                  (item: { uuid: string; file: string }, index: number) => (
                    <SwiperSlide
                      key={item?.uuid}
                      className={`thumb-slide ${
                        thumbsSwiper?.clickedIndex === index || index === 0
                          ? "swiper-slide-thumb-active"
                          : ""
                      }`}
                    >
                      <Image
                        className="w-full h-[165px] object-cover rounded-lg cursor-pointer transition-opacity"
                        src={`${baseUrl}/${item?.file}`}
                        alt={"gallery image"}
                        width={253}
                        height={165}
                      />
                    </SwiperSlide>
                  )
                )}
            </Swiper>
          </div>

          <button className="prev w-[56px] h-[56px] cursor-pointer bg-[#E1E1E1] flex justify-center items-center rounded-lg p-2 absolute top-1/2 left-0 z-10 -translate-y-1/2">
            <Image width={24} height={24} alt="icon left" src={left} />
          </button>
        </div>
      </div>
    </section>
  );
}
