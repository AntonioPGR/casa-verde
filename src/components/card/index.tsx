import { CardStyled, ImageWrapper, TextWrapper } from "./styled";

interface CardProps{
  children: React.ReactNode;
  image: {
    height: string,
    width: string,
    src: string
  }
  card: {
    maxWidth: string,
    center?: boolean
  }
}
const Card : React.FC<CardProps> = ({card, image, children}:CardProps) => {
  return(
    <CardStyled center={card.center || false} maxWidth={card.maxWidth}>
      <ImageWrapper IMGheight={image.height} IMGwidth={image.width}>
        <img src={image.src} alt="imagem de demonstração da planta" />
      </ImageWrapper>

      <TextWrapper>
        {children}
      </TextWrapper>
    </CardStyled>
  );
};

export default Card;