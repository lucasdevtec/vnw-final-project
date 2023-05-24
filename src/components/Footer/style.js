import styled from "styled-components";

export const FooterConteiner = styled.footer`
  background: black;
  color: white;
  padding 30px 0px;
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    border: white 3px solid;
    border-radius:100%;
    width: 60px; 
    height: 60px;
  }
`;
