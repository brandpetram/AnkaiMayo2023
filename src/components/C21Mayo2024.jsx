import Image from "next/image";
import React from "react";

const C21Mayo2024 = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-9xl">
        <Image
          className="7xl:h-[936px] object-cover aspect-video"
          src="/assets/ankai-mexico-camion-electrico.jpg"
          width={2590}
          height={1440}
          alt="barra blanca"
        />
      </div>
      <div className="absolute text-18xl text-gray-200 bg-[rgba(0,0,0,0.85)] pl-14 pr-16 py-14 top-36 right-0 z-20">
        <p className="leading-4">Los</p>
        <p className="leading-4 mt-10 ">Camiones</p>
        <p className="leading-4 mt-10">Asiático</p>
        <p className="leading-4 mt-10">Líderes</p>
        <p className="leading-4 mt-10">en México</p>
      </div>
    </div>
  );
};

export default C21Mayo2024;
