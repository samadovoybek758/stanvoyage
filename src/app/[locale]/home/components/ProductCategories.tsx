"use client";
import SmallSectionTitle from "@/components/shared/SmallSectionTitle";
import CardProduct from "@/components/ui/cards/CardProduct";
import { useGetCategoryQuery } from "@/context/api/CategoryApi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
interface Props {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  image: string;
}

const ProductCategories = () => {
  const { data } = useGetCategoryQuery({});
  const t = useTranslations("product");
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="mb-[80px] md:mb-28 lg:mb-[120px]">
      <div className="container">
        <div className="flex items-start flex-col xl:flex-row gap-3 md:gap-5 lg:gap-10 xl:gap-[88px] ">
          <SmallSectionTitle
            title={t("title")}
            className="xl:sticky xl:top-[120px] xl:left-0"
          />
          <div className="grid ssm:grid-cols-2 gap-x-3 md:gap-x-4  lg:gap-x-6 gap-y-5 md:gap-y-8 w-full">
            {data?.slice(0, 4)?.map((item: Props, index: number) => (
              <CardProduct
                key={item?.uuid}
                item={item}
                delay={index * 100}
                anchorPlacement="top-center"
                dataAos="fade-up"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
