import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages/home";

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
      {/* <Route path="/home" element={<Home />} /> */}

      {/* <Route path='/pet/:name' element={<PetInfo />} /> */}
    </Routes>
  );
};
