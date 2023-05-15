import { useFetch } from "./hooks/useFetch";

function App() {
  const resposta = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-Br&page=1&sort_by=popularity.desc&api_key="
  );
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const dadosFilmes = resposta[0];
  console.log(dadosFilmes);

  return <></>;
}

export default App;
