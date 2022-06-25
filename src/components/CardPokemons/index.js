import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #46d7ab;
  width: 162px;
  height: 110px;
  border-radius: 15px;
  padding: 10px 8px 0 16px;
  margin-bottom: 18px;
  .card-numero {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: end;
    span {
      padding: 0 10px;
    }

    h3 {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
      text-align: start;
      line-height: 14px;
      color: #ffffff;
    }
  }
  .card-detalhe {
    display: grid;
    grid-template-columns: 1fr 1fr;
    div {
      display: grid;
      margin-top: 10px;

      span {
        width: 48px;
        height: 16px;
        background: #ffffff;
        opacity: 0.4;
        border-radius: 38px;
        font-family: "Inter", sans-serif;
        font-size: 8px;
        color: #000;
        text-align: center;
        padding-top: 3px;
        &:nth-child(2) {
          margin-bottom: 12px;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      justify-self: center;
      align-self: center;
    }
  }
`;

const CardPokemons = ({ id, name, image, type }) => {
  return (
    <CardContainer>
      <div className="card-numero">
        <span>#0{id}</span>
        <h3>{name}</h3>
      </div>
      <div className="card-detalhe">
        <div>
          <span>{type}</span>
          <span>{type}</span>
        </div>
        <img src={image} alt={name} />
      </div>
    </CardContainer>
  );
};

export default CardPokemons;
