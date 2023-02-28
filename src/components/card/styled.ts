import styled from "styled-components";

interface CardProps{
  maxWidth: string,
  center: boolean
}
const CardStyled = styled.article<CardProps>`

  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  display: flex;
  gap: 1rem;

  width: ${props => props.maxWidth};
  ${props => props.center? "margin: auto;" : ""}

`;

interface ImageProps {
  IMGheight: string,
  IMGwidth: string
}
const ImageWrapper = styled.div<ImageProps>`

  height: ${props => props.IMGheight};
  width: ${props => props.IMGwidth};

  img{
    height: 100%;
    width: 100%;
  }

`;

const TextWrapper = styled.div`
  padding: 0.5rem;
`;

export { CardStyled, ImageWrapper, TextWrapper };