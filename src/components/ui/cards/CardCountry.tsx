import Image from "next/image";
import icon from '../../../../public/Images/stanvoyage/all.svg'
import { getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import { baseUrl } from "../../../../public/static/Index";
import Link from "next/link";

interface CardNewsProps {
  uuid: string;
  created_at: string;
  updated_at: string
  title_en: string;
  title_ru: string;
  title_fr: string;
  title_de: string;
  title_es: string;
  image: string;
  description_en: string
  description_ru: string
  description_fr: string
  description_es: string
  description_de: string
}


const CardCountry = ({ item }: { item: CardNewsProps }) => {


  const locale = useLocale()


  return (
    <div className="relative h-[400px] ">
    < div className="absolute -z-10 w-full rounded-[20px] overflow-hidden shadow-lg  h-full">
      <Image
        width={205}
        height={266}
        alt="About Company"
        className=" w-full h-full object-cover"
        src={baseUrl + item.image}
        unoptimized
        />
    </div>

        <Link  className="absolute bottom-[14px] left-[14px] flex items-center" href={`/${locale}/countries/${item.uuid}`}>
        <div className="py-1 px-[14px] rounded-[32px] bg-white  ">
            <h1 className=" text-lg">{getTitle(item, locale)}</h1>
        </div>

        <div className="py-[13px] px-[15.5px] bg-white rounded-full">
          <Image
          width={5}
          height={10}
          alt="arrow left"
          src={icon}
          className="w-[5px] h-[10px]"
          />
        </div>
        </Link>
   
    </div>
  );
};

export default CardCountry;
