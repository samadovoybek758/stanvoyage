import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { useGetComponyQuery } from "@/context/api/Compony";
import ImageLoading from "@/components/ui/ImageLoading";

const Map = ({ className }: { className?: string }) => {
  const { data, isLoading, isFetching } = useGetComponyQuery({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (data?.map_embed) {
      setTimeout(() => {
        const iframe = document.querySelector(
          ".map-container iframe"
        ) as HTMLIFrameElement;
        if (iframe) {
          iframe.style.width = "100%";
          iframe.style.height = "100%";
        }
      }, 500);
    }
  }, [data]);

  return (
    <div
      className={`rounded-lg min-h-[500px] lg:min-h-[350px] overflow-hidden w-full ${className}`}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {isLoading || isFetching || !data?.map_embed ? (
        <ImageLoading className="w-full h-full" />
      ) : (
        <div
          className="w-full h-full map-container"
          dangerouslySetInnerHTML={{ __html: data.map_embed }}
        />
      )}
    </div>
  );
};

export default Map;
