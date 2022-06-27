import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  height: auto;
  position: relative;
  margin: 100px auto;
  padding-left: 67px;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 35px;
    line-height: 42px;
    letter-spacing: 3px;
    color: #171414;
  }
`;

export const ContainerPokemons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
