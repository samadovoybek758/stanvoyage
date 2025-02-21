import Image from "next/image";

const CardNews = () => {
  return (
    <div>
      <div className="h-[282px] bg-[#EEEEEE] mb-4">
        <Image
          width={400}
          height={282}
          src={""}
          alt={""}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-normal text-base text-black mb-2"> 14/02/2025</span>
      <h3 className="font-normal text-2xl text-black max-w-[387px]">Samo ishchi tashriflari: birinchi bosqich yakunlandi</h3>
    </div>
  );
};

export default CardNews;
