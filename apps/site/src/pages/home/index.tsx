import React from "react";
import { useFilters } from "../../hooks/useFilters";
import { PetCard } from "../../components/PetCard";
import { useHomeList } from "../../hooks/tanstack/pet-list.query";
import { Spinner } from "../../components/spinner";
import NotFoundDog from "@/assets/home/not-found-dog.png";
import { PaginationFooter } from "@/components/pagination";
import HeroBanner from "@/components/HeroBanner";
import { PopoverFilter } from "@/components/Filter";
import { Button } from "@/components/ui/button";

export const Home: React.FC = () => {
  const { filters, change, clear } = useFilters();

  const { petList, count, isLoading } = useHomeList({
    filters,
  });

  const hasAnyFilter = Object.values(filters).some(
    (filter) => typeof filter === "string" && filter,
  );

  const filtersAppliedLength = Object.values(filters).filter((v) => v).length;

  const emptyPetList = petList?.length === 0;
  const handleNextPage = (): void => {
    change((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  const handlePrevious = (): void => {
    change((prev) => ({ ...prev, page: prev.page - 1 }));
  };
  return (
    <main className="flex flex-col gap-6">
      {/* Display X results */}
      <HeroBanner />
      <section className="2xl:w-full 2xl:mx-auto flex flex-col md:flex-col gap-12 md:pr-12 pl-12">
        <header className="items-center flex w-full min-h-[50px] md:pr-24 justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Encontre seu Parceiro</h2>
              <p className="mt-1 text-gray-500">Descubra pets esperando por você</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {hasAnyFilter && (
              <Button
                variant="outline"
                className="text-sm text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => {
                  clear();
                }}
              >
                Limpar ({filtersAppliedLength}) Filtros
              </Button>
            )}
            <PopoverFilter filters={filters} change={change} disabled={!petList || petList.length === 0} />
          </div>
      
        </header>
        {/* Pets Grid */}
        <div className="w-full flex gap-6 md:p-12 p-0 flex-col">
          <div
            className={`flex-grow shadow-md w-full ${!isLoading && !emptyPetList ? "auto-rows-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 2xl:grid-cols-5" : "flex justify-center items-center"} rounded-lg p-4 gap-8`}
          >
            {petList?.length === 0 && (
              <div className="w-full flex p-2 items-center flex-col gap-8 justify-center">
                <h4 className="text-primary-500 2xl:text-lg text-md">
                  Não foi encontrado nenhum Pet na pesquisa
                </h4>
                <img src={NotFoundDog} />
              </div>
            )}
            {/* Placeholder for pet cards */}
            {isLoading && (
              <Spinner
                textClass="text-primary-500"
                size="md"
                text="Carregando resultados"
              />
            )}
            {petList?.map((pet) => (
              <PetCard key={pet.id} petInformation={pet} />
            ))}
          </div>
          {petList && petList?.length > 0 && (
             <PaginationFooter
            currentPage={filters.page}
            quantity={count}
            prev={handlePrevious}
            next={handleNextPage}
            set={(page: number) => {
              change((prev) => ({ ...prev, page }));
            }}
          />
          )}
         
        </div>
      </section>
    </main>
  );
};
