"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import CardNews from "../ui/cards/CardNews";
import { useGetNewsQuery } from "@/context/api/News";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const NewSectionList = () => {
  const { data } = useGetNewsQuery({});

  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title="Yangiliklar" buttonName="Barchasi" />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            600: {slidesPerView: 2},
            480: { slidesPerView: 1.5 },
            200: {slidesPerView: 1}
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <CardNews />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewSectionList;
