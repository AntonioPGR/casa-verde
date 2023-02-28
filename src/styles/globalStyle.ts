import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
	  margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  vertical-align: baseline;
    box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		color: #000;

		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
  }

	html, body{
		font-size: 16px;
	}

`;