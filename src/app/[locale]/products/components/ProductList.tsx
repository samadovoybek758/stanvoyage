"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import CardProduct from "@/components/ui/cards/CardProduct";
import { useGetCategoryQuery } from "@/context/api/CategoryApi";
import React from "react";

interface Props {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  image: string;
}
const ProductList = () => {
  const { data } = useGetCategoryQuery({});
  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title="Maxsulotlar" />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-8">
          {data?.map((item: Props) => (
            <CardProduct key={item?.uuid} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
