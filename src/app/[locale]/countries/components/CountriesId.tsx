"use client"
import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useGetCountriesByIdQuery } from '@/context/api/CountriesApi'
import { baseUrl } from '../../../../../public/static/Index'
import ImageLoading from '@/components/ui/ImageLoading'
import { getDescription, getTitle } from '@/hook/getLanguage'
import { useLocale, useTranslations } from 'next-intl'
import Loading from '@/components/ui/Loading'
import DOMPurify from "dompurify";
import Link from 'next/link'




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

function CountriesId() {
  const { id } = useParams()
  const { data } = useGetCountriesByIdQuery(id as string)
  

  const t = useTranslations('countries')
  const locale = useLocale()

  const rawDescription = data?.country ? getDescription(data.country, locale) : "";

  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(rawDescription, "text/html");
  const paragraphs = Array.from(parsedHtml.body.getElementsByTagName("p")); // Barcha `<p>` elementlarni olish

  const firstTwoParagraphs = paragraphs.slice(0, 3).map(p => p.outerHTML).join("");
  const remainingParagraphs = paragraphs.slice(3).map(p => p.outerHTML).join("");

  return (
    <section className='mt-20'>
      <div className='container flex gap-[38px] justify-between items-start'>

        <div className='max-w-[754px]'>
          <SectionTitle title={data?.country ? (getTitle(data.country, locale)) : ""} />



          {firstTwoParagraphs && (
            <p
              className='text-lg  mb-6'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(firstTwoParagraphs),
              }}
            />
          )}


          <div className='   rounded-[20px] p-3 md:hidden  block'>
            <span className='text-2xl font-medium'>{t("location")}</span>

            <ul className='grid sm:grid-cols-auto grid-cols-2 mt-5 mb-5  justify-between gap-4 w-full'>
              {
                data?.cities ? (data.cities.map((item: ItemType, index: number) => (
                  <Link key={index}  href={`/${locale}/countries/${item.uuid}`} className='cursor-pointer'>
                    <li className='text-[#2C4691] text-lg  border-b-2 border-[#D7D7D7]'>{getTitle(item, locale)}</li>
                  </Link>
                ))) : (
                  <Loading className='text-[#2C4691] text-lg  border-b-2 border-[#D7D7D7]' />
                )
              }
            </ul>
          </div>


          <div className='mb-6 h-[250px] sm:h-[400px] '>

            {
              data?.country?.image ? (
                <Image
                  width={752}
                  height={400}
                  alt='imge'
                  className='rounded-[20px] h-full w-full object-cover'
                  src={baseUrl + data.country.image}
                />
              ) : (
                <ImageLoading className='rounded-[20px] h-full w-full' />
              )
            }

          </div>
          <div className='grid  grid-cols-2 gap-3 sm:gap-5 mb-6 max-h-[246px]'>


            {
              data?.cities ? (data.cities.slice(0, 2).map((item: ItemType, index: number) => (
                <div key={index} className='max-h-[246px]'>

                  <Image
                    width={752}
                    height={400}
                    alt='imge'
                    className='rounded-[20px] h-full w-full'
                    src={baseUrl + item.image}
                  />
                </div>
              ))) : (
                <ImageLoading className='rounded-[20px] h-[246px] w-full ' />
              )
            }

          </div>

          {remainingParagraphs && (
            <p
              className="mt-6 text-lg"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(remainingParagraphs),
              }}
            />
          )}
        </div>


        <div className='max-w-[368px] border border-[#D7D7D7] rounded-[20px] p-6 md:block hidden'>
          <span className='text-2xl font-medium'>{t("location")}</span>

          <ul className='flex flex-col mt-8 gap-4 w-[200px] lg:w-[320px] '>
          {
                data?.cities ? (data.cities.map((item: ItemType, index: number) => (
                  <Link key={index}  href={`/${locale}/countries/${id}/${item.uuid}`} className='cursor-pointer'>
                  <li className='text-[#2C4691] text-lg  border-b-2 border-[#D7D7D7]'>{getTitle(item, locale)}</li>
                </Link>
                ))) : (
                  <Loading className='text-[#2C4691] text-lg  border-b-2 border-[#D7D7D7]' />
                )
              }
          </ul>
        </div>

      </div>
    </section>

  )
}

export default CountriesId