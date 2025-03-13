import React from "react";
import Loading from "../Loading";

const VacanciesItemLoading = () => {
  return (
    <li className="p-6 bg-[#FFFFFF] card-vacancies-img rounded-lg sm:rounded-lg h-[280px] md:h-[328px] flex flex-col justify-between">
      <div className="mb-5 sm:mb-9">
        <div className="flex items-center gap-[5px] mb-2 sm:mb-4">
          <div className="w-full max-w-[250px]">
            <Loading className="w-full h-8" />
          </div>
          <Loading className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-1">
          <Loading className="w-full h-6" />
          <Loading className="w-1/2 h-6" />
          <Loading className="w-full h-6" />
          <Loading className="w-1/2 h-6" />
          <Loading className="w-full h-6" />
        </div>
      </div>
      <div className="py-[10.5px] sm:py-[13px] w-full max-w-[158px] flex items-center justify-center rounded-lg">
        <Loading className="w-full h-6" />
      </div>
    </li>
  );
};

export default VacanciesItemLoading;
