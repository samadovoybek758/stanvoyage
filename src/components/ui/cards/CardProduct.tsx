import React from "react";
import Image from "next/image";
import productImg from "../../../../public/Images/products-hero.jpg";
import Link from "next/link";
import arrowRight from "../../../../public/Images/section-title-arrow.svg";

const CardProduct = () => {
  return (
    <div>
      <div className="h-[320px] w-full relative bg-white rounded-[25px] mb-3 p-[30px]">
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
          <Image
            src={productImg}
            alt="product"
            quality={100}
            className="object-cover w-full h-full object-center"
          />
        </div>
      </div>
      <Link href={``} className="flex items-center gap-x-2">
        <h3 className="text-xl font-normal text-[#080808]">Ip mahsulotlar</h3>
        <Image src={arrowRight} alt="product" />
      </Link>
    </div>
  );
};

export default CardProduct;
