import React from "react";
import { Nav, Link } from "./Navbar.styles";

const NavBar = () => {
  const [links, setLink] = React.useState(["Home", "Pokemons", "Contato"]);

  function handleClick() {
    setLink(links);
    console.log(links);
  }

  return (
    <Nav>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={link} onClick={handleClick}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </Nav> 
  );
};

export default NavBar;
