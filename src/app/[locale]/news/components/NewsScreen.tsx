import React from "react";
import NewsList from "./NewsList";
import AllHero from "@/components/shared/AllHero";
import newsImg from "../../../../../public/Images/news-hero.jpg";
const NewsScreen = () => {
  return (
    <>
      <AllHero title="Yangiliklar" image={newsImg} />
      <NewsList />
    </>
  );
};

export default NewsScreen;
