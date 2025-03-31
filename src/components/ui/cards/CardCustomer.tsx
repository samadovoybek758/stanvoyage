import Image from "next/image";
import icon from '../../../../public/Images/stanvoyage/testemonial.png'
import { baseUrl } from "../../../../public/static/Index";
import DOMPurify from "dompurify";


interface CustomerType {
    uuid: string;
    created_at: string;
    updated_at: string
    image?: string;
    order: number;
    text: string;
    fullname: string
  }
  

const CardCustomer = ({ item }: { item: CustomerType }) => {

    return (
        <div className="rounded-[20px] flex flex-col justify-between pt-3 sm:pt-5 pl-3 sm:pl-6 pb-3 h-[270px] sm:min-h-[340px] sm:pb-6 pr-3 sm:pr-[26px] border-[1px] border-[#D7D7D7]">
           <div>
           <Image src={icon} alt='arrow left' width={50} height={50} className='mb-8' />
            <p className='text-[#1C1C1C] text-lg mb-4 line-clamp-4' 
             dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.text || ""),
              }}/>
           </div>
        <div>
            {item.image ?  ( 
                <div className="flex items-center gap-3">
                    <div className="w-[50px] h-[50px]">
                        <Image 
                            src={baseUrl + item.image} 
                            alt="Customer" 
                            width={50} 
                            height={50} 
                            className="rounded-full w-full h-full object-cover" 
                        />
                    </div>
                    <h1 className="text-[#1C1C1C] text-lg">{item.fullname}</h1>
                </div>
            ):(
                <span className="text-xl font-medium">Author:  {item.fullname}</span>
            )}
            </div>
        </div>
    );
};

export default CardCustomer;
