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
      
  return (
    <div>
      <AllHero title={data?.country ? (getTitle(data?.country, locale)): ""} image={`${baseUrl}${data.county?.image}`}  mbDefault={false} page='countries'/>
      <CountriesId/>
    </div>
  )
}

export default CountriesDetailScreen