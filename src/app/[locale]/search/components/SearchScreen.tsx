"use client";
import React from "react";
import ProductList from "../../products/components/ProductList";
import { useLocale } from "next-intl";
import { useGetSearchQuery } from "@/context/api/SearchApi";
import { useParams } from "next/navigation";
const SearchScreen = () => {
  const { id } = useParams();
  const locale = useLocale();
  const { data, isLoading, isFetching } = useGetSearchQuery({
    locale: locale,
    query: id,
  });
  return (
    <section>
      <ProductList data={data} isLoading={isLoading} isFetching={isFetching} />
    </section>
  );
};

export default SearchScreen;
