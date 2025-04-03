"use client"
import React from 'react'
import AllHero from '@/components/shared/AllHero'
import TopPlaces from './TopPlaces'
import { useGetBlogByIdQuery } from '@/context/api/BlogApi'
import { useParams } from 'next/navigation'
import { getTitle } from '@/hook/getLanguage'
import { useLocale } from 'next-intl'
import { baseUrl } from '../../../../../public/static/Index'

function BlogDetaill() {

    const {id} = useParams()
    const { data } = useGetBlogByIdQuery(id as string)
    const locale = useLocale()

  return (
    <div>
         <AllHero image={`${baseUrl}${data?.blog.image}`} title={data?.blog ? getTitle(data?.blog, locale): ''} page='blog' />
         <TopPlaces/>
    </div>
  )
}

export default BlogDetaill