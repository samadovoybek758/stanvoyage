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


function CompanyExperts() {
    const { data } = useGetOurmissionQuery({})
    return (
        <section className='mb-32'>
            <div className='container'>

                <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mb-4'>
                    {
                        data && data.slice(5, 7).map((item:ItemType) => (
                            <div key={item.order} >
                                <CardExperts item={item} className={`p-6 ${item.order % 2 === 0 ? 'bg-gray-300' : 'bg-[#F9F9F9]'} rounded-lg`}/>
                            </div>
                        ))
                    }
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                    {
                        data  && data.slice(7, data.length).map((item:ItemType) => (
                            <div key={item.order} >
                                <CardExperts item={item} className={`p-6 ${item.order % 2 === 0 ? 'bg-gray-300' : 'bg-[#F9F9F9]'} rounded-lg`}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CompanyExperts



