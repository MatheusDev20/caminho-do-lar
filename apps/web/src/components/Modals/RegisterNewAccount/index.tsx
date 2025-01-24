/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../../assets/good-dog.svg";
import PreferenceDog from "../../../../assets/modals/preference-dog.png";
import PreferenceCat from "../../../../assets/modals/preference-cat.png";
import { Input, Select } from "../../Form";
import { PersonIcon } from "../../icons/person";
import { isValideEmail } from "../../../utils/utils";
import { EmailIcon } from "../../icons/email";
import { Lock } from "../../icons/lock";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { RegisterNewUser } from "../../../@types";
import { useRegisterNewUser } from "../../../hooks/tanstack/register.mutations";
import { Spinner } from "../../spinner";
import { FeedbackBox } from "../../error-box";
import { FaTimes } from "react-icons/fa";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  openLoginModal: () => void;
}

export const RegisterModal = ({
  isOpen,
  onClose,
  openLoginModal,
}: RegisterModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [registerData, setRegisterData] = useState<RegisterNewUser>({
    name: "",
    email: "",
    password: "",
    petPreference: null,
  });

  const { execute, registerError, registerLoading, registerSuccess, reset } =
    useRegisterNewUser({
      data: registerData,
    });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selected: any): void => {
    setRegisterData((prev) => ({ ...prev, petPreference: selected.name }));
  };

  const preferenceOptions = [
    { name: "Cachorros", imgLink: PreferenceDog },
    { name: "Gatos", imgLink: PreferenceCat },
  ];

  const handleNewUser = (): void => {
    // reset();
    execute();
  };

  const closeModal = (): void => {
    /* Can not close modal during request */
    if (registerLoading) return;
    reset();
    setRegisterData({
      name: "",
      email: "",
      password: "",
      petPreference: null,
    });

    onClose();
  };

  const redirectToLogin = (): void => {
    closeModal();
    openLoginModal();
  };

  useEffect(() => {
    if (registerSuccess && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [registerSuccess]);
  /* JSX */
  if (!isOpen) return null;
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-black bg-opacity-50 flex gap-3 items-center justify-center z-50",
      )}
      onClick={closeModal}
    >
      <Transition
        enter="transition ease-in duration-200"
        enterFrom="opacity-0 debug translate-y-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
        show={isOpen}
        appear={true}
      >
        <div
          className={clsx(
            "bg-white rounded-lg relative min-w-[50%] 2xl:overflow-y-hidden md:max-h-[80vh] max-h-screen overflow-y-auto flex max-w-md 2xl:max-w-lg shadow-xl transition-all duration-300",
          )}
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
        >
          {/* Side image */}
          <div
            style={{ backgroundImage: `url(${Logo})` }}
            className="bg-primary-50  min-h-screen min-w-[40%] bg-cover bg-no-repeat bg-center"
          />
          {/* Form */}
          <div className="flex-1 flex flex-col md:p-8">
            <div className="flex items-center p-2">
              <h1 className="text-xs md:text-lg font-bold text-primary-700">
                Cadastre-se na plataforma
              </h1>
              <button
                className="text-[24px] absolute right-0 mr-8 text-primary-500 hover:text-primary-700 transition-colors"
                onClick={closeModal}
              >
                <FaTimes className="text-[16px]" />
              </button>
            </div>

            {/* Feedback Area */}
            {registerError && (
              <FeedbackBox
                type="error"
                text="Erro durante o processo de cadastro! Tente novamente"
                onClose={reset}
              />
            )}
            {registerSuccess && (
              <FeedbackBox
                type="success"
                text="Cadastro realizado com sucesso, em instantes você sera redirecionado para realizar seu login!"
                onClose={reset}
                redirectTo={{ time: 5000, fn: redirectToLogin }}
              />
            )}

            <div className="flex  flex-col md:mt-8">
              <Input
                name="name"
                onChange={handleFieldChange}
                validateFn={(n: string) => n.length < 22}
                validationMessage="Nome inválido"
                label="Nome"
                placeholder="Insira seu nome..."
                addonIcon={<PersonIcon tClass="h-6 w-6" />}
              />
              <Input
                label="Email"
                value={registerData.email}
                onChange={handleFieldChange}
                placeholder="Email"
                name="email"
                variant="lg"
                validateFn={isValideEmail}
                validationMessage="Email inválido"
                addonIcon={<EmailIcon tClass="h-6 w-6" />}
              />
              <Input
                type="password"
                label="Senha"
                value={registerData.password}
                onChange={handleFieldChange}
                validateFn={(v) => v.length > 8}
                validationMessage="A senha deve ter no mínimo 8 caracteres"
                addonIcon={<Lock tClass="h-6 w-6" />}
                placeholder="Senha..."
                name="password"
                variant="lg"
              />
              <Select
                onChange={handleSelectChange}
                options={preferenceOptions}
                variant="lg"
                placeholder="Selecione..."
                optionBg="#fff"
                value={registerData.petPreference}
                label="Preferência de Pet"
              />

              <button
                onClick={handleNewUser}
                disabled={
                  registerLoading || Object.values(registerData).some((v) => !v)
                }
                className="bg-primary-700 rounded-lg min-w-[50%] cursor-pointer self-center justify-center text-white p-3  mt-2 hover:bg-primary-800 transition-colors duration-200"
              >
                {registerLoading ? (
                  <Spinner size="sm" text="Aguarde" />
                ) : (
                  <span className="text-sm">Cadastrar</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};
