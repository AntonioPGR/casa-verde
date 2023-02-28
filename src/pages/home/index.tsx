// COMPONENTES
import Cabecalho from "components/cabecalho";
import Conteudo from "components/conteudo";
import Instrucoes from "components/instrucoes";
import Ofertas from "components/ofertas";

// ESTILO
import { AppStyled } from "pages/home/styled";

const Home = () => {

  return(
    <AppStyled>
      <Cabecalho />
      <Conteudo />
      <Instrucoes />
      <Ofertas />
    </AppStyled>
  );

};

export default Home;