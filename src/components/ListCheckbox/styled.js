import styled from "styled-components";

export const ListaTypo = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 162px;
  background: #f2f2f2;
  box-shadow: 3px 4px 8px rgba(1, 28, 64, 0.1);
  border-radius: 8px;

  label {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    border-radius: none;
    input{
      margin-right: 5px;
    }
  }
`;
