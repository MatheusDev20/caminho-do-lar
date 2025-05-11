import { useQuery } from "@tanstack/react-query";
import { getPetsList } from "../../api/pets";
import type { FilterParams } from "../useFilters";
import type { Pet } from "../../@types/pet";

type Hook = {
  filters: FilterParams;
};

type HookOutput = {
  petList: Pet[] | undefined;
  isLoading: boolean;
  count: number;
};

export const useHomeList = ({ filters }: Hook): HookOutput => {
  const {
    data: apiResponse,
    isLoading,
  } = useQuery({
    queryKey: ["pet_home_list", { filters }],
    queryFn: async () => await getPetsList({ filters }),
  });

  const list = apiResponse?.collection ? apiResponse.collection : [];
  const count = apiResponse?.count ?? 0;

  return {
    isLoading,
    petList: list,
    count,
  };
};
