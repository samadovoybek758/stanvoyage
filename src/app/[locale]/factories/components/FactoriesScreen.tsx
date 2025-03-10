"use client";
import AllHero from "@/components/shared/AllHero";
import factoriesImg from "../../../../../public/Images/factories-hero.jpg";
import CardFactories from "@/components/ui/cards/CardFactories";
import { useGetFactoriesQuery } from "@/context/api/Factories";
import { useTranslations } from "next-intl";
import FactoriesItemLoader from "@/components/ui/itemLoader/FactoriesItemLoader";

interface Factory {
  uuid: string;
  image: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
  phone: string;
  email: string;
}
const FactoriesScreen = () => {
  const { data, isFetching, isLoading } = useGetFactoriesQuery({});
  const t = useTranslations("factories");
  console.log(data);

  return (
    <>
      <AllHero image={factoriesImg} title={t("title")} />
      <div className="container">
        <div className="mb-[120px]">
          <div className="grid grid-cols-1 gap-20 sm:gap-[120px]">
            {isFetching || isLoading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <FactoriesItemLoader key={index} />
                ))
              : data?.length > 0 &&
                data?.map((item: Factory) => (
                  <CardFactories key={item.uuid} item={item} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FactoriesScreen;
