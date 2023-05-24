import styled from "styled-components";

export const HeaderPage = styled.header`
  position: fixed;
  height: 82px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 30px;

  img {
    height: 60px;
  }

  nav {
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    width: 250px;
    justify-content: space-between;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;

  img {
    width: 20px;
    color: white;
  }
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`;

export const A1 = styled.a`
  display: inline-block;
  width: 113px;
  height: 36px;
  background: #747474;
  border-radius: 18px;
`;
