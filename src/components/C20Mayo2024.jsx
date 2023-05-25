import Image from "next/image";
import React from "react";

const C20Mayo2024 = () => {
  return (
    <div className="relative bg-red-custom pt-5 pb-10 flex justify-end">
      <div className="w-max absolute z-20 left-0 top-0">
        <div className="7xl:w-[630px] 9xl:w-[780px]">
          <Image
            src="/assets/barra-blanca.svg"
            width={800}
            height={800}
            alt="barra blanca"
          />
        </div>
        <div className="absolute left-20 7xl:w-96 9xl:w-[480px] top-1/2 -translate-y-1/2">
          <Image
            src="/assets/logo-ankai.svg"
            width={480}
            height={480}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex flex-col 7xl:mr-20 9xl:mr-36">
        <div className="w-max self-end flex gap-x-12">
          <div className="flex items-center gap-x-3">
            <Image
              className="7xl:w-7 9xl:w-11"
              src="/assets/correo.svg"
              width={24}
              height={24}
              alt="correo"
            />
            <p className="text-gray-300 7xl:text-normal 9xl:text-2xl">
              info@ankai.mx
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              className="7xl:w-7 9xl:w-11"
              src="/assets/telefono.svg"
              width={24}
              height={24}
              alt="telefono"
            />
            <p className="text-gray-300 7xl:text-normal 9xl:text-2xl">
              Llámanos en México: <span>81 1016 5282</span>
            </p>
          </div>
        </div>
        <ul className="flex 7xl:gap-x-14 9xl:gap-x-16 mt-7 7xl:text-lg 9xl:text-4xl text-white font-semibold">
          <li>Inicio</li>
          <li>Empresa</li>
          <li>Ankai en México</li>
          <li>Vehículos</li>
          <li>Tecnologías</li>
          <li>Noticias</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default C20Mayo2024;
