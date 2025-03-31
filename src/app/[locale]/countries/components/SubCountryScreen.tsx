"use client"
import React from 'react'
import SubCountry from '../components/SubCountry'
import AllHero from '@/components/shared/AllHero'
import { useGetCountriesByIdQuery } from '@/context/api/CountriesApi';
import { getTitle } from '@/hook/getLanguage';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { baseUrl } from '../../../../../public/static/Index';


interface ItemType {
    uuid: string;
    country: string
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

function SubCountryScreen() {
  const params = useParams();
  const locale = useLocale()
  const id = params?.id;
  const subId = params?.subId
  const { data } = useGetCountriesByIdQuery(id as string);
  if (!data?.cities) return <p>Shaharlar mavjud emas!</p>;


  const data1 = data.cities.find((city: ItemType) => city.uuid === subId) || null;

  return (
    <div>
      <AllHero title={data1 ? getTitle(data1, locale): ""} image={`${baseUrl}${data1.image}`} mbDefault={false} page='countries'/>
      <SubCountry/>
    </div>
  )
}

export default SubCountryScreen