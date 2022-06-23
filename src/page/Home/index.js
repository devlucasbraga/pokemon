import React from "react";
import banner from "../../img/BannerComplete.png";
import { Link } from "react-router-dom";
import { ContainerBanner, ContainerInfo, Section, Button, H1 } from "./styled";


const Home = () => {
  return (
    <Section>
      <ContainerInfo>
        <H1>Qual Pokémon você escolheria?</H1>
        <p>
          Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
          habilidades.
        </p>
        <Button>
          <Link to="/pokemons">Veja os Pokemons</Link>
        </Button>
      </ContainerInfo>
      <ContainerBanner>
        <img src={banner} alt="Fundo de tela do pikachu" />
      </ContainerBanner>
    </Section>
  );
};

export default Home;
