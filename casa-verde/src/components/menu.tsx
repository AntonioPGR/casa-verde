import MenuLinks from "data/linksMenu.json";
import { Menu__ListaDeLinks } from "./menu__estilo";

const Menu = () => {

  const links : ILink[] = MenuLinks;

  return(
    <nav>
      <Menu__ListaDeLinks>
        {
          links.map((value) => 
            <li key={value.id}>
              {value.label}
            </li>
          )
        }
      </Menu__ListaDeLinks>
    </nav>
  );

};

export default Menu;