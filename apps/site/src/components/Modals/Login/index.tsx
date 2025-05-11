/* eslint-disable react-hooks/rules-of-hooks */
 
import React, { useState } from "react";

import { Input } from "../../Form";
import { Mail, Lock, CircleX, Bone } from 'lucide-react'
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import { useLogin } from "../../../hooks/tanstack/login.mutations";
import { FeedbackBox } from "../../error-box";
import { Spinner } from "../../spinner";
import { isValideEmail } from "@/utils/utils";
import { Button } from "@/components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  isOpen,
  onClose,
}: LoginModalProps) => {
  if (!isOpen) return null;

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const { execute, loginError, loginLoading, loginSuccess, reset } = useLogin({
    data: loginInput,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (): Promise<void> => {
    execute();
  };

  const redirect = (): void => {
    reset();
    onClose();
  };

  return (
    <div
       className={clsx(
        "fixed inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center z-[1000] transition-all duration-300",
      )}
      onClick={onClose}
    >
      <Transition
        enter="transition ease-in duration-200"
        enterFrom="opacity-0 translate-y-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
        show={true}
        appear={true}
      >
        <div
          className={clsx(
            "bg-white rounded-lg relative p-8 w-[90%] min-w-[300px] max-w-md 2xl:max-w-lg shadow-xl",
          )}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            className="text-[24px] cursor-pointer absolute right-0 mr-8 text-primary-500 hover:text-rose-500 transition-colors"
            onClick={onClose}
          >
            <CircleX className="w-5 h-5" />
          </button>

          {/* Circular image with highlight */}
          <div className="rounded-full shadow-2xl p-[3px] absolute h-[80px] w-[80px] right-[50%] translate-x-[50%] top-[-40px] flex items-center justify-center">
            <div className="rounded-full h-full w-full bg-rose-50 flex items-center justify-center">
              <Bone className="h-12 w-12 text-rose-600" />
            </div>
          </div>

          {/* Title */}
          <div className="w-full flex items-center justify-center gap-4 p-2 mt-8">
            <h2 className="text-2xl font-medium text-rose-600">Bem vindo de volta</h2>
          </div>

          {loginSuccess && (
            <FeedbackBox
              type="success"
              text="Voce será redirecionado em instantes"
              redirectTo={{ time: 5000, fn: redirect }}
              onClose={reset}
            />
          )}

          {loginError && (
            <FeedbackBox
              type="error"
              text="Erro ao realizar login, verifique suas credenciais e tente novamente"
              onClose={reset}
            />
          )}

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
              validateFn={isValideEmail}
              validationMessage="Email inválido"
              addonIcon={<Mail className='text-rose-500' />}
            />
            <Input
              type="password"
              label="Senha"
              value={loginInput.password}
              onChange={handleInputChange}
              validateFn={(v) => v.length > 8}
              validationMessage="A senha deve ter no mínimo 8 caracteres"
              addonIcon={<Lock className='text-rose-600 bg-rose-600'/>}
              placeholder="Senha..."
              name="password"
              variant="lg"
            />
            {!loginSuccess && (
              <Button
                onClick={handleLogin}
                disabled={
                  loginLoading || Object.values(loginInput).some((v) => !v)
                }
                className="bg-rose-500 min-w-[30%] md:h-[42px] justify-center font-bold text-white p-3 mt-4 hover:bg-rose-600 transition-colors duration-200 cursor-pointer"
              >
                {loginLoading ? (
                  <Spinner size="sm" text="Aguarde" />
                ) : (
                  <span className="text-sm">Entrar</span>
                )}
              </Button>
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
};
