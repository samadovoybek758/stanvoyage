"use client";
import ImageLoading from "@/components/ui/ImageLoading";
import { useGetComponyQuery } from "@/context/api/Compony";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

const extractYouTubeID = (url: string): string | null => {
  if (!url) return null;
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const CompanyVideo = () => {
  const { data, isFetching, isLoading } = useGetComponyQuery({});
  const locale = useLocale();
  const [autoplay, setAutoplay] = useState(false);

  const videoKey = `video_${locale}`;
  const videoURL = data?.[videoKey] || "";
  const videoID = extractYouTubeID(videoURL);

  useEffect(() => {
    if (window.location.hash === "#company-video") {
      setAutoplay(true);
    }
  }, []);

  return (
    <section
      className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] pt-20 md:pt-28 lg:pt-[120px]"
      id="company-video"
    >
      <div className="container">
        <div className="overflow-hidden rounded-lg h-[340px] md:h-[400px] lg:h-[480px]">
          {isFetching || isLoading ? (
            <ImageLoading />
          ) : videoID ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoID}?autoplay=${
                autoplay ? 1 : 0
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-center text-gray-500">Video mavjud emas</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyVideo;
