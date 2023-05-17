import { useFetch } from "./hooks/useFetch";
import { LoaderFullSize } from "./components/LoaderFullSize/LoaderFullSize";

export default function App() {
  const data = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key="
  );
  const movies = data.data;
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {data.isFething === true && <LoaderFullSize />}
      <p>oi</p>
      {movies.length > 0 &&
        movies.map((data) => {
          return (
            <div key={data.id}>
              <img src={imgPath + data.poster_path} alt="" />
              <p>{data.title}</p>
            </div>
          );
        })}
    </>
  );
}
