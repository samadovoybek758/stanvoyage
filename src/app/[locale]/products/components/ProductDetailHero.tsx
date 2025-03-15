"use client";
import Image from "next/image";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale, useTranslations } from "next-intl";
import DOMPurify from "dompurify";
import { baseUrl } from "../../../../../public/static/Index";
import pdfImg from "../../../../../public/Images/pdf.svg";
import { useParams } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { saveAs } from "file-saver";
interface CategoryDetailItem {
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
  product_file: string;
  image: string;
}

function ProductDetailHero({ data }: { data: CategoryDetailItem }) {
  const { id } = useParams();
  const locale = useLocale();
  const item = data as unknown as CategoryDetailItem;
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("product");

  const handleDownload = async (id: string | string[] | undefined) => {
    if (!id) {
      console.error("ID topilmadi!");
      return;
    }

    try {
      setIsLoading(true);
      const url = `${baseUrl}api/category/download/${id}/`;
      console.log("Yuklash boshlanmoqda:", url);

      const response = await axios.get(url, {
        responseType: "blob", // Faylni blob formatida yuklash
      });

      if (response.status !== 200) {
        throw new Error(`Fayl yuklanmadi: ${response.statusText}`);
      }

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      saveAs(blob, "downloaded-file.pdf"); // Faylni yuklab olish

      console.log("Fayl muvaffaqiyatli yuklandi!");
    } catch (error) {
      setIsLoading(false);
      console.error("Fayl yuklashda xatolik:", error);
    }
  };

  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] mt-[136px] ">
      <div className="container">
        <div className="flex gap-4 lg:flex-row flex-col">
          <div className="md:py-10 md:pb-[30px] md:pl-10 flex-1 bg-white rounded-lg pt-6 pl-[20px] pb-[20px] pr-[22px]">
            <h2
              className={`text-[#080808] text-xl sm:text-[28px] mb-6 max-w-[452px] ${
                locale === "ru"
                  ? "font-brigends-unbounded"
                  : "font-brigends-expanded"
              } `}
            >
              {item ? getTitle(item, locale) : ""}
            </h2>
            <div
              className="text-sm sm:text-lg text-[#080808] font-normal"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(item ? getDescription(item, locale) : "")
                ),
              }}
            />
            {item?.product_file ? (
              <div className="max-w-[255px] mt-4 md:mt-6 lg:mt-8">
                <button
                  disabled={isLoading}
                  className={`text-[#FFFFFF] flex items-start justify-center gap-2 py-4 md:py-5 font-medium text-base md:text-lg bg-[#F37325] hover:bg-[#c85814] transition-all duration-300 w-full rounded-lg`}
                  onClick={() => handleDownload(id)}
                >
                  <Image src={pdfImg} alt="pdf" width={24} height={24} />
                  <p>{isLoading ? t("loading") : t("pdf-download")}</p>
                </button>
              </div>
            ) : null}
          </div>
          <div className="bg-white rounded-lg flex-1 md:py-[53px] md:px-[46.5px] p-5 overflow-hidden max-h-[400px] md:max-h-[600px]">
            <div className="h-full">
              <Image
                width={515}
                height={412}
                alt="product Image"
                src={baseUrl + item?.image}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailHero;
