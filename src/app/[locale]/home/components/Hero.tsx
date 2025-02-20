"use client";
import { useCreateAplicationMutation } from "@/context/api/Aplication";
import { useGetCategoryQuery } from "@/context/api/CategoryApi";
import { useGetCertificatesQuery } from "@/context/api/Certificates";
import { useGetCompanyPhoneQuery } from "@/context/api/CompanyPhoneApi";
import { useGetComponyQuery } from "@/context/api/Compony";
import { useCreateContactMutation } from "@/context/api/ContactApi";
import { useGetFactoriesQuery } from "@/context/api/Factories";
import { useGetGaleryQuery } from "@/context/api/Galery";
import { useGetGoalsQuery } from "@/context/api/Goals";
import { useGetHistoryQuery } from "@/context/api/History";
import { useGetMaterialTypesQuery } from "@/context/api/MaterialTypes";
import { useGetArticlesQuery, useGetNewsQuery } from "@/context/api/News";
import { useGetPartnersQuery } from "@/context/api/Partners";
import { useGetProductByIdQuery, useGetProductsQuery } from "@/context/api/ProductApi";
import { useGetQualitiesQuery } from "@/context/api/Qualities";
import { useGetSliderQuery } from "@/context/api/SliderApi";
import { useGetSocialsQuery } from "@/context/api/Socials";
import { useGetVacansyQuery } from "@/context/api/Vacancies";

const Hero = () => {
  const [createApplication, { data, isLoading, isSuccess, isError }] = useCreateContactMutation();


  const clickbutton = async () => {
    try {
      const data = {
        full_name: 'John Doe',  
        phone: +998911757064,
        content : 'asdfasdfasd',
      };

      const response = await createApplication(data);  
      console.log("created", response.data);  
    } catch (error) {
      console.error("err", error);  
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      <button className="bg-slate-500" onClick={clickbutton}>gooo</button>
      <ul></ul>
    </div>
  );
};

export default Hero;


// "use client"
// import React from 'react';
// import  useCounter  from '@/hook/useCounter';

// const CounterComponent = () => {
//   const { count, increment, decrement } = useCounter(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default CounterComponent;
