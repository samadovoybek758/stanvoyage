"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useLocale } from "next-intl";
import { useGetBannerQuery } from "@/context/api/BannersApi";
import Loading from "@/components/ui/Loading";
import { baseUrl } from "../../../../../public/static/Index";
import { getTitle } from "@/hook/getLanguage";


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
  order: number
}
const Hero = () => {
  const { data: item } = useGetBannerQuery({})
  
  
  const local = useLocale()

  
  return (
    <section className="max-h-[484px] xssm:max-h-[786px] w-full overflow-hidden mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className=""
      >
            {
              item ? (
               item.map((item:ItemType,index:number) =>(
                <SwiperSlide key={index}>
                  <div  className="flex flex-col items-center pt-[110px] md:rounded-bl-[50px] md:rounded-br-[50px] rounded-bl-[20px] rounded-br-[20px] md:pt-[128px] hero-slider h-[484px] ssm:h-[786px] relative before:bg-gradient-to-b overflow-hidden from-black/30 to-black before:absolute before:inset-0 before:z-0">
                <div className="absolute inset-0 -z-10 overflov-hidden ">
                  <Image
                    src={baseUrl + item.image}
                    alt="hero"
                    fill
                    className="object-cover md:rounded-bl-[50px] md:rounded-br-[50px] rounded-bl-[20px] rounded-br-[20px]"
                    priority={true}
                  />
                </div>
                <div className="relative z-20 flex flex-col items-center h-full pb-7 px-[15px]">
                  <h1
                    className={`  max-w-[900px] font-normal text-[32px] ssm:text-[40px] lg:text-[58px] md:leading-[60px] mb-3 text-[#fff] text-center 
                     line-clamp-4 md:line-clamp-3 unbo`}
                  >
                    {item ? getTitle(item, local): ''}
                  </h1>
                  
                 
                </div>
              </div>
                </SwiperSlide>
               ))
              ): (
                <Loading/>
              )
            }
            </Swiper>
    </section>
  );
};

export default Hero;
