"use client";
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/fantasy/index.css"; // Tema
import { useGetComponyQuery } from "@/context/api/Compony";

const CompanyHero = () => {
  const videoRef = useRef(null);
  const { data } = useGetComponyQuery({});
  console.log(data);

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        responsive: true,
        fluid: true,
        preload: "auto",
        techOrder: ["html5"],
        controlBar: {
          volumePanel: { inline: false },
        },
      });
      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="w-full overflow-hidden rounded-lg">
          <video
            ref={videoRef}
            className="video-js vjs-theme-fantasy w-full !h-[480px] rounded-lg"
          >
            <source
              src="https://media.istockphoto.com/id/1977697817/video/textile-factory-weaving-looms.mp4?s=mp4-640x640-is&k=20&c=IJmhcjArnBfdSUMwa5SNBMoK19E62vXagdcaH-ZWeDM="
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
