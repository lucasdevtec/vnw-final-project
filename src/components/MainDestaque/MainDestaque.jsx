import {
  Conteiner,
  DivVazia,
  DivComConteudo,
  DivBtns,
  Btn1,
  Btn2,
} from "./style";
import star from "../../assets/star.png";
import imdb from "../../assets/IMDB.svg";

export default function MainDestaque() {
  return (
    <>
      <Conteiner>
        <DivVazia></DivVazia>
        <DivComConteudo>
          <div>
            <h1>Avatar: o Caminho da Água</h1>
            <div className="itens">
              <img src={star} alt="" />
              <p>
                9,9<span>/10</span>
              </p>
              <img src={imdb} alt="" />
            </div>
            <p className="opa">3hr 23 min | Fantasia, Família | 2023</p>
            <p>
              Após formar uma família, Jake Sully e Neytiri fazem de tudo para
              ficarem juntos. No entanto, eles devem sair de casa e explorar as
              regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
              travar uma guerra difícil contra os humanos.
            </p>
            <DivBtns>
              <Btn1> Assistir agora</Btn1>
              <Btn2>Trailer</Btn2>
            </DivBtns>
          </div>
        </DivComConteudo>
      </Conteiner>
    </>
  );
}
