// COMPONENTES
import Cabecalho from "components/cabecalho";
import Conteudo from "components/conteudo";
import Ofertas from "components/ofertas";

// ESTILO
import { AppStyled } from "app__estilo";

const App = () => {

  return(
    <AppStyled>
      <Cabecalho />
      <Conteudo />
      <Ofertas />
    </AppStyled>
  );

};

export default App;