import Image from "next/image";

const C22Mayo2024 = () => {
  return (
    <div className="7xl:pl-28 9xl:pl-24 flex 7xl:gap-x-20 9xl:gap-x-28 mt-10 ">
      <div className="7xl:w-[800px] 9xl:w-[1080px]">
        <div className="">
          <Image
            className="w-[88%]"
            src="/assets/ankai-mexico.jpeg"
            width={2000}
            height={2000}
            alt="ankai mexico"
          />
          <Image
            src="/assets/escuadra.svg"
            width={2000}
            height={2000}
            alt="escuadra"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="7xl:w-52 9xl:w-96 h-52 mt-5 border-gray-400 border-t-4 border-l-4"></div>
          <div>
            <h2 className="ml-10 7xl:text-16xl 9xl:text-21xl leading-10 tracking-tighter font-extrabold text-gray-900">
              ACERCA DE ANKAI MÉXICO
            </h2>
            <Image
              className="w-[575px] mt-4"
              src="/assets/hecho-en-china.jpeg"
              width={2000}
              height={2000}
              alt="made in china"
            />
          </div>
        </div>
        <p className="7xl:w-[780px] 9xl:w-[980px] 7xl:mt-6 9xl:mt-12 7xl:-ml-28 9xl:-ml-32 7xl:text-7xl 9xl:text-12xl text-gray-500">
          Torquatos nostros? quos tu tam inportuno tamque crudeli; sin, ut summo
          bono, dolorem eum iure reprehenderit, qui blanditiis praesentium
          voluptatum deleniti atque insitam in malis dolor, non existimant
          oportere exquisitis rationibus conquisitis de commodis suis
          cogitarent? at id est consecutus? laudem et rationibus conquisitis de.
        </p>
      </div>
    </div>
  );
};

export default C22Mayo2024;
