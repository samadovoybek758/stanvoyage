"use client";
import React, { useRef } from 'react';
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import CustomerCard from '@/components/ui/cards/CardCustomer';
import { useGetCommentsQuery } from '@/context/api/CommentsApi';
import SectionTitle from '@/components/shared/SectionTitle';
import left from '../../../../../public/Images/stanvoyage/gallary-left.svg'
import right from '../../../../../public/Images/stanvoyage/gallary-right.svg'
import { useTranslations } from 'use-intl';


interface ItemType {
  uuid: string;
  created_at: string;
  updated_at: string
  image: string;
  order: number;
  text: string;
  fullname: string
}


function CompanyCustomer() {

  const {data} = useGetCommentsQuery({})
  const swiperRef = useRef<SwiperCore | null>(null);
  const t = useTranslations("customer")
  
  return (
    <section className='mb-[100px]'>
        <div className='container'>
        <div className='flex justify-between w-full'>
          <SectionTitle title={t("title")}/>


          <div className="hidden gap-3 sm:flex mb-5">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-[56px] rounded-full h-[56px] prev bg-[#E1E1E1]  flex justify-center items-center"
              >
                <Image width={24} height={24} alt="left icon" src={left} />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-[56px] next rounded-full h-[56px] bg-[#E1E1E1] flex justify-center items-center"
              >
                <Image width={24} height={24} alt="right icon" src={right} />
              </button>
            </div>
        </div>
        <div className=''>
            <Swiper
          modules={[Autoplay, Navigation]} 
          spaceBetween={16}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: {slidesPerView: 1},
            500: { slidesPerView: 1.5 }, 
            700: { slidesPerView: 2 }, 
            850:{ slidesPerView: 2.5},
            1024: { slidesPerView: 3 },
          }}
          
        >
          {data && data.map((item:ItemType) => (
            <SwiperSlide key={item.uuid}>
              <CustomerCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
            </div>

            <div className="flex gap-3 justify-center mt-4 sm:hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[40px] h-[40px] prev hover:bg-[#c7c6c6] transition-all duration-300 bg-[#E1E1E1] rounded-lg flex justify-center items-center"
            >
              <Image width={24} height={24} alt="left icon" src={left} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[40px] h-[40px] next rounded-lg hover:bg-[#c7c6c6] transition-all duration-300 bg-[#E1E1E1]  flex justify-center items-center"
            >
              <Image width={24} height={24} alt="right icon" src={right} />
            </button>
          </div>
        </div>
    </section>      
  )
}

export default CompanyCustomer