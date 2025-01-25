import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoginModal, RegisterModal } from "./components/Modals";
import { useAuth } from "./context/AuthContext";
import { useModals } from "./hooks/useModals";
import { AppRoutes } from "./routes/routes";
import React from "react";

export const App = (): JSX.Element | null => {
  const { loading } = useAuth();
  const {
    closeLogin,
    openLogin,
    isLoginOpen,
    isRegisterOpen,
    closeRegister,
    openRegister,
  } = useModals();

  if (loading) return null;
  return (
    <div className="min-h-screen flex flex-col">
      <Header setRegisterOpen={openRegister} setIsLoginOpen={openLogin} />
      <div className="flex-grow">
        <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
        <RegisterModal
          isOpen={isRegisterOpen}
          onClose={closeRegister}
          openLoginModal={openLogin}
        />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};
