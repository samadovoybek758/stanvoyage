"use client";
import CardNews from "@/components/ui/cards/CardNews";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslations } from "next-intl";
import { useGetNewsQuery } from "@/context/api/News";
import NewsItemLoading from "../../../../components/ui/itemLoader/NewsItemLoading";
import Pagination from "@/components/ui/Pagination";
import { useState } from "react";

interface NewsListType {
  uuid: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  date: string;
  image: string;
}

const NewsList = () => {
  const t = useTranslations("news");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching } = useGetNewsQuery({
    page: currentPage,
  });
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };

  return (
    <section className="mb-[120px]">
      <div className="container ">
        <SectionTitle title={t("title")} />
        <ul className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-x-4 gap-y-[30px]">
          {isLoading || isFetching
            ? Array.from({ length: 4 }).map((_, index) => (
                <NewsItemLoading key={index} />
              ))
            : data?.items?.map((item: NewsListType) => (
                <CardNews key={item?.uuid} item={item} />
              ))}
        </ul>
        {data?.total_pages > 1 && (
          <Pagination
            pageCount={data?.total_pages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default NewsList;
