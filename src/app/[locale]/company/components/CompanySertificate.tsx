"use client";
import React, { useRef } from "react";
import Image from "next/image";
import "swiper/css";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useGetCertificatesQuery } from "@/context/api/Certificates";
import { baseUrl } from "../../../../../public/static/Index";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslations } from "next-intl";
import left from "../../../../../public/Images/gallary-left.svg";
import right from "../../../../../public/Images/gallary-right.svg";
import ImageLoading from "@/components/ui/ImageLoading";

interface Certificate {
  uuid: number;
  image: string;
}





export default function Sertificate() {
  const { data, isLoading, isFetching } = useGetCertificatesQuery({});
  const t = useTranslations("certificates");


  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="container">
      <div className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
        <div className="mb-12 mt-12">
          <SectionTitle title={t("title")} />
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={3}
            spaceBetween={16}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              950: { slidesPerView: 3 },
              700: { slidesPerView: 2.5 },
              600: { slidesPerView: 2 },
              450: { slidesPerView: 1.5 }
            }}
            modules={[Autoplay]}
            className=""
          >
            {data?.map((item: Certificate) => (
              <SwiperSlide key={item.uuid}>
                <div className="bg-white px-[30px] lg:px-[58px]  py-6 rounded-lg h-[400px] sm:h-[450px] overflow-hidden">
                  {isLoading || isFetching ? (
                    <ImageLoading className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Image
                      width={480}
                      height={512}
                      alt={"serticates"}
                      src={baseUrl + item.image}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
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
