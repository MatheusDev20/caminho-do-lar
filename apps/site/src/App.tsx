import { Footer } from "../../site/src/components/Footer";
import { Header } from "../../site/src/components/Header";
import { LoginModal, RegisterModal } from "../../site/src/components/Modals";
import { useModals } from "./context/ modal-context";
import { useAuth } from "./context/auth";
import { AppRoutes } from "../../site/src/routes/routes";
import { useState } from "react";

export const App = () => {
  const [dropDown, setDropdown] = useState(false);
  const { loading } = useAuth();
  const { close, open, loginModal, registerModal } = useModals();

  if (loading) return null;
  return (
    <div
      className="min-h-screen flex flex-col"
      onClick={() => {
        setDropdown(false);
      }}
    >
      <Header
        setRegisterOpen={() => {
          open("register");
        }}
        setIsLoginOpen={() => {
          open("login");
        }}
        setDropdown={setDropdown}
        isDropdownOpen={dropDown}
      />
      <div className="flex-grow">
        <LoginModal
          isOpen={loginModal.isOpen}
          onClose={() => {
            close("login");
          }}
        />
        <RegisterModal
          isOpen={registerModal.isOpen}
          onClose={() => {
            close("register");
          }}
          openLoginModal={() => {
            open("register");
          }}
        />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};
