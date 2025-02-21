import CardNews from "@/components/ui/cards/CardNews";
import SectionTitle from "@/components/ui/SectionTitle";

const NewsList = () => {
  return (
    <section className="mb-[120px]">
      <div className="container ">
        <SectionTitle title="Yangiliklar" buttonName="Filter" />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-[30px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <CardNews key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsList;
