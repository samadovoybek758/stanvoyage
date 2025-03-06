"use client";
import React, {useEffect} from "react";
import SectionTitle from "./SectionTitle";
import CardNews from "../ui/cards/CardNews";
import { useGetNewsQuery } from "@/context/api/News";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import right from '../../../public/Images/gallary-right.svg';
import left from '../../../public/Images/gallary-left.svg'


const NewSectionList = () => {
  const { data } = useGetNewsQuery({});

   useEffect(() => {
      if (typeof document !== "undefined") {
        const nextButton = document.querySelector(".next") as HTMLElement;
        const prevButton = document.querySelector(".prev") as HTMLElement;
  
        if (nextButton && prevButton) {
          nextButton.addEventListener("click", () => mainSwiper?.slideNext());
          prevButton.addEventListener("click", () => mainSwiper?.slidePrev());
        }
      }
    }, []);

  let mainSwiper: SwiperType | null = null;

  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container">
        <SectionTitle title="Yangiliklar" buttonName="Barchasi" />
        <Swiper
          modules={[Autoplay]}
          
          spaceBetween={9}
          onSwiper={(swiper) => (mainSwiper = swiper)}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          slidesPerView={4}
          
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 4,
              spaceBetween:20
             },
            768: { slidesPerView: 3,
              spaceBetween:20
             },
            650: {slidesPerView: 2.5,
              spaceBetween:20
            },
            550: {slidesPerView: 2,
              spaceBetween:10
            },
            350: { slidesPerView: 1.5 },
            200: {slidesPerView: 1}
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <CardNews />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="sm:hidden  flex justify-center mt-5 gap-4">
        <button className="prev w-[56px] h-[56px] cursor-pointer bg-[#E1E1E1] flex justify-center items-center rounded-full p-2 ">
            <Image width={24} height={24} alt="icon left" src={left} />
          </button>
        <button className="next w-[56px] h-[56px] cursor-pointer bg-[#E1E1E1] rounded-full flex justify-center items-center">
            <Image width={24} height={24} alt="icon right" src={right} />
          </button>
        
        </div>

      </div>
    </section>
  );
};

export default NewSectionList;
