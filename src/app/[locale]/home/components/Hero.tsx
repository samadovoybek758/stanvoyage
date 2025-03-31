"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useLocale, useTranslations } from "next-intl";

// interface Slider {
//   uuid: string;
//   image: string;
//   title_uz: string;
//   title_ru: string;
//   title_en: string;
//   description_uz: string;
//   description_ru: string;
//   description_en: string;
// }

const Hero = () => {
  const local = useLocale()
  const t = useTranslations("home")  

  
  return (
    <section className="max-h-[786px] w-full mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] relative">
    
       
            <div className="flex flex-col items-center pt-[110px] md:pt-[128px] hero-slider h-[640px] relative before:bg-gradient-to-b from-black/30 to-black before:absolute before:inset-0 before:z-0">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={`https://s3-alpha-sig.figma.com/img/c97d/f1d4/9cd2274a268a6eaf67c456ee8cddef98?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TLFFtwG8jx5K5-NWwfZQsw8yABDQgIVhwLhwGWX2pXSMTYbJJvnc0NqWQuOzfPDYc2mDNwOfiec1SNhQ9UnqX-oQFsAre1bJwueOP63LyB88oCq1v-PPnJUsCnTgvCLDP2ff6Rd98cls1FJ8S~9YU6JKAGDBc0bfBs0efdwLUtvK9U12zimxdz7npkbj0thmvzp4YWauaK9Lg3dGl~V2a-ZsCt9Osfraw7vNpIKEc~KKRjKc5ZubzsAqFn~PfYAce4KvsbxHCtALf3CdoUjBP8vz~9jnklGCqa8B9yNEcG-ehU7Jn2l2fUuuAXRuyyLgQORrxiP9NkInQzyZA65TcA__`}
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
