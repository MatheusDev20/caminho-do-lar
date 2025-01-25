import React from "react";
import { FunnelIcon } from "../../components/icons/funner.icon";
import { Filter } from "../../components/Filter/index";
import { useFilters } from "../../hooks/useFilters";
import { HighlightSection } from "./components/HighlightSection";
import { PetCard } from "../../components/PetCard";
import { useAuth } from "../../context/AuthContext";

export const Home: React.FC = () => {
  const { filters, change, clear } = useFilters();
  const { isAuthenticated, user } = useAuth();
  const hasAnyFilter = Object.values(filters).some(
    (filter) => filter !== "Todos",
  );
  const filtersAppliedLength = Object.values(filters).filter(
    (v) => v !== "Todos",
  ).length;
  return (
    <main className="flex flex-col md:p-12 gap-12">
      <HighlightSection />
      {/* Display X results */}
      <div className="w-full max-w-[1470px] 2xl:w-full 2xl:mx-auto flex p-6 justify-between items-center bg-gray-50">
        <p className="text-xs md:text-lg">
          Exibindo{" "}
          <span className="text-primary-700 font-semibold">1 a 12</span> de{" "}
          <span className="text-primary-700 font-semibold">1240</span> Pets por
          página
        </p>
        <div className="flex px-4 gap-2 items-center">
          Mostrar{" "}
          <div className="relative w-14 cursor-pointer">
            <select className="appearance-none w-full p-2 border cursor-pointer border-gray-300 rounded text-sm focus:outline-none">
              <option value="18">9</option>
              <option value="36">12</option>
              <option value="54">18</option>
            </select>
            <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          pets por página
        </div>
      </div>
      {/* Pets Paginated list more filters */}
      <section className="max-w-[1470px] 2xl:w-full 2xl:mx-auto flex flex-col md:flex-row gap-6">
        {/* Filters: Refine your search */}
        <div className="flex flex-col md:basis-1/3 md:max-h-[80vh] overflow-y-auto shadow-md rounded-lg p-4 w-full">
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
          {[...Array(9)].map((_, index) => (
            <PetCard key={index} petInformation={{ name: "Carlos" }} />
          ))}
        </div>
      </section>
    </main>
  );
};
