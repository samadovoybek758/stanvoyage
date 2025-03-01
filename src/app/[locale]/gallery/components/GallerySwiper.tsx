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

export default function GallerySwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { data } = useGetGaleryQuery({});

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

  return (
    <section className="container">
      <div className="mb-32 gallery h-[828px] mx-auto py-7">
        <div className="bg-[#FFFFFF] rounded-[25px] p-10 h-[580px]">
          <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect="fade"
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
                  <div className="w-full h-[500px] overflow-hidden rounded-[160px]">
                    <Image
                      className="w-full h-full object-cover cursor-pointer"
                      src={`${baseUrl}/${item?.file}`}
                      alt={"gallery image"}
                      width={1232}
                      height={580}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* **Navigatsiya tugmalari** */}
        <div className="mt-5 relative">
          <button className="next w-[56px] h-[56px] cursor-pointer bg-[#E1E1E1] rounded-full flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Image width={24} height={24} alt="icon right" src={right} />
          </button>

          {/* **Swiper Thumbnails (kichik rasmchalar)** */}
          <div className="max-w-[1060px] w-full mx-auto overflow-hidden px-10 flex justify-center items-center">
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
                        className="w-full h-[165px] object-cover rounded-[25px] cursor-pointer transition-opacity"
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

          <button className="prev w-[56px] h-[56px] cursor-pointer bg-[#E1E1E1] flex justify-center items-center rounded-full p-2 absolute top-1/2 left-0 z-10 -translate-y-1/2">
            <Image width={24} height={24} alt="icon left" src={left} />
          </button>
        </div>
      </div>
    </section>
  );
}
