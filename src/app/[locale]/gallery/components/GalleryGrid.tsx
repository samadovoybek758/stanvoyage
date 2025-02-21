import GalleryItemCard from "./GalleryItemCard";

const GalleryGrid = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 gap-x-4 gap-y-[50px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <GalleryItemCard
            key={index}
            className={index === 2 ? "col-span-2" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
