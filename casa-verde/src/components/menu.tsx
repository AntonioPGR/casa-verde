import MenuLinks from "data/linksMenu.json";

const Menu = () => {

  const links : ILink[] = MenuLinks;

  return(
    <nav>
      <ul>
        {
          links.map((value) => 
            <li key={value.id}>
              {value.label}
            </li>
          )
        }
      </ul>
    </nav>
  );

};

export default Menu;