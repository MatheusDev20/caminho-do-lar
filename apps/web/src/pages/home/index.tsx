import React from "react";
// import { PetsList } from '../../components/PetList'
// import { SharePetButton } from "../../components/SharePetButton";
import LeftPaw from "../../../assets/home/left-section.png";
import RightPaw from "../../../assets/home/right-section.png";
import { FunnelIcon } from "../../components/icons/funner.icon";
import { Select } from "../../components/Form/Select";

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
          Encontramos
          <span className="text-primary-700 ml-2 font-semibold">653</span>{" "}
          animais cadastrados a procura de um lar
          <span className="ml-2">🏡</span>
          <span className="ml-2">🐾</span>
        </h1>
        <img
          src={RightPaw}
          alt="Right Paw"
          className="absolute bottom-[-6px] right-[5%] 2xl:h-36 md:h-28"
        />
      </section>
      {/* Pets Paginated list more filters */}
      <section className="max-w-[1470px] 2xl:w-full 2xl:mx-auto flex flex-col md:flex-row gap-6">
        {/* Filters: Refine your search */}
        <div className="flex flex-col shadow-md rounded-lg p-4 w-full md:w-1/3 h-auto">
          <header className="p-2 flex items-center justify-between gap-4">
            <h2 className="text-sm md:text-xl font-semibold">
              Refine sua busca
            </h2>
            <FunnelIcon tClass="h-6 w-6 text-primary-700" />
          </header>

          {/* Placeholder for filter options */}
          <div className="flex flex-col gap-4">
            <Select
              label="Espécie"
              options={[
                {
                  imgLink: "https://www.svgrepo.com/show/2046/dog.svg",
                  name: "Cães",
                },
                {
                  imgLink: "https://www.svgrepo.com/show/85124/cat.svg",
                  name: "Gatos",
                },
              ]}
              placeholder="Selecione"
            />
            <label>
              <span className="block mb-1 font-medium text-gray-700">
                Idade:
              </span>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Filhote</option>
                <option>Adulto</option>
                <option>Idoso</option>
              </select>
            </label>
            <button className="bg-primary-700 text-white rounded-lg p-2 hover:bg-primary-800">
              Aplicar filtros
            </button>
          </div>
        </div>

        {/* Pets Grid */}
        <div className="flex-grow shadow-md rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder for pet cards */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-md font-medium">Pet {index + 1}</h3>
              <p className="text-sm text-gray-500">Descrição do pet</p>
            </div>
          ))}
        </div>
      </section>

      <h1></h1>
      {/* <SharePetButton /> */}
    </main>
  );
};
