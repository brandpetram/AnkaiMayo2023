import Image from "next/image";
import React from "react";

const C21Mayo2024 = () => {
  return (
    <div className="relative bottom-2">
      <div className="max-w-screen-9xl w-full">
        <Image
          src="/assets/ankai-mexico-camion-electrico.jpg"
          width={2590}
          height={1440}
          alt="barra blanca"
        />
      </div>
      <div className="absolute text-7xl text-white bg-[rgba(0,0,0,0.85)] pl-12 pr-16 py-8 top-32 right-0 z-20">
        <p className="leading-8">Los</p>
        <p className="leading-8">Camiones</p>
        <p className="leading-8">Asiático</p>
        <p className="leading-8">Líderes</p>
        <p className="leading-8">en México</p>
      </div>
    </div>
  );
};

export default C21Mayo2024;
