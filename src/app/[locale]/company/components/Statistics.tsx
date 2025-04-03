import React from 'react'
import Image from 'next/image'
import bgi from '../.../../../../../../public/Images/stanvoyage/statisticsBg.jpg'
import awards  from '../../../../../public/Images/stanvoyage/awards.svg'
import location  from '../../../../../public/Images/stanvoyage/Location.svg'
import member  from '../../../../../public/Images/stanvoyage/members.svg'
import travellers  from '../../../../../public/Images/stanvoyage/travellers.svg'
import { useTranslations } from 'next-intl'


function Statistics() {
    const t = useTranslations("about")
  return (
    <section className='mb-20'>
        <div className='container '>

        <div className=" h-[500px] relative ">
          <Image width={1156} height={500} src={bgi} alt='bgg' className='h-full rounded-[20px] w-full object-cover'/>

          <div className='grid  overflow-x-auto overflow-hidden sm:grid-cols-2 absolute bottom-6 left-6 gap-3'>
            <div className='md:w-[224px] md:h-[144px] w-32 h-[100px] flex flex-col pt-[14px] pl-3 md:pl-6 bg-white rounded-[20px] gap-1 md:gap-4'>
                <span className='md:text-[44px] text-2xl text-[#2C4691]'>36</span>
                <div className='flex flex-row gap-1 items-center'>
                    <Image
                    width={20}
                    height={20}
                    src={awards}
                    alt='awards'
                    />
                <p className='md:text-lg text-base'>{t("awards")}</p>
                </div>
            </div>
            <div className='md:w-[224px] md:h-[144px] w-32 h-[100px] flex flex-col pt-[14px] pl-3 md:pl-6 bg-white rounded-[20px] gap-1 md:gap-4'>
                <span className='md:text-[44px] text-2xl text-[#2C4691]'>462</span>
                <div className='flex flex-row gap-[6px] items-center'>
                    <Image
                    width={20}
                    height={20}
                    src={location}
                    alt='awards'
                    />
                <p className='md:text-lg text-base'>{t("location")}</p>
                </div>
            </div>
            <div className='md:w-[224px] md:h-[144px] w-32 h-[100px] flex flex-col pt-[14px] pl-3 md:pl-6 bg-white rounded-[20px] gap-1 md:gap-4'>
                <span className='md:text-[44px] text-2xl text-[#2C4691]'>1062</span>
                <div className='flex flex-row gap-[6px] items-center'>
                    <Image
                    width={20}
                    height={20}
                    src={travellers}
                    alt='awards'
                    />
                <p className='md:text-lg text-base'>{t("travellers")}</p>
                </div>
            </div>
            <div className='md:w-[224px] md:h-[144px] w-32 h-[100px] flex flex-col pt-[14px] pl-3 md:pl-6 bg-white rounded-[20px] gap-1 md:gap-4 '>
                <span className='md:text-[44px] text-2xl text-[#2C4691]'>23</span>
                <div className='flex flex-row gap-[6px] items-center'>
                    <Image
                    width={20}
                    height={20}
                    src={member}
                    alt='awards'
                    />
                <p className='md:text-lg text-base'>{t("members")}</p>
                </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Statistics