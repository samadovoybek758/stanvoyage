"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import CardProduct from "@/components/ui/cards/CardProduct";
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
}: {
  data: Props[];
  subId?: string;
}) => {
  const t = useTranslations("product");
  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title={t("title")} />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-8">
          {data?.map((item: Props) => (
            <CardProduct key={item?.uuid} item={item} subId={subId} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
