"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import CardProduct from "@/components/ui/cards/CardProduct";
import ProductItemLoader from "@/components/ui/cards/ProductItemLoader";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  image: string;
}
const ProductList = ({
  data,
  subId = "",
  isLoading = false,
  isFetching = false,
}: {
  data: Props[];
  subId?: string;
  isLoading?: boolean;
  isFetching?: boolean;
}) => {
  const t = useTranslations("product");
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container">
        <SectionTitle title={t("title")} />
        <ul className="grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-4 md:gap-y-8">
          {isLoading || isFetching
            ? Array.from({ length: 9 }).map((_, index) => (
                <ProductItemLoader key={index} />
              ))
            : data?.map((item: Props) => (
                <CardProduct key={item?.uuid} item={item} subId={subId} />
              ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
