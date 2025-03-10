import React from "react";
import ImageLoading from "../ImageLoading";
import Loading from "../Loading";

const FactoriesItemLoader = () => {
  return (
    <div className="p-4 md:p-[30px] bg-white flex-col flex rounded-lg min-h-[345px] sm:min-h-[602px]">
      <div className="h-[315px]  sm:h-[315px] overflow-hidden  rounded-lg mb-4 sm:mb-6">
        <ImageLoading className="w-full h-full" />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className=" flex  items-start flex-col">
          <Loading className="h-7 w-full mb-2" />
          <div className="w-full">
            {Array.from({ length: 4 }).map((_, index) => (
              <Loading key={index} className="h-2 w-full mb-2" />
            ))}
          </div>
        </div>

        <div className="flex gap-3 justify-between pt-4 items-center border-t-2">
          <Loading className="h-6 w-1/4" />
          <Loading className="h-6 w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default FactoriesItemLoader;
