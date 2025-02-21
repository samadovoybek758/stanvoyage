import React from "react";
import SectionTitle from "../ui/SectionTitle";
import CardNews from "../ui/cards/CardNews";

const NewSectionList = () => {
  return (
    <section className="mb-[120px]">
      <div className="container ">
        <SectionTitle title="Yangiliklar" buttonName="Barchasi" />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-[30px]">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardNews key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewSectionList;
