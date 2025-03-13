"use client";
import React, { useState } from "react";
import Image from "next/image";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useLocale, useTranslations } from "next-intl";
import DOMPurify from "dompurify";
import { baseUrl } from "../../../../../public/static/Index";
import pdfImg from "../../../../../public/Images/pdf.svg";

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
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const item = data as unknown as CategoryDetailItem;
  const t = useTranslations("product");
  const handleDownload = async (url: string, filename: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] mt-[136px] ">
      <div className="container">
        <div className="flex gap-4 lg:flex-row flex-col">
          <div className="md:py-10 md:pb-[30px] md:pl-10 flex-1 bg-white rounded-lg pt-6 pl-[20px] pb-[20px] pr-[22px]">
            <h2 className="text-[#080808] text-xl  sm:text-[28px] mb-6 max-w-[452px] font-brigends-expanded">
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
                  disabled={loading}
                  className={`text-[#FFFFFF] flex items-start justify-center gap-2 py-4 md:py-5 font-medium text-base md:text-lg bg-[#F37325] hover:bg-[#c85814] transition-all duration-300 w-full rounded-lg`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDownload(
                      baseUrl + item?.product_file,
                      "MyExampleDoc"
                    );
                  }}
                >
                  <Image src={pdfImg} alt="pdf" width={24} height={24} />
                  <p>{loading ? t("loading") : t("pdf-download")}</p>
                </button>
              </div>
            ) : null}
          </div>

          <div className="flex-1 md:py-[53px] md:px-[46.5px] p-5 bg-white rounded-lg h-[360px] md:h-[500px] ">
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
    </section>
  );
}

export default ProductDetailHero;
