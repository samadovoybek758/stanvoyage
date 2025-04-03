"use client";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import CardCountry from "@/components/ui/cards/CardCountry";
import SectionTitle from "@/components/shared/SectionTitle";
import icon from '../../../../../public/Images/stanvoyage/blog.png'
import { useLocale, useTranslations } from "next-intl";
import { useGetCountriesQuery } from "@/context/api/CountriesApi";
import Link from "next/link";
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
  const t = useTranslations("countries")
  return (
    <section className="mb-32 ">
      <div className="container">
        <div className="flex justify-between items-center">
          <SectionTitle title={t('title')} />

          <Link href={`/${locale}/countries`} className="flex items-center gap-[6px]">
            <span className={`${locale === "ru" ? "unbo": "interNor"} text-lg`}>{t('all-button')}</span>
            <Image
              width={20}
              height={20}
              alt="icon0"
              src={icon}
            />
          </Link>

        </div>
        <div className="grid gap-4 grid-cols-1 sssm:grid-cols-2 lg:grid-cols-3">
          {data ? (
            data.slice(0, 3).map((item: ItemType) => (

              <div key={item.uuid}>
                <CardCountry item={item} />
              </div>
            ))
          ) : (
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[1100px] gap-4'>
              <NewsItemLoading />
              <NewsItemLoading />
              <NewsItemLoading />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Countries;
