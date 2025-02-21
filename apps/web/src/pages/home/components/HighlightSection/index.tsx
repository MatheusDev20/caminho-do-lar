import React from "react";
import LeftPaw from "../../../../../assets/home/left-section.png";
import RightPaw from "../../../../../assets/home/right-section.png";
import { useAuth } from "../../../../context/auth";
import { useModals } from "../../../../context/ modal-context";

export const HighlightSection = ({
  quantity,
}: {
  quantity: number;
}): JSX.Element => {
  const { isAuthenticated } = useAuth();
  const { open } = useModals();
  const handleNewPet = (): void => {
    if (!isAuthenticated) open("login");
  };
  return (
    <section
      className="
        flex mx-auto md:w-full w-[95%] rounded-xl overflow-hidden max-w-[1470px] mt-6 md:mt-0 relative items-center justify-center
        2xl:min-h-[px] bg-gradient-to-r from-blue-50 to-blue-100 md:min-h-[200px] shadow-lg p-4"
    >
      <img
        src={LeftPaw}
        alt="Left Paw"
        className="absolute top-[-0.5px] left-[5%] 2xl:h-36 h-4 md:h-28"
      />
      <h1 className="text-center mb-10 mt-4 md:mt-0 text-xs md:text-2xl z-10">
        Encontramos
        <span className="text-primary-500 ml-1 mr-1 md:ml-2">{quantity}</span>
        animais cadastrados a procura de um lar
        <span className="ml-0 md:ml-2">🏡</span>
        <span className="ml-0 md:ml-2">🐾</span>
      </h1>
      <img
        src={RightPaw}
        alt="Right Paw"
        className="absolute bottom-[-6px] right-[5%] 2xl:h-36 h-4 md:h-28"
      />
      <button
        onClick={handleNewPet}
        className="text-white bg-primary-700 hover:bg-primary-800 mb-4 transition ease-in-out max-w-[50%] 
          md:mb-6 self-center delay-75 font-medium rounded-lg text-xs md:text-sm px-4 lg:px-5 md:py-2 lg:py-2.5 mr-2
          md:h-12 h-6
         dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none border-none md:p-4 absolute bottom-0"
      >
        Quero divulgar um animal
      </button>
    </section>
  );
};
