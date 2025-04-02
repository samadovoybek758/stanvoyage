"use client";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import CardCountry from "@/components/ui/cards/CardCountry";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useGetCountriesQuery } from "@/context/api/CountriesApi";
import NewsItemLoading from "@/components/ui/itemLoader/NewsItemLoading";

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


function Countries() {
 
  const { data } = useGetCountriesQuery({})


  const locale = useLocale()

 
  const t = useTranslations('countries')

  return (
    <section className="mb-20 md:mb-32 mt-20">
      <div className="container">

    
        <SectionTitle title={t("title")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          { data ?(
            data.map((item: ItemType) => (
           
              <div key={item.uuid} >
                  <Link href={`/${locale}/countries/${item.uuid}`}>
                  <CardCountry item={item}  />
                  </Link>
              </div>
            ))
          ) :
         (
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
  );
}

export default Countries;
