import lupa from "../../assets/icons8-lupa.svg";
import { Conteiner } from "./style";

export default function NavGeneros() {
  return (
    <>
      <Conteiner>
        <nav>
          <ul>
            <li>Popular</li>
            <li>Drama</li>
            <li>Ação</li>
            <li>Aventura</li>
            <li>Comédia</li>
            <li>Crime</li>
            <li>Fantasia</li>
            <li>Família</li>
            <li>
              <img src={lupa} alt="" />
            </li>
          </ul>
        </nav>
      </Conteiner>
    </>
  );
}
