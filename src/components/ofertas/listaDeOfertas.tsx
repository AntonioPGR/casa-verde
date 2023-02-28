import useGetPlantasEmOferta from "hooks/useGetPlantasEmOferta";
import { useEffect, useState } from "react";
import { Link, Paragrafo, TituloSecundario } from "styles/textos";
import { Card, ImageWrapper, ListaDeItens, TextContainer } from "./styled";

import PlantaIMG from "imgs/planta.jpg";

const ListaDeOfertas = () => {

  const getPlantasEmOferta = useGetPlantasEmOferta();
  const [ofertas, setOfertas] = useState<IPlanta[]>([]);

  useEffect(() => {
    getPlantasEmOferta()
      .then(res => {

        const plantas = res.filter((value) => value.estoque > 0);

        if(plantas.length > 6){
          setOfertas(res.slice(0, 6));
        }
        setOfertas(plantas);
      });
  });


  return(
    <ListaDeItens>
      {
        ofertas.map((value) => {
          return (
            <Card key={value.id} >
              <ImageWrapper>
                <img src={PlantaIMG} alt="" />
              </ImageWrapper>
              <TextContainer>
                <TituloSecundario secondary align="left"> {value.name} </TituloSecundario>
                <Paragrafo> {value.preco.toLocaleString("pt-br", {currency: "BRL", minimumFractionDigits: 2, style:"currency"})} </Paragrafo>
                <Link secondary href="#"> Ver oferta </Link>
              </TextContainer>
            </Card>
          );
        })
      }
    </ListaDeItens>
  );
};

export default ListaDeOfertas;