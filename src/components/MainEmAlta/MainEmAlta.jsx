import LoaderFullSize from "../LoaderFullSize/LoaderFullSize";
import {
  Conteiner,
  ConteinerItemImg,
  ConteinerItem,
  ConteinerGrid,
} from "./style";
import { useFetch } from "../../hooks/useFetch";

export default function MainEmAlta() {
  const data = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-br&page=1&sort_by=popularity.desc&api_key="
  );
  const movies = data.data;
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {data.isFething === true && <LoaderFullSize />}
      <Conteiner>
        <h2>Em alta</h2>
        <ConteinerGrid>
          {movies.length > 0 &&
            movies.slice(0, 10).map((data) => {
              return (
                <ConteinerItem onClick={console.log("click")} key={data.id}>
                  <ConteinerItemImg>
                    <img src={imgPath + data.poster_path} alt="" />
                  </ConteinerItemImg>
                  <h3>
                    <strong>{data.title}</strong>
                  </h3>
                  <p>{data.release_date.slice(0, 4)}</p>
                </ConteinerItem>
              );
            })}
        </ConteinerGrid>
      </Conteiner>
    </>
  );
}
