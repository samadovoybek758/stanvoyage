"use client"
import React from 'react';

import Image from 'next/image';
import img1 from '../../../../../public/Images/stanvoyage/TravelLocation.svg';
import img2 from '../../../../../public/Images/stanvoyage/Travelcalendar.svg';
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useGetTripQuery } from '@/context/api/TripApi';
import { baseUrl } from '../../../../../public/static/Index';
import { getTitle } from '@/hook/getLanguage';
import NewsItemLoading from '@/components/ui/itemLoader/NewsItemLoading';


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
    diapazon: string
    duration: number
    order: number
  }


function TravelTip() {
    const t = useTranslations('travel')
    const {data } = useGetTripQuery({})
   
    
    const locale = useLocale()
    
    return (
        <section className='mb-8 mt-20'>
            <div className='container'>

                <SectionTitle title={t("travel")} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                    {
                        data ? (
                            data.map((item: ItemType) => (
                         
                                <Link href={`/${locale}/travel/${item.uuid}`} key={item.uuid}>
                                 <div className='h-[400px] mb-3 relative'>
                                     <Image
                                         width={368}
                                         height={400}
                                         src={baseUrl + item.image}
                                         alt={item.title_en}
                                         className='rounded-[20px] w-full h-full object-cover '
                                         unoptimized
                                     />
                                 </div>
 
                                 <h1 className='text-2xl font-medium mb-[6px]'>{getTitle(item , locale)}</h1>
 
                                 <div className='flex items-center gap-[6px] mb-[6px]'>
                                     <Image
                                         src={img1}
                                         alt='icon'
                                         width={20}
                                         height={20}
                                     />
                                     <span className='text-lg font-medium'>{item.diapazon}</span>
                                 </div>
 
                                 <div className='flex items-center gap-[6px]'>
                                     <Image
                                         src={img2}
                                         alt='icon'
                                         width={20}
                                         height={20}
                                     />
                                     <span className='text-lg font-medium'>{item.duration}</span>
                                     <span>{t("days")}</span>
                                 </div>
 
                             </Link>
                         ))
                        ):(
                            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[1100px] gap-4'>
                                <NewsItemLoading />
                                <NewsItemLoading />
                                <NewsItemLoading/>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default TravelTip