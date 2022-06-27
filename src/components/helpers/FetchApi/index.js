import React, { useEffect } from "react";
import CardPokemons from "../../CardPokemons";

const FetchApi = () => {
  const [allPokemons, setAllPokemons] = React.useState([]);
  const [loadMore, setLoadMore] = React.useState(
    ` https://pokeapi.co/api/v2/pokemon?limiy=0`,
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          ` https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  allPokemons.map((pokemon) => console.log(pokemon));

  return (
    <>
      {allPokemons.map((pokemon, index) => (
        <CardPokemons
          id={pokemon.id}
          type={pokemon.types[0].type.name - " "}
          key={index}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
        />
      ))}
    </>
  );
};

export default FetchApi;
