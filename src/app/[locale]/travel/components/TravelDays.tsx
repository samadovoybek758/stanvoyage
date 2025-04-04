"use client";
import { Swiper as SwiperCore } from "swiper";
import React, { useRef } from 'react'
import CardExperts from '@/components/ui/cards/CardExperts';
import Image from 'next/image';
import left from '../../../../../public/Images/stanvoyage/gallary-left.svg';
import right from '../../../../../public/Images/stanvoyage/gallary-right.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from '@/components/shared/SectionTitle';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useGetTripByIdQuery } from '@/context/api/TripApi';
import { getDescription, getSubtitle, getTitle } from '@/hook/getLanguage';
import DOMPurify from "dompurify";
import { baseUrl } from '../../../../../public/static/Index';
import ImageLoading from '@/components/ui/ImageLoading';



interface TypeService {
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
    content_en: string
    content_ru: string
    content_fr: string
    content_es: string
    content_de: string
    trip: string
}

interface TypeDays {
    uuid: string;
    created_at: string;
    updated_at: string
    subtitle_en: string
    subtitle_de: string
    subtitle_fr: string
    subtitle_es: string
    subtitle_ru: string
    title_en: string;
    title_ru: string;
    title_fr: string;
    title_de: string;
    title_es: string;
    image: string;
    order: number
    description_en: string
    description_ru: string
    description_fr: string
    description_es: string
    description_de: string
    trip: string
}

interface ItemImage {
    uuid: string;
    created_at: string;
    updated_at: string;
    image: string;
    order: number;
    trip: string;
}

function TravelDays() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const { id } = useParams()
    const { data } = useGetTripByIdQuery(id as string)


    const y = useTranslations('gallery')
    const locale = useLocale()
    return (
        <section className='mt-20 mb-32'>
            <div className='container'>

                <SectionTitle title={data?.trip ? getTitle(data.trip, locale) : ''} />

                <div className='md:h-[400px] mb-10 sm:mb-20 h-[250px] sm:h-[300px]' >
                    {
                        data?.trip?.image ? (
                            <Image
                                width={1136}
                                height={400}
                                alt='image travel'
                                src={baseUrl + data.trip.image}
                                className='w-full h-full rounded-[20px] object-cover'
                            />
                        ) : (
                            <ImageLoading />
                        )
                    }
                </div>



                <div >
                    {data?.trip_days.length > 0 && data.trip_days.map((item: TypeDays, index: number) => (
                        <div key={index} className='border-[#D7D7D7] border mb-20 md:mb-[100px] gap-7 flex flex-col md:flex-row justify-between rounded-[20px] pt-5 pb-6 pl-6 pr-[26px] '>
                            <div className="flex flex-col gap-2">
                                <span className='text-lg text-[#2C4691] font-medium'>{getTitle(item, locale)}</span>
                                <span className='md:text-[22px] text-lg  max-w-[320px] '>{getSubtitle(item, locale)}</span>
                            </div>

                            <div className='max-w-[573px]'>
                                <p className='text-base md:text-lg font-normal'
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(
                                            String(item ? getDescription(item, locale) : "")
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                    ))}

                </div>




                <div className=' gap-4'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
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
                        {
                            data?.services && data?.services.map((item: TypeService, index: number) => (
                                <SwiperSlide key={index} className="w-full">
                                    <CardExperts item={item} className={`pt-[30px] pl-6 pb-5  pr-[27px] ${index % 2 == 0 ? "bg-[#F0F0F0]" : 'white'}`} />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>



                <div className="w-full  max-h-[300px]  mt-[100px]">
                    <div className='flex flex-row justify-between w-full'>

                        <SectionTitle title={y("title")} />


                        <div className="hidden gap-3 sm:flex">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-[40px] prev  h-[40px] bg-[#E1E1E1] rounded-full flex justify-center items-center"
                            >
                                <Image width={24} height={24} alt="left icon" src={left} />
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-[40px] next h-[40px] bg-[#E1E1E1] rounded-full flex justify-center items-center"
                            >
                                <Image width={24} height={24} alt="right icon" src={right} />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 2000,

                        }}
                        loop={true}
                        navigation={{ nextEl: ".next", prevEl: ".prev" }}
                        spaceBetween={15}
                        breakpoints={{
                            550: { slidesPerView: 1 },
                            892: { slidesPerView: 2 },
                            650: { slidesPerView: 1.5 },
                            600: { slidesPerView: 1.2 },
                        }}

                    >
                        {data?.trip_images ? (
                            data.trip_images.map((item: ItemImage, index: number) => (
                                <SwiperSlide key={index} >
                                    <div className="">
                                        <Image
                                            width={400}
                                            height={500}
                                            src={baseUrl + item.image}
                                            alt="image"
                                            className='w-full h-[300px] md:h-[400px] rounded-[25px] ssm:rounded-[20px]'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className='flex flex-row gap-4 h-[400px]'>
                                <ImageLoading className='h-full w-full rounded-20px]' />
                                <ImageLoading className='h-full w-full rounded-20px]' />
                            </div>
                        )}


                    </Swiper>

                    <div className="flex gap-3 justify-center mt-4 sm:hidden">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-[56px] h-[56px]  prev hover:bg-[#c7c6c6] transition-all duration-300 bg-[#E1E1E1] rounded-lg flex justify-center items-center"
                        >
                            <Image width={24} height={24} alt="left icon" src={left} />
                        </button>

                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-[56px] h-[56px] next hover:bg-[#c7c6c6] transition-all duration-300 bg-[#E1E1E1] rounded-lg flex justify-center items-center"
                        >
                            <Image width={24} height={24} alt="right icon" src={right} />
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default TravelDays