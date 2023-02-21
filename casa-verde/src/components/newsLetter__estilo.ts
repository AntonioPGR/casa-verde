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

const Formulario = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: start;
  box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);

  span {
    padding: 20px;
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

export { NewsLetterStyled, Conteudo, Imagem, Formulario};