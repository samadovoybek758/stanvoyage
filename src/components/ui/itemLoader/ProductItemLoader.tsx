import React from "react";
import Loading from "../Loading";
import arrowRight from "../../../../public/Images/section-title-arrow.svg";
import Image from "next/image";
import ImageLoading from "../ImageLoading";
const ProductItemLoader = () => {
  return (
    <div>
      <div className="h-[230px] md:h-[320px] w-full relative bg-white rounded-lg mb-3 p-5 md:p-[40px]">
        <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
          <ImageLoading className="w-full h-full" />
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <h3 className="w-full max-w-[400px]">
          <Loading className="w-full h-7" />
        </h3>
        <Image src={arrowRight} alt="product" />
      </div>
    </div>
  );
};

export default ProductItemLoader;
