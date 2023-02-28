import styled from "styled-components";

interface TextProps {
  align?: "center" | "left" | "right",
  secondary?: boolean
}
const TituloPrincipal = styled.h1<TextProps>`
  font-family: 'Elsie Swash Caps';
  font-style: normal;
  font-weight: 900;
  font-size: 5.125rem;
  line-height: 94px;
  text-align: ${props => props.align};
`;

const TituloSecundario = styled.h2<TextProps>`
  font-family: 'Elsie Swash Caps';
  font-style: normal;
  font-weight: 900;
  font-size: ${props => props.secondary? "1.5rem" : "2.625rem"};
  text-align: ${props => props.align};
  line-height: 2.4rem;
  color: #202020;
`;

const Subtitulo = styled.h3<TextProps>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-align:  ${props => props.align};
`;

const Paragrafo = styled.p<TextProps>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.secondary? "1.5rem" : "1rem"};
  line-height: 1.7rem;
  color: #202020;
  margin-bottom: 0.625rem;
  text-align:  ${props => props.align};
`;

const Link = styled.a<TextProps>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.secondary? "#FFCB47" : "#000"};
`;


export { TituloPrincipal, TituloSecundario, Subtitulo, Paragrafo, Link };