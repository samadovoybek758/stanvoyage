import React from 'react'
import Testemonial from './Testimonial'
import Blogs from './Blogs'
import img from '../../../../../public/Images/stanvoyage/blogBG.png'
import AllHero from '@/components/shared/AllHero'
import {  useTranslations } from 'next-intl'

function BlogScreen() {

  const t = useTranslations("blog")
  return (
    <div>
        <AllHero image={img} title={t("title")} page="/blog" />
        <Testemonial/>
        <Blogs/>
    </div>
  )
}

export default BlogScreen