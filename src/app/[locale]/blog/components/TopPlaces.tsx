"use client"
import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react';
import Image from 'next/image';
import { useParams } from "next/navigation";
import { useGetBlogByIdQuery, useGetBlogQuery } from '@/context/api/BlogApi';
import { getDescription, getTitle } from '@/hook/getLanguage';
import { useLocale, useTranslations } from 'next-intl';
import DOMPurify from "dompurify";
import { baseUrl } from '../../../../../public/static/Index';
import ImageLoading from '@/components/ui/ImageLoading';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import icon from '../../../../../public/Images/stanvoyage/blog.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import NewsItemLoading from '@/components/ui/itemLoader/NewsItemLoading';


interface ItemType {
  uuid: string;
    created_at: string;
    updated_at: string
    order: number
    image: string;
    blog: string
  
}


interface ItemType2 {
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
}

function TopPlaces() {
  const { id } = useParams();
  const {data} = useGetBlogByIdQuery(id as string)
  const { data: blogs } = useGetBlogQuery({ })
  const t = useTranslations("blog")  
  
  const locale = useLocale()

  const rawDescription = data?.blog ? getDescription(data.blog, locale) : "";
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(rawDescription, "text/html");
  const paragraphs = Array.from(parsedHtml.body.getElementsByTagName("p")); // Barcha `<p>` elementlarni olish

  const firstTwoParagraphs = paragraphs.slice(0, 3).map(p => p.outerHTML).join("");
  const remainingParagraphs = paragraphs.slice(3).map(p => p.outerHTML).join("");
  
  
  return (
    <section className='mt-20'>
        <div className='container'>

            <SectionTitle title={data?.blog ? getTitle(data?.blog, locale) : ''}/>

            <div>
                <p className='mb-6 text-lg '
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(firstTwoParagraphs),
                }}/>
                
                

                {
                  data?.blog_image ? (
                    data?.blog_image.slice(0,1).map((item:ItemType, index:number) =>(
                      <div key={index}>
                        <Image 
                width={1136}
                height={576}
                alt='top place'
                className='rounded-[20px] mb-6'
                src={baseUrl + item.image}
                />
                      </div>
                    ))

                  ): (
                    <ImageLoading/>
                  )
                }
               

               <p className='mb-6 text-lg '
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(remainingParagraphs),
                }}/>
                <div className='grid grid-cols-3 gap-4 mb-[120px] max-h-[262px]'>
                {
                  data?.blog_image ? (
                    data?.blog_image.map((item:ItemType, index:number) =>(
                      <div key={index}>
                        <Image 
                width={1136}
                height={576}
                alt='top place'
                className='rounded-[20px] w-full h-full'
                src={baseUrl + item.image}
                />
                      </div>
                    ))

                  ): (
                    <ImageLoading/>
                  )
                }
                </div>

              
                
            </div>

            <div>
                <SectionTitle title={t("other")}/>
              <div className="mb-6">
              <Swiper
          modules={[Autoplay]} 
          spaceBetween={16}
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
              {
                        blogs?.items ? (
                            blogs.items.map((item: ItemType2, index: number) => (
                              <SwiperSlide key={index}>
                                <Link href={`/${locale}/blog/${item.uuid}`} >
                                    <div className="relative h-[400px] mb-3" >
                                        <div className="absolute -z-10  rounded-[20px] overflow-hidden shadow-lg w-full  h-full">
                                            <Image
                                                width={205}
                                                height={266}
                                                alt="About Company"
                                                className=" w-full h-full object-cover "
                                                src={baseUrl + item.image}
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="max-w-[320px]">
                                        <h2 className="text-2xl font-medium mb-[10px] line-clamp-1">{item ? getTitle(item, locale) : ""}</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-medium ">Read more</span>
                                            <Image
                                                src={icon}
                                                alt="icon"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                </Link>
                                </SwiperSlide>
                            ))
                           
                        )
                            : (
                                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[1100px] gap-4'>
                                    <NewsItemLoading />
                                    <NewsItemLoading />
                                    <NewsItemLoading />
                                </div>

                            )
                     
                    }

                </Swiper>
              </div>
            </div>
        </div>
    </section>
  )
}

export default TopPlaces