"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import CardTravelTips from "@/components/ui/cards/CardTravelTips";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale, useTranslations } from "next-intl";
import { useGetTripQuery } from "@/context/api/TripApi";
import Link from "next/link";



interface ItemType {
  uuid: string;
  created_at: string;
  updated_at: string
  title_en: string;
  title_ru: string;
  title_fr: string;
  title_de: string;
  title_es: string;
  image: string;
  description_en: string
  description_ru: string
  description_fr: string
  description_es: string
  description_de: string
  diapazon: string
  duration: number
  order: number
}

function TravelTips() {
  const locale = useLocale()
  const t = useTranslations("travel");
  const { data } = useGetTripQuery({})

  return (
    <section className="mb-32">
      <div className="container">

        <SectionTitle title={t('home')} />
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={16}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 1.5 },
            700: { slidesPerView: 2 },
            850: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data && data.map((item: ItemType) => (
            <SwiperSlide key={item.uuid}>
              <Link href={`/${locale}/travel/${item.uuid}`} >
              <CardTravelTips item={item} />
              </Link>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TravelTips;
