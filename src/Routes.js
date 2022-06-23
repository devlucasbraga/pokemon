import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './page/Home'
import Pokemons from './page/Pokemons'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/pokemons"  element={<Pokemons />} />
    </Routes>
  );
};

export default Rotas;
