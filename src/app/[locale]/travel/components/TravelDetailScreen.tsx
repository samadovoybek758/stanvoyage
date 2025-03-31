"use client"
import React from 'react'
import AllHero from '@/components/shared/AllHero'
import TravelDays from '../components/TravelDays'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { useGetTripByIdQuery } from '@/context/api/TripApi'
import { baseUrl } from '../../../../../public/static/Index'


function TravelDetailScreen() {
    const {id} = useParams()
    const { data } = useGetTripByIdQuery(id as string)
        
  const t =useTranslations('travel')
  return (
    <div>
         <AllHero title={t('detail')} image={`${baseUrl}${data?.trip?.image}`} page='travel'/>
         <TravelDays/>
    </div>
  )
}

export default TravelDetailScreen