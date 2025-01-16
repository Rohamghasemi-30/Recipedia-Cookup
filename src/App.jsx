import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import SingleRecepe from "./pages/SingleRecepe";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Community from "./pages/Community";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/recepies/:Id" element={<SingleRecepe />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/community" element={<Community />} />
      </Route>
    </Routes>
  );
}

export default App;
