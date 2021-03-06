import React, { useEffect } from "react";
import FetchApi from "../../components/helpers/FetchApi";
import DropDownTipo from "../../components/DropDownTipo";
import SearchInput from "../../components/SearchInput";
import { Container, ContainerPokemons } from "./styled";

const Pokemons = () => {
  const [info, setInfo] = React.useState([]);
  const [pokemon, setText] = React.useState("");

  useEffect(() => {
    if (pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((resp) => resp.json())
        .then((resp) => setInfo(resp));
    }
    console.log(info);
  }, [pokemon]);

  return (
    <Container>
      <div>
        <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
        <SearchInput value={pokemon} onChange={(str) => setText(str)} />
        <div>
          <DropDownTipo />
        </div>
        <ContainerPokemons>
          <FetchApi />
        </ContainerPokemons>
      </div>
    </Container>
  );
};

export default Pokemons;
