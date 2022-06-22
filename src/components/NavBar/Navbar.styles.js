import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 105px;
  }
`;

export const Link = styled.a`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  color: #000;
  position: relative;

  &:hover {
    font-weight: 700;
  }
  &:hover:after {
    content: "";
    width: 62px;
    height: 4px;
    border-radius: 5px;
    background: #000;
    position: absolute;
    bottom: -11px;
    left: 2px;
  }
`;
