import React from "react";
import NavBar from "./components/NavBar/NavBar";
import logo from "./img/logo.png";
import { Header } from "./styles";

function App() {
  return (
    <Header>
      <img src={logo} alt="Logo do catálogo dos pokemons" />
      <NavBar />
    </Header>
  );
}

export default App;
