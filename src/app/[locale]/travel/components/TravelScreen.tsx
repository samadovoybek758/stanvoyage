import AllHero from '@/components/shared/AllHero'
import React from 'react'
import img from '../../../../../public/Images/stanvoyage/travelBG.png'
import TravelTip from './TravelTip'
import { useTranslations } from 'next-intl'



function TravelScreen() {

  const t = useTranslations('travel');
  return (
    <div>
        <AllHero title={t('title')} image={img} page='travel'/>
        <TravelTip/>
    </div>
  )
}

export default TravelScreen