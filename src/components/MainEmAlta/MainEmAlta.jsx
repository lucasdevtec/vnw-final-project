import LoaderFullSize from "../LoaderFullSize/LoaderFullSize";
import { useFetch } from "../../hooks/useFetch";

export default function MainEmAlta() {
  const data = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key="
  );
  const movies = data.data;
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {data.isFething === true && <LoaderFullSize />}
      <p>oi</p>
      <div>
        {movies.length > 0 &&
          movies.slice(0, 10).map((data) => {
            return (
              <div key={data.id}>
                <div>
                  <img src={imgPath + data.poster_path} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.release_date.slice(0, 4)}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
