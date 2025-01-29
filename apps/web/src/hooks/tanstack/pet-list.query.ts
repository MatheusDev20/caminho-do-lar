import { useQuery } from "@tanstack/react-query";
import { getPetsList } from "../../api/pets";
import { FilterParams } from "../useFilters";
import { Pet } from "../../interfaces/pet";

type Hook = {
  filters: FilterParams;
  page: string;
};

type HookOutput = {
  petList: Pet[] | undefined;
  isLoading: boolean;
};
export const useHomeList = ({ filters, page }: Hook): HookOutput => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pet_home_list"],
    queryFn: async () => await getPetsList({ filters, page }),
  });
  const list = data && data.length === 0 ? [] : data;

  return {
    isLoading,
    petList: list,
  };
};
