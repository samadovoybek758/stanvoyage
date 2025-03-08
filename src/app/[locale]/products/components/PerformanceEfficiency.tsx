import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslations } from "next-intl";
function PerformanceEfficiency() {
  interface TypeData {
    // img: string,
    content: string;
  }

  const data: TypeData[] = [
    {
      content:
        "Orta va yuqori darajadagi chakana sotuvchilar va tayyor mahsulotlardagi brendlar ishlab chiqaruvchisi bolish",
    },
    {
      content:
        "Kiyim-kechak sanoati o’rtasida hamkorlikni rivojlantirish orqali yangi imkoniyatlar yaratish, innovatsiyalarni joriy etish",
    },
    {
      content:
        "Chakana savdogarlar va yetkazib beruvchilar birgalikda dizayn qilish orqali yangi mahsulotlar yaratishlari mumkin.",
    },
    {
      content:
        "Rejalashtirish va ozimizni global bozorlarga kengaytirish uchun yuqori sifatli etkazib beruvchi sifatida joylashtirish.",
    },
  ];
  const t = useTranslations("performance-efficiency");
//   const locale = useLocale();
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container">
        <SectionTitle title={t("title")} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.length > 0 &&
            data.map((item, index) => (
              <div
                key={index}
                className="pt-[30px] pl-4 pb-4 pr-[22px] md:rounded-lg rounded-[25px] bg-white"
              >
                <Image
                  width={50}
                  height={50}
                  src={""}
                  alt="icon"
                  className="mb-[60px]"
                />

                <p className="text-[#080808] text-lg line-clamp-4">
                  {/* {getTitle(item, locale)} */}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PerformanceEfficiency;
