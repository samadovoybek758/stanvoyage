"use client"
import React from 'react';
import Image from 'next/image';
import { useGetWhyUsQuery } from '@/context/api/WhyUsApi';
import { baseUrl } from '../../../../../public/static/Index';
import { getContent, getTitle } from '@/hook/getLanguage';
import { useLocale } from 'next-intl';
import DOMPurify from "dompurify";

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
    content_en: string
    content_ru: string
    content_fr: string
    content_es: string
    content_de: string
  }
  

function CompanyWorks() {
    const {data} = useGetWhyUsQuery({})
    

    const locale = useLocale()
  return (
    <section className='mb-[100px]'>
        <div className='container'>

            <div className='flex flex-col gap-5 md:gap-[100px]'>
            {
                data  && data.map((item : ItemType , index: number) =>(
                    <div key={index} className={`flex gap-4 items-center md:flex-row flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className='flex-1 h-[450px]'>
                    <Image
                    width={560}
                    height={450}
                    alt='choosing image'
                    src={baseUrl + item.image}
                    className='w-full h-full rounded-[20px] object-cover'
                />
                </div>
               

                <div className='flex-1'>
                    <h1 className='mb-4 text-xl sm:text-[36px] text-[#1C1C1C] font-medium'>{getTitle(item, locale)}</h1>
                    <p
              className='text-base sm:text-lg text-[#1C1C1C] mb-3 sm:mb-5 line-clamp-14'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(getContent( item, locale) || ""),
              }}
            />
                </div>

                </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default CompanyWorks