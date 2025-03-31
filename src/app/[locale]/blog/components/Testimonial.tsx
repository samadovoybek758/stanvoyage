"use client";
import React from 'react';


import "swiper/css";
import "swiper/css/navigation";
import CustomerCard from '@/components/ui/cards/CardCustomer';
import SectionTitle from '@/components/shared/SectionTitle';
import { useTranslations } from 'next-intl';
import { useGetCommentsQuery } from '@/context/api/CommentsApi';


interface ItemType {
    uuid: string;
    created_at: string;
    updated_at: string
    image: string;
    order: number;
    text: string;
    fullname: string
  }


function Testemonial() {

    const {data} = useGetCommentsQuery({})
    

  
    const t = useTranslations("blog")
  return (
    <section className='mb-[100px]'>
        <div className='container'>
        <SectionTitle title={t("testimonial")}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 xm:grid-cols-3 gap-4'>
          
          {data  && data.map((item:ItemType, index:number) => (
            
            <div key={index}>
                <CustomerCard item={item} />
            </div>
          ))}
       
            </div>
        </div>
    </section>      
  )
}

export default Testemonial