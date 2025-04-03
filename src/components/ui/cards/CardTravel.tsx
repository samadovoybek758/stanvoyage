import Image from "next/image";
import img1 from "../../../../public/Images/company-icon.svg";

interface TravelsCardProps {
    uuid: number;
    title_uz: string;
    desc: string
}

const CardTravel = ({ item }: { item: TravelsCardProps }) => {

    return (
        <div className="">
            <Image src={img1} alt='arrow left' width={50} height={50} className='mb-6 md:mb-[50px]' unoptimized />
            <h1 className='text-[#080808] text-2xl mb-3'>{item.title_uz}</h1>
            <p className='text-[#080808] text-base line-clamp-5'>{item.desc}</p>
        </div>
    );
};

export default CardTravel;
