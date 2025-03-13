import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Map = ({ className }: { className?: string }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div
      className={`rounded-lg ${className}`}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d531.3718061642583!2d72.57651338892656!3d40.65632422961893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcf97a66cb83e5%3A0x9046b588f57b9623!2sSAMO%20textile%20Head%20Office!5e0!3m2!1sen!2s!4v1740998561311!5m2!1sen!2s"
        width="100%"
        // height=""
        frameBorder="0"
        allowFullScreen
        style={{ border: 0 }}
        title="Yandex Map"
        className="rounded-lg h-[330px] md:h-full"
      ></iframe>
    </div>
  );
};

export default Map;
