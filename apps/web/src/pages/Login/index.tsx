/* eslint-disable @typescript-eslint/no-misused-promises */
import { Input } from "../../components/Form/Input";
import { LoginData } from "../../interfaces";
import { Link as RedirectLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import React, { useState } from "react";

export const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginData>();
  // const { signIn } = useAuth();

  // const onSubmitLoginForm: SubmitHandler<LoginData> = async (
  //   data: LoginData,
  // ): Promise<void> => {
  //   const incomeLoginRequestData = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   // TODO: Criar interação em tela para mensagem de Erro
  //   setLoading(true);
  //   await signIn(incomeLoginRequestData);
  //   setLoading(false);
  // };
  return <div>Login Rendered</div>;
};
