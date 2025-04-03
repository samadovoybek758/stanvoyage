"use client"
import NewsItemLoading from '@/components/ui/itemLoader/NewsItemLoading';
import { useGetBlogQuery } from '@/context/api/BlogApi'
import { getDescription, getTitle } from '@/hook/getLanguage';
import DOMPurify from "dompurify";
import Image from 'next/image';
import bgi from '../../../../../public/Images/stanvoyage/local.png'
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'

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
    description_en: string
    description_ru: string
    description_fr: string
    description_es: string
    description_de: string
}

function Locale() {
    const {data: item } = useGetBlogQuery({})
   
    const locale = useLocale()
    const t = useTranslations("home")
  return (
    <section className='mb-20 md:mb-32'>
        <div className='container'>

            <div className='flex justify-between gap-4 mb-[30px] sm:mb-4'>
            <div className='pt-[33px] flex-1 relative pl-[17px] pb-[59px] md:p-10 bg-[#2C4691] rounded-[20px] w-full'>
                
        <div className="absolute inset-0">
          <Image
            src={bgi}
            alt="Footer Background"
            layout="fill"
            quality={100}
            priority
          />
        </div>
                <h1 className={`text-white text-[24px] sm:text-[56px] max-w-[300px]   ${locale === "ru" ? "sm:max-w-[400px]" : "sm:max-w-[320px]"} leading-[115%]`}>{t("local")}</h1>
            </div>

            <div className='max-w-[368px] flex-1  md:block hidden'>
            {
                    item?.items ? (
                        item.items.slice(0,1).map((item: ItemType ,index:number) => (
                            <div key={index} className={`pt-5 pl-[14px] h-[200px] md:h-[277px]  pb-8 pr-16 bg-[#F0F0F0] rounded-[20px]`}>
                                <h2 className={`text-[##1C1C1C]  text-[22px] md:text-2xl mb-3 interMed   line-clamp-2`}>{item ? getTitle(item, locale) : ''}</h2>
                                <p className='text-[##1C1C1C] text-lg md:text-base line-clamp-6' 
                                 dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(String(item? getDescription(item, locale) : "")),
                                  }}/>
                                
                            </div>
                        ))
                    ):(
                        <NewsItemLoading/>
                    )
                }
            </div>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:gap-4'>
                {
                    item?.items ?(
                        item.items.slice(1,4).map((item: ItemType, index:number) => (
                            <div key={index} className={`pt-5 pl-[14px] pb-8 pr-3 md:pr-16 border border-[#D7D7D7] ${index  === 1 ? 'bg-[#F0F0F0]' : 'bg-[#fff]'} rounded-[20px]`}>
                               <h2 className={`text-[##1C1C1C]  text-lg sm:text-[22px] md:text-2xl mb-3  interMed line-clamp-2`} >{item ? getTitle(item, locale) : ''}</h2>
                                    <p className='text-[##1C1C1C] text-sm sm:text-lg md:text-base  line-clamp-6' 
                                     dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(String(item? getDescription(item, locale) : "")),
                                      }}/>
                            </div>
                        ))
                    ): (
                        <NewsItemLoading/>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Locale