import { Subtitulo, TituloSecundario } from "styles/textos";
import ListaDeOfertas from "./listaDeOfertas";


const Ofertas = () => {
  return(
    <section style={{"marginTop": "2rem"}}>
      <Subtitulo align="center">Conheça nossas</Subtitulo>
      <TituloSecundario align="center"> Ofertas </TituloSecundario>

      <ListaDeOfertas />

    </section>
  );
};

export default Ofertas;