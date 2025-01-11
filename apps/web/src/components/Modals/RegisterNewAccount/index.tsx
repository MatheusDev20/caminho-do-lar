/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import Logo from "../../../../assets/good-dog.svg";
import PreferenceDog from "../../../../assets/modals/preference-dog.png";
import PreferenceCat from "../../../../assets/modals/preference-cat.png";
import { Input, Select } from "../../Form";
import { PersonIcon } from "../../icons/person";
import { isValideEmail } from "../../../utils/utils";
import { EmailIcon } from "../../icons/email";
import { Lock } from "../../icons/lock";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({
  isOpen,
  onClose,
}: RegisterModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  const preferenceOptions = [
    { name: "Cachorros", imgLink: PreferenceDog },
    { name: "Gatos", imgLink: PreferenceCat },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex gap-3 items-center justify-center z-50 transition-all ease-in-out delay-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg relative min-w-[50%] min-h-[502px] flex max-w-md 2xl:max-w-lg shadow-xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Side image */}
        <div
          style={{
            backgroundImage: `url(${Logo})`,
          }}
          className="bg-primary-50 min-h-full min-w-[40%] bg-cover bg-no-repeat bg-center"
        />
        {/* Form */}
        <div className="flex-1 flex flex-col md:p-8">
          <div className="flex items-center p-2">
            <h1 className="text-xs md:text-lg font-bold text-primary-700">
              Cadastre-se na plataforma
            </h1>
            <button
              className="text-[24px] absolute right-0 mr-8 text-primary-500 hover:text-primary-700 transition-colors"
              onClick={onClose}
            >
              x
            </button>
          </div>

          <div className="flex  flex-col md:mt-8">
            <Input
              validateFn={(n: string) => n.length < 22}
              validationMessage="Nome inválido"
              label="Nome"
              placeholder="Insira seu nome..."
              addonIcon={<PersonIcon tClass="h-6 w-6" />}
            />
            <Input
              type="email"
              label="Email"
              value="matheusdev20@gmail.com"
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
              value="Minha Senha 123"
              validateFn={(v) => v.length > 8}
              validationMessage="A senha deve ter no mínimo 8 caracteres"
              addonIcon={<Lock tClass="h-6 w-6" />}
              placeholder="Senha..."
              name="password"
              variant="lg"
            />
            <Select
              options={preferenceOptions}
              variant="lg"
              placeholder="Selecione..."
              optionBg="#fff"
              value={"Cachorros"}
              label="Preferência de Pet"
              onChange={() => {
                console.log("A");
              }}
            />

            <button className="bg-primary-700 rounded-lg self-center justify-center text-white p-2 w-[50%] mt-2 hover:bg-primary-800 transition-colors duration-200">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
