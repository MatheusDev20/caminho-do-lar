/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface FilterParams {
  page: number;
  specie: string;
  gender: string;
  size: string;
}

export const useFilters = (): {
  filters: FilterParams;
  change: Dispatch<SetStateAction<FilterParams>>;
  clear: () => void;
} => {
  const [urlParams, setUrlParams] = useSearchParams();

  const defaultFilters: any = {
    page: 1,
    gender: null,
    size: null,
    specie: null,
  };

  const [filtersParams, setFiltersParams] = useState<FilterParams>({
    page: Number(urlParams.get("page")) || defaultFilters.page,
    gender: urlParams.get("gender") ?? defaultFilters.gender,
    size: urlParams.get("size") ?? defaultFilters.size,
    specie: urlParams.get("specie") ?? defaultFilters.specie,
  });

  const clearAllFilters = (): void => {
    setFiltersParams(defaultFilters);
  };

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
  };
};
