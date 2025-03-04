"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useGetCertificatesQuery } from "@/context/api/Certificates";
import { baseUrl } from "../../../../../public/static/Index";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslations } from "next-intl";

interface Certificate {
  uuid: number;
  image: string;
}

export default function Sertificate() {
  const { data } = useGetCertificatesQuery({});
  const t = useTranslations("certificates");
  return (
    <section className="container">
      <div className="mb-[120px]">
        <div className="mb-12 mt-12">
          <SectionTitle title={t("title")} />
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className=""
          >
            {data?.map((item: Certificate) => (
              <SwiperSlide key={item.uuid}>
                <div className="bg-white px-[58px]  py-6 rounded-lg h-[450px] overflow-hidden">
                  <Image
                    width={284}
                    height={400}
                    alt="sertificate"
                    src={baseUrl + item.image}
                    className="w-full h-full object-cover "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
