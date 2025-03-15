"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import play from "../../../../../public/Images/video-icon.svg";
import left from "../../../../../public/Images/left-arrow.svg";
import right from "../../../../../public/Images/right-arrow.svg";
import { useGetSliderQuery } from "@/context/api/SliderApi";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale, useTranslations } from "next-intl";
import { baseUrl } from "../../../../../public/static/Index";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
// import { useRouter } from "next/navigation";

interface Slider {
  uuid: string;
  image: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
}

const Hero = () => {
  const { data } = useGetSliderQuery({});
  const local = useLocale();
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations("hero");
  // const rout = useRouter();
  // const handelRout = () => {
  //   rout.push(`/${local}/company/`);
  // };
  return (
    <section className="max-h-[640px] w-full mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-[640px]"
      >
        {data?.map((item: Slider) => (
          <SwiperSlide key={item.uuid}>
            <div className="flex flex-col items-center pt-[110px] md:pt-[128px] hero-slider h-[640px] relative before:bg-[#00000040] before:absolute before:inset-0 before:z-10">
              <div className="absolute inset-0">
                <Image
                  src={`${baseUrl}${item.image}`}
                  alt="hero"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
              <div className="relative z-20 flex flex-col items-center h-full pb-7 px-[15px]">
                <h1
                  className={`max-w-[1024px] font-normal text-3xl ssm:text-4xl lg:text-5xl md:leading-[60px] mb-3 text-[#fff] text-center ${
                    local === "ru"
                      ? "font-brigends-unbounded"
                      : "font-brigends-expanded"
                  } line-clamp-4 md:line-clamp-3`}
                >
                  {getTitle(item, local)}
                </h1>
                <p className="max-w-[760px] text-base md:text-xl leading-[30px] text-[#fff] text-center line-clamp-4">
                  {getDescription(item, local)}
                </p>
                <Link
                  href={`/${local}/company/#company-video`}
                  className="border-[2px] fixed top-[380px] sm:top-[300px] md:top-[350px] border-[#fff] opacity-1 hover:opacity-[0.8] transition-all duration-300 text-[#fff] px-8 lg:px-9 rounded-lg mt-[24px] py-3 md:py-5 font-medium text-sm md:text-lg flex items-center gap-2.5"
                >
                  <Image src={play} alt="play" width={24} height={24} />
                  {t("watch-video")}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex-1 flex items-end justify-center absolute bottom-7 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-[13px] py-[12px] px-[17px] bg-[#FFFFFF33] backdrop-blur-[20px] rounded-lg">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <Image src={left} alt="left" width={24} height={24} />
          </button>
          <div className="w-[1px] h-[18px] bg-[#FFFFFF33]"></div>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <Image src={right} alt="right" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
