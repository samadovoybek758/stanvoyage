import React from "react";
import Image from "next/image";

function ProductDetailHero() {
  return (
    <section className="my-[120px]">
      <div className="container">
        <div className="flex gap-4 md:flex-row flex-col">
          <div className="md:py-10 md:pb-[30px] md:pl-10 flex-1 bg-white rounded-lg pt-6 pl-[20px] pb-[20px] pr-[22px]">
            <h2 className="text-[#080808] text-[28px] mb-6 max-w-[452px] font-brigends-expanded">
              Tayyor trikotaj kiyimlar
            </h2>
            <p className="text-lg text-[#080808] ">
              Samo kompaniyasi ayollar va erkaklar uchun trikotaj kiyimlarning
              keng assortimentini taklif etadi: ichki kiyim va futbolkalardan
              tortib xudi va svitshotlarga qadar. Shuningdek, biz bolalar
              kiyimlariga ixtisoslashganmiz, jumladan, bodiklar, sliplar,
              qalpoqlar, kombinezonlar, pastki ko'ylaklar, tagliklar va
              boshqalar.Barcha mahsulotlarimiz zamonaviy ishlab chiqarish
              texnologiyalaridan foydalangan holda yuqori sifatli materiallardan
              tayyorlangan. Biz eng so'nggi moda tendentsiyalariga rioya qilamiz
              va har kuni uchun zamonaviy va qulay narsalarni taklif qilamiz.
            </p>
          </div>

          <div className="flex-1 py-[53px] px-[46.5px] bg-white rounded-lg max-h-[520px] ">
            <Image
              width={515}
              height={412}
              alt="product Image"
              src={""}
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailHero;
