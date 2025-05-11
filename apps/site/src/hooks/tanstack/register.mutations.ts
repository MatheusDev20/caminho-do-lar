import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/users";
import type { RegisterNewUser } from "@/@types";

type Args = {
  data: RegisterNewUser;
};

type H = {
  execute: () => void;
  registerLoading: boolean;
  registerError: boolean;
  registerSuccess: boolean;
  reset: () => void;
};

export const useRegisterNewUser = ({ data }: Args): H => {
  const { mutate, isPending, isError, reset, isSuccess } = useMutation({
    mutationFn: async () => await registerUser(data),
  });

  return {
    execute: mutate,
    registerError: isError,
    registerLoading: isPending,
    registerSuccess: isSuccess,
    reset,
  };
};
