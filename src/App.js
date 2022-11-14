import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import Add from "./pages/Add/Add"

/**
 * Renders react router
 * @returns
 */
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
