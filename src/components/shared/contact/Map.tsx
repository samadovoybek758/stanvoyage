import React from "react";

const Map = ({ className }: { className?: string }) => {
  return (
    <div className={`rounded-[25px] ${className}`}>
      <iframe
        src="https://yandex.uz/maps/geo/1508540006/?ll=72.565509%2C40.667535&z=14"
        width="100%"
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
