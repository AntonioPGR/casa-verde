// COMPONENTES
import Logo from "components/logo";
import Menu from "components/menu";

// ESTILO
import { HeaderStyled } from "./cabecalho__estilo";

const Cabecalho = () => {

  return(
    <HeaderStyled>
      <Logo />
      <Menu />
    </HeaderStyled>
  );

};

export default Cabecalho;