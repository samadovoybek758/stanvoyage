"use client";
import SmallSectionTitle from "@/components/shared/SmallSectionTitle";
import CardProduct from "@/components/ui/cards/CardProduct";
import { useGetCategoryQuery } from "@/context/api/CategoryApi";

interface Props {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  image: string;
}

const ProductCategories = () => {
  const { data } = useGetCategoryQuery({});
  console.log(data);

  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="flex items-start flex-row gap-[88px]">
          <SmallSectionTitle title="Mahsulotlar" />
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {data?.slice(0, 4)?.map((item:Props) => (
              <CardProduct key={item?.uuid} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
