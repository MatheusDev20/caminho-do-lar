import React from "react";

type Modals = {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  openRegister: () => void;
  closeRegister: () => void;
};

export const useModals = (): Modals => {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

  const openLogin = (): void => {
    setIsLoginOpen(true);
  };
  const closeLogin = (): void => {
    setIsLoginOpen(false);
  };

  const openRegister = (): void => {
    setIsRegisterOpen(true);
  };

  const closeRegister = (): void => {
    setIsRegisterOpen(false);
  };

  return {
    isLoginOpen,
    isRegisterOpen,
    openLogin,
    closeLogin,
    closeRegister,
    openRegister,
  };
};
