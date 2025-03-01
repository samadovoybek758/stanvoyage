import Image from "next/image";
import newsImg from "../../../../public/Images/newx-bg.png";
const CardNews = () => {
  return (
    <div>
      <div className="h-[296px] bg-[#EEEEEE] mb-4 rounded-[25px] overflow-hidden">
        <Image
          width={296}
          height={320}
          src={newsImg}
          alt={"news-img"}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-normal text-base text-black mb-2"> 14/02/2025</span>
      <h3 className="font-normal line-clamp-2 text-lg text-black max-w-[387px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
    </div>
  );
};

export default CardNews;
