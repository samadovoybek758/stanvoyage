"use client"
import React from 'react';
import Image from 'next/image';
import DOMPurify from "dompurify";

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useGetComponyQuery } from '@/context/api/CompanyApi';
import { getDescription } from '@/hook/getLanguage';
import { baseUrl } from '../../../../../public/static/Index';

function AboutCompany() {
  const {data} = useGetComponyQuery({})
  
  const locale = useLocale()
  const t = useTranslations("home")
  return (
    <section className='pb-32 pt-[100px] homebg'>
        <div className='container'>

            <div className='flex flex-row gap-0 md:gap-4 lg:gap-10 h-[300px] md:h-[500px]  justify-center items-center relative'> 

              <div className="relative  md:w-[205px] md:h-[266px] w-[130px] h-[150px]   rounded-lg overflow-hidden shadow-lg self-start">
              <Image
                width={205}
                height={266}
                alt='About Company'
                className='top-0 left-0 z-10 rounded-[20px] w-full h-full object-cover'
                src={baseUrl + data?.image}
                />
              </div>
               

                <div className='sm:max-w-[300px] max-w-[200px] md:max-w-[400px] lg:max-w-[627px] flex flex-col items-center '>
                <p className='text-center font-medium text-base sm:text-2xl md:text-[32px] line-clamp-5'
                
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(data? getDescription(data, locale) : "")),
                }}/>
                <Link  className='bg-[#2C4691] rounded-[122px] mt-5 py-[15.5px] px-[30.5px] text-white' href={`/${locale}/company`}>{t("learn")}
                </Link>
                </div>
                
                <div className="relative md:w-[205px] md:h-[266px] w-[130px] h-[150px] rounded-lg overflow-hidden shadow-lg self-end">
                <Image
                width={205}   
                height={266}
                alt='About Company'
                className='z-10 rounded-[20px] w-full h-full object-cover '
                src={baseUrl + data?.image}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany