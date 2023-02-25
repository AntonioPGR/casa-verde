import styled from "styled-components";

interface TituloProps {
  align: "center" | "left" | "right"
}
const TituloPrincipal = styled.h1<TituloProps>`
  font-family: 'Elsie Swash Caps';
  font-style: normal;
  font-weight: 900;
  font-size: 82px;
  line-height: 94px;
  text-align: ${props => props.align};
`;

interface H2Props {
  primary: boolean
}
const TituloSecundario = styled.h2<H2Props>`
  font-family: 'Elsie Swash Caps';
  font-style: normal;
  font-weight: 900;
  font-size: ${props => props.primary? "42px" : "32px"};
  line-height: 37px;
  color: #202020;
`;

const Subtitulo = styled.h3<TituloProps>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  text-align:  ${props => props.align};
`;

const Paragrafo = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: #202020;
  margin-bottom: 10px;
`;


export { TituloPrincipal, TituloSecundario, Subtitulo, Paragrafo };