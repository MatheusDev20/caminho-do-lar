/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  loginModal: { isOpen: boolean };
  registerModal: { isOpen: boolean };
  close: (type: "login" | "register") => void;
  open: (type: "login" | "register") => void;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: ProviderProps) => {
  const [loginModal, setLoginModal] = useState({ isOpen: false });
  const [registerModal, setRegisterModal] = useState({ isOpen: false });

  const open = (type: "login" | "register"): void => {
    if (type === "login") setLoginModal({ isOpen: true });
    else setRegisterModal({ isOpen: true });
  };

  const close = (type: "login" | "register"): void => {
    if (type === "login") setLoginModal({ isOpen: false });
    else setRegisterModal({ isOpen: false });
  };

  return (
    <ModalContext.Provider value={{ loginModal, registerModal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default ModalContext;
