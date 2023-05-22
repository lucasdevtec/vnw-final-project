import img_da_header from "../../assets/headerImg.svg";
import lupa from "../../assets/lupa.svg";
import { HeaderPage, Div1, Div2, A1 } from "./style";

export default function Header() {
  return (
    <HeaderPage>
      <img src={img_da_header} alt="" />
      <nav>
        <ul>
          <li>
            <a href="#series">Séries</a>
          </li>
          <li>
            <A1 href="#filmes">Filmes</A1>
          </li>
        </ul>
      </nav>
      <Div1>
        <p>{lupa}</p>
        <Div2>
          <a href="#filmes">Login</a>
          <a href="#series">Filtro</a>
        </Div2>
      </Div1>
    </HeaderPage>
  );
}
