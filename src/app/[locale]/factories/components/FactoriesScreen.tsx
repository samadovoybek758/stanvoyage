"use client";
import AllHero from "@/components/shared/AllHero";
import factoriesImg from "../../../../../public/Images/factories-hero.jpg";
import CardFactories from "@/components/ui/cards/CardFactories";
import { useGetFactoriesQuery } from "@/context/api/Factories";
import { useTranslations } from "next-intl";

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
  const { data } = useGetFactoriesQuery({});
  const t = useTranslations("factories");
  console.log(data);

  return (
    <>
      <AllHero image={factoriesImg} title={t("title")} />
      <div className="container">
        <div className="mb-[120px]">
          <div className="grid grid-cols-1 gap-[120px]">
            {data?.length > 0 &&
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
