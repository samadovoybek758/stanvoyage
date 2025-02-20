"use client";
import { useGetNewsQuery } from "@/context/api/News";

const Hero = () => {
  const { data } = useGetNewsQuery({});
  console.log(data);

  return (
    <div>
      <h1>Hello</h1>
      <ul></ul>
    </div>
  );
};

export default Hero;
