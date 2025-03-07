"use client";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useRef } from "react";
import Image from "next/image";
import left from "../../../../../public/Images/gallary-left.svg";
import right from "../../../../../public/Images/gallary-right.svg";
import { useGetFactoriesQuery } from "@/context/api/Factories";
import CardFactories from "@/components/ui/cards/CardFactories";
import { useTranslations } from "next-intl";

interface Factory {
  uuid: string;
  order: number;
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

function CompanyFactories() {
  const { data } = useGetFactoriesQuery({});
  const t = useTranslations("factories");
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="mb-[120px]">
      <div className="container">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-normal text-4xl font-brigends-expanded text-[#080808]">
              {t("title")}
            </h1>

            <div className="hidden gap-3 sm:flex">
              <button
                onClick={handlePrev}
                className="w-[56px] h-[56px] bg-[#E1E1E1] rounded-lg flex justify-center items-center"
              >
                <Image width={24} height={24} alt="left icon" src={left} />
              </button>

              <button
                onClick={handleNext}
                className="w-[56px] h-[56px] bg-[#E1E1E1] rounded-lg flex justify-center items-center"
              >
                <Image width={24} height={24} alt="left icon" src={right} />
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={15}
            breakpoints={{
              640: { slidesPerView: 1 },
              892: { slidesPerView: 2 },
            }}
            loop
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {data?.length > 0 &&
                data?.map((item: Factory) => (
                  <SwiperSlide key={item.uuid}>
                    <CardFactories item={item} />
                  </SwiperSlide>
                ))}
            </div>
          </Swiper>

          <div className="flex gap-3 justify-center mt-4 sm:hidden ">
              <button
                onClick={handlePrev}
                className="w-[56px] h-[56px] bg-[#E1E1E1] rounded-lg flex justify-center items-center"
              >
                <Image width={24} height={24} alt="left icon" src={left} />
              </button>

              <button
                onClick={handleNext}
                className="w-[56px] h-[56px] bg-[#E1E1E1] rounded-lg flex justify-center items-center"
              >
                <Image width={24} height={24} alt="left icon" src={right} />
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyFactories;
