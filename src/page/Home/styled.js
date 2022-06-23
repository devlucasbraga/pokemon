import styled from "styled-components";

export const Section = styled.section`
  max-width: 1440px;
  height: auto;
  position: relative;
  margin: 100px auto;
  overflow: hidden;
`;

export const ContainerInfo = styled.div`
  max-width: 1100px;
  padding: 0 20px;
  margin: 0 auto;
  p {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0.02em;
    color: #282828;
    width: 44ch;
    margin-bottom: 43px;
  }
`;

export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 54px;
  line-height: 76px;
  color: #282828;
  width: 12ch;
  margin-bottom: 18px;
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    width: 284px;
    height: 26px;
    background: #ffda55;
    position: absolute;
    right: 37px;
    bottom: 12px;
    z-index: -2;
  }
`;

export const ContainerBanner = styled.div`
  height: 350px;
  img {
    max-width: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    right: -200px;
    z-index: -10;
  }
`;

export const Button = styled.button`
  background: #48d0b0;
  width: 231px;
  height: 66px;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;

  a {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #fff;
  }
`;
