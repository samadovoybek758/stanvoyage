"use client";
// import { useGetGaleryQuery } from "@/context/api/Galery";
// import Image from "next/image";
// import React from "react";
// import { baseUrl } from "../../../../../public/static/Index";
// import ImageLoading from "@/components/ui/ImageLoading";
// // import Image from 'next/image'
// const GalleryTopBox = () => {
//   const { data, isLoading, isFetching } = useGetGaleryQuery({});
//   return (
//     <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
//       <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
//         {isLoading || isFetching
//           ? Array.from({ length: 2 }).map((_, index) => (
//               <div className="bg-[#FFFFFF] rounded-lg p-5 md:p-10" key={index}>
//                 <div className="w-full h-[270px] sm:h-[300px] md:h-[400px] lg:h-[500px]  overflow-hidden rounded-lg">
//                   <ImageLoading />
//                 </div>
//               </div>
//             ))
//           : data?.length > 0 &&
//             data?.slice(0, 2)?.map((item: { uuid: string; file: string }) => (
//               <div
//                 className="bg-[#FFFFFF] rounded-lg p-5 md:p-10"
//                 key={item?.uuid}
//               >
//                 <div className="w-full h-[270px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
//                   <Image
//                     className="w-full h-full object-cover cursor-pointer"
//                     src={`${baseUrl}/${item?.file}`}
//                     alt={"gallery image"}
//                     width={1232}
//                     height={580}
//                   />
//                 </div>
//               </div>
//             ))}
//         <div></div>
//       </div>
//     </section>
//   );
// };

// export default GalleryTopBox;



import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/shared/SectionTitle';
import { useGetGaleryQuery } from '@/context/api/Galery';
import { baseUrl } from '../../../../../public/static/Index';
import Loading from '@/components/ui/Loading';


interface ItemType {
  uuid: string;
  created_at: string;
  updated_at: string
  title_en: string;
  title_ru: string;
  title_fr: string;
  title_de: string;
  title_es: string;
  image: string;
  order: number
}
  
function GalleryTopBox() {
  const { data } = useGetGaleryQuery({})
  
  const t = useTranslations("gallery")
  return (
    <div className="container  p-4 ">
      <SectionTitle title={t("title")}/>
      <div className="grid grid-cols-2 gap-4">
        {data ? (
          data.map((item:ItemType, index: number) => (
            <div
              key={index}
              className={ 
               `${(index + 1) % 3 === 0 ? "col-span-2 md:col-span-3" : "col-span-1"}  md:max-h-[440px]`
              }
            >
              <Image
                width={1120}
                height={400}
                src={baseUrl + item.image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))
        ): (
          <Loading/>
        )}
      </div>
    </div>
  );
};

export default GalleryTopBox