// Imagem
import arvoreNoVaso from "imgs/arvore-no-vaso.png";
// ICONE
import { AiOutlineMail } from "react-icons/ai";
// ESTILO
import { NewsLetterStyled, Conteudo, Imagem, Formulario } from "./newsLetter__estilo";
import { Paragrafo, Subtitulo, TituloPrincipal } from "styles/textos";
import { ButtonStyled, InputStyled } from "styles/formulario";

const NewsLetter = () => {

  return(
    <NewsLetterStyled>
      <Conteudo>
        <article>
          <Subtitulo align="left">Sua casa com as</Subtitulo>
          <TituloPrincipal align="left">melhores Plantas</TituloPrincipal>
          <Paragrafo>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Paragrafo>
        </article>

        <Formulario>
          <span>
            <AiOutlineMail />
          </span>
          <InputStyled type="text" name="" id="" placeholder="Insira seu e-mail" />
          <ButtonStyled>Assinar newsletter</ButtonStyled>
        </Formulario>
      </Conteudo>
      <Imagem>
        <img src={arvoreNoVaso} alt="arvore plantada em vaso" />
      </Imagem>
    </NewsLetterStyled>
  );

};

export default NewsLetter;