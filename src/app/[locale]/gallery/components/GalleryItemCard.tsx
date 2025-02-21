import Image from "next/image";
import React from "react";

interface GalleryItemCardProps {
  className?: string;
}

const GalleryItemCard: React.FC<GalleryItemCardProps> = ({
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className="h-[365px] bg-[#EEEEEE] mb-5">
        <Image
          width={608}
          height={365}
          src={""}
          alt={""}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[489px]">
        <h3 className="font-medium text-xl text-black mb-[6px]">
          Zamonaviy Ishlab Chiqarish
        </h3>
        <p className="font-normal text-base text-black">
          Fabrikadagi ishlab chiqarish jarayoni aks etgan. Ishchilar
          mahsulotlarni yig‘ish va qadoqlash bilan shug‘ullanmoqda.{" "}
        </p>
      </div>
    </div>
  );
};

export default GalleryItemCard;
