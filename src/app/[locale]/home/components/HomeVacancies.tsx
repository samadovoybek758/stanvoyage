"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import CardVacancies from "@/components/ui/cards/CardVacancies";
import { useGetVacansyQuery } from "@/context/api/Vacancies";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title="Vakansiyalar" buttonName="Barchasi" />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2.5},
            600: {slidesPerView: 2},
            490: {slidesPerView: 1.3},
            300: { slidesPerView: 1 },
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
