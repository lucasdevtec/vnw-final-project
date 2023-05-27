import { useFetch } from "../../hooks/useFetch";
import Carousel from "react-elastic-carousel";
import { ConteinerItem, Conteiner, ConteinerItemImg } from "./style";

export default function MainCarrousel() {
  const data = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-br&page=1&sort_by=popularity.desc&api_key="
  );
  const movies = data.data;
  const imgPath = "https://image.tmdb.org/t/p/original";

  return (
    <Conteiner>
      <h2>Filmes</h2>
      <Carousel
        itemsToScroll={3}
        itemsToShow={5}
        /* enableAutoPlay autoPlaySpeed={2000} */
        itemPadding={[30, 30]}
        /* itemPosition={consts.END} */
      >
        {movies.length > 0 &&
          movies.slice(10, 20).map((data) => {
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
      </Carousel>
    </Conteiner>
  );
}
