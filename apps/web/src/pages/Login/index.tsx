/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import Logo from "../../../assets/79642645_SL-011023-55240-18.svg";
import { Input } from "../../components/Form";
import { EmailIcon } from "../../components/icons/email";

import { Lock } from "../../components/icons/lock";
import { isValideEMail } from "../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../api/users";
import { useAuth } from "../../context/AuthContext";
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  isOpen,
  onClose,
}: LoginModalProps): JSX.Element | null => {
  if (!isOpen) return null;
  const [loginInput, setLoginInput] = React.useState({
    email: "",
    password: "",
  });

  const { logIn, logOut } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (): Promise<void> => {
    // SANITIZE INPUT
    await logIn(loginInput.email, loginInput.password);
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all ease-in-out delay-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg relative p-8 w-[90%] min-w-[300px] max-w-md 2xl:max-w-lg shadow-xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="text-[24px] absolute right-0 mr-8 text-primary-500 hover:text-primary-700 transition-colors"
          onClick={onClose}
        >
          x
        </button>
        {/* Circular image with highlight */}
        <div className="rounded-full shadow-2xl bg-gradient-to-r from-primary-200 to-primary-500 p-[3px] absolute h-[80px] w-[80px] right-[50%] translate-x-[50%] top-[-40px] flex items-center justify-center">
          <div className="rounded-full bg-white h-full w-full flex items-center justify-center">
            <img
              src={Logo}
              alt="Caminho do Lar"
              className="w-[70%] h-[70%] object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <div className="w-full flex items-center justify-center gap-4 p-2 mt-8">
          <h2 className="text-2xl text-primary-700">Bem vindo de volta</h2>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 mt-4 items-center">
          <Input
            type="email"
            label="Email"
            value={loginInput.email}
            placeholder="Email"
            onChange={handleInputChange}
            name="email"
            variant="lg"
            validateFn={isValideEMail}
            validationMessage="Email inválido"
            addonIcon={<EmailIcon tClass="h-6 w-6" />}
          />
          <Input
            type="password"
            label="Senha"
            value={loginInput.password}
            onChange={handleInputChange}
            validateFn={(v) => v.length > 8}
            validationMessage="A senha deve ter no mínimo 8 caracteres"
            addonIcon={<Lock tClass="h-6 w-6" />}
            placeholder="Senha..."
            name="password"
            variant="lg"
          />

          <button
            onClick={handleLogin}
            className="bg-primary-700 self-center text-white rounded p-2 w-[50%] mt-2 hover:bg-primary-800 transition-colors duration-200"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
