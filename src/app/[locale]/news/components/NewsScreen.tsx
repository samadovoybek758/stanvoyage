import React from "react";
import NewsList from "./NewsList";
import AllHero from "@/components/shared/AllHero";
import newsImg from "../../../../../public/Images/news-hero.jpg";
import { useTranslations } from "next-intl";
const NewsScreen = () => {
  const t = useTranslations("news");
  return (
    <>
      <AllHero title={t("title")} image={newsImg} />
      <NewsList />
    </>
  );
};

export default NewsScreen;
