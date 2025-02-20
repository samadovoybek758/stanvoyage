import CompanyOverview from "./home/components/CompanyOverview";
import Hero from "./home/components/Hero";
import LatestNews from "./home/components/LatestNews";
import Partners from "./home/components/Partners";
import ProductCategories from "./home/components/ProductCategories";

export default function Home() {
  return (
    <section>
      <Hero />
      <CompanyOverview />
      <ProductCategories />
      <LatestNews />
      <Partners />
    </section>
  );
}
