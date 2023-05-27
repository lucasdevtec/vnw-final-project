import MainCarrousel from "../MainCarrousel/MainCarrousel";
import MainDestaque from "../MainDestaque/MainDestaque";
import MainEmAlta from "../MainEmAlta/MainEmAlta";
import NavGeneros from "../NavGeneros/NavGeneros";

export default function Main() {
  return (
    <main>
      <MainDestaque />
      <NavGeneros />
      <MainCarrousel />
      <MainEmAlta />
    </main>
  );
}
