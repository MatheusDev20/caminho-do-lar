import React, { Dispatch, SetStateAction } from "react";
import { Select } from "../Form";
import {
  DogGenderOptions,
  DogSizeOptions,
  DogSpeciesOptions,
} from "../../utils/constants";
import { Filters } from "../../interfaces";
import { FilterParams } from "../../hooks/useFilters";

type Props = {
  filters: Filters;
  change: Dispatch<SetStateAction<FilterParams>>;
};

export const Filter = ({ filters, change }: Props): JSX.Element => {
  return (
    <div className="flex px-4 flex-col">
      <Select
        label="Espécie"
        options={DogSpeciesOptions}
        placeholder="Selecione"
        value={filters.specie}
        onChange={(e) => {
          change((prev) => ({ ...prev, specie: e.name }));
        }}
      />
      <Select
        label="Genêro"
        options={DogGenderOptions}
        placeholder="Gênero..."
        value={filters.gender}
        onChange={(e) => {
          change((prev) => ({ ...prev, gender: e.name }));
        }}
      />
      <Select
        label="Porte"
        options={DogSizeOptions}
        placeholder="Porte..."
        value={filters.size}
        onChange={(e) => {
          change((prev) => ({ ...prev, size: e.name }));
        }}
      />
      <button
        className="text-white bg-primary-700 hover:bg-primary-800 transition ease-in-out w-1/2 mt-6 
          self-center delay-75 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2
        dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none border-none"
      >
        Aplicar
      </button>
    </div>
  );
};
