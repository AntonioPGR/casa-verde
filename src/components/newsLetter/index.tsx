// Imagem
import arvoreNoVaso from "imgs/arvore-no-vaso.png";
// ESTILO
import { NewsLetterStyled, Conteudo, Imagem } from "./styled";
import { Paragrafo, Subtitulo, TituloPrincipal } from "styles/textos";
// COMPONENTS
import Form from "./formulario";
// import useSendNewsletterConfirmation from "hooks/useSendNewsletterConfirmation";

const NewsLetter = () => {

  return (
    <NewsLetterStyled>
      <Conteudo>
        <article>
          <Subtitulo align="left">Sua casa com as</Subtitulo>
          <TituloPrincipal align="left">melhores Plantas</TituloPrincipal>
          <Paragrafo>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Paragrafo>
        </article>

        <Form />

      </Conteudo>
      <Imagem>
        <img src={arvoreNoVaso} alt="arvore plantada em vaso" />
      </Imagem>
    </NewsLetterStyled>
  );

};

export default NewsLetter;