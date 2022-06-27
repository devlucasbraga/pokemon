import React from "react";
import { ContainerSeacrch } from "./styled";
import lupa from "../../img/lupa.png";
const SearchInput = ({ value, onChange, ...props }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <ContainerSeacrch>
      <input
        value={value}
        onChange={handleChange}
        type="search"
        placeholder="Pesquisar pokemon"
        {...props}
      ></input>
      <img src={lupa} alt="Barra de Pesquisa" />
    </ContainerSeacrch>
  );
};

export default SearchInput;
