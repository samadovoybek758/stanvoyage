import React from "react";

const CardVacancies = () => {
  return (
    <div className="p-6 bg-[#EEEEEE]">
      <div className="mb-8">
        <h3 className="font-normal text-2xl text-black max-w-[387px] mb-4">
          Haydovchi
        </h3>
        <span className="font-normal text-base text-black">
          {
            " Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun hoziroq ariza bering!"
          }
        </span>
      </div>
      <button className="py-[13px] w-full max-w-[251px] border border-black font-normal text-base text-black">
        Ariza topshirish
      </button>
    </div>
  );
};

export default CardVacancies;
