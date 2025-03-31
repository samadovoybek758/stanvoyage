"use client"
import React from 'react';

import Image from 'next/image';
import img1 from '../../../../../public/Images/stanvoyage/TravelLocation.svg';
import img2 from '../../../../../public/Images/stanvoyage/Travelcalendar.svg';
import img3 from '../../../../../public/Images/stanvoyage/TravelStar.svg';
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useGetTripQuery } from '@/context/api/TripApi';
import { baseUrl } from '../../../../../public/static/Index';
import { getTitle } from '@/hook/getLanguage';


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
    const {data} = useGetTripQuery({})
    console.log(data);
    
    const locale = useLocale()
    
    return (
        <section className='mb-8 mt-20'>
            <div className='container'>

                <SectionTitle title={t("travel")} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                    {
                        data  && data.map((item: ItemType) => (
                         
                               <Link href={`/${locale}/travel/${item.uuid}`} key={item.uuid}>
                                <div className='h-[400px] mb-3 relative'>
                                    <Image
                                        width={368}
                                        height={400}
                                        src={baseUrl + item.image}
                                        alt={item.title_en}
                                        className='rounded-[20px] w-full h-full object-cover '
                                    />
                                    <div className='absolute flex  gap-[6px] px-[14px] py-[10px] bg-white rounded-[32px] top-[14px] left-[14px]'>
                                        <Image
                                            src={img3}
                                            alt='icon'
                                            width={20}
                                            height={20}
                                        />
                                        <span className='text-base font-medium'>{item.duration}</span>
                                    </div>
                                </div>

                                <h1 className='text-2xl font-medium mb-[6px]'>{getTitle(item , locale)}</h1>

                                <div className='flex items-center gap-[6px] mb-[6px]'>
                                    <Image
                                        src={img1}
                                        alt='icon'
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={img2}
                                        alt='icon'
                                        width={20}
                                        height={20}
                                    />
                                    <span className='text-lg font-medium'>{item.diapazon}</span>
                                </div>

                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TravelTip