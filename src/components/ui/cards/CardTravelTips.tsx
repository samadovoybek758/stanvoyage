import Image from "next/image";
import icon from '../../../../public/Images/stanvoyage/Location.svg'
import { baseUrl } from "../../../../public/static/Index";
import { getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";

interface TripCardProps {
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
  diapazon: string
  duration: number
  order: number
}

const CardTravelTips = ({ item }: { item: TripCardProps }) => {
  const locale = useLocale()
  return (
    <div className=" ">
      <div className="relative h-[400px] mb-3" >
        <div className="absolute -z-10  rounded-[20px] overflow-hidden shadow-lg w-full  h-full">
          <Image
            width={205}
            height={266}
            alt="About Company"
            className=" w-full h-full object-cover "
            src={baseUrl + item.image}
            quality={100}
            unoptimized
          />
        </div>

       
            <div className="py-1 px-[14px] rounded-[32px] bg-white absolute bottom-[14px] left-[14px] flex items-center gap-[6px] ">
          <Image
            src={icon}
            alt="icon"
            width={20}
            height={20}
          />
          <h1 className="line-clamp-2 ">{getTitle(item, locale)}</h1>
        </div>
         

      </div>


      <div className="max-w-[320px]">
        <h2 className="text-2xl font-medium mb-[2px] line-clamp-2">{getTitle(item, locale )}</h2>
      </div>

    </div>
  );
};

export default CardTravelTips;