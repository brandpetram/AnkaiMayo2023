import Image from "next/image";
import React from "react";

const C20Mayo2024 = () => {
  return (
    <div className="relative bg-red-custom pt-3 pb-6 flex justify-end">
      <div className="w-max absolute z-20 left-0 top-0">
        <div className="7xl:w-[450px] 9xl:w-[500px]">
          <Image
            src="/assets/barra-blanca.svg"
            width={480}
            height={480}
            alt="barra blanca"
          />
        </div>
        <div className="absolute left-12 w-64 top-1/2 -translate-y-1/2">
          <Image
            src="/assets/logo-ankai.svg"
            width={350}
            height={350}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex flex-col mr-20">
        <div className="w-max self-end flex gap-x-12">
          <div className="flex items-center gap-x-3">
            <Image
              className="w-6"
              src="/assets/correo.svg"
              width={24}
              height={24}
              alt="correo"
            />
            <p className="text-white">info@ankai.mx</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              className="w-6"
              src="/assets/telefono.svg"
              width={24}
              height={24}
              alt="telefono"
            />
            <p className="text-white">
              Llámanos en México: <span>81 1016 5282</span>
            </p>
          </div>
        </div>
        <ul className="flex gap-x-9 mt-4 7xl:text-sm 9xl:text-xl text-white font-semibold">
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
