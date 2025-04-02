"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/shared/SectionTitle';
import { useGetGaleryQuery } from '@/context/api/Galery';
import { baseUrl } from '../../../../../public/static/Index';
import ImageLoading from '@/components/ui/ImageLoading';


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
  order: number
}
  
function GalleryTopBox() {
  const { data } = useGetGaleryQuery({})
  
  const t = useTranslations("gallery")
  return (
    <section className='mb-10'>
      <div className="container  p-4 ">
      <SectionTitle title={t("title")}/>
      <div className="grid grid-cols-2 gap-4">
        {data ? (
          data.map((item:ItemType, index: number) => (
            <div
              key={index}
              className={ 
               `${(index + 1) % 3 === 0 ? "col-span-2 md:col-span-3" : "col-span-1"}  md:max-h-[440px]`
              }
            >
              <Image
                width={1120}
                height={400}
                src={baseUrl + item.image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))
        ): (
          <div className='w-[1100px] grid grid-cols-2 h-[400px] gap-4'>
            <ImageLoading className='h-[400px]'/>
            <ImageLoading  className='h-[400px]'/>

          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default GalleryTopBox