import React from "react";
// import { PetsList } from '../../components/PetList'
// import { SharePetButton } from "../../components/SharePetButton";
import LeftPaw from "../../../assets/home/left-section.png";
import RightPaw from "../../../assets/home/right-section.png";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col md:p-12 gap-12 relative">
      {/* HighLight message */}

      <section className="flex overflow-hidden relative items-center bg-[#fdfdfd] justify-center md:min-h-[200px] shadow-md p-4 rounded-lg">
        <img
          src={LeftPaw}
          alt="Left Paw"
          className="absolute top-[-4px] left-[5%] 2xl:h-56 md:h-32"
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
          className="absolute bottom-[-6px] right-[5%] 2xl:h-48 md:h-32"
        />
      </section>

      {/* <SharePetButton /> */}
    </main>
  );
};
