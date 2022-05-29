import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Result } from "./Result";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};
