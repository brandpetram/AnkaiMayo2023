import Image from "next/image";
import React from "react";
import Imgix from "react-imgix";

const C21Mayo2024 = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-9xl">
        <Imgix
          className="7xl:h-[936px] 9xl:h-[1290px] object-cover aspect-video"
          src="https://brandpetram.imgix.net/ankai/ankai-mexico-camion-electrico.jpg"
          width={2590}
          height={1440}
          alt="barra blanca"
        />
      </div>
      <div className="absolute 7xl:text-18xl 9xl:text-24xl text-gray-200 bg-[rgba(0,0,0,0.85)] 7xl:px-16 9xl:px-20 7xl:py-14 9xl:py-20 7xl:top-36 9xl:top-52 right-0 z-20 font-light">
        <p className="leading-4">Los</p>
        <p className="leading-4 7xl:mt-9 9xl:mt-12">Camiones</p>
        <p className="leading-4 7xl:mt-9 9xl:mt-12">Asiático</p>
        <p className="leading-4 7xl:mt-9 9xl:mt-12">Líderes</p>
        <p className="leading-4 7xl:mt-9 9xl:mt-12">en México</p>
      </div>
    </div>
  );
};

export default C21Mayo2024;
