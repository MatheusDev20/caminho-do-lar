import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoginModal } from "./pages/Login/index";
import { AppRoutes } from "./routes/routes";
import React from "react";

export const App = (): JSX.Element => {
  const [isLoginOpen, setIsLoginOpen] = React.useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <div className="flex-grow">
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => {
            setIsLoginOpen(false);
          }}
        />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};
