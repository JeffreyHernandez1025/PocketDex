import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import Team from "./pages/Team/Team"
import Update from "./pages/Update/Update"
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
          <Route path="/team" element={<Team />} />
          <Route path="/update-pokemon" element={<Update />} />
          <Route path="/add-pokemon" element={<Add />} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
