import MainCarrousel from "../MainCarrousel/MainCarrousel";
import MainEmAlta from "../MainEmAlta/MainEmAlta";
import NavGeneros from "../NavGeneros/NavGeneros";

export default function Main() {
  return (
    <main>
      <NavGeneros />
      <MainCarrousel />
      <MainEmAlta />
      <NavGeneros />
    </main>
  );
}
