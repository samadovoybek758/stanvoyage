"use client"
import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react';
import Image from 'next/image';
import { useParams } from "next/navigation";
import { useGetBlogByIdQuery } from '@/context/api/BlogApi';

function TopPlaces() {
  const { id } = useParams();
  const {data} = useGetBlogByIdQuery(id as string)
  console.log(id, data);
  
  return (
    <section className='mt-20'>
        <div className='container'>

            <SectionTitle title='Top 10 places to See in Central Asia'/>

            <div>
                <p className='mb-6 text-lg '>
                Central Asia is a region of breathtaking diversity, where dramatic landscapes, ancient cities, and rich cultures come together to offer unforgettable experiences. From the bustling Silk Road cities to the towering peaks and pristine lakes, each of the five Central Asian “Stans” offers something unique for travelers. Our top ten ranking captures the heart of this vast region: marvel at the ancient Silk Road cities of Uzbekistan, experience the serene beauty of Song Kul lake and Issyk Kul in Kyrgyzstan, traverse the epic Pamir Highway in Tajikistan, or be awestruck by the fiery Darvaza Crater in Turkmenistan. Explore modernity amidst tradition in Kazakhstan’s capital Astana, or trek through the turquoise lakes of Tajikistan’s Fann Mountains. Don’t miss the dramatic Charyn Canyon in Kazakhstan or the architectural wonders of Ashgabat in Turkmenistan. Whether you’re a nature lover drawn to pristine lakes and towering mountains, or a culture enthusiast eager to explore ancient cities and modern marvels, Central Asia has it all. This region offers an unforgettable mix of natural beauty and cultural depth that will captivate every type of traveler.
                </p>

                <Image
                width={1136}
                height={576}
                alt='top place'
                className='rounded-[20px] mb-6'
                src={'https://s3-alpha-sig.figma.com/img/afa4/46ae/bf71b0670b294268be62373b8171ec6f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EftjSJcE2lP7d9Abj1Ejnm8ah5CWCxKStI3XPhgAv81AkyzEaECKzkEQ1xYyHoo8iy9VDftO8sWPouruqvqx0sM2RCDN4uDyzYbNPszsH0eZ8B~5WaG2cKyPRa8cKDRPAxEDR~pT-p4ZJqdBkT1RcZkrfuN2OjSzOB4ArusezaBjsKat-~Ui1x-ukBYNSaAy9W~UoUcp2RESFdDk8UhCRG-Gr9oCfCdfZPngI90I-QISFwz91rrt3EclswzQ5nd-~suUxQyu7Q9rNB2tHWLFc7p08ggGTBSsLZob59PJACrcKxZU4AtFL18ykixI7D3tCB6q0ZWnGCU3jr1Si7I-dA__'}
                />

                <p className='mb-6 text-lg'>
                The ancient Silk Road cities of Uzbekistan—Samarkand, Bukhara, and Khiva—are living testaments to Central Asia’s rich history. Samarkand, with its stunning landmarks like Registan Square and the Shah-i-Zinda necropolis, served as the capital of Tamerlane’s empire and remains a mesmerizing blend of cultures and history. Bukhara, known for its well-preserved medieval architecture, offers a journey through time with sites like the Samanid Mausoleum and the domed madrasas and markets, reflecting its significance as a center of learning and trade. Meanwhile, Khiva, with its beautifully restored inner city of Ichan-Kala, transports visitors to a world of mosques, madrasas, and palaces, encapsulating the architectural splendor of the Silk Road.
                </p>

                <div className='grid grid-cols-3 gap-4 mb-6' >
                    <Image
                    width={368}
                    height={262}
                    alt='places'
                    src={'https://s3-alpha-sig.figma.com/img/6e60/c92f/f2f79fa4f390ad73830d24fac3714520?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pnhbuSVK6RgtacxdwMceWkg0dDjMzYmYdbhwETRYAdXPg7jhyiIRqkV79kACFMXHCv0xchHgYlNmLsxHBUE5XYLD~W2iMEtl5JGmYjD6MN3Jv2NyL6kVcJkeNw4Nbxp8HFCy9CxD57CtLd-dmjaQsOxpYCsO5H6LeJG9qWdssV6mL5BX1guPBnIik~5kbYxP4ye9Dbk40d6WgwKWh1Ln-jQ2Uzjuzxf~ZSSQDJF4Gf8qgJqOw17tAJWgFclDBm2M56t1uXHBYv5~xtgIbLaRp1S1OsWeJU1Z-PjW~cZjYVwMtnruHE53f90EZqfOPeHJxiG9kTLmzxRGeZXqSBeVmQ__'}
                    className='w-full rounded-[20px]'
                    />
                    <Image
                    width={368}
                    height={262}
                    alt='places'
                    className='w-full rounded-[20px]'
                    src={'https://s3-alpha-sig.figma.com/img/6e60/c92f/f2f79fa4f390ad73830d24fac3714520?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pnhbuSVK6RgtacxdwMceWkg0dDjMzYmYdbhwETRYAdXPg7jhyiIRqkV79kACFMXHCv0xchHgYlNmLsxHBUE5XYLD~W2iMEtl5JGmYjD6MN3Jv2NyL6kVcJkeNw4Nbxp8HFCy9CxD57CtLd-dmjaQsOxpYCsO5H6LeJG9qWdssV6mL5BX1guPBnIik~5kbYxP4ye9Dbk40d6WgwKWh1Ln-jQ2Uzjuzxf~ZSSQDJF4Gf8qgJqOw17tAJWgFclDBm2M56t1uXHBYv5~xtgIbLaRp1S1OsWeJU1Z-PjW~cZjYVwMtnruHE53f90EZqfOPeHJxiG9kTLmzxRGeZXqSBeVmQ__'}
                    />
                    <Image
                    width={368}
                    height={262}
                    className='w-full rounded-[20px]'
                    alt='places'
                    src={'https://s3-alpha-sig.figma.com/img/6e60/c92f/f2f79fa4f390ad73830d24fac3714520?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pnhbuSVK6RgtacxdwMceWkg0dDjMzYmYdbhwETRYAdXPg7jhyiIRqkV79kACFMXHCv0xchHgYlNmLsxHBUE5XYLD~W2iMEtl5JGmYjD6MN3Jv2NyL6kVcJkeNw4Nbxp8HFCy9CxD57CtLd-dmjaQsOxpYCsO5H6LeJG9qWdssV6mL5BX1guPBnIik~5kbYxP4ye9Dbk40d6WgwKWh1Ln-jQ2Uzjuzxf~ZSSQDJF4Gf8qgJqOw17tAJWgFclDBm2M56t1uXHBYv5~xtgIbLaRp1S1OsWeJU1Z-PjW~cZjYVwMtnruHE53f90EZqfOPeHJxiG9kTLmzxRGeZXqSBeVmQ__'}
                    />
                </div>

                <p className='mb-[120px] text-lg'>
                Song Kul is a breathtaking high-altitude lake located at 3,016 meters, making it an oasis of tranquility amidst the lush grasslands of Kyrgyzstan’s summer pastures. This stunning body of water, surrounded by the rolling plains of the Tian Shan mountains, serves as a seasonal home for nomadic herders who bring their livestock to graze in the rich pastures. Visitors to Song Kul can immerse themselves in traditional nomadic life, staying in yurts, enjoying horseback riding, hiking, and experiencing the vast natural beauty that makes this destination a must-see in Kyrgyzstan​.
                </p>
            </div>
        </div>
    </section>
  )
}

export default TopPlaces