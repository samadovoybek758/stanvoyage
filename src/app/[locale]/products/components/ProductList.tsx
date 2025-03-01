import SectionTitle from "@/components/shared/SectionTitle";
import CardProduct from "@/components/ui/cards/CardProduct";
import React from "react";

const ProductList = () => {
  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title="Maxsulotlar" />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-[30px]">
          {Array.from({ length: 12 }).map((_, index) => (
            <CardProduct key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
