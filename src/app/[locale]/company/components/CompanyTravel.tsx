"use client"
import React from 'react';
import CardExperts from '@/components/ui/cards/CardExperts';
import { useGetOurmissionQuery } from '@/context/api/OurMissionApi';


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
    order: number
  }


function CompanyTravel() {
    const { data } = useGetOurmissionQuery({})
    


    return (
        <section className='mb-32'>
            <div className='container'>

                <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                    {
                        data && data.slice(0,4).map((item: ItemType,index: number) => (
                            <div key={index}>
                                <CardExperts item={item}  className={`p-3 sm:p-6 ${item.order % 2 === 0 ? 'bg-[#F0F0F0]' : 'bg-[#9c9999]'} rounded-lg`}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CompanyTravel



