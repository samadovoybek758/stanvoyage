"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from 'next/image'
import { baseUrl } from '../../../../../public/static/Index';
import { useGetBannerImageQuery } from '@/context/api/BannerImageApi';


interface ItemType {
    uuid: string;
    created_at: string;
    updated_at: string
    image: string;
    order: number
  }

function CaruselImage() {

    const {data} = useGetBannerImageQuery({})
    

  return (
    <section className='mt-[-180px] xssm:mt-[-300px] sm:mt-[-370px] '>
      <div className='container '>

            <div className=' h-[500px] relative '>
                <Swiper
              modules={[Autoplay, Navigation]} 
              spaceBetween={41}
              navigation={{ nextEl: ".next", prevEl: ".prev" }}
              slidesPerView={4}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                0: { 
                  slidesPerView: 1, 
                  spaceBetween: 10,  // 0px dan boshlab kichik bo'shliq
                },
                300: { 
                  slidesPerView: 3, 
                  spaceBetween: 20,  // 300px dan boshlab o'rtacha bo'shliq
                },
                400: { 
                  slidesPerView: 1.5, 
                  spaceBetween: 15,  // 400px dan boshlab kichikroq bo'shliq
                },
                450: { 
                  slidesPerView: 1.8, 
                  spaceBetween: 18,  // 450px dan boshlab o'rtacha bo'shliq
                },
                500: { 
                  slidesPerView: 2, 
                  spaceBetween: 25,  // 500px dan boshlab kattaroq bo'shliq
                },
                580: { 
                  slidesPerView: 2.5, 
                  spaceBetween: 30,  // 580px dan boshlab kattaroq bo'shliq
                },
                700: { 
                  slidesPerView: 3, 
                  spaceBetween: 35,  // 700px dan boshlab kattaroq bo'shliq
                },
                850: { 
                  slidesPerView: 3.5, 
                  spaceBetween: 40,  // 850px dan boshlab kattaroq bo'shliq
                },
                1024: { 
                  slidesPerView: 4, 
                  spaceBetween: 41,  // 1024px dan boshlab eng katta bo'shliq
                },
            }}
            >

        
              {data  && data.map((item: ItemType , index:number) => (
                <SwiperSlide key={index} className={`absolute  ${index % 2 === 0 ? 'mt-10' : ''}`}>
                    <div className='h-[167px] xssm:h-[338px] '>
                    <Image 
                    width={400}
                    height={500}
                    src={baseUrl + item.image}
                    alt="image"
                    className='w-full h-full rounded-[9.92px] ssm:rounded-[20px] object-cover'
                    quality={100}
                    />
                    </div>
                </SwiperSlide>
              ))}
          

              </Swiper>
            </div>

      </div>
    </section>


)
}

export default CaruselImage