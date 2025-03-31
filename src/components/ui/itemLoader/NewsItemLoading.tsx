import ImageLoading from "@/components/ui/ImageLoading";
import Loading from "@/components/ui/Loading";
import React from "react";

const NewsItemLoading = () => {
  return (
    <div>
      <div className="h-[230px] md:h-[296px]  mb-4 rounded-lg overflow-hidden">
        <ImageLoading className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-normal text-sm sm:text-base text-black mb-[6px] sm:mb-2">
          <Loading className="w-20 h-4" />
        </div>
        <div className="font-normal line-clamp-2 text-base sm:text-lg text-black max-w-[387px]">
          <Loading className="w-full h-6" />
        </div>
      </div>
    </div>
  );
};

export default NewsItemLoading;
