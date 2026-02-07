/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "../../context/auth";
import clsx from "clsx";
import { Button } from "../ui/button";
import { Logo } from "./Logo";
import { ChevronDown } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" onClick={closeMenu}>
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Logo />

        {isAuthenticated && user ? (
          <div className="relative" onClick={openMenu}>
            <button className="flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-3 transition-colors hover:bg-gray-50 cursor-pointer border-none bg-transparent">
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-rose-100"
              />
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                {user.name}
              </span>
              <ChevronDown
                className={clsx(
                  "w-4 h-4 text-gray-400 transition-transform duration-200",
                  menuDropdown && "rotate-180"
                )}
              />
            </button>

            <div
              className={clsx(
                "absolute right-0 top-full mt-1.5 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-1 transition-all duration-150 origin-top-right",
                menuDropdown
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              <a className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 cursor-pointer transition-colors">
                Meus Pets favoritos
              </a>
              <a className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 cursor-pointer transition-colors">
                Sair
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => setRegisterOpen(true)}
              className="text-sm font-medium text-gray-600 hover:text-rose-600 cursor-pointer"
            >
              Cadastrar
            </Button>
            <Button
              onClick={() => setIsLoginOpen(true)}
              className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-5 cursor-pointer shadow-sm"
            >
              Entrar
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
