import styled from "styled-components";

const NewsLetterStyled = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
  max-height: 100vh;

  > *{
    max-height: 100vh;
  }
`;

const Conteudo = styled.div`
  grid-column: 1/2;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
`;

const FormularioStyled = styled.form`
  .input{
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: start;

    span {
      padding: 20px;
    }
  }

  .mensagemErro{
    color: rgba(217, 30, 24);
    margin-bottom: 10px;

    ::before{
      content: "*";
    }
  }

  .mensagemSucesso{
    margin-top: 10px;
    color: rgba(225, 183, 40, 1);
  }

`;

const Imagem = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    max-height: 100%;
    overflow: hidden;
  }

`;

export { NewsLetterStyled, Conteudo, Imagem, FormularioStyled};