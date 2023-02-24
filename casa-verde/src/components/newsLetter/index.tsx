// Imagem
import arvoreNoVaso from "imgs/arvore-no-vaso.png";
// ICONE
import { AiOutlineMail } from "react-icons/ai";
// ESTILO
import { NewsLetterStyled, Conteudo, Imagem, FormularioStyled } from "./styled";
import { Paragrafo, Subtitulo, TituloPrincipal } from "styles/textos";
import { ButtonStyled, InputStyled } from "styles/formulario";
// REACT
import { useEffect, useState } from "react";

const NewsLetter = () => {

  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [email, setEmail] = useState("");
  const [mensagemDeErro, setMensagemDeErro] = useState("");
  const [mensagemDeSucesso, setMensagemDeSucesso] = useState("");

  useEffect(() => {

    if(!email){
      setMensagemDeErro("");
      return;
    }

    if(!email.includes("@")){
      setBotaoDesabilitado(true);
      setMensagemDeErro("Insira um email valido");
      return;
    }

    setMensagemDeErro("");
    setBotaoDesabilitado(false);
  }, [email]);

  const manipularEnvioDoFormulario = (ev:React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // resetar formulário
    setEmail("");
    setMensagemDeErro("");

    // informar sucesso
    setMensagemDeSucesso(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
  };

  return(
    <NewsLetterStyled>
      <Conteudo>
        <article>
          <Subtitulo align="left">Sua casa com as</Subtitulo>
          <TituloPrincipal align="left">melhores Plantas</TituloPrincipal>
          <Paragrafo>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Paragrafo>
        </article>

        <FormularioStyled onSubmit={manipularEnvioDoFormulario}>
          {mensagemDeErro && <p className="mensagemErro"> {mensagemDeErro} </p> }
          <div className="input">
            <span>
              <AiOutlineMail />
            </span>
            <InputStyled onChange={(ev) => setEmail(ev.target.value)} value={email} type="text" name="" id="" placeholder="Insira seu e-mail" />
            <ButtonStyled disabled={botaoDesabilitado}>Assinar newsletter</ButtonStyled>
          </div>
          { mensagemDeSucesso && <p className="mensagemSucesso"> {mensagemDeSucesso} </p>}
        </FormularioStyled>


      </Conteudo>
      <Imagem>
        <img src={arvoreNoVaso} alt="arvore plantada em vaso" />
      </Imagem>
    </NewsLetterStyled>
  );

};

export default NewsLetter;