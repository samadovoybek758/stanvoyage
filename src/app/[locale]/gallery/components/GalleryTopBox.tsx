"use client";
import { useGetGaleryQuery } from "@/context/api/Galery";
import Image from "next/image";
import React from "react";
import { baseUrl } from "../../../../../public/static/Index";
import ImageLoading from "@/components/ui/ImageLoading";
// import Image from 'next/image'
const GalleryTopBox = () => {
  const { data, isLoading, isFetching } = useGetGaleryQuery({});
  console.log(data);
  return (
    <section className="mb-[120px]">
      <div className="container grid grid-cols-2 gap-4">
        {isLoading || isFetching
          ? Array.from({ length: 2 }).map((_, index) => (
              <div className="bg-[#FFFFFF] rounded-lg p-10" key={index}>
                <div className="w-full h-[500px] overflow-hidden rounded-lg">
                  <ImageLoading />
                </div>
              </div>
            ))
          : data?.length > 0 &&
            data?.slice(0, 2)?.map((item: { uuid: string; file: string }) => (
              <div className="bg-[#FFFFFF] rounded-lg p-10" key={item?.uuid}>
                <div className="w-full h-[500px] overflow-hidden rounded-lg">
                  <Image
                    className="w-full h-full object-cover cursor-pointer"
                    src={`${baseUrl}/${item?.file}`}
                    alt={"gallery image"}
                    width={1232}
                    height={580}
                  />
                </div>
              </div>
            ))}
        <div></div>
      </div>
    </section>
  );
};

export default GalleryTopBox;
