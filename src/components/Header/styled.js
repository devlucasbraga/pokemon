import styled from "styled-components";

export const AreaHeader = styled.div`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 19px;
  box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.2);

  .container {
    max-width: 1100px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    img {
      align-self: center;
      width: 159px;
      height: 60px;
    }
  }
  nav {
    margin-right: 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 105px;
    }

    a {
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 34px;
      color: #000;
      position: relative;
      margin: 5px;
      &:hover {
        font-weight: 700px;
      }
      &:hover:after {
        content: "";
        display: block;
        width: 62px;
        height: 4px;
        border-radius: 5px;
        background: #000;
        position: absolute;
        bottom: -11px;
        left: 2px;
      }
    }
  }
`;
