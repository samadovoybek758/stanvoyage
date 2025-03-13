import React from "react";
import Image from "next/image";
// import productImg from "../../../../public/Images/products-hero.jpg";
import Link from "next/link";
import arrowRight from "../../../../public/Images/section-title-arrow.svg";
import { baseUrl } from "../../../../public/static/Index";
import { getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";

interface Props {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  image: string;
}
const CardProduct = ({
  item,
  subId = "",
  className = "",
  delay = 0,
  anchorPlacement = "top-center",
  dataAos = "fade-up",
}: {
  item: Props;
  subId?: string;
  className?: string;
  delay?: number;
  anchorPlacement?: string;
  dataAos?: string;
}) => {
  const local = useLocale();
  return (
    <Link
      href={
        subId
          ? `/${local}/products/${subId}/${item?.uuid}`
          : `/${local}/products/${item.uuid}`
      }
      data-aos={dataAos}
      data-aos-delay={delay}
      data-aos-anchor-placement={anchorPlacement}
      className={className}
    >
      <div className="h-[230px] md:h-[320px] w-full relative bg-white rounded-lg mb-3 p-5 sm:p-8 lg:p-[40px]">
        <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={baseUrl + item.image}
            alt="product"
            quality={100}
            className="object-cover w-full h-full object-center"
            width={1232}
            height={320}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <h3 className="text-base md:text-xl font-normal text-[#080808] max-w-[400px] line-clamp-1">
          {getTitle(item, local)}
        </h3>
        <Image src={arrowRight} alt="product" />
      </div>
    </Link>
  );
};

export default CardProduct;
