import React from 'react'

function Locale() {
    interface LocaleType { 
        uuie : number
        location: string,
        title: string,
        desc: string,
    }

    const data: LocaleType[] = [
        {
            uuie: 1,
            location: "Choyxona",
            title: "The Heart of Social Life",
            desc: "Tea houses, or choyxona, are essential in Uzbek daily life. They serve as places for relaxation, socializing, and discussing important matters over a cup of green tea, often accompanied by bread and sweets."
        },
        {
            uuie: 2,
            location: "Bazaar",
            title: "The Heart of Social Life",
            desc: "Tea houses, or choyxona, are essential in Uzbek daily life. They serve as places for relaxation, socializing, and discussing important matters over a cup of green tea, often accompanied by bread and sweets."
        },
        {
            uuie: 3,
            location: "Choyxonaa",
            title: "The Heart of Social Life",
            desc: "Tea houses, or choyxona, are essential in Uzbek daily life. They serve as places for relaxation, socializing, and discussing important matters over a cup of green tea, often accompanied by bread and sweets."
        },
        {
            uuie: 4,
            location: "Bazaarr",
            title: "The Heart of Social Life",
            desc: "Tea houses, or choyxona, are essential in Uzbek daily life. They serve as places for relaxation, socializing, and discussing important matters over a cup of green tea, often accompanied by bread and sweets."
        },
    ]

  return (
    <section className='mb-32'>
        <div className='container'>

            <div className='flex justify-between gap-4 mb-[30px] sm:mb-4'>
            <div className='pt-[33px] locale pl-[17px] pb-[59px] md:p-10 bg-[#2C4691] rounded-[20px] w-full'>
                <h1 className='text-white text-[24px] sm:text-[56px] max-w-[150px] sm:max-w-[312px] leading-[115%]'>Local culture and traditions</h1>
            </div>

            <div className='max-w-[368px] md:block hidden'>
            {
                    data.length > 0 && data.slice(0,1).map((item) => (
                        <div key={item.uuie} className={`pt-5 pl-[14px] pb-8 pr-16 ${item.uuie % 2 === 0 ? 'bg-[#fff]' : 'bg-[#F0F0F0]'} rounded-[20px]`}>
                            <span className='text-[#2C4691] font-medium text-lg mb-[5px]'>• {item.location}</span>
                            <h2 className='text-[##1C1C1C] text-[22px] md:text-2xl mb-3'>{item.title}</h2>
                            <p className='text-[##1C1C1C] text-lg md:text-base '>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:gap-4'>
                {
                    data.length > 0 && data.slice(1,data.length).map((item) => (
                        <div key={item.uuie} className={`pt-5 pl-[14px] pb-8 pr-16 ${item.uuie % 2 === 0 ? 'bg-[#fff]' : 'bg-[#F0F0F0]'} rounded-[20px]`}>
                            <span className='text-[#2C4691] font-medium text-lg mb-[5px]'>•    {item.location}</span>
                            <h2 className='text-[##1C1C1C] text-[22px] md:text-2xl mb-3'>{item.title}</h2>
                            <p className='text-[##1C1C1C] text-lg md:text-base line-clamp-6'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Locale