import React from "react";
// import { PetsList } from '../../components/PetList'
// import { SharePetButton } from "../../components/SharePetButton";
import LeftPaw from "../../../assets/home/left-section.png";
import RightPaw from "../../../assets/home/right-section.png";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col md:p-12 gap-12">
      {/* HighLight message */}

      <section
        className="flex mx-auto w-full rounded-xl overflow-hidden max-w-[1470px] relative items-center justify-center
       2xl:min-h-[px] bg-gradient-to-r from-blue-50 to-blue-100 md:min-h-[200px] shadow-lg p-4 transition-transform transform hover:scale-105 duration-300"
      >
        <img
          src={LeftPaw}
          alt="Left Paw"
          className="absolute top-[-0.5px] left-[5%] 2xl:h-36 md:h-28"
        />
        <h1 className="text-center text-sm md:text-2xl z-10">
          Encontramos{" "}
          <span className="text-primary-700 font-semibold">653</span> animais
          cadastrados a procura de um lar
          <span className="ml-2">🏡</span>
          <span className="ml-2">🐾</span>
        </h1>
        <img
          src={RightPaw}
          alt="Right Paw"
          className="absolute bottom-[-6px] right-[5%] 2xl:h-36 md:h-28"
        />
      </section>

      {/* <SharePetButton /> */}
    </main>
  );
};
