"use client";
import AllHero from "@/components/shared/AllHero";
import productsImg from "../../../../../public/Images/products-hero.jpg";
import ProductList from "./ProductList";
import { useTranslations } from "next-intl";
import { useGetCategoryQuery } from "@/context/api/CategoryApi";
const ProductsScreen = () => {
  const t = useTranslations("product");
  const { data, isLoading, isFetching } = useGetCategoryQuery({});
  return (
    <>
      <AllHero title={t("title")} image={productsImg} />
      <ProductList data={data} isLoading={isLoading} isFetching={isFetching} />
    </>
  );
};

export default ProductsScreen;
