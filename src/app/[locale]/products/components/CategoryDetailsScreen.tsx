"use client";
import React from "react";
import ProductDetailHero from "./ProductDetailHero";
import ProductDetailOrder from "./ProductDetailOrder";
import ProductList from "./ProductList";
import { useParams } from "next/navigation";
import { useGetCategoryByIdQuery } from "@/context/api/CategoryApi";
import PerformanceEfficiency from "./PerformanceEfficiency";

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
  const { data } = useGetCategoryByIdQuery(id as string);
  return (
    <>
      <ProductDetailHero
        data={data?.category as unknown as CategoryDetailItem["category"]}
      />
      <PerformanceEfficiency />
      <ProductDetailOrder />
      {data?.products?.length > 0 && (
        <ProductList data={data?.products} subId={id as string} />
      )}
    </>
  );
};

export default CategoryDetailsScreen;
