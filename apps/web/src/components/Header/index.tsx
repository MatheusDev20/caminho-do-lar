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
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <img
              src={Logo}
              className="ml-6 2xl:h-12 md:h-12 self-center"
              alt="Caminho do Lar"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Caminho do Lar
            </span> */}
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
            <div className="flex items-center lg:order-2">
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
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm outline-none rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none text-primary-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}

          {/* <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block text-primary-600 py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Como ajudar
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </header>
  );
};
