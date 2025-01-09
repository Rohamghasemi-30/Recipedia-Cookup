import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import SingleRecepe from "./pages/SingleRecepe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/recepies/:Id" element={<SingleRecepe />} />
      </Route>
    </Routes>
  );
}

export default App;
