"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
const AllHero = ({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) => {
  return (
    <div className="h-[640px] w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000066] before:z-10 mb-[120px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={image} alt="hero" fill quality={100} className="object-cover" />
      </div>
      <div className="w-full h-full flex items-center justify-center relative z-20">
        <h1 className="font-normal text-white text-[50px] leading-[60px] font-brigends-expanded">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default AllHero;
