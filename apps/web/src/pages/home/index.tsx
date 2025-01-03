import React from "react";
// import { PetsList } from '../../components/PetList'
// import { SharePetButton } from "../../components/SharePetButton";
import LeftPaw from "../../../assets/home/left-section.png";
import RightPaw from "../../../assets/home/right-section.png";
import { FunnelIcon } from "../../components/icons/funner.icon";
import { Filter } from "../../components/Filter/index";
import { useFilters } from "../../hooks/useFilters";
import { PetCard } from "../../components/PetCard/index2";

export const Home: React.FC = () => {
  const { filters, change, clear } = useFilters();

  const hasAnyFilter = Object.values(filters).some(
    (filter) => filter !== "Todos",
  );

  const filtersAppliedLength = Object.values(filters).filter(
    (v) => v !== "Todos",
  ).length;
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
          <span className="text-primary-500 ml-2">653</span> animais cadastrados
          a procura de um lar
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
        <div className="flex flex-col shadow-md rounded-lg p-4 w-full md:w-1/3">
          <header className="p-2 flex items-center justify-between gap-4">
            <h2 className="text-sm md:text-xl font-semibold">
              Refine sua busca
            </h2>
            {/* Filtros */}
            {hasAnyFilter && (
              <p
                onClick={clear}
                className="bg-gray-100 cursor-pointer rounded-xl px-4 py-2 text-primary-700 text-sm"
              >
                Limpar{" "}
                <span className="text-primary-700 font-semibold">
                  {filtersAppliedLength}
                </span>{" "}
                Filtros
              </p>
            )}

            <FunnelIcon tClass="h-6 w-6 text-primary-700" />
          </header>

          {/* Placeholder for filter options */}
          <Filter filters={filters} change={change} />
        </div>

        {/* Pets Grid */}
        <div className="flex-grow shadow-md rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-8">
          {/* Placeholder for pet cards */}
          {[...Array(12)].map((_, index) => (
            <PetCard key={index} petInformation={{ name: "Carlos" }} />
          ))}
        </div>
      </section>

      <h1></h1>
      {/* <SharePetButton /> */}
    </main>
  );
};
