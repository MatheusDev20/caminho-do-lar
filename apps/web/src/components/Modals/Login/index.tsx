/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import Logo from "../../../../assets/79642645_SL-011023-55240-18.svg";
import { Input } from "../../Form";
import { Lock } from "../../icons/lock";
import { isValideEmail } from "../../../utils/utils";
import { EmailIcon } from "../../icons/email";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import { useLogin } from "../../../hooks/tanstack/login.mutations";
import { FeedbackBox } from "../../error-box";
import { Spinner } from "../../spinner";
import { FaTimes } from "react-icons/fa";

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
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300",
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
            className="text-[24px] absolute right-0 mr-8 text-primary-500 hover:text-primary-700 transition-colors"
            onClick={onClose}
          >
            <FaTimes className="text-[16px]" />
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
            {!loginSuccess && (
              <button
                onClick={handleLogin}
                disabled={
                  loginLoading || Object.values(loginInput).some((v) => !v)
                }
                className="bg-primary-700 rounded-lg min-w-[50%] cursor-pointer self-center justify-center text-white p-3  mt-2 hover:bg-primary-800 transition-colors duration-200"
              >
                {loginLoading ? (
                  <Spinner size="sm" text="Aguarde" />
                ) : (
                  <span className="text-sm">Entrar</span>
                )}
              </button>
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
};
