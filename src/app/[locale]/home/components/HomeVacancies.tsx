"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import CardVacancies from "@/components/ui/cards/CardVacancies";
import { useGetVacansyQuery } from "@/context/api/Vacancies";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
interface Item {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
}

const HomeVacancies = () => {
  const { data } = useGetVacansyQuery({});
  const t = useTranslations("vacancy");
  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title={t("title")} buttonName={t("all-button")} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {data?.slice(0, 6)?.map((item: Item) => (
            <SwiperSlide key={item?.uuid}>
              <CardVacancies item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeVacancies;
