/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "../../context/auth";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { PawPrint } from "lucide-react";

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
}: Props) => {
  const { isAuthenticated, user } = useAuth();

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
        className="bg-white border-b-gray-200 border border-gray-200 py-5 dark:bg-gray-800"
        onClick={closeMenu}
      >
        <div className="flex flex-wrap justify-center md:justify-between items-center md:pr-6 md:pl-6">
         <div className="flex flex-wrap justify-center md:justify-between items-center md:pr-6 md:pl-6">
          <Link to="/" className="flex items-center justify-center gap-2">
            <div className="flex items-center">
              <PawPrint className="w-8 h-8 text-rose-600 mr-2" />
              <span className="text-2xl font-bold mt-1 text-rose-600">Caminho</span>
              <span className="text-2xl font-bold mt-1 text-rose-600 text-primary-700 ml-2">do Lar</span>
            </div>
          </Link>
          </div>
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
              <Button
                onClick={() => {
                  setIsLoginOpen(true);
                }}

                className="bg-rose-500 md:min-w-[70px] hover:bg-rose-600 text-white font-bold pr-4 pl-4 cursor-pointer"
              >
                Entrar
              </Button>
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
