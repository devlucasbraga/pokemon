import React from "react";
import { AreaHeader } from "./styled";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <AreaHeader>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo da Pagina" />
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/" >
                Home
              </Link>
            </li>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </AreaHeader>
  );
};

export default Header;
