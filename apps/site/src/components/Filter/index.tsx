import { type Dispatch, type SetStateAction } from "react";
import { Select } from "../Form";
import type { FilterParams } from "../../hooks/useFilters";
import { DogGenderOptions, DogSizeOptions, DogSpeciesOptions } from "@/utils/constants";
import type { Filters } from "@/@types/Filters";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";

type Props = {
  filters: Filters;
  change: Dispatch<SetStateAction<FilterParams>>;
};

export const PopoverFilter = ({ filters, change }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="cursor-pointer md:h-[52px] bg-rose-500 text-white font-medium hover:bg-rose-600 hover:text-white hover:fonte-bold" variant="outline">
          Adicionar Filtros
          <Filter className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-90">
        <div className="grid gap-4 w-full">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Personalize sua busca</h4>
          </div>
          <div className="grid gap-2">
            <div className="flex p-2 items-center w-full gap-4">
              <Select
                label="Espécie"
                variant="lg"
                options={DogSpeciesOptions}
                placeholder="Selecione"
                value={filters.specie}
                onChange={(e) => {
                  change((prev) => ({ ...prev, specie: e.name }));
                }}
              />
            </div>
            <div className="flex p-2 items-center w-full gap-4">
              <Select
                label="Porte"
                variant="lg"
                options={DogSizeOptions}
                placeholder="Selecione"
                value={filters.size}
                onChange={(e) => {
                  change((prev) => ({ ...prev, size: e.name }));
                }}
              />
            </div>
            <div className="flex p-2 items-center w-full gap-4">
              <Select
                label="Gênero"
                variant="lg"
                options={DogGenderOptions}
                placeholder="Selecione"
                value={filters.gender}
                onChange={(e) => {
                  change((prev) => ({ ...prev, gender: e.name }));
                }}
              />
            </div>
          </div>
          <p>Aplicar</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
