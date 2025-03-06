import Image from "next/image";
import newsImg from "../../../../public/Images/newx-bg.png";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getTitle } from "@/hook/getLanguage";

interface CardNewsProps {
  uuid: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  date: string;
}

const CardNews = ({ item }: { item: CardNewsProps }) => {
  const locale = useLocale();
  console.log(item);

  return (
    <Link href={`/${locale}/news/${item.uuid}`}>
      <div className="h-[296px] bg-[#EEEEEE] mb-4 rounded-lg overflow-hidden">
        <Image
          width={296}
          height={320}
          src={newsImg}
          alt={"news-img"}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-normal text-sm sm:text-base text-black mb-[6px] sm:mb-2">
        {item.date}
      </span>
      <h3 className="font-normal line-clamp-2 text-base sm:text-lg text-black max-w-[387px]">
        {getTitle(item, locale)}
      </h3>
    </Link>
  );
};

export default CardNews;
