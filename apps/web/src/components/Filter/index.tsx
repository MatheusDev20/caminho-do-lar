import React, { useState } from "react";

import { Select } from "../Form";
import { DogSpeciesOptions } from "../../utils/constants";

export const Filter = (): JSX.Element => {
  const [filterOptions, setFilterOptions] = useState({
    size: "",
    specie: "",
    gender: "",
  });

  return (
    <Select
      label="Espécie"
      options={DogSpeciesOptions}
      placeholder="Selecione"
      value={filterOptions.specie}
      onChange={(e) => {
        setFilterOptions({ ...filterOptions, specie: e.name });
      }}
    />
  );
};
