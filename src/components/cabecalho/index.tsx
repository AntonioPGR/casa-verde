// COMPONENTES
import Logo from "components/logo";
import Menu from "components/menu";

// ESTILO
import { HeaderStyled } from "./styled";

const Cabecalho = () => {

  return(
    <HeaderStyled>
      <Logo />
      <Menu />
    </HeaderStyled>
  );

};

export default Cabecalho;