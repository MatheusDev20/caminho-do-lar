/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import Logo from "../../../assets/home/header1.png";
import { useAuth } from "../../context/auth";
import clsx from "clsx";

interface Props {
  setRegisterOpen: (isOpen: boolean) => void;
  setIsLoginOpen: (isOpen: boolean) => void;
  isDropdownOpen: boolean;
  setDropdown: (isOpen: boolean) => void;
}

export const Header = ({
  setIsLoginOpen,
  setRegisterOpen,
  setDropdown,
  isDropdownOpen: menuDropdown,
}: Props): JSX.Element => {
  const { isAuthenticated, user, logOut } = useAuth();

  const openMenu = (e: any) => {
    e.stopPropagation();
    setDropdown(true);
  };

  const closeMenu = (e: any) => {
    e.stopPropagation();
    setDropdown(false);
  };

  return (
    <header>
      <nav
        className="bg-white border-b-gray-200 border border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
        onClick={closeMenu}
      >
        <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <img
              src={Logo}
              className="ml-6 2xl:h-12 md:h-12 self-center"
              alt="Caminho do Lar"
            />
          </a>
          {isAuthenticated && user ? (
            <div
              className="flex items-center gap-4 cursor-pointer lg:order-2 relative"
              onClick={openMenu}
            >
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-10 h-10 cursor-pointer rounded-full mr-3"
              />
              <span className="text-primary-700">{user.name}</span>
              <div
                className={clsx(
                  "bg-white divide-y absolute top-14 z-50 w-full items-center justify-center divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700",
                  menuDropdown ? "flex" : "hidden",
                )}
              >
                <ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Meus Pets favoritos
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center mt-3 md:mt-0 lg:order-2">
              <button
                onClick={() => {
                  setIsLoginOpen(true);
                }}
                className="text-gray-800 dark:text-white transition ease-in-out delay-75 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none"
              >
                Entrar
              </button>
              <button
                onClick={() => {
                  setRegisterOpen(true);
                }}
                className="text-white bg-primary-700 hover:bg-primary-800 transition ease-in-out delay-75 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none border-none"
              >
                Cadastrar
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
