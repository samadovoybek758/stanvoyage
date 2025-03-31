"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from 'next/image'


function CaruselImage() {
    interface CaruselmageType {
        uuid: number;
        image: string;
    }

    const data : CaruselmageType[] = [
        {
            uuid: 1,
            image: 'https://s3-alpha-sig.figma.com/img/f9d4/f059/63c15f7d8d2a0701ef066a5595b874a1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eRDS7qBPGUS8YQ5BK-ojjtzXxzuJmK8g6zVD83pXTlJ15cA8L3jL6yc3gPTNJSoeJuRZ2NgLibEZXynj1ML~R-jGo0yT4maqNNTIzXaLZ-zfgPowUDxo7TgZaUxCL6QoiS6RgexRQGMZuCzs~0Ef67jwzLcd3ZPPZHXXlcAXEBosIRJXpwlSbqoLbAsB8qJjmvR6WyyUW90DuRjx-mNobSoOh7inFG7IpI1JAjnFOgvETS7Vz-IMtQysT70Rv-TgvqSP8nlNs8EnE8sf7bszJH~9Qjmb70OPIXLTP5e5Z2gdkUnOKAKO9a4bWAhGW7e5BR2S2v~3Dx1sOrYtbdAQKQ__'
        },
        {
            uuid: 2,
            image: 'https://s3-alpha-sig.figma.com/img/a928/e405/456a6215591eb393da261a458720d76e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KpgIxUfJ-Y4zFwGc~GDd64uJCXl9fzrgSB-Zi2X1l0jOuWZlLJv8iadBpgDN0B0dvv7-M7b8IgOVL7qMTMn55qsmuaWHZNozHk5Mh9F9eV1gxdySbutnGr0cYUwEkjyQ3DjO3S2hPRi2ivQJlO4Kt5qt7Ywt3Sxmp1mNTZneHX~zwkMizS641cxUsKaKABWtLXgagmxh3SbxtLDZDALhJ6QSRteeK-SANoeuIqlXy4CDPAKuIH0GYJcbFaE4r2gieJC-rH~UQnOYsWh39-0fhZMFIE7lTEgT-iK-6sb1YxDgbFU~Yt-hLVHZMuogMoF9et5QHzHV7ysB6wGzgmTaiA__'
        },
        {
            uuid: 3,
            image: 'https://s3-alpha-sig.figma.com/img/4094/b577/118272090fb951a336ab65fd275e5f5e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kABYviTT6fxgFjd2~jMczR5JF7qvfLqId9lc4uRRDLdzI21blN9lrug41UhD22aYe~5BzruOHTfuFaJzUshYEqUMoxGjOjOHpGWdXNTmJlX-lQMKcgx4UGH4thqa1khDo5FjGUSc-vOWywRjSlCXxlk1kA7E1ArNLR3xpsW2rGwhKzAfae37wbn8xaKUO7J~CNw-l-JOifMvQK7lSBpc6FWZtI~l3DDD87wiNHn6M8syzroayNZuoD5KuehXrhiGoEswzKqZCgU9TdlY11yGBH~3G5QDG4OPGZU6Y5p0dGMbP5YGapnLnRhxySSN5jAyACELCua1hyd0fxqqSemtzA__'
        },
        {
            uuid: 4,
            image: 'https://s3-alpha-sig.figma.com/img/3d32/c9d6/7fbd0566ee1e579cbe7322d78aeca2be?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f~76qUaAFhb7pn-2N0YjFn78PE6RQbzm8tTFCcTZe0KqVeBrIIigokDNLEVLSbixGp-iRn0iCVHOmFgiQV3eG5kbWkGqfekK25dzpjgvp3HUx2Wj0gJwZ9OoLH5QS2hgmXBbe-L7x-79bhMXATLpFiqzyQJHhF4QyRgtREMh0qkcn4i-MDAU20U-yIY8gG78e2rxCy6Ruji4nNPJlI24jO4aw3RzzGzOR3YQTCcXc4h8cx5DzK3Kyo~Q07WcLIR25OnyOnqeQ6Vxssnx9Vnd2-Jfc~JfNGE8RMCdnx0h5~OTgXUSaR2b5p5hq7z9i~hlodpISRV2ogvysZCZccyjfA__'
        },
        {
            uuid: 5,
            image: 'https://s3-alpha-sig.figma.com/img/f9d4/f059/63c15f7d8d2a0701ef066a5595b874a1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eRDS7qBPGUS8YQ5BK-ojjtzXxzuJmK8g6zVD83pXTlJ15cA8L3jL6yc3gPTNJSoeJuRZ2NgLibEZXynj1ML~R-jGo0yT4maqNNTIzXaLZ-zfgPowUDxo7TgZaUxCL6QoiS6RgexRQGMZuCzs~0Ef67jwzLcd3ZPPZHXXlcAXEBosIRJXpwlSbqoLbAsB8qJjmvR6WyyUW90DuRjx-mNobSoOh7inFG7IpI1JAjnFOgvETS7Vz-IMtQysT70Rv-TgvqSP8nlNs8EnE8sf7bszJH~9Qjmb70OPIXLTP5e5Z2gdkUnOKAKO9a4bWAhGW7e5BR2S2v~3Dx1sOrYtbdAQKQ__'
        },
        {
            uuid: 6,
            image: 'https://s3-alpha-sig.figma.com/img/a928/e405/456a6215591eb393da261a458720d76e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KpgIxUfJ-Y4zFwGc~GDd64uJCXl9fzrgSB-Zi2X1l0jOuWZlLJv8iadBpgDN0B0dvv7-M7b8IgOVL7qMTMn55qsmuaWHZNozHk5Mh9F9eV1gxdySbutnGr0cYUwEkjyQ3DjO3S2hPRi2ivQJlO4Kt5qt7Ywt3Sxmp1mNTZneHX~zwkMizS641cxUsKaKABWtLXgagmxh3SbxtLDZDALhJ6QSRteeK-SANoeuIqlXy4CDPAKuIH0GYJcbFaE4r2gieJC-rH~UQnOYsWh39-0fhZMFIE7lTEgT-iK-6sb1YxDgbFU~Yt-hLVHZMuogMoF9et5QHzHV7ysB6wGzgmTaiA__'
        },
        {
            uuid: 7,
            image: 'https://s3-alpha-sig.figma.com/img/f9d4/f059/63c15f7d8d2a0701ef066a5595b874a1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k7kSO64Lg1neyb3SbBgeVVsZwizDnU6fNjBeEl68cTnDw68A04d8f6oFrl0aB8AKJWodR24U3GdIOQrBgRX52F2LzLyl68p~dS9IiPVPXfeeAuCKgPaD~hujSMppYnPySk734eG5mcUQL2JZCMhKJX12M~git-ssyMb11zd0rm--PMD0yJfRmV~cUbKdad8vwwMoq8yr1ETpkOcxKJBXc8IyHfN5YVpchaltx2-reNfTm3xfBojbuARmwStjAtfiAku2gDKdkLsoD~3PguFv9DW3Bg22k5pgm1GW3QBOaItaAkVlwPMq7yA-1CzqflXf1B2V3y~yTgq0yyb8vt9gCg__'
        },
        {
            uuid: 8,
            image: 'https://s3-alpha-sig.figma.com/img/3d32/c9d6/7fbd0566ee1e579cbe7322d78aeca2be?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f~76qUaAFhb7pn-2N0YjFn78PE6RQbzm8tTFCcTZe0KqVeBrIIigokDNLEVLSbixGp-iRn0iCVHOmFgiQV3eG5kbWkGqfekK25dzpjgvp3HUx2Wj0gJwZ9OoLH5QS2hgmXBbe-L7x-79bhMXATLpFiqzyQJHhF4QyRgtREMh0qkcn4i-MDAU20U-yIY8gG78e2rxCy6Ruji4nNPJlI24jO4aw3RzzGzOR3YQTCcXc4h8cx5DzK3Kyo~Q07WcLIR25OnyOnqeQ6Vxssnx9Vnd2-Jfc~JfNGE8RMCdnx0h5~OTgXUSaR2b5p5hq7z9i~hlodpISRV2ogvysZCZccyjfA__'
        },
    ]




  return (
    <section className=' mt-[-370px] '>
      <div className='container '>

            <div className=' h-[500px] relative '>
                <Swiper
              modules={[Autoplay, Navigation]} 
              spaceBetween={41}
              navigation={{ nextEl: ".next", prevEl: ".prev" }}
              slidesPerView={4}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                0: {slidesPerView: 1},
                300: {slidesPerView: 3},
                400: {slidesPerView: 1.5},
                450: {slidesPerView: 1.8},
                500: {slidesPerView: 2},
                580: { slidesPerView: 2.5 }, 
                700: { slidesPerView: 3}, 
                850:{ slidesPerView: 3.5},
                1024: { slidesPerView: 4 },
              }}
            >

        
              {data.length > 0 && data.map((item) => (
                <SwiperSlide key={item.uuid} className={`absolute  ${item.uuid % 2 === 0 ? 'mt-10' : ''}`}>
                    <div className='h-[167px] xssm:h-[338px] '>
                    <Image 
                    width={400}
                    height={500}
                    src={item.image}
                    alt="image"
                    className='w-full h-full rounded-[9.92px] ssm:rounded-[20px]'
                    quality={100}
                    />
                    </div>
                </SwiperSlide>
              ))}
          

              </Swiper>
            </div>

      </div>
    </section>


)
}

export default CaruselImage