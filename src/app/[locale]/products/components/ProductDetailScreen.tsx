"use client";
import ProductDetailOrder from "./ProductDetailOrder";
import React from "react";
import ProductDetailHero from "./ProductDetailHero";
import { useGetCategoryByIdQuery } from "@/context/api/CategoryApi";
import { useParams } from "next/navigation";
import ProductList from "./ProductList";
import { useGetProductByIdQuery } from "@/context/api/ProductApi";

const ProductDetailScreen = () => {
  const { id, subId } = useParams();
  const { data } = useGetProductByIdQuery(subId as string);
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isFetching: categoryFetching,
  } = useGetCategoryByIdQuery(id as string);
  return (
    <>
      <ProductDetailHero data={data} />
      <ProductDetailOrder />
      <ProductList
        data={categoryData?.products}
        subId={id as string}
        isLoading={categoryLoading}
        isFetching={categoryFetching}
      />
    </>
  );
};

export default ProductDetailScreen;
