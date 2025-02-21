import { useQuery } from "@tanstack/react-query";
import { getPetsList } from "../../api/pets";
import { FilterParams } from "../useFilters";
import { Pet } from "../../types/pet";

type Hook = {
  filters: FilterParams;
  page: string;
};

type HookOutput = {
  petList: Pet[] | undefined;
  isLoading: boolean;
  count: number;
};

export const useHomeList = ({ filters, page }: Hook): HookOutput => {
  const {
    data: apiResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pet_home_list", { page }],
    queryFn: async () => await getPetsList({ filters, page }),
  });

  const list = apiResponse?.collection ? apiResponse.collection : [];
  const count = apiResponse?.count ?? 0;

  return {
    isLoading,
    petList: list,
    count,
  };
};
