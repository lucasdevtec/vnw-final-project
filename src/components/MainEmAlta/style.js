import styled from "styled-components";

export const Conteiner = styled.section`
  padding: 10px;
  background: black;

  h2 {
    font-size: 25px;
    font-height: bold;
    margin-left: 70px;
    color: #ffffff;
  }
`;

export const ConteinerGrid = styled.div`
  display: grid;
  margin-top: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const ConteinerItem = styled.div`
  width: 170px;
  height: 350px;
  color: #f6f6f6;
`;

export const ConteinerItemImg = styled.div``;
