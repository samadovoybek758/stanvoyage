"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { StaticImageData } from "next/image";
const AllHero = ({
  image,
  title,
  mbDefault = true,
}: {
  image: StaticImageData;
  title: string;
  mbDefault?: boolean;
}) => {

  const locale = useLocale()
  return (
    <div
      className={`h-[400px] md:h-[500px] lg:h-[640px] w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000066] before:z-10 ${
        mbDefault ? "mb-20 md:mb-28 lg:mb-[120px]" : ""
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={image}
          alt="hero"
          fill
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center relative z-20 px-[15px]">
        <h1 className={`font-normal text-white text-2xl md:text-4xl lg:text-[50px] lg:leading-[60px] ${locale === 'ru' ? 'font-brigends-unbounded': 'font-brigends-expanded'}`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default AllHero;
