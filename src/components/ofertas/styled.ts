import styled from "styled-components";

const ListaDeItens = styled.div`
  padding: 2rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

`;

const Card = styled.article`

  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  max-width: 350px;

`;

const TextContainer = styled.div`

`;

const ImageWrapper = styled.div`

  height: 150px;
  width: 150px;

  img{
    height: 100%;
    width: 100%;
  }

`;

export {Card, TextContainer, ListaDeItens, ImageWrapper};