import styled from "@emotion/styled";
import image from "../../assets/avatar.png";

export const Conteiner = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
`;

export const DivVazia = styled.div`
  height: 50%;
`;

export const DivComConteudo = styled.div`
  height: 50%;
  color: #f6f6f6;
  padding-top: 70px;
  padding-left: 69px;
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0%
    0% no-repeat padding-box;
  h1 {
    font-size: 38px;
  }

  p.opa {
    font-size: 14px;
  }

  p {
    width: 540px;
  }

  button {
    display: inline-block;
    width: 170px;
    font-size: 18px;
    height: 40px;
    border-radius: 90px;
    margin-right: 16px;
  }

  div.itens {
    height: 50px;
    align-items: center;
    display: flex;
    font-size: 30px;
    width: 200px;
    justify-content: space-evenly;
  }

  div.itens p {
    width: 61px;
  }

  img {
    height: 31px;
  }

  span {
    font-size: 15px;
  }
`;

export const DivBtns = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const Btn1 = styled.button`
  background: #d53a00;
`;
export const Btn2 = styled.button`
  background: #717171;
`;
