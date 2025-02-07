import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface FilterParams {
  specie: string;
  gender: string;
  size: string;
}

export const useFilters = (): {
  filters: FilterParams;
  change: Dispatch<SetStateAction<FilterParams>>;
  clear: () => void;
  pageOptions: number[];
} => {
  const [urlParams, setUrlParams] = useSearchParams();

  const defaultFilters: any = {
    gender: "Todos",
    size: "Todos",
    specie: "Todos",
  };

  const [filtersParams, setFiltersParams] = useState<FilterParams>({
    gender: urlParams.get("gender") ?? defaultFilters.gender,
    size: urlParams.get("size") ?? defaultFilters.size,
    specie: urlParams.get("specie") ?? defaultFilters.specie,
  });
  const [pageOptions, setPageOptions] = useState<number[]>([9, 12, 18]);

  const clearAllFilters = (): void => {
    setFiltersParams(defaultFilters);
  };

  // const changeCurrentPageOption = (newV: string): void => {
  //   setPageOptions((prev) => {
  //     const fin
  //   });
  // };

  useEffect(() => {
    // Filter out default values from the URL
    const params = Object.fromEntries(
      Object.entries(filtersParams).filter(
        ([key, value]) => value && value !== defaultFilters[key],
      ),
    );
    setUrlParams(params);
  }, [filtersParams, setUrlParams]);

  return {
    filters: filtersParams,
    change: setFiltersParams,
    clear: clearAllFilters,
    pageOptions,
  };
};
