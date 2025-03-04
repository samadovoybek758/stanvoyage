import NewSectionList from "@/components/shared/NewSectionList";
import React from "react";
import Contact from "../../../../components/shared/contact/Contact";
import Hero from "./Hero";
import GallerySection from "./GallerySection";
import HomeVacancies from "./HomeVacancies";
import HomePartners from "./HomePartners";
import CompanyOverview from "./CompanyOverview";
import ProductCategories from "./ProductCategories";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductCategories />
      <NewSectionList />
      <HomePartners />
      <GallerySection />
      <HomeVacancies />
      <Contact />
    </>
  );
};

export default HomeScreen;
