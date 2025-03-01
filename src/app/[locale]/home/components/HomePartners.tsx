"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetPartnersQuery } from "@/context/api/Partners";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { baseUrl } from "../../../../../public/static/Index";

function Partners() {
  const { data } = useGetPartnersQuery({});

  return (
    <section className="container">
      <div className="">
        <SectionTitle title="Hamkorlar" />
      </div>
      <div className="mb-32 flex flex-col gap-10">
        <Marquee speed={25} pauseOnHover={false} direction="left">
          {data?.map((item: { uuid: string; image: string }) => (
            <div
              key={item?.uuid}
              className="py-[45px] pl-[49px] pr-11 bg-white rounded-[25px] flex items-center justify-center mx-4 h-[146px]"
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
              className="py-[45px] pl-[49px] pr-11 bg-white rounded-[25px] flex items-center justify-center mx-4 h-[146px]"
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
