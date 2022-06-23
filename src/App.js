import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Home from "./page/Home";
import Header from "./components/Header";
import Rotas from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
