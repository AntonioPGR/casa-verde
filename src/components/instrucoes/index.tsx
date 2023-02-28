import { Subtitulo, TituloSecundario } from "styles/textos";
import PlantaIMG from "imgs/planta.jpg";
import Card from "components/card";
import { InfoList, TitulosWrapper } from "./styled";


const Instrucoes = () => {
  return(
    <Card 
      card={{
        maxWidth: "80vw",
        center: true
      }}
      image={{
        height: "440px",
        width: "45vw",
        src: PlantaIMG
      }}
    >
      <TitulosWrapper>
        <Subtitulo align="left">Como conseguir</Subtitulo>
        <TituloSecundario align="left"> minha planta </TituloSecundario>
      </TitulosWrapper>

      <InfoList>
        <li>
          <Subtitulo>Escolha suas plantas</Subtitulo>
        </li>
        <li>
          <Subtitulo>Faça seu pedido</Subtitulo>
        </li>
        <li>
          <Subtitulo>Aguarde na sua casa</Subtitulo>
        </li>
      </InfoList> 
    </Card>
  );  
};

export default Instrucoes;