import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/auth";

type Args = {
  data: { email: string; password: string };
};

type H = {
  execute: () => void;
  loginLoading: boolean;
  loginError: boolean;
  loginSuccess: boolean;
  reset: () => void;
};

export const useLogin = ({ data }: Args): H => {
  const { logIn, logOut } = useAuth();

  const { mutate, isPending, isError, reset, isSuccess } = useMutation({
    mutationFn: async () => {
      await logIn(data);
    },
  });

  return {
    execute: mutate,
    loginError: isError,
    loginLoading: isPending,
    loginSuccess: isSuccess,
    reset,
  };
};
