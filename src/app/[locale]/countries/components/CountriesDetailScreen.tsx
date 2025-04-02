"use client"
import AllHero from '@/components/shared/AllHero'
import React from 'react'
import CountriesId from '../components/CountriesId'
import { useParams } from 'next/navigation'
import { useGetCountriesByIdQuery } from '@/context/api/CountriesApi'
import { getTitle } from '@/hook/getLanguage'
import { useLocale } from 'next-intl'
import { baseUrl } from '../../../../../public/static/Index'
import Loading from '@/components/ui/Loading'

function CountriesDetailScreen() {
    const locale = useLocale()
    const { id } = useParams()
    const { data } = useGetCountriesByIdQuery(id as string)
    if (!data?.country) return <Loading/>;

    console.log(data);
    
      
  return (
    <div>
      <AllHero title={data?.country ? (getTitle(data?.country, locale)): ""} image={`${baseUrl}${data?.country?.image}`}  mbDefault={false} page='countries'/>
      <CountriesId/>
    </div>
  )
}

export default CountriesDetailScreen














  {/* <div className=' mb-5 p-3 md:hidden overflow-hidden block'>

            <span className='text-2xl font-medium'>{t("location")}</span>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}

            >
              <ul className=''>
                {
                  data?.cities ? (data.cities.map((item: ItemType, index: number) => (
                    <SwiperSlide key={index}>
                      <Link key={index} href={`/${locale}/countries/${item.uuid}`} className='cursor-pointer'>
                        <li className='text-[#2C4691] text-lg w-[200px]  border-b-2 border-[#D7D7D7]'>{getTitle(item, locale)}</li>
                      </Link>
                    </SwiperSlide>
                  ))) : (
                    <Loading className='text-[#2C4691] text-lg  border-b-2 border-[#D7D7D7]' />
                  )
                }
              </ul>
            </Swiper>
          </div> */}