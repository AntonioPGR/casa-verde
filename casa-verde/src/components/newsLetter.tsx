// Imagem
import arvoreNoVaso from "imgs/arvore-no-vaso.png";
// ICONE
import { AiOutlineMail } from "react-icons/ai";

const NewsLetter = () => {

  return(
    <section>
      <div>

        <article>
          <h2>Sua casa com</h2>
          <h1>As melhores Plantas</h1>
          <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        </article>

        <form action="">
          <AiOutlineMail />
          <input type="text" name="" id="" placeholder="Insira seu e-mail" />
          <button>Assinar newsletter</button>
        </form>

      </div>

      <div>
        <img src={arvoreNoVaso} alt="arvore plantada em vaso" />
      </div>

    </section>
  );

};

export default NewsLetter;