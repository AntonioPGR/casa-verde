import { useState, useEffect, useMemo } from "react";
import { InputStyled, ButtonStyled } from "styles/formulario";
import { FormularioStyled } from "./styled";
import { AiOutlineMail } from "react-icons/ai";

const Form = () => {
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [email, setEmail] = useState("");
  const [mensagemDeErro, setMensagemDeErro] = useState("");
  const [mensagemDeSucesso, setMensagemDeSucesso] = useState("");
  // const sendConfirmation = useSendNewsletterConfirmation();

  useEffect(() => {

    if (!email) {
      setMensagemDeErro("");
      return;
    }

    if (!email.includes("@")) {
      setBotaoDesabilitado(true);
      setMensagemDeErro("Insira um email valido");
      return;
    }

    setMensagemDeErro("");
    setBotaoDesabilitado(false);
  }, [email]);

  const manipularEnvioDoFormulario = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // resetar formulário
    setEmail("");
    setMensagemDeErro("");

    // informar sucesso
    setMensagemDeSucesso(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
    // sendConfirmation();
  };

  const Icone = useMemo(() => <AiOutlineMail />, []);
  const Botao = useMemo(() => <ButtonStyled disabled={botaoDesabilitado}>Assinar newsletter</ButtonStyled>, [botaoDesabilitado]);
  const MensagemDeErro = useMemo(() => <p className="mensagemErro"> {mensagemDeErro} </p>, [mensagemDeErro]);

  return (
    <FormularioStyled onSubmit={manipularEnvioDoFormulario}>
      {MensagemDeErro}
      <div className="input">
        <span>
          { Icone }
        </span>
        <InputStyled onChange={(ev) => setEmail(ev.target.value)} value={email} type="text" name="" id="" placeholder="Insira seu e-mail" />
        { Botao }
      </div>
      {mensagemDeSucesso && <p className="mensagemSucesso"> {mensagemDeSucesso} </p>}
    </FormularioStyled>
  );
};

export default Form;