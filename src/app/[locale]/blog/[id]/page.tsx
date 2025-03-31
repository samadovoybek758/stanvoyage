import React from 'react'
import img from '../../../../../public/Images/stanvoyage/blogBG.png'
import AllHero from '@/components/shared/AllHero'
import TopPlaces from '../components/TopPlaces'

function BlogDetail() {
  return (
    <div>
         <AllHero image={img} title={'Top 10 places to See in Central Asia'} page='blog' />
         <TopPlaces/>
    </div>
  )
}

export default BlogDetail