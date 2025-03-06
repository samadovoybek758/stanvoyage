"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import CardNews from "../ui/cards/CardNews";
import { useGetNewsQuery } from "@/context/api/News";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";

interface Item {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
}

const NewSectionList = () => {
  const { data } = useGetNewsQuery({});
  const t = useTranslations("news");
  console.log(data);

  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title={t("title")} buttonName={t("all-button")} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {data?.map((item: Item) => (
            <SwiperSlide key={item.uuid}>
              <CardNews item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewSectionList;
