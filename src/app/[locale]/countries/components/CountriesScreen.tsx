import AllHero from '@/components/shared/AllHero'
// import { useTransform } from 'framer-motion';
import React from 'react'
import img from '../../../../../public/Images/stanvoyage/countriesBG.png'
import Countries from './Countries'
import { useTranslations } from 'next-intl';

function CountriesScreen() {
  
    const t = useTranslations("countries");
  return (
    <div>
       <AllHero title={t("title")} image={img} mbDefault={false} page='/countries'/>
       <Countries/>
    </div>
  )
}

export default CountriesScreen