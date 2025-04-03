"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import Loading from "@/components/ui/Loading";
import { useGetCountriesByIdQuery } from "@/context/api/CountriesApi";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import DOMPurify from "dompurify";
import ImageLoading from "@/components/ui/ImageLoading";
import Image from "next/image";
import { baseUrl } from "../../../../../public/static/Index";



interface ItemType {
    uuid: string;
    country: string
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
function SubCountry() {
  const params = useParams();
  const locale = useLocale()

  const id = params?.id;
  const subId = params?.subId

  const { data, isLoading, error } = useGetCountriesByIdQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Xatolik yuz berdi!</p>;
  if (!data?.cities) return <p>Shaharlar mavjud emas!</p>;

   const rawDescription = data?.country ? getDescription(data.country, locale) : "";
  
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(rawDescription, "text/html");
    const paragraphs = Array.from(parsedHtml.body.getElementsByTagName("p")); // Barcha `<p>` elementlarni olish
  
    const firstTwoParagraphs = paragraphs.slice(0, 3).map(p => p.outerHTML).join("");
    const remainingParagraphs = paragraphs.slice(3).map(p => p.outerHTML).join("");

  const data1 = data.cities.find((city: ItemType) => city.uuid === subId) || null;

  return (
    <section className="mt-20">
      <div className="container">
       {
        isLoading ? (
            <Loading/>
        ): (
            <SectionTitle title={data1 ? getTitle(data1, locale) : ""}/>
        )
       }

       <p
       className="mb-6 text-lg"
       dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(firstTwoParagraphs),
      }}
       />

        <div className="mb-6 flex flex-row gap-4">
            
       {
        isLoading ? (
            <ImageLoading/>
        ):(
            <div className="max-h-[400px] w-full">
              <Image
            width={560}
            height={400}
            alt="city"
            src={baseUrl + data1.image}
            className="rounded-lg md:rounded-[20px] w-full h-full  object-contain"
            quality={100}
            unoptimized
            />
            </div>
        )
       }
        </div>

<p
       dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(remainingParagraphs),
      }}
       />
      </div>
    </section>
  );
}

export default SubCountry;
