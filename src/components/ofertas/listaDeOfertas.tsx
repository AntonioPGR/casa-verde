import useGetPlantasEmOferta from "hooks/useGetPlantasEmOferta";
import { useEffect, useState } from "react";
import { Link, Paragrafo, TituloSecundario } from "styles/textos";
import { ListaDeItens} from "./styled";

import PlantaIMG from "imgs/planta.jpg";
import Card from "components/card";

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
  }, []);


  return(
    <ListaDeItens>
      {
        ofertas.map((value) => {
          return (
            <Card 
              card={{
                maxWidth: "350px"
              }}
              image={{
                height: "150px",
                width: "150px",
                src: PlantaIMG
              }} 
              key={value.id} 
            >
              <TituloSecundario secondary align="left"> {value.name} </TituloSecundario>
              <Paragrafo> {value.preco.toLocaleString("pt-br", {currency: "BRL", minimumFractionDigits: 2, style:"currency"})} </Paragrafo>
              <Link secondary href="#"> Ver oferta </Link>
            </Card>
          );
        })
      }
    </ListaDeItens>
  );
};

export default ListaDeOfertas;