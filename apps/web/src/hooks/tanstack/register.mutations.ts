import { useMutation } from "@tanstack/react-query";
import { RegisterNewUser } from "../../@types";
import { registerUser } from "../../api/users";

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
