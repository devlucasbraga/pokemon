import React, { useEffect } from "react";
import FetchApi from "../../components/helpers/FetchApi";
import DropDownTipo from "../../components/ListCheckbox";
import SearchInput from "../../components/SearchInput";
import { Section } from "./styled";

const Pokemons = () => {
  const [info, setInfo] = React.useState([]);
  const [pokemon, setText] = React.useState("");

  useEffect(() => {
    if (pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((resp) => resp.json())
        .then((resp) => setInfo(resp));
    }
  }, [pokemon]);

  return (
    <Section>
      <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
      <SearchInput value={pokemon} onChange={(str) => setText(str)} />
      <div>
        <DropDownTipo />
      </div>
      <FetchApi />
    </Section>
  );
};

export default Pokemons;
