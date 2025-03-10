"use client";
import React from "react";
import ProductDetailHero from "./ProductDetailHero";
import ProductDetailOrder from "./ProductDetailOrder";
import ProductList from "./ProductList";
import { useParams } from "next/navigation";
import { useGetCategoryByIdQuery } from "@/context/api/CategoryApi";
import PerformanceEfficiency from "./PerformanceEfficiency";
import { useGetPerformancesQuery } from "@/context/api/PerformancesApi";

interface CategoryDetailItem {
  category: {
    uuid: string;
    title_ru: string;
    title_en: string;
    title_uz: string;
    description_ru: string;
    description_en: string;
    description_uz: string;
    image: string;
  };
  products: {
    uuid: string;
    title_ru: string;
    title_en: string;
    title_uz: string;
    description_ru: string;
    description_en: string;
    description_uz: string;
    image: string;
  };
}
const CategoryDetailsScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetCategoryByIdQuery(id as string);
  const { data: performances } = useGetPerformancesQuery({ id });
  return (
    <>
      <ProductDetailHero
        data={data?.category as unknown as CategoryDetailItem["category"]}
      />
      {performances?.length > 0 && <PerformanceEfficiency />}
      {data?.products?.length > 0 ? (
        <ProductList
          data={data?.products}
          subId={id as string}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ) : (
        <ProductDetailOrder />
      )}
    </>
  );
};

export default CategoryDetailsScreen;
