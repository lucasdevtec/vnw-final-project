import { useFetch } from "./hooks/useFetch";

export default function App() {
  const data = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key="
  );
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <p>oi</p>
      {data.map((data) => {
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
