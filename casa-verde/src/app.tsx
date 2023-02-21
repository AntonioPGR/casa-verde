// COMPONENTES
import Cabecalho from "components/cabecalho";
import Conteudo from "components/conteudo";

// ESTILO
import { AppStyled } from "app__estilo";

const App = () => {

  return(
    <AppStyled>
      <Cabecalho />
      <Conteudo />
    </AppStyled>
  );

};

export default App;