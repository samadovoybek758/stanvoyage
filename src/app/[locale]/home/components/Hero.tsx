"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useLocale, useTranslations } from "next-intl";
import img from '../../../../../public/Images/stanvoyage/homeBG.png'

const Hero = () => {
  const local = useLocale()
  const t = useTranslations("home")  

  
  return (
    <section className="max-h-[786px] w-full mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] relative">
    
       
            <div className="flex flex-col items-center pt-[110px] md:pt-[128px] hero-slider h-[640px] relative before:bg-gradient-to-b from-black/30 to-black before:absolute before:inset-0 before:z-0">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={img}
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
                  {t("title")}
                </h1>
                
               
              </div>
            </div>
      
    </section>
  );
};

export default Hero;
