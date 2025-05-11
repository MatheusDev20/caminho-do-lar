/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "../../context/auth";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";
import { Button } from "../ui/button";

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
        <div className="flex flex-wrap justify-center md:justify-between items-center md:pr-12 md:pl-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-rose-400">
              <PawPrint className="h-5 w-5 text-white" />
            </div>
            <span className="hidden text-xl font-bold text-gray-900 sm:inline-block">Caminho do Lar</span>
          </Link>
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
