"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetPartnersQuery } from "@/context/api/Partners";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { baseUrl } from "../../../../../public/static/Index";
import { useTranslations } from "next-intl";

function Partners() {
  const { data } = useGetPartnersQuery({});
  const t = useTranslations("partner");
  return (
    <section className="container">
      <div className="">
        <SectionTitle title={t("title")} />
      </div>
      <div className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] flex flex-col gap-2 md:gap-5 lg:gap-10">
        <Marquee speed={25} pauseOnHover={false} direction="left">
          {data?.map((item: { uuid: string; image: string }) => (
            <div
              key={item?.uuid}
              className="py-7 md:py-9 lg:py-[45px] px-6 md:px-8 lg:pl-[49px] lg:pr-11 bg-white rounded-lg flex items-center justify-center mx-1 sm:mx-2 md:mx-3 lg:mx-4 h-[90px] md:h-[120px] lg:h-[146px]"
            >
              <Image
                width={200}
                height={55}
                alt="Tiffosi"
                src={`${baseUrl}${item?.image}`}
              />
            </div>
          ))}
        </Marquee>
        <Marquee speed={25} pauseOnHover={false} direction="right">
          {data?.map((item: { uuid: string; image: string }) => (
            <div
              key={item?.uuid}
              className="py-7 md:py-9 lg:py-[45px] px-6 md:px-8 lg:pl-[49px] lg:pr-11 bg-white rounded-lg flex items-center justify-center mx-1 sm:mx-2 md:mx-3 lg:mx-4 h-[90px] md:h-[120px] lg:h-[146px]"
            >
              <Image
                width={200}
                height={55}
                alt="Tiffosi"
                src={`${baseUrl}${item?.image}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Partners;
