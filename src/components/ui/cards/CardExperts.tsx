import Image from "next/image";
import { useLocale } from "next-intl";
import { getContent, getTitle } from "@/hook/getLanguage";
import { baseUrl } from "../../../../public/static/Index";
import DOMPurify from "dompurify";


interface TravelsCardProps {
    uuid: string;
    created_at: string;
    updated_at: string
    title_en: string;
    title_ru: string;
    title_fr: string;
    title_de: string;
    title_es: string;
    image: string;
    order: number
    content_en: string
    content_ru: string
    content_fr: string
    content_es: string
    content_de: string
    trip?: string
}

const CardExperts = ({ item, className = "" }: { item: TravelsCardProps; className?: string }) => {

    const locale = useLocale()
    return (
        <div className={`border border-[#D7D7D7] h-[240px] md:h-[268px] rounded-[20px] p-6 ${className}`}>
            <div className="mb-6 md:mb-[50px]">
                <Image
                    src={baseUrl + item.image}
                    alt="travel image"
                    width={50}
                    height={50}
                    className="object-contain"
                />
            </div>
            <h1 className="text-[#080808] text-lg sm:text-2xl mb-3 font-medium">{getTitle(item, locale)}</h1>
            <p className="text-[#080808] text-sm sm:text-base line-clamp-3"
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(item ? getContent(item, locale) : "")
                ),
              }}
            />
        </div>
    );
};

export default CardExperts;
