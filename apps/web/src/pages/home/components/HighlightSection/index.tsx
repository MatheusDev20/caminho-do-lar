import React from "react";
import LeftPaw from "../../../../../assets/home/left-section.png";
import RightPaw from "../../../../../assets/home/right-section.png";

export const HighlightSection = (): JSX.Element => {
  return (
    <section
      className="flex mx-auto w-full rounded-xl overflow-hidden max-w-[1470px] relative items-center justify-center
   2xl:min-h-[px] bg-gradient-to-r from-blue-50 to-blue-100 md:min-h-[200px] shadow-lg p-4"
    >
      <img
        src={LeftPaw}
        alt="Left Paw"
        className="absolute top-[-0.5px] left-[5%] 2xl:h-36 md:h-28"
      />
      <h1 className="text-center mb-10 text-sm md:text-2xl z-10">
        Encontramos
        <span className="text-primary-500 ml-2">653</span> animais cadastrados a
        procura de um lar
        <span className="ml-2">🏡</span>
        <span className="ml-2">🐾</span>
      </h1>
      <img
        src={RightPaw}
        alt="Right Paw"
        className="absolute bottom-[-6px] right-[5%] 2xl:h-36 md:h-28"
      />
      <button className="text-white bg-primary-700 hover:bg-primary-800 transition ease-in-out max-w-[50%] mb-6 self-center delay-75 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none border-none p-4 absolute bottom-0">
        Quero divulgar um animal
      </button>
    </section>
  );
};
