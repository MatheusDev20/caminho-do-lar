import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/routes";
import React from "react";

export const App = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};
